import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [isUserOnline, setIsUserOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsUserOnline(true);
    const handleOffline = () => setIsUserOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isUserOnline;
};

export default useOnlineStatus;
