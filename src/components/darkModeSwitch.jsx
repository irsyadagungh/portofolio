import { useEffect, useState } from 'react';
import { Switch } from '@chakra-ui/react';
import Sun from '../../public/assets/icon/sun.png';
import Moon from '../../public/assets/icon/moon.png';

function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.theme;
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return storedTheme === 'dark' || (!storedTheme && prefersDarkMode);
  });

  const handleSwitchChange = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.theme = newIsDarkMode ? 'dark' : 'light';
  };

  useEffect(() => {
    const handleSystemThemeChange = () => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    };

    // Set initial state and subscribe to system theme changes
    handleSystemThemeChange();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);

    return () => {
      // Clean up the event listener on component unmount
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSystemThemeChange);
    };
  }, []); // Run once on mount

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex items-center">
      <label htmlFor="dark-mode-switch" className="mr-2 w-4">
        <img src={Sun} alt="" />
      </label>
      <Switch
        id="dark-mode-switch"
        checked={isDarkMode}
        onChange={handleSwitchChange}
        className="bg-gray-300 dark:bg-gray-700"
      />
      <label htmlFor="dark-mode-switch" className='ml-2 w-4'>
        <img src={Moon} alt="" />
      </label>
    </div>
  );
}

export default DarkModeSwitch;
