import { useEffect, useState } from 'react';
import styles from './styles.module.scss'

export function ThemeSwitcherButton() {
    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        document.documentElement.dataset.theme = isDark?'dark':'light'
    },)
    function handleClick() {
        document.body.classList.toggle('dark');
        setIsDark(prev => !prev);
        document.documentElement.dataset.theme = !isDark?'dark':'light'
        
        const themeChangeEvent = new CustomEvent('themeChange', {
            detail: { isDark: !isDark }
        });
        document.dispatchEvent(themeChangeEvent);
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            <img
                src={isDark ? "/light_icon.svg" : "/dark_icon.svg"}
                alt={isDark ? "light" : "moon"}
            />
        </button>
    );
}
