import Image from "next/image";

const Header = () => {
	return (
		<div className="flex justify-center bg-white h-[24vh]">
			<div className="m-4">
				<Image src="/assets/logo.png" alt="logo" width={100} height={100} />
			</div>
		</div>
	);
};

export default Header;
