"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/27239708/pexels-photo-27239708/free-photo-of-outfit.png?auto=compress&cs=tinysrgb&w=300"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/27308641/pexels-photo-27308641/free-photo-of-roof.png?auto=compress&cs=tinysrgb&w=300"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/7621020/pexels-photo-7621020.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/6944684/pexels-photo-6944684.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
];

const ProductImages = () => {
    const [index,setIndex] = useState(0)

    return (
        <div className="">
        <div className="h-[500px] relative">
          <Image
            src={images[index].url}
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between gap-4 mt-8">
            {images.map((img,i) => (
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                    <Image 
                        src={img.url}
                        alt=""
                        fill
                        sizes="30vw"
                        className="object-cover rounded-md" />
                </div>
            ))}
        </div>
      </div>
    );
}

export default ProductImages;