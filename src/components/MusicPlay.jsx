import React, { useState, useRef } from "react";
import {
  AiFillPlayCircle,
  AiOutlineShareAlt,
  AiOutlineCloudDownload,
  AiFillPauseCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import musicFile from "../assets/sample-15s.mp3";


let musicFile = 'http://16.171.254.234:5000/uploads/1692657668605.mp3'
const MusicPlay = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [progress, setProgress] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isAudioEnded, setIsAudioEnded] = useState(false);

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
          <h2 className="text-3xl px-2">Iphone 5 Bgm | ihponr bgm remiz</h2>
        </div>
        <div className="text-3xl cursor-pointer">{<AiOutlineShareAlt />}</div>
      </div>
      <div className="text-lg flex gap-6 mt-3">
        <span>30 Sec</span>
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
              ? "/http://localhost:5000/api/music/buy/64e3e81e8a2c5d50d638c5de/64ea04cd54e3850b9cab79e5"
              : "/login"
          }
          type="button"
          className="text-white bg-[#2f2a2a] font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Buy now
        </Link>
      </div>
      <div className="text-start">
        <small>Buy to listen full song</small>
      </div>
      <audio
        ref={audioRef}
        src={`http://16.171.254.234:5000/uploads/${music.music_full_file}`}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnd}
      />
    </div>
  );
};

export default MusicPlay;
