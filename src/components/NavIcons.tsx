'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const isLoggedIn = false

    const handleProfile = () => {
        if (!isLoggedIn) {
            Router.push("/login");
        }
        setIsProfileOpen( (prev) => !prev );
    }

    return (
        <div className="flex item-center gap-4 xl:gap-6">
            <Image src="/profile.png" alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
            {isProfileOpen && <div className="">
                <Link href="/">Profile</Link>
                <div className="mt-2 cursor-pointer">Logout</div>
                </div>}
            <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer"/>
            <Image src="/cart.png" alt="" width={22} height={22} className="cursor-pointer"/>
        </div>
    )
}

export default NavIcons;