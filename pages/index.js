import Head from "next/head";
import About from "../components/About";
import FavouriteProjects from "../components/FavouriteProjects";
import TechStack from "../components/Techstack";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Salekin Imran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-gray-800 w-[95%] rounded-xl mx-[5%] ">
        <About />
        <FavouriteProjects />
        <TechStack />
      </main>
    </div>
  );
}
