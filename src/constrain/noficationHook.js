import React, { useState } from "react";

export const useNotification = () => {
  const [notification, setNotification] = useState(null);

  const pushNotification = (message, duration = 3000) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  const closeNotification = () => setNotification(null);

  return { notification, pushNotification, closeNotification };
};
