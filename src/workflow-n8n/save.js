import { useBlockProps } from '@wordpress/block-editor';

export default function save(props) {
  const {
    attributes: {
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
      borderRadius
    }
  } = props;

  const blockProps = useBlockProps.save();

  const demoAttributes = {
    workflow,
    frame,
    collapseformobile,
    clicktointeract,
    hidecanvaserrors,
    disableinteractivity,
    theme,
  };
  if (src) demoAttributes.src = src;

  const htmlAttributes = Object.entries(demoAttributes).reduce((acc, [key, value]) => {
    acc[key] = typeof value === 'boolean' ? String(value) : value;
    return acc;
  }, {});

  return (
    <div {...blockProps} style={{ border: `${borderWidth}px ${borderStyle} ${borderColor}`, borderRadius: `${borderRadius}px`, overflow: 'hidden' }}>
      <n8n-demo {...htmlAttributes}></n8n-demo>
    </div>
  );
}
