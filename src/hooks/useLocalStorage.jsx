import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key));

  const [value, setValue] = useState(storedValue || initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
