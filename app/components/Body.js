import Button from "./Button";
const Body = () => {
	const sites = [
		{
			id: 1,
			name: "Skip the dishes",
			logoSml: "/assets/skip-cropped.png",
			link: "https://www.skipthedishes.com/boba-monster-bubble-tea-and-desserts-fraser-street",
		},
		{
			id: 2,
			name: "Door Dash",
			logoSml: "/assets/doordash-cropped.png",
			link: "https://www.doordash.com/store/boba-monster-bubble-tea-&-desserts-vancouver-70782/",
		},
		{
			id: 3,
			name: "Uber eats",
			logoSml: "/assets/uber-cropped.png",
			link: "https://www.ubereats.com/ca/store/boba-monster/Cjn5q4b9Vw2c-EaNoVecOQ",
		},
		{
			id: 4,
			name: "Boba Monster Square",
			logoSml: "/assets/logo.png",
			link: "https://bobamonster.square.site/#10",
		},
	];

	return (
		<div className="bg-tea flex flex-col items-center justify-evenly h-[71vh] md:h-[64vh] lg:h-[60vh]">
			<p>Serving you soon!</p>
			<div className="w-full flex items-center justify-around flex-wrap">
				{sites.map((site) => {
					return <Button key={site.id} link={site.link} logo={site.logoSml} />;
				})}
			</div>
		</div>
	);
};

export default Body;
