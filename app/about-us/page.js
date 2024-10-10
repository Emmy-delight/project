import Image from "next/image";

export default function Aboutus () {
  return (
    <div>
        <p className="text-3xl ">It is great to be a Web developer</p>
        <Image width={280} height={80} src ="/virtual.png" alt="virtual" />
    </div>
  )
}