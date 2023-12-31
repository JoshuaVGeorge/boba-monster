import logo from "../assets/logo.png";
import Image from "next/image";

const Header = () => {
	return (
		<div className="flex justify-center bg-white h-[24vh]">
			<div className="m-4">
				<Image src={logo} alt="logo" className="h-[100px] w-[100px]" />
			</div>
		</div>
	);
};

export default Header;
