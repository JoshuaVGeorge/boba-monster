import Button from "../components/Button";
const Banner = () => {
	return (
		<div className="bg-tea flex flex-col items-center h-[71vh] md:h-[64vh] lg:h-[60vh]">
			<p>Serving you soon!</p>
			<div className="flex items-center ">
				<Button />
				<Button />
				<Button />
				<Button />
			</div>
		</div>
	);
};

export default Banner;
