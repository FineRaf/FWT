import { ThemeSwitcherButton } from '../../ui/ThemSwitcherButton/ThemSwitcherButton'
import styles from './style.module.scss'
import { useState, useEffect } from 'react'

export function Header(){
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleThemeChange = (event: CustomEvent) => {
            setIsDark(event.detail.isDark);
        };

        document.addEventListener('themeChange', handleThemeChange as EventListener);
        
        setIsDark(document.body.classList.contains('dark'));

        return () => {
            document.removeEventListener('themeChange', handleThemeChange as EventListener);
        };
    }, []);

    return(
        <header className={styles.header}>
            <div className={styles.content}>
                <img src={isDark ? "/logo_light.svg" : "/logo_dark.svg"} alt="logo" />
                <ThemeSwitcherButton/>
            </div>
        </header>
    )
}
