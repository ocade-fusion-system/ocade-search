export default function Block(props) {
  const { blockProps } = props;

  const { borderStyle, borderWidth, borderColor, borderRadius } = props.attributes;

  return (
    <div {...blockProps} style={{ border: `${borderWidth}px ${borderStyle} ${borderColor}`, borderRadius: `${borderRadius}px`, overflow: 'hidden' }}>
      <p>Emplacement réservé à l'affichage du workflow.</p>
    </div>
  );
}
