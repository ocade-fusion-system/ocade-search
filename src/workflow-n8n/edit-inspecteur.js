import {
  InspectorControls,
  
  __experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  ToggleControl,
  TextControl,
  SelectControl,
  TextareaControl,
  RangeControl,
} from "@wordpress/components";

export default function Inspecteur(props) {
  const { attributes, setAttributes } = props;
  const {
    workflow,
    frame,
    collapseformobile,
    clicktointeract,
    hidecanvaserrors,
    disableinteractivity,
    theme,
    src,
    borderStyle,
    borderWidth,
    borderColor,
    borderRadius,
    minHeight
  } = attributes;

  const fixedColors = [
    { name: "Orange", slug: "orange", color: "#a22f20" },
    { name: "Bleu", slug: "bleu", color: "#1D5670" },
    { name: "Gris", slug: "gris", color: "#f2f2f2" },
    { name: "Gris Clair", slug: "gris-clair", color: "#f4f4f4" },
    { name: "Nuit", slug: "nuit", color: "#32373c" },
    { name: "Violet", slug: "violet", color: "#303579" },
    { name: "Violet Clair", slug: "violet-clair", color: "#ececfe" },
  ];

  return (
    <InspectorControls>
      <PanelBody title="Paramètres du workflow N8N" initialOpen={true}>
        <SelectControl
          label="Thème"
          value={theme}
          options={[
            { label: "Sombre", value: "dark" },
            { label: "Clair", value: "light" },
          ]}
          onChange={(value) => setAttributes({ theme: value })}
        />
        <ToggleControl
          label="Afficher dans une iframe"
          checked={frame}
          onChange={(value) => setAttributes({ frame: value })}
        />
        <ToggleControl
          label="Réduire sur mobile"
          checked={collapseformobile}
          onChange={(value) => setAttributes({ collapseformobile: value })}
        />
        <ToggleControl
          label="Cliquer pour interagir"
          checked={clicktointeract}
          onChange={(value) => setAttributes({ clicktointeract: value })}
        />
        <ToggleControl
          label="Masquer les erreurs du canvas"
          checked={hidecanvaserrors}
          onChange={(value) => setAttributes({ hidecanvaserrors: value })}
        />
        <ToggleControl
          label="Désactiver l’interactivité"
          checked={disableinteractivity}
          onChange={(value) => setAttributes({ disableinteractivity: value })}
        />
        <TextareaControl
          label="Code du workflow (format JSON)"
          help="Collez le code complet JSON de votre workflow N8N."
          value={workflow}
          onChange={(value) => setAttributes({ workflow: value })}
          rows={10}
        />
        <TextControl
          label="Lien (src) du workflow"
          value={src}
          onChange={(value) => setAttributes({ src: value })}
        />
      </PanelBody>

      <PanelBody title="Style de la bordure" initialOpen={true}>
        <SelectControl
          label="Style de la bordure"
          value={borderStyle}
          options={[
            { label: "Solide", value: "solid" },
            { label: "Pointillé", value: "dotted" },
            { label: "Tireté", value: "dashed" },
            { label: "Double", value: "double" },
            { label: "En relief", value: "ridge" },
            { label: "En creux", value: "groove" },
            { label: "En gravé", value: "inset" },
            { label: "En bossé", value: "outset" },
          ]}
          onChange={(value) => setAttributes({ borderStyle: value })}
        />
        <RangeControl
          label="Épaisseur de la bordure (px)"
          value={borderWidth}
          onChange={(value) => setAttributes({ borderWidth: value })}
          min={0}
          max={20}
        />
        <PanelColorGradientSettings
          title="Couleur de la bordure"
          settings={[
            {
              label: "Couleur de la bordure",
              colorValue: borderColor,
              onColorChange: (value) => setAttributes({ borderColor: value }),
              colors: fixedColors
            },
          ]}
        />
        <RangeControl
          label="Rayon de la bordure (px)"
          value={borderRadius}
          onChange={(value) => setAttributes({ borderRadius: value })}
          min={0}
          max={100}
        />
        <RangeControl
          label="Hauteur minimale (px)"
          value={minHeight}
          onChange={(value) => setAttributes({ minHeight: value })}
          min={0}
          max={5000}
          step={10}
        />
      </PanelBody>
    </InspectorControls>
  );
}
