import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const headingFont = localFont({
    src:"../public/fonts/BOD_R.woff"
})

export const Logo = () =>{
    return(
        <Link href={"/"}>
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image src={"/logo.png"} alt="logo" width={40} height={40}/>
                <p className={cn("pb-1 text-neutral-700 text-2xl",headingFont.className)}>Taskify</p>
            </div>
        </Link>
    );
}