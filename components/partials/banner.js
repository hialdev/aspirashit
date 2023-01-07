import { Icon } from '@iconify/react'
import { Input } from "@material-tailwind/react"

export default function Banner(){
    return(
        <div className="h-[60em] flex flex-col items-center justify-center text-center p-5 relative overflow-hidden m-0 p-0">
            <img src={"https://i.pinimg.com/750x/d3/a7/2a/d3a72aa35a765444fb71e2a1f80382bf.jpg"} alt="" className="absolute top-0 right-0 w-screen h-screen object-cover object-right-top grayscale" />
            <div className="max-w-[50em] z-10 text-white p-3">
                <h1 className="text-5xl font-bold mb-3 drop-shadow-sm">Ekspresikan diri anda dengan karya!</h1>
                <p className='mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus minima voluptatem quaerat quo, ratione accusantium dolorum. Unde iste modi sapiente perspiciatis voluptatibus reiciendis culpa nulla obcaecati laborum aut. Esse, tempore!</p>
                <div className="p-4 bg-white rounded-lg">
                    <Input variant='outlined' color="teal" type="text" label="Mulai Explorasi" size="lg" icon={<Icon icon="uil:search" />} className="text-white" />
                </div>
            </div>
        </div>
    )
}