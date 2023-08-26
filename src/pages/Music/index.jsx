import { Spotify } from "react-spotify-embed";
import MusicPlay from "../../components/MusicPlay";

let Music = () => {
  return (
    <div className="music_root pb-32 pt-8 lg:pt-20">
      <div className="uppercase text-center mb-10 text-gray-300 text-4xl xl:text-8xl text-shadow-theme text-yellow-theme">
        Music
      </div>
      <div className="w-[97%] xl:w-[90%] gap-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {/* <div className="w-full xl:w-5/12 text-center mx-auto mb-5">
          <div className="news_list flex flex-col mt-5 justify-between">
            <Spotify
              link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw"
              width="100%"
            />
          </div>
        </div> */}
        <div className="news_list flex flex-col mt-5 justify-between">
          <MusicPlay />
        </div>
        <div className="news_list flex flex-col mt-5 justify-between">
          <MusicPlay />
        </div>
        <div className="news_list flex flex-col mt-5 justify-between">
          <MusicPlay />
        </div>
      </div>
    </div>
  );
};

export default Music;
