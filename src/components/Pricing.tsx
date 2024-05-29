import bob from "@/assets/icons8-cheburashka-240.png";
import babe from "@/assets/icons8-brutus-240.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
export default async function Pricing() {
  return (
    <div className="p-1 m-1">
      <h1 className=" p-1 font-bold text-center text-4xl font-sans">Pricing</h1>
      <p className="text-center text-2xl font-sans tracking-tight p-1 m-1">
        Just kidding, Yogurt is free and open-source <br />
        You can still make your contribution!
      </p>
      <div className="flex justify-center ">
        <div className="">
          <Image src={bob} alt="bob" width={140} height={240} />
        </div>
        <div className="mt-3">
          <div>
            <Link className="bg-stone-600 tracking-wider font-sans block m-2 p-1 " href="/builder">
              Star Us
            </Link>
          </div>
          <div>
            <Link className="bg-stone-600 tracking-wider font-sans block m-2 p-1" href="/builder">
              Subscribe on Twitter
            </Link>
          </div>
          <div>
            <Link className="bg-stone-600 font-sans block tracking-wider m-2 p-1" href={"/builder"}>
              Follow the LinkedIn page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
