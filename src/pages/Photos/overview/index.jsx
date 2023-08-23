import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../../../components/PageHeading";
import ReturnHome from "../../../components/ReturnHome";
import { useNotification } from "../../../constrain/noficationHook";
import { getItems } from "../../../constrain/helper";
import AppLoading from "../../../constrain/AppLoading";

const PhotosOverviewPage = () => {
  const { slug } = useParams();

  const [album, setAlbum] = useState(null);
  const { notification, pushNotification, closeNotification } =
    useNotification();

  useEffect(() => {
    async function fetchData() {
      try {
        const allalbum = await getItems(`album/read/${slug}`);
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
    <div className="w-full py-6 text-black">
      <div className=" m-auto w-[80%] xl:w-[70%]">
        <ReturnHome link={"/album"} title={"Return to all Albums"} />
        <PageHeading heading={album?.title} />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 my-8">
          {album?.album_photos?.map((photo, i) => {
            return (
              <div
                key={i}
                className="w-full  bg-gray-100 rounded-md overflow-hidden"
              >
                {/* eslint-disable-next-line  */}
                <img
                  src={`http://16.171.254.234:5000/uploads/${photo?.album_image}`}
                  alt="photo-background"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotosOverviewPage;
