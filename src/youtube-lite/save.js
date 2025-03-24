import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { videoId, lazyLoading } = attributes;
  const blockProps = useBlockProps.save();

  return <div
    {...blockProps}
    role="button"
    tabIndex="0"
    aria-label="Lire la vidéo YouTube"
    data-video-id={videoId}
    data-video-lazyloading={lazyLoading ? "lazy" : "eager"}
    style={{
      backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />;
}
