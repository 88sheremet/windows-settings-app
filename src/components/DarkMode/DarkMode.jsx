import React from 'react';
// import { DismissSquareRegular } from `@fluentui/react-icons`;

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  };
  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  };

  const toggleTheme = e => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  // setDarkMode()

  return (
    <div className="dark_mode">
      <input type="checkbox" className="dark_mode_input" id="darkmode-toggle" onChange={toggleTheme}/>
      <label htmlFor="" className="dark_mode_label" for="darkmode-toggle">
        Light Dark
      </label>
    </div>
  );
};

export default DarkMode;
