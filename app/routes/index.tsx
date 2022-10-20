import { useState } from 'react';
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

type Project = {
  title: string;
  href: string;
  imgSrc: string;
  description: string;
};

type LoaderData = {
  projects: Array<Project>;
};

const projects = [
  {
    title: "nogs.wtf",
    href: "https://www.nogs.wtf/",
    imgSrc: "/project-nogs.jpg",
    description: "An NFT project that generates a unique pair of noggles for each wallet on Ethereum",
  },
  {
    title: "Noggle Factory",
    href: "https://www.nogglefactory.wtf/",
    imgSrc: "/project-factory.jpg",
    description: "Visual experiment. One pair of Noggles, every block, forever",
  },
  {
    title: "⌐◨-◨.app",
    href: "https://github.com/ripe0x/noggles.app",
    imgSrc: "/project-app.jpg",
    description: "macOS app to quickly copy unicode noggles to your clipboard",
  },
  {
    title: "Noundry",
    href: "https://discord.gg/cS5eKgHdgJ",
    imgSrc: "/project-noundry.jpg",
    description: "A limited collection Nouns-fork celebrating the art & artists of the original Noundry",
  },
  {
    title: "Nations ⌐◨-◨",
    href: "http://nations.wtf",
    imgSrc: "/project-nations.jpg",
    description: "Scaling access to Nouns DAO governance",
  },
];

export const loader = async () => {
  return json<LoaderData>({
    projects
  });
};

export default function Index() {
  const { projects } = useLoaderData();

  const [isAvatarHovered, setIsAvatarHovered] = useState(false);


  return (
    <main className="min-h-screen flex flex-col lg:flex-row gap-8">
        {/* sidebar */}
        <div className="sidebar p-8 self-start lg:sticky top-0 lg:col-span-1 lg:h-screen flex flex-col lg:justify-between backdrop-blur-sm w-full lg:max-w-[20rem]">
          <div>
            <h1 
              className="max-w-[4rem]"
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
            >
              {isAvatarHovered ?(
                <img src="/ripe-noggles.png" alt="ripe" className="rounded-full" />
              ) : (
                <img src="/ripe.jpg" alt="ripe" className="rounded-full" />
              )}
              
            </h1>
          </div>
          <h2 className="text-xl mt-4 lg:text-4xl font-serif italic opacity-70 hidden lg:block">here to meet good people and make cool shit</h2>
        </div>

        <div className="p-8 mt-10 col-span-2 flex justify-center w-full">
          <div className="max-w-[40rem]">
            <div className="lg:h-[15vw]" />
            <div className="my-10">
              <h1 className="text-xl bold font-serif text-gray-800">ripe</h1>
              <h2 className="text-xl text-gray-700">dad. designer. developer. nounish product builder.</h2>
            </div>
            <div className="h-[5vw]" />
            <ul className="flex flex-col my-10 list-type-none gap-4 relative lg:top-10">
              {projects.map((project: Project) => (
                <li
                  key={project.href}
                  className="backdrop-blur-sm bg-white/20 hover:bg-white/50 rounded-md"
                >
                  <a
                    href={project.href}
                    className="flex flex-cols gap-4 lg:gap-8 p-4 lg:p-8 justify-between items-center"
                    target="_blank" 
                    rel="noreferrer"
                  >
                    
                    <div>
                      <h4 className="font-serif bold text-lg text-gray-800">{project.title}</h4>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                    {project.imgSrc && (
                      <img alt={project.title} src={project.imgSrc} className="object-contain max-w-[3rem] lg:max-w-[5rem] rounded-md" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            
            <h2 className="mt-8 text-4xl font-serif italic opacity-70 block lg:hidden text-center">here to meet good people and make cool shit</h2>
            <p className="text-center gap-8 p-8 justify-between items-center"><a href="https://twitter.com/ripe0x" className="text-gray-800 opacity-70">@ripe0x</a></p>
          </div>
        </div>
        <div className="bg" />
    </main>
  );
}
