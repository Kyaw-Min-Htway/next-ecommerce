'use client'

import Image from "next/image"

const CartModal = () => {

    const carItems = true;
    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!carItems ? (
                <div className="">Cart is Empty</div>
            ) : (
                <>
               <div className="flex flex-col gap-8">
                {/* ITEM */}
                <div className="flex gap-4">
                    <Image src="https://images.pexels.com/photos/28951017/pexels-photo-28951017/free-photo-of-dramatic-mountain-landscape-in-erbaa-turkiye.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={72} height={96} className="object-cover rounded-md"/>
                    <div className="flex flex-col justify-between w-full">
                            {/* TOP */}
                        <div className="">
                            {/* TITLE */}
                            <div className="flex items-center justify-between gap-8">
                                <h3 className="font-semibold">Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                            {/* DESCRIPTION */}
                            <div className="text-sm text-gray-500">
                                avaliable
                            </div>
                        </div>
                        {/* BOTTOM */}
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 2</span>
                            <span className="text-blue-500">Remove</span>
                        </div>
                    </div>
                </div>
                {/* ITEM */}
                <div className="flex gap-4">
                    <Image src="https://images.pexels.com/photos/28951017/pexels-photo-28951017/free-photo-of-dramatic-mountain-landscape-in-erbaa-turkiye.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" width={72} height={96} className="object-cover rounded-md"/>
                    <div className="flex flex-col justify-between w-full">
                            {/* TOP */}
                        <div className="">
                            {/* TITLE */}
                            <div className="flex items-center justify-between gap-8">
                                <h3 className="font-semibold">Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                            {/* DESCRIPTION */}
                            <div className="text-sm text-gray-500">
                                avaliable
                            </div>
                        </div>
                        {/* BOTTOM */}
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 2</span>
                            <span className="text-blue-500">Remove</span>
                        </div>
                    </div>
                </div>
               </div>
               <div className="">
                <div className="flex items-center justify-between font-semibold">
                    <span className="">Subtotal</span>
                    <span className="">$49</span>
                </div>
               </div>
               </>
            )}
        </div>
    );
}

export default CartModal;