import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
            <div className="h-full flex items-center justify-between">
                <Link href="/">
                    <div className="text-2xl tracking-wide">Shop</div>
                </Link>
                <Menu />
            </div>
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                <div className="w-1/3">
                    <Link href="/">
                        <Image src="/logo.png" alt="" width={24} height={24}/>
                        <div className="text-2xl tracking-wide">Shop</div>
                    </Link>
                </div>
                <div className="w-2/3"></div>
            </div>
        </div>
    );
};

export default Navbar;