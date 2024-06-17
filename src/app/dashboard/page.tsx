import Image from "next/image";
import { useEffect } from "react";
export default async function page() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 m-2 p-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://plus.unsplash.com/premium_photo-1681469490747-8926a02f901e?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body"></div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://plus.unsplash.com/premium_photo-1677093906029-1dbde84ba87c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body"></div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://images.unsplash.com/photo-1562047823-3cab7fe719ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://images.unsplash.com/photo-1566678124698-45c71a49eb0e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoe"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
