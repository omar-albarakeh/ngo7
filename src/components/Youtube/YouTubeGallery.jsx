import React, { useState, useMemo } from "react";
import ReactPlayer from "react-player/youtube";
import { useTranslation } from "react-i18next";
import "./YouTubeGallery.css";

const YouTubeCard = ({ videoId, title, description }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="youtube-card">
      <div className="card-video">
        <ReactPlayer url={videoUrl} width="100%" height="180px" controls />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const YouTubeGallery = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoData = useMemo(
    () =>
      [
        {
          id: "lpb2-mGPSkg",
          titleKey: "videos.0.title",
          descKey: "videos.0.description",
        },
        {
          id: "NFtpPXghBJo",
          titleKey: "videos.1.title",
          descKey: "videos.1.description",
        },
        {
          id: "Vm50wOhuJGo",
          titleKey: "videos.2.title",
          descKey: "videos.2.description",
        },
        {
          id: "zN0xgqaEv8o",
          titleKey: "videos.3.title",
          descKey: "videos.3.description",
        },
        {
          id: "9H9idniMTW8",
          titleKey: "videos.4.title",
          descKey: "videos.4.description",
        },
        {
          id: "yIUbYIKfALY",
          titleKey: "videos.5.title",
          descKey: "videos.5.description",
        },
        {
          id: "oX48tXy2_ig",
          titleKey: "videos.6.title",
          descKey: "videos.6.description",
        },
        {
          id: "NPebcoNnGik",
          titleKey: "videos.7.title",
          descKey: "videos.7.description",
        },
      ].map((video) => ({
        videoId: video.id,
        title: t(video.titleKey),
        description: t(video.descKey),
      })),
    [t]
  );

  const scroll = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return Math.max(0, prevIndex - 1);
      } else {
        return Math.min(videoData.length - 1, prevIndex + 1);
      }
    });
  };

  const visibleVideos = videoData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="youtube-gallery">
      <h2 className="video-heading">{t("youtubeUpdates")}</h2>
      <div className="scroll-container">
        <button
          className="scroll-btn left"
          onClick={() => scroll("left")}
          disabled={currentIndex === 0}
          aria-label="Scroll Left">
          &#10094;
        </button>

        <div className="scroll-wrapper fixed-view">
          <div className="youtube-card-list no-scroll">
            {visibleVideos.map(({ videoId, title, description }) => (
              <YouTubeCard
                key={videoId}
                videoId={videoId}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>

        <button
          className="scroll-btn right"
          onClick={() => scroll("right")}
          disabled={currentIndex >= videoData.length - 1}
          aria-label="Scroll Right">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default YouTubeGallery;
