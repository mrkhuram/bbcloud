import CTAButton from "../../components/CtaButton";
import { Spotify } from "react-spotify-embed";

let Music = () => {
  return (
    <div className="music_root pb-32 pt-8 lg:pt-20 xl:py-32">
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
            <div className="text-center pt-4 pb-24 xl:pb-0 xl:pt-24">
              <CTAButton path="/" text="All Music" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
