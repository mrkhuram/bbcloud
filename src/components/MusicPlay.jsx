import React, { useState, useRef } from "react";
import { useEffect } from "react";
import {
  AiFillPlayCircle,
  AiOutlineShareAlt,
  AiOutlineCloudDownload,
  AiFillPauseCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MusicPlay = ({ music, myMusic }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [progress, setProgress] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isAudioEnded, setIsAudioEnded] = useState(false);

  useEffect(() => {
    setProgress(0);
    setIsMusicPlaying(false);
    setIsAudioEnded(false);
  }, [myMusic]);

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const calculatedProgress = (currentTime / duration) * 100;
    setProgress(calculatedProgress);
  };

  const handlePlayPause = () => {
    if (isAudioEnded) {
      audioRef.current.currentTime = 0;
      setProgress(0);
    }

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
    setIsAudioEnded(false);
  };

  const handleAudioEnd = () => {
    setIsAudioEnded(true);
    setIsMusicPlaying(false);
    setProgress(100);
  };

  return (
    <div className="p-4 text-white hover:bg-[#464343] bg-[#727272] transition duration-200 rounded-xl">
      <div className="flex items-start justify-between gap-10">
        <div className="flex">
          <div
            className="bg-pink-800 rounded-md w-[7rem] h-[7rem] text-5xl flex items-center justify-center text-black"
            style={{
              backgroundImage: `url(http://16.171.254.234:5000/uploads/${music?.music_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <AiFillPlayCircle />
          </div>
          <h2 className="text-3xl px-2">{music.title}</h2>
        </div>
        <div className="text-3xl cursor-pointer">{<AiOutlineShareAlt />}</div>
      </div>
      <div className="text-lg flex gap-6 mt-3">
        <span>{!myMusic ? "30 Sec" : "Full Song"}</span>
        <span>{music.releaseDate}</span>
        <span className="flex items-center gap-1">${music.price} </span>
      </div>
      <div className="flex items-center gap-2">
        <div className=" cursor-pointer hover:text-[#afa6a6]">
          {isAudioEnded ? (
            <AiFillPlayCircle fontSize={30} onClick={handlePlayPause} />
          ) : isMusicPlaying ? (
            <AiFillPauseCircle fontSize={30} onClick={handlePlayPause} />
          ) : (
            <AiFillPlayCircle fontSize={30} onClick={handlePlayPause} />
          )}
        </div>
        <div className="w-full mt-4 bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700 cursor-pointer">
          <div
            className="bg-blue-600 h-4 rounded-full dark:bg-blue-500 translate duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="text-end">
        <Link
          to={
            user
              ? `http://16.171.254.234:5000/api/music/buy/${music._id}/${user._id}`
              : "/login"
          }
          type="button"
          className="text-white bg-[#2f2a2a] font-medium rounded-lg text-sm px-5 py-2.5"
          target="_blank"
          rel="bobbybbc"
        >
          Buy now
        </Link>
      </div>
      <div className="text-start">
        <small>Buy to listen full song</small>
      </div>
      <audio
        ref={audioRef}
        src={`http://16.171.254.234:5000/uploads/${
          myMusic ? music.music_full_file : music.music_short_file
        }`}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnd}
      />
    </div>
  );
};

export default MusicPlay;
