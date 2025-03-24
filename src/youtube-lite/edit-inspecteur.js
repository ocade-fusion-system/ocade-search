import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  ToggleControl,
  Button,
} from "@wordpress/components";

export default function Inspecteur({ attributes, setAttributes }) {
  const { videoId, customThumbnail, lazyLoading } = attributes;

  return (
    <InspectorControls>
      <PanelBody title={"Vidéo Youtube"} initialOpen={true}>
        <TextControl
          label={"ID de la vidéo YouTube"}
          value={videoId}
          onChange={(value) => setAttributes({ videoId: value })}
          help={
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ alors ID est dQw4w9WgXcQ"
          }
        />
        <ToggleControl
          label={"Chargement différé"}
          checked={lazyLoading}
          onChange={(value) => setAttributes({ lazyLoading: value })}
          help={
            "Activez si la vidéo est hors de la zone de flottaison. Cela peut améliorer les performances de la page."
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
    </InspectorControls>
  );
}
