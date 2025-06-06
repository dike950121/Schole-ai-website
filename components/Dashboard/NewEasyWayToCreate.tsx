import Image from "next/image";
import GrowIcon from "../GrowIcon";

export default function NewEasyWayToCreate() {
    return (
        <div className="p-40 ">
          <div className="w-[500px]">
            <div className="text-[#A594FD] text-xl">
              <GrowIcon className="mr-3 inline [vertical-align:baseline]" />
              <span>Introducing Widgets</span>
            </div>
            <div className="text-[60px] font-bold">A new, easy way to create.</div>
          </div>
          <div className="flex justify-between gap-16">
            <Image src="/Logo.png" alt="image load is failed." width={100} height={100} />
            <Image src="/Logo.png" alt="image load is failed." width={100} height={100} />
            <Image src="/Logo.png" alt="image load is failed." width={100} height={100} />
            <Image src="/Logo.png" alt="image load is failed." width={100} height={100} />
          </div>
        </div>
    );
}
