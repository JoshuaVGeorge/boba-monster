import Image from "next/image";

const Banner = ({ siteName, link, logo }) => {
	return (
		<div className=" flex justify-center items-center bg-pearl text-white w-[50px] h-[50px] rounded-full ">
			<Image src={logo} width={25} height={25} />
		</div>
	);
};

export default Banner;
