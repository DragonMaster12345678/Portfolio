import { Section } from "@/components";
import data from "@/data/data.json";

const typedData: {
	meta: {
		other: {
			[key: string]: string;
		};
	};
	other: {
		[key: string]: any;
	};
} = data;

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center w-full px-64 py-12">
			<div className="flex flex-row justify-between w-full">
				<div className="flex flex-col">
					<h1 className="text-5xl text-yellow-500">{data.meta.main.name}</h1>
					<p className="text-3xl">{data.meta.main.title}</p>
				</div>
				<div className="flex flex-col text-right">
					{Object.keys(typedData.meta.other).map((item) => (
						<h1 key={item}>
							{item.charAt(0).toUpperCase() + item.slice(1)}:{" "}
							{typedData.meta.other[item]}
						</h1>
					))}
				</div>
			</div>
			<div className="flex flex-col">
				{Object.keys(typedData.other).map((item) => (
					<Section title={item} data={typedData.other[item]} key={item} />
				))}
			</div>
		</main>
	);
}
