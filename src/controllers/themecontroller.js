const THEME = "Theme"

export const setTheme = (theme) => {
    localStorage.setItem(THEME, JSON.stringify({theme: `${theme}`}));
}

export const removeTheme = () => {
    setTheme("light-theme");
}

export const getTheme = () => {
    let theme = JSON.parse(localStorage.getItem(THEME));
    if (theme === undefined || theme === null) {
        removeTheme();
        getTheme();
    }
    return theme;
}
