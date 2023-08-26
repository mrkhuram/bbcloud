import { Link } from "react-router-dom";
import PageHeading from "../../components/PageHeading";
import { useEffect, useState } from "react";
import { useNotification } from "../../constrain/noficationHook";
import { getItems } from "../../constrain/helper";
import AppLoading from "../../constrain/AppLoading";
import { formatDate } from "../../constrain/dateFormat";
import { imageBaseURL } from "../../helpers/utils";

const PhotosPage = () => {
  const [album, setAlbum] = useState(null);
  const { notification, pushNotification, closeNotification } =
    useNotification();

  useEffect(() => {
    async function fetchData() {
      try {
        const allalbum = await getItems("album/read_all");
        if (allalbum.status === 200) {
          const { data } = allalbum;
          setAlbum(data.Album);
        }
      } catch (error) {
        pushNotification(error?.response?.data?.message);
      }
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  if (!album)
    return <AppLoading close={closeNotification} notification={notification} />;

  return (
    <div className="music_page_root pb-32 pt-8 lg:pt-20">
      <PageHeading heading="Albums" />

      <div className=" w-9/12 lg:w-10/12 m-auto image_outer_box flex flex-wrap flex-row gap-10 justify-center">
        {album?.map((item, ind) => (
          <Link to={`/album/${item._id}`} key={ind}>
            <div className=" w-[90%] m-auto md:w-96 mt-3  hover:text-[#dbb52f] text-white ">
              <div className="poster overflow-hidden bg-[#38383">
                <img
                  src={`${imageBaseURL}/${item?.title_img}`}
                  alt=""
                  className="bg-[#383838b3] p-2 hover:scale-110 transition-transform delay-75 duration-75 ease-in-out"
                />
              </div>
              <div className="details bg-[#383838b3] min-h-40 h-40 text-center flex flex-col items-center justify-center ">
                <div className="text-4xl font-bold ">{item.title} </div>
                <div className="text-2xl text-yellow-theme">
                  ({formatDate(item.createdAt)})
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default PhotosPage;
