import Image from "next/image";

export default function Aboutus () {
  return (
    <div className="bg-gradient-to-r from-indigo-200 to-yellow-100 w-[190px] h-[111px] rounded-full place-content-center overflow-hidden shadow shadow-gray-500 hover:p-2">
        {/* <p className="text-3xl ">It is great to be a Web developer</p> */}
        <Image width={200} height={80} src ="/virtual.png" alt="virtual" className=" rounded-full  pl-1 pr-1  " />
    </div>
  )
}