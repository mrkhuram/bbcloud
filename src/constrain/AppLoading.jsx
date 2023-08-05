import React from "react";
import AppNotification from "./AppNotification";
import { BeatLoader } from "react-spinners";

const AppLoading = ({ notification, close }) => {
  return (
    <div>
      <div className="h-[70vh] flex items-center justify-center bg-[#aeaeae]">
        <BeatLoader
          color={"#dbb52f"}
          loading={true}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {notification && (
          <AppNotification message={notification} close={close} />
        )}
      </div>
    </div>
  );
};

export default AppLoading;
