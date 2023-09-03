// import { Spotify } from "react-spotify-embed";
import MusicPlay from "../../components/MusicPlay";
import { useEffect, useState } from "react";
import PageHeading from "../../components/PageHeading";
import AppLoading from "../../constrain/AppLoading";
import { useNotification } from "../../constrain/noficationHook";
import { getItems } from "../../constrain/helper";
import { useSelector } from "react-redux";

let Music = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [openTab, setOpenTab] = useState(1);
  const [myMusic, setMyMusic] = useState([]);
  const [allMusic, setAllMusic] = useState([]);
  const { notification, pushNotification, closeNotification } =
    useNotification();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchMusic = await getItems("music/read_all");
        if (fetchMusic.status === 200) {
          const { data } = fetchMusic;
          setAllMusic(data.Music);
        }
      } catch (error) {
        pushNotification(error?.response?.data?.message);
      }
    }

    fetchData();

    if (user) {
      async function fetchMyMusic() {
        try {
          const response = await getItems(`getprofile/${user._id}`);
          if (response.status === 200) {
            const { data } = response;
            console.log(data.user)
            setMyMusic(data.user.myMusic);
          }
        } catch (error) {
          pushNotification(error?.response?.data?.message);
        }
      }

      fetchMyMusic();
    }
  }, [user]);

  if (!allMusic)
    return <AppLoading close={closeNotification} notification={notification} />;

  return (
    <div className="music_page_root pb-32 pt-8 lg:pt-20 ">
      <PageHeading heading="Music" />

      <div className="flex flex-wrap items-center justify-center pt-12">
        <div>
          <ul
            className="flex mb-0 list-none items-center pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl uppercase px-5 py-3 shadow-lg rounded-xl block leading-normal " +
                  (openTab === 1
                    ? "bg-yellow text-black box-shadow-theme "
                    : "bg-tab text-white box-shadow-tab")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All Music
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl uppercase px-5 py-3 shadow-lg rounded-xl block leading-normal " +
                  (openTab === 2
                    ? "bg-yellow text-black box-shadow-theme "
                    : "bg-tab text-white box-shadow-tab")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                My Music
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full mt-8">
        <hr className="w-10/12 h-0.5 my-8 mt-10 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="text:2xl md:text-5xl text-white absolute px-4 -translate-x-1/2 bg-[#aeaeae] left-1/2 dark:bg-gray-900">
          {openTab === 1 ? "All Music" : "My Music"}
        </div>
      </div>
      <div className="w-9/12 justify-center gap-8 lg:w-10/12 m-auto image_outer_box flex flex-wrap flex-row">
        {openTab === 1 ? (
          <div className="w-full gap-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {allMusic.map((music, i) => {
              return (
                <div
                  className="news_list flex flex-col mt-5 justify-between"
                  key={i}
                >
                  <MusicPlay music={music} myMusic={false}/>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full gap-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {myMusic?.length > 0 ? (
              myMusic.map((music, i) => (
                <div
                  className="news_list flex flex-col mt-5 justify-between"
                  key={i}
                >
                  <MusicPlay music={music.music_item} myMusic={true}/>
                </div>
              ))
            ) : (
              <h2 className="text-3xl mt-4 text-center w-full text-theme-2 font-bold">
                No Music added yet!
              </h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Music;
