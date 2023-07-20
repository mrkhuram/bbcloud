import { Link } from "react-router-dom";
import CTAButton from "../../components/CtaButton";
import PageHeading from "../../components/PageHeading";

let Tour = () => {
  return (
    <div className="tour_root pb-32 pt-8 lg:pt-20 xl:py-32">
      <PageHeading heading="Tour" />

      <div className="w-[97%] xl:w-[70%] text-center mx-auto">
        <div className="flex flex-col">
          {tours.map(({ month, date, title, area }, ind) => {
            if (ind < 10) {
              return (
                <div
                  key={ind}
                  className="flex flex-row flex-start items-center pt-10"
                >
                  <div className="uppercase text-xl xl:text-5xl text-yellow-theme text-shadow-theme w-32 xl:w-64">
                    {month} <br /> {date}
                  </div>
                  <Link
                    to="/"
                    className="flex-col text-left hover:underline underline-color"
                  >
                    <div className="text-gray-200 text-xl xl:text-6xl uppercase w-[10rem] xl:w-[30rem] font-bold">
                      {title}
                    </div>
                    <div className="text-lg xl:text-3xl text-gray-500 capitalize">
                      {area}
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

          <div className="text-center pt-24">
            <CTAButton path="/" text="All Dates" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;

const tours = [
  {
    title: "Thunder valley casino",
    area: "Lincoln, CA",
    date: "26",
    month: "June",
  },
  {
    title: "Barefoot Country Music Fest",
    area: "Wildwood, NJ",
    date: "18",
    month: "June",
  },
  {
    title: "Thunder valley casino",
    area: "Lincoln, CA",
    date: "26",
    month: "June",
  },
  {
    title: "Barefoot Country Music Fest",
    area: "Wildwood, NJ",
    date: "18",
    month: "June",
  },
  {
    title: "Thunder valley casino",
    area: "Lincoln, CA",
    date: "26",
    month: "June",
  },
  {
    title: "Barefoot Country Music Fest",
    area: "Wildwood, NJ",
    date: "18",
    month: "June",
  },
  {
    title: "Thunder valley casino",
    area: "Lincoln, CA",
    date: "26",
    month: "June",
  },
  {
    title: "Barefoot Country Music Fest",
    area: "Wildwood, NJ",
    date: "18",
    month: "June",
  },
  {
    title: "Thunder valley casino",
    area: "Lincoln, CA",
    date: "26",
    month: "June",
  },
  {
    title: "Barefoot Country Music Fest",
    area: "Wildwood, NJ",
    date: "18",
    month: "June",
  },
  {
    title: "Thunder valley casino",
    area: "Lincoln, CA",
    date: "26",
    month: "June",
  },
  {
    title: "Barefoot Country Music Fest",
    area: "Wildwood, NJ",
    date: "18",
    month: "June",
  },
  {
    title: "Thunder valley casino",
    area: "Lincoln, CA",
    date: "26",
    month: "June",
  },
  {
    title: "Barefoot Country Music Fest",
    area: "Wildwood, NJ",
    date: "18",
    month: "June",
  },
];
