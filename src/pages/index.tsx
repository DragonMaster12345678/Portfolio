import Head from "next/head";
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
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`View the résumé of aspiring programmer ${data.meta.main.name}`}
        />
        <meta
          name="keywords"
          content={`${data.meta.main.name}, resume, résumé, portfolio, data science, intern, cv,curriculum vitae`}
        />
        <meta name="copyright" content={data.meta.main.name} />
        <meta property="og:title" content="Ritwik Singh's Portfolio/Résumé" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ritwiksingh.lineofwork.eu" />
        <meta
          property="og:image"
          content="https://ritwiksingh.lineofwork.eu/favicon.png"
        />
        <meta
          property="og:description"
          content={`View the résumé of aspiring programmer ${data.meta.main.name}`}
        />
        <meta name="theme-color" content="#00aaff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="google-site-verification"
          content="bHZbKvqyNEiwnfdWPaJYLa2PmNrdDvAGGU8rf_pGyEA"
        />

        <title>Ritwik Singh&apos;s Portfolio/Résumé</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center px-4 py-12 md:px-64">
        <div className="border-2 border-yellow-400 p-2 sm:border-4 sm:p-6 md:p-10">
          <div className="flex w-full flex-col justify-between md:flex-row">
            <div className="flex flex-col text-left">
              <h1 className="text-5xl text-yellow-500">
                {data.meta.main.name}
              </h1>
              <p className="text-3xl">{data.meta.main.title}</p>
            </div>
            <div className="mt-4 flex flex-col text-left md:mt-0 md:text-right">
              {Object.keys(typedData.meta.other).map((item) => (
                <h2 key={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}:{" "}
                  {typedData.meta.other[item]}
                </h2>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col">
            {Object.keys(typedData.other).map((item) => (
              <Section title={item} data={typedData.other[item]} key={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
