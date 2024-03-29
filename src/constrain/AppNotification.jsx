import React from "react";

const AppNotification = ({ message, close }) => {
  return (
    <div
      id="toast-default"
      className="flex items-center w-auto p-2 lg:p-4 rounded-lg shadow bg-theme-2 text-white  bottom-4 left-4 fixed"
      role="alert"
    >
      <div className="ml-3 text-xl capitalize font-normal whitespace-nowrap">
        {message}
      </div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-default"
        onClick={close}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default AppNotification;
