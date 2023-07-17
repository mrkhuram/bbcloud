import { Link } from "react-router-dom";
import CTAButton from "./CtaButton";
import PageHeading from "./PageHeading";
let News = () => {
  return (
    <div className="news_root py-32 ">
      <PageHeading heading="The Latest" />

      <div className="w-[97%] xl:w-[70%] text-center mx-auto">
        <div className="uppercase text-gray-300 text-3xl xl:text-6xl text-shadow-theme text-yellow-theme text-left">
          News
        </div>
        <div className="news_list flex flex-col mt-5 justify-between">
          {newsList.map(({ date, title, path, img, text }, ind) => {
            if (ind < 5) {
              return (
                <div className="item w-[95%] xl:w-[70%] flex bg-news p-4 mb-8">
                  <div className="w-6/12">
                    <Link to="/">
                      <img src={img} alt="" />
                    </Link>
                  </div>
                  <div className="w-6/12 flex flex-col pl-5">
                    <div className="flex flex-row justify-between">
                      <div className="text-white capitalize">{date}</div>
                      <div className="bg-yellow text-white px-3 py-1 text-lg rounded relative left-10">
                        News
                      </div>
                    </div>
                    <Link
                      to={path}
                      className="break-normal hover:underline text-white text-2xl xl:text-4xl w-10/12 text-left"
                    >
                      {title}
                    </Link>
                    <p className="text-white text-left mt-5 overflow-clip">
                      {text}
                    </p>
                  </div>
                </div>
              );
            }
            return false;
          })}
        </div>
        <div className="flex flex-col">
          <div className="text-center pt-24">
            <CTAButton path="/" text="All News" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

const newsList = [
  {
    title: "The 2nd Annual American Bad Ass Comedy Jam was a huge success!",
    path: "Lincoln, CA",
    date: "May 12, 2023",
    img: "https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410",
    text: ` Thank you to everyone who performed, organized, and attended The
    2nd Annual American Bad Ass Comedy Jam at The Ryman here in
    Nashville! We raised just over $87,000 dollars for the Kid Rock
    Foundation. Every dime of that will be split between those
    affected by the Covenant school shooting in Nashville and the
    soldier's families of the recent blackhawk helicopters that went
    down out of Ft. Campbell. If anyone else would like to donate,
    the links are below. God bless. -Kid Rock Caring for Covenant
    Fund https://www.cfmt.org/.../support-survivors-of-the.../ Fort
    Campbell Historical Foundation (The Carl Ferrazza Fund)
    https://fortcampbell.com`,
  },

  {
    title: "The 2nd Annual American Bad Ass Comedy Jam was a huge success!",
    path: "Lincoln, CA",
    date: "May 12, 2023",
    img: "https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410",
    text: ` Thank you to everyone who performed, organized, and attended The
    2nd Annual American Bad Ass Comedy Jam at The Ryman here in
    Nashville! We raised just over $87,000 dollars for the Kid Rock
    Foundation. Every dime of that will be split between those
    affected by the Covenant school shooting in Nashville and the
    soldier's families of the recent blackhawk helicopters that went
    down out of Ft. Campbell. If anyone else would like to donate,
    the links are below. God bless. -Kid Rock Caring for Covenant
    Fund https://www.cfmt.org/.../support-survivors-of-the.../ Fort
    Campbell Historical Foundation (The Carl Ferrazza Fund)
    https://fortcampbell.com`,
  },

  {
    title: "The 2nd Annual American Bad Ass Comedy Jam was a huge success!",
    path: "Lincoln, CA",
    date: "May 12, 2023",
    img: "https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410",
    text: ` Thank you to everyone who performed, organized, and attended The
    2nd Annual American Bad Ass Comedy Jam at The Ryman here in
    Nashville! We raised just over $87,000 dollars for the Kid Rock
    Foundation. Every dime of that will be split between those
    affected by the Covenant school shooting in Nashville and the
    soldier's families of the recent blackhawk helicopters that went
    down out of Ft. Campbell. If anyone else would like to donate,
    the links are below. God bless. -Kid Rock Caring for Covenant
    Fund https://www.cfmt.org/.../support-survivors-of-the.../ Fort
    Campbell Historical Foundation (The Carl Ferrazza Fund)
    https://fortcampbell.com`,
  },

  {
    title: "The 2nd Annual American Bad Ass Comedy Jam was a huge success!",
    path: "Lincoln, CA",
    date: "May 12, 2023",
    img: "https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410",
    text: ` Thank you to everyone who performed, organized, and attended The
    2nd Annual American Bad Ass Comedy Jam at The Ryman here in
    Nashville! We raised just over $87,000 dollars for the Kid Rock
    Foundation. Every dime of that will be split between those
    affected by the Covenant school shooting in Nashville and the
    soldier's families of the recent blackhawk helicopters that went
    down out of Ft. Campbell. If anyone else would like to donate,
    the links are below. God bless. -Kid Rock Caring for Covenant
    Fund https://www.cfmt.org/.../support-survivors-of-the.../ Fort
    Campbell Historical Foundation (The Carl Ferrazza Fund)
    https://fortcampbell.com`,
  },

  {
    title: "The 2nd Annual American Bad Ass Comedy Jam was a huge success!",
    path: "Lincoln, CA",
    date: "May 12, 2023",
    img: "https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410",
    text: ` Thank you to everyone who performed, organized, and attended The
    2nd Annual American Bad Ass Comedy Jam at The Ryman here in
    Nashville! We raised just over $87,000 dollars for the Kid Rock
    Foundation. Every dime of that will be split between those
    affected by the Covenant school shooting in Nashville and the
    soldier's families of the recent blackhawk helicopters that went
    down out of Ft. Campbell. If anyone else would like to donate,
    the links are below. God bless. -Kid Rock Caring for Covenant
    Fund https://www.cfmt.org/.../support-survivors-of-the.../ Fort
    Campbell Historical Foundation (The Carl Ferrazza Fund)
    https://fortcampbell.com`,
  },

  {
    title: "The 2nd Annual American Bad Ass Comedy Jam was a huge success!",
    path: "Lincoln, CA",
    date: "May 12, 2023",
    img: "https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410",
    text: ` Thank you to everyone who performed, organized, and attended The
    2nd Annual American Bad Ass Comedy Jam at The Ryman here in
    Nashville! We raised just over $87,000 dollars for the Kid Rock
    Foundation. Every dime of that will be split between those
    affected by the Covenant school shooting in Nashville and the
    soldier's families of the recent blackhawk helicopters that went
    down out of Ft. Campbell. If anyone else would like to donate,
    the links are below. God bless. -Kid Rock Caring for Covenant
    Fund https://www.cfmt.org/.../support-survivors-of-the.../ Fort
    Campbell Historical Foundation (The Carl Ferrazza Fund)
    https://fortcampbell.com`,
  },

  {
    title: "The 2nd Annual American Bad Ass Comedy Jam was a huge success!",
    path: "Lincoln, CA",
    date: "May 12, 2023",
    img: "https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410",
    text: ` Thank you to everyone who performed, organized, and attended The
    2nd Annual American Bad Ass Comedy Jam at The Ryman here in
    Nashville! We raised just over $87,000 dollars for the Kid Rock
    Foundation. Every dime of that will be split between those
    affected by the Covenant school shooting in Nashville and the
    soldier's families of the recent blackhawk helicopters that went
    down out of Ft. Campbell. If anyone else would like to donate,
    the links are below. God bless. -Kid Rock Caring for Covenant
    Fund https://www.cfmt.org/.../support-survivors-of-the.../ Fort
    Campbell Historical Foundation (The Carl Ferrazza Fund)
    https://fortcampbell.com`,
  },
];
