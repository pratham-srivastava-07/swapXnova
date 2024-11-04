import { CONSTANTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Appbar() {
  return (
    <div>
      <div className="flex justify-between items-center p-8 ">
        <div className="left-side flex justify-center items-center space-x-12">
          <div className="image pl-5">
            <Image src={"/swap.webp"} alt="swap" width={50} height={50} />
          </div>
          <div className="menu-items flex space-x-6">
            {CONSTANTS.NavbarProps.map((item) => (
              <Link key={item.id} href={item.link} passHref>
                <p className="text-white hover:text-blue-500">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="right-side flex justify-center items-center gap-5">
            <div className="about">
              About
            </div>
        </div>
      </div>
    </div>
  );
}
