import Button from "../components/Button";
const Banner = () => {
	return (
		<div className="bg-tea flex flex-col items-center justify-evenly h-[71vh] md:h-[64vh] lg:h-[60vh]">
			<p>Serving you soon!</p>
			<div className="w-full flex items-center justify-around">
				<Button />
				<Button />
				<Button />
				<Button />
			</div>
		</div>
	);
};

export default Banner;
