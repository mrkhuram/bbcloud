import { Link } from "react-router-dom";

const CTAButton = ({ text, path, classes }) => {
  return (
    <Link
    to={path}
    className={'uppercase px-4 xl:px-8 py-2 xl:py-4 border rounded border-2 text-lg xl:text-2xl text-yellow-theme border-yellow-theme hover:border-white hover:text-white ' + classes}
  >
    {text}
  </Link>
  );
};

export default CTAButton;
