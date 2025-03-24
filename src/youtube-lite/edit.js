import { useBlockProps } from "@wordpress/block-editor";

import Toolbar from "./edit-toolbar";
import Inspecteur from "./edit-inspecteur";
import Block from "./edit-block";

import PreviewSVG from "./icon.svg";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { preview } = attributes;

  const blockProps = useBlockProps();

  if (preview)
    return (
      <div
        {...blockProps}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={PreviewSVG} alt="Preview" width="360" height="360" />
      </div>
    );

  return (
    <>
      <Toolbar {...{ blockProps, attributes, setAttributes }} />
      <Inspecteur {...{ blockProps, attributes, setAttributes }} />
      <Block {...{ blockProps, attributes, setAttributes }} />
    </>
  );
}
