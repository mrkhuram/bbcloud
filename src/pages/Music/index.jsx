import CTAButton from "../../components/CtaButton";
import YouTube from "react-youtube";
import { Spotify } from "react-spotify-embed";

let Music = () => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="music_root py-32 ">
      <div className="w-[97%] xl:w-[70%]  flex flex-col xl:flex-row mx-auto">
        <div className="w-full xl:w-5/12 text-center mx-auto mb-5">
          <div className="uppercase text-gray-300 text-4xl xl:text-8xl text-shadow-theme text-yellow-theme">
            Music
          </div>

          <div className="news_list flex flex-col mt-5 justify-between">
            <Spotify
              link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw"
              width="100%"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-center pt-24">
              <CTAButton path="/" text="All Music" />
            </div>
          </div>
        </div>
        <div className="w-full xl:w-6/12 text-center mx-auto mb-5">
          <div className="uppercase text-gray-300 text-4xl xl:text-8xl text-shadow-theme text-yellow-theme">
            Videos
          </div>

          <div className="news_list flex flex-col mt-5 justify-between">
            <YouTube videoId="2g811Eo7K8U" opts={opts} />
          </div>
          <div className="flex flex-col">
            <div className="text-center pt-24">
              <CTAButton path="/" text="All Videos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
