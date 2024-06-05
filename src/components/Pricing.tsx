"use client";
import bob from "@/assets/icons8-cheburashka-240.png";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  
  return (
    <div className="p-1 m-6">
      <h1 className=" p-1 font-bold text-center text-4xl font-sans font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Pricing</h1>
      <div>
      <strong className="bg-yellow-300 text-center text-4xl font-sans font-bold">
       
  </strong>
      </div>
     
      <p className="text-center text-2xl font-sans tracking-tight p-1 m-1">
        Just kidding, Yogurt is free and open-source <br />
        You can still make your contribution!
      </p>

      <div className="flex justify-center ">
        <div className="">
          <Image src={bob} alt="bob" width={140} height={240} />
        </div>
        <div className="mt-3">
          <div className="">
            <Link
              className="bg-secondary font-bold tracking-wider font-sans block m-2 p-1"
              href="/builder"
            >
              Star Us
            </Link>
          </div>
          <div>
            <Link
              className="bg-secondary  font-bold tracking-wider font-sans block m-2 p-1"
              href="/builder"
            >
              Subscribe on Twitter
            </Link>
          </div>
          <div>
            <Link
              className="bg-secondary  font-bold font-sans block tracking-wider m-2 p-1"
              href={"/builder"}
            >
              Follow the LinkedIn page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
