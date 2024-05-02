import { useEffect, useState } from "react";
// import HamburgerMenu from '../images/HamburgerMenu.png';
// import DarkMenu from '../images/DarkMenu.png';
// import darkLogo from '../images/darkLogo.jpg';
// import lightLogo from '../images/lightLogo.png';

const DynamicTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-400 p-1 ml-2 rounded-xl font-medium text-md px-2"
    >
      {darkMode ? "Light" : "Dark"}
      <div>
        {/* <img src={darkMode ? DarkMenu.png : HamburgerMenu.png} alt="menupic" /> */}
        {/* <img src={darkMode ? darkLogo : lightLogo} alt="logopic" /> */}
      </div>
    </button>
  );
};

export default DynamicTheme;
