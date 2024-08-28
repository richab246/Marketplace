// src/app/ThemeWrapper.jsx
"use client"

import { ThemeProvider } from "@/context/theme";
import { useState, useEffect } from 'react';
import StarsCanvas from "@/components/Stars";

const ThemeContent = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");

    const darkTheme = () => setThemeMode("dark");
    const lightTheme = () => setThemeMode("light");

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <body>
            {themeMode === 'dark' ? (
                <div className='main-l'>
                    <StarsCanvas />
                </div>
            ) : (
                <div className='main'>
                    <div className='gradient' />
                </div>
            )}
            <main className='app'>
                {children}
            </main>
            </body>
        </ThemeProvider>
    );
};

const ThemeWrapper = ({ children }) => (
    <ThemeContent>{children}</ThemeContent>
);

export default ThemeWrapper;