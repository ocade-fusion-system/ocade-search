import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    videoId,
    customThumbnail,
    lazyLoading,
    videoTitle,
    videoDescription,
    videoDateCreation,
    urlPageSite,
  } = attributes;

  const blockProps = useBlockProps.save();

  const imageURL = customThumbnail
    ? customThumbnail
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoTitle || "Titre de la vidéo",
    description: videoDescription || "Description de la vidéo non renseignée.",
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/0.jpg`,
    uploadDate: videoDateCreation
    ? new Date(videoDateCreation).toISOString()
    : new Date().toISOString(),
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    contentUrl: urlPageSite || "",
  };

  return (
    <>
      <div
        {...blockProps}
        role="button"
        tabIndex="0"
        aria-label="Lire la vidéo YouTube"
        data-video-id={videoId}
        data-video-lazyloading={lazyLoading ? "lazy" : "eager"}
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}
