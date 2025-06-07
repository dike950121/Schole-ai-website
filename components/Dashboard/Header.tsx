import { useState, useEffect } from 'react';
import Image from "next/image";
import MenuItem from "../MenuItem";
import Link from 'next/link';
import dynamic from 'next/dynamic';

function HeaderContent() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [logourl, setLogourl] = useState("/Logo-light.png");

    useEffect(() => {
        const theme = window.location.search.includes('theme=dark') ? 'dark' : 'light';
        if (theme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.removeAttribute("data-theme");
            setLogourl("/Logo-light.png");
        } else {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
            setLogourl("/Logo-dark.png");
        }
    }, []);

    const handleThemeSwitch = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        if (newTheme) {
            document.documentElement.removeAttribute("data-theme");
            setLogourl("/Logo-light.png");
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setLogourl("/Logo-dark.png");
        }
    };

    return (
        <div className="flex items-center justify-between px-32">
            <Link href="/" className='flex items-center w-auto h-[100px]'>
                <Image src={logourl} alt="logo" width={200} height={200} />
            </Link>
            <div className="flex gap-4">
                <MenuItem href="/home" text="Home"></MenuItem>
                <MenuItem href="/philosophy" text="Philosophy"></MenuItem>
                <MenuItem href="/pricing" text="Pricing"></MenuItem>
            </div>
            <div className="flex gap-4 items-center">
                <Link 
                    href={isDarkMode ? "/?theme=light" : "/?theme=dark"}
                    onClick={handleThemeSwitch}
                    className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    style={{ backgroundColor: isDarkMode ? '#4B5563' : '#F97316' }}
                >
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            isDarkMode ? 'translate-x-6' : 'translate-x-1'
                        }`}
                    />
                </Link>
                <button className="px-5 py-2 rounded-lg font-bold bg-white text-black">Login</button>
                <button className="px-5 py-2 rounded-lg font-bold bg-white text-black">Signup</button>
            </div>
        </div>
    );
}

// Export a client-side only version of the component
export default dynamic(() => Promise.resolve(HeaderContent), {
    ssr: false
});
