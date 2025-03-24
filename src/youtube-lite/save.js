import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { videoId, customThumbnail, lazyLoading } = attributes;
  const blockProps = useBlockProps.save();

  const imageURL = customThumbnail
    ? customThumbnail
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return <div
    {...blockProps}
    role="button"
    tabIndex="0"
    aria-label="Lire la vidéo YouTube"
    data-video-id={videoId}
    data-video-lazyloading={lazyLoading ? "lazy" : "eager"}
    style={{
      backgroundImage: `url(${imageURL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />;
}
