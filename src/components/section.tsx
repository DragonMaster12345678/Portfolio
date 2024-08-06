import { Experience } from ".";

interface SectionData {
	title: string;
	data: string | string[];
}

const Section = ({ title, data }: SectionData) => {
	return (
		<>
			<div className="mt-10">
				<h1 className="text-4xl uppercase text-gray-600 bg-orange-100">
					{title.replaceAll("-", " ")}
				</h1>
				{typeof data === "string" ? (
					<p className="text-xl">{data}</p>
				) : (
					<ul className="list-disc pl-6">
						{data.map((item) => (
							<li key={item} className="text-xl">
								{item}
							</li>
						))}
					</ul>
				)}
			</div>

			{title === "skills" && <Experience />}
		</>
	);
};

export default Section;
