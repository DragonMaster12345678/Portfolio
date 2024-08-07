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
    <main className="flex min-h-screen w-full flex-col items-center px-4 py-12 md:px-64">
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex flex-col text-left">
          <h1 className="text-5xl text-yellow-500">{data.meta.main.name}</h1>
          <p className="text-3xl">{data.meta.main.title}</p>
        </div>
        <div className="mt-4 flex flex-col text-left md:mt-0 md:text-right">
          {Object.keys(typedData.meta.other).map((item) => (
            <h1 key={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}:{" "}
              {typedData.meta.other[item]}
            </h1>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col">
        {Object.keys(typedData.other).map((item) => (
          <Section title={item} data={typedData.other[item]} key={item} />
        ))}
      </div>
    </main>
  );
}
