import Image from "next/image";
import MenuItem from "../MenuItem";

export default function Header() {
    return (
        <div className="flex items-center justify-between p-20">
            <div>
                <Image src="/Logo.png" alt="logo" width={100} height={100} />
            </div>
            <div className="flex gap-4">
                <MenuItem text="Home"></MenuItem>
                <MenuItem text="About"></MenuItem>
                <MenuItem text="Contact"></MenuItem>
            </div>
            <div className="flex gap-4">
                <button className="px-5 py-2 rounded-lg font-bold bg-white text-black">Login</button>
                <button className="px-5 py-2 rounded-lg font-bold bg-white text-black">Signup</button>
            </div>
        </div>
    );
}
