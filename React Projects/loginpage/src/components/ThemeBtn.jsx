import React, { useEffect } from "react";
import useTheme from "./contexts/themeContext";

const ThemeBtn = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme('light');

  const onChangeBtn = (e) => {
    const darkMode = e.currentTarget.checked;

    if (darkMode) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={onChangeBtn}
        className="light"
        checked={themeMode === 'dark'}
      />
    </div>
  );
};

export default ThemeBtn;
