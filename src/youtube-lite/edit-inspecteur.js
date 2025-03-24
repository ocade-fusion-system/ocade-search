import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

export default function Inspecteur({ attributes, setAttributes }) {
  const { videoId, lazyLoading } = attributes;

  return (
    <InspectorControls>
      <PanelBody
        title={"Vidéo Youtube"}
        initialOpen={true}
      >
        <TextControl
          label={"ID de la vidéo YouTube"}
          value={videoId}
          onChange={(value) => setAttributes({ videoId: value })}
          help={"Exemple : URL est https://www.youtube.com/watch?v=dQw4w9WgXcQ alors ID est dQw4w9WgXcQ"}
        />
        <ToggleControl
          label={"Chargement différé"}
          checked={lazyLoading}
          onChange={(value) => setAttributes({ lazyLoading: value })}
          help={"Permet de charger la vidéo uniquement lorsqu'elle est visible à l'écran"}
        />
      </PanelBody>
    </InspectorControls>
  );
}
