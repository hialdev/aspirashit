import { Icon } from "@iconify/react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/router';
import { Input } from "@material-tailwind/react";

export default function Navbar(){
    const [menu,setMenu] =  useState(false)
    const [search,setSearch] =  useState(false)
    const now = useRouter().pathname
    const close = "icon-park-solid:close-one"

    return(
        <>
            <div className="absolute top-0 right-0 left-0 w-full p-4 bg-transparent z-20 flex items-center gap-4 justify-between px-3 sm:px-5 md:px-7">
                <div className="logo">
                    <div className="font-bold text-white text-3xl">Aspira<span className="text-blue-400">shit</span>.</div>
                </div>
                {/* Set Search */}
                {search === true ? (
                <>
                    <input type="text" className="p-3 px-4 absolute top-[4em] z-30 border-x-2 border-white left-[1.7em] right-[1.7em] text-white bg-transparent focus:outline-none bg-black" placeholder="Cari.." />
                    <Icon icon={close} className="text-3xl text-white cursor-pointer ml-auto w-[2.5em] border-r-2 border-white" onClick={() => setSearch(false)}/>
                </>
                ) : (
                    <Icon icon="mingcute:search-3-line" className="text-3xl text-white cursor-pointer ml-auto w-[2.5em] border-r-2 border-white" onClick={() => setSearch(true)}/>
                )}
                
                <Icon icon="mingcute:align-right-fill" className="text-3xl text-white cursor-pointer" onClick={() => setMenu(true)} />
            </div>


            {/* List Menu */}
            {
                menu === true && (
                    <div className="fixed top-0 h-screen w-full max-w-[20em] right-0 z-30 p-7 bg-black">
                        <div className="flex items-center gap-4 text-white cursor-pointer justify-end mb-5">
                            <div className="font-bold text-5xl flex-1 hover:text-red-500" onClick={() => setMenu(false)}>Close Menu </div>
                            <Icon className="text-3xl w-[5em]" icon="ic:outline-arrow-right-alt" />
                            <div className="w-full border-b-2 border-red-500"></div>
                        </div>
                        <ul className="flex items-start flex-col justiy-center gap-6 text-white">
                            <li>
                                <Link href="/" className={now != "/" ? "font-bold text-3xl border-b-2 border-white hover:text-blue-400" : "font-bold text-3xl border-b-4 border-blue-400 text-blue-400"}>Home</Link>
                            </li>
                            <li>
                                <Link href="/discover" className={now != "/discover" ? "font-bold text-3xl border-b-2 border-white hover:text-blue-400" : "font-bold text-3xl border-b-4 border-blue-400 text-blue-400"}>Discover</Link>
                            </li>
                            <li>
                                <Link href="/product" className={now != "/product" ? "font-bold text-3xl border-b-2 border-white hover:text-blue-400" : "font-bold text-3xl border-b-4 border-blue-400 text-blue-400"}>Product</Link>
                            </li>
                            <li>
                                <Link href="/cart" className={now != "/cart" ? "font-bold text-3xl border-b-2 border-white hover:text-blue-400" : "font-bold text-3xl border-b-4 border-blue-400 text-blue-400"}>Keranjang</Link>
                            </li>
                            <li className="w-full mt-7">
                                <Link href="/auth/login" className="block p-3 px-5 font-bold w-full text-center text-white bg-blue-500">Masuk</Link>
                            </li>                     
                        </ul>
                    </div>
                )

            }
            
        </>
    )
}