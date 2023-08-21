import { useState } from "react";

export const useNotification = () => {
  const [notification, setNotification] = useState(null);

  const pushNotification = (message, duration = 3000) => {
    setNotification(message);
    let timeout = setTimeout(() => {
      setNotification(null);
    }, duration);

    return ()=>clearTimeout(timeout)
  };

  const closeNotification = () => setNotification(null);

  return { notification, pushNotification, closeNotification };
};
