import { Link } from "react-router-dom";
import CTAButton from "../../components/CtaButton";
import PageHeading from "../../components/PageHeading";
import getDateAndMonthName from "../../constrain/dateFormat";
import { getItems } from "../../constrain/helper";
import { useEffect, useState } from "react";
import { useNotification } from "../../constrain/noficationHook";
import AppLoading from "../../constrain/AppLoading";

let Tour = () => {
  const [tour, setTour] = useState(null);
  const { notification, pushNotification, closeNotification } =
    useNotification();

  useEffect(() => {
    async function fetchData() {
      try {
        const alltour = await getItems("tour/read_all");
        if (alltour.status === 200) {
          const { data } = alltour;
          setTour(data.Tour);
        }
      } catch (error) {
        pushNotification(error?.response?.data?.message);
      }
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  if (!tour)
    return <AppLoading close={closeNotification} notification={notification} />;

  return (
    <div className="tour_root pb-32 pt-8 lg:pt-20 min-h-[70vh]">
      <PageHeading heading="Tour" />

      <div className="w-[97%] xl:w-[70%] text-center mx-auto">
        <div className="flex flex-col">
          {tour.map(({ createdAt, title, city, state }, ind) => {
            if (ind < 10) {
              return (
                <div
                  key={ind}
                  className="flex flex-row flex-start items-center pt-10"
                >
                  <div className="uppercase text-xl xl:text-5xl text-yellow-theme text-shadow-theme w-32 xl:w-64">
                    {getDateAndMonthName(createdAt)[1]} <br />
                    {getDateAndMonthName(createdAt)[0]}
                  </div>
                  <Link
                    to="/"
                    className="flex-col text-left hover:underline underline-color"
                  >
                    <div className="text-gray-200 text-xl xl:text-6xl uppercase w-[10rem] xl:w-[30rem] font-bold">
                      {title}
                    </div>
                    <div className="text-lg xl:text-3xl text-gray-500 capitalize">
                      {city} , {state}
                    </div>
                  </Link>
                  <Link
                    to="/"
                    className="uppercase bg-yellow px-4 xl:px-10 rounded-xl py-1 text-md xl:text-lg text-gray-100 btn-hover ml-auto mr-10"
                  >
                    Buy Tickets
                  </Link>
                </div>
              );
            }
            return false;
          })}
          {tour?.length > 15 && (
            <div className="text-center pt-24">
              <CTAButton path="/" text="All Dates" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tour;
