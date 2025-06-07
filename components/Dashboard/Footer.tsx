import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="flex justify-evenly gap-20 py-20 bg-white text-black">
                <div className="w-auto my-auto [height:fit-content] vertical-middle relative">
                    <Image src="/Logo-dark.png" alt="logo" width={300} height={300} />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold my-2 text-3xl">Location:</div>
                    <div>EPFL IC IINFCOM ML4ED</div>
                    <div>INF 231 (Bâtiment INF)</div>
                    <div>Station 14</div>
                    <div>1015 Lausanne</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold my-2 text-3xl">Contact:</div>
                    <div>team@schole.ai</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold my-2 text-3xl">Address:</div>
                    <div>
                        <a href="https://ig.me/m/schole.ai"><Image className="inline-block [width:fit-content]" src="/ip.me.png" alt="logo" width={20} height={20} /></a>
                        <a href="https://www.linkedin.com/company/scholeai/"><Image className="inline-block [width:fit-content]" src="/linkedin.png" alt="logo" width={20} height={20} /></a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold my-2 text-3xl">Company:</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Services</div>
                </div>
            </div>
            <div className="bg-black p-3 text-center">© Scholé 2024. All rights reserved.</div>
        </>
    );
}
