import Image from "next/image";
import Link from "next/link";

const Banner = ({ siteName, link, logo }) => {
	return (
		// <Link href={link} className=" rounded-full">

		// </Link>
		<div className=" flex justify-center items-center bg-pearl text-white button hover:animate-wiggle hover:cursor-pointer active:bg-black">
			<Image src={logo} width={25} height={25} />
		</div>
	);
};

export default Banner;
