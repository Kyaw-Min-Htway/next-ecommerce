"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ items }: { items: any[] }) => {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[index]?.image?.url || '/fallback-image.jpg'}
          alt={`Product image ${index + 1}`}
          fill
          sizes="30vw"
          className="object-cover rounded-md"
          onError={(e) => {
            e.currentTarget.src = '/fallback-image.jpg';
          }}
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, i: number) => (
          <div
            className={`w-1/4 h-32 relative cursor-pointer ${i === index ? 'border-2 border-blue-500' : ''}`}
            key={item._id || i}
            onClick={() => setIndex(i)}
            aria-selected={i === index}
          >
            <Image
              src={item.image?.url || '/fallback-image.jpg'}
              alt={`Thumbnail image ${i + 1}`}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
              onError={(e) => {
                e.currentTarget.src = '/fallback-image.jpg';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
