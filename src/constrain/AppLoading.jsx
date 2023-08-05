import React from "react";
import AppNotification from "./AppNotification";

const AppLoading = ({ notification, close }) => {
  return (
    <div>
      <div className="h-[70vh] flex items-center justify-center">
        <h2>loading...</h2>
        {notification && (
          <AppNotification message={notification} close={close} />
        )}
      </div>
    </div>
  );
};

export default AppLoading;
