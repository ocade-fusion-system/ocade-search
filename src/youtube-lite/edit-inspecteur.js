import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  Button,
  DatePicker,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

export default function Inspecteur({ attributes, setAttributes, clientId }) {
  const {
    videoId,
    customThumbnail,
    lazyLoading,
    videoTitle,
    videoDescription,
    videoDateCreation,
    urlPageSite,
  } = attributes;

  // ✅ Définir la date du jour si non encore définie
  useEffect(() => {
    if (!videoDateCreation) {
      const today = new Date().toISOString().split("T")[0];
      setAttributes({ videoDateCreation: today });
    }
  }, []);

  // ✅ Récupération automatique du slug de la page (si possible)
  const { postSlug, siteUrl } = useSelect((select) => {
    const post = select("core/editor").getCurrentPost();
    const site = select("core").getSite();
    return {
      postSlug: post?.slug || "",
      siteUrl: site?.url || "",
    };
  }, []);

  useEffect(() => {
    if (!urlPageSite && postSlug && siteUrl) {
      const fullUrl = siteUrl.replace(/\/$/, "") + "/" + postSlug;
      setAttributes({ urlPageSite: fullUrl });
    }
  }, [postSlug, siteUrl]);

  return (
    <InspectorControls>
      <PanelBody title={"Vidéo YouTube"} initialOpen={true}>
        <TextControl
          label={"ID de la vidéo YouTube"}
          value={videoId}
          onChange={(value) => setAttributes({ videoId: value })}
          help={
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ → l’ID est : dQw4w9WgXcQ"
          }
        />
        <ToggleControl
          label={"Chargement différé"}
          checked={lazyLoading}
          onChange={(value) => setAttributes({ lazyLoading: value })}
          help={
            "Activez si la vidéo est en dehors de la zone visible initialement."
          }
        />
        <MediaUpload
          onSelect={(media) => setAttributes({ customThumbnail: media.url })}
          allowedTypes={["image"]}
          render={({ open }) => (
            <Button onClick={open} isSecondary style={{ marginTop: "1rem" }}>
              {customThumbnail
                ? "Modifier l’image personnalisée"
                : "Choisir une image personnalisée"}
            </Button>
          )}
        />
        {customThumbnail && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={customThumbnail}
              alt="Miniature personnalisée"
              style={{ width: "100%", borderRadius: 4 }}
            />
            <Button
              onClick={() => setAttributes({ customThumbnail: "" })}
              isLink
              isDestructive
              style={{ marginBottom: "2rem" }}
            >
              {"Supprimer l’image"}
            </Button>
          </div>
        )}
      </PanelBody>

      <PanelBody title="Détails de la vidéo" initialOpen={true}>
        <TextControl
          label="Titre de la vidéo"
          value={videoTitle}
          onChange={(value) => setAttributes({ videoTitle: value })}
        />
        <TextareaControl
          label="Description"
          value={videoDescription}
          onChange={(value) => setAttributes({ videoDescription: value })}
        />
        <div style={{ marginTop: "1rem" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Date de création
          </label>
          <DatePicker
            currentDate={videoDateCreation}
            onChange={(date) => {
              const formatted = new Date(date).toISOString().split("T")[0];
              setAttributes({ videoDateCreation: formatted });
            }}
            __nextRemoveHelpButton
            __nextRemoveResetButton
          />
        </div>
        <TextControl
          label="URL de la page sur le site"
          value={urlPageSite}
          onChange={(value) => setAttributes({ urlPageSite: value })}
          help="Par défaut, cela reprend le slug de la page actuelle."
        />
      </PanelBody>
    </InspectorControls>
  );
}
