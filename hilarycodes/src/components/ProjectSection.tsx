import React from "react";
import { BsSquareFill } from "react-icons/bs";

const Projects = [
  {
    id: 1,
    title: "Your project title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 2,
    title: "My Second Project",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
  {
    id: 3,
    title: "My Awesome title",
    technologies: ["React", "NodeJS", "PostgreSQL"],
    link: "https://github.com/HilaryYates/Todo-List",
  },
];

export const ProjectSection: React.FC = () => {
  return (
    <div className="mr-4 flex flex-col overflow-y-scroll">
      <div className="flex justify-end items-center ">
        <BsSquareFill className="text-xs" />
        <p className="font-semibold italic">Project</p>
      </div>
      <div className="flex flex-col items-end  mt-4">
        {/* <button className="text-right">
          <h2 className="text-xl uppercase font-thin">Project Title</h2>
          <p className="text-sm font-semibold">React / NodeJS / PostgreSQL</p>
        </button>
        <button className="text-right">
          <h2 className="text-xl uppercase font-thin">
            Project Title Longer than other
          </h2>
          <p className="text-sm font-semibold">React / NodeJS / PostgreSQL</p>
        </button>
        <button className="text-right">
          <h2 className="text-xl uppercase font-thin">Project Title</h2>
          <p className="text-sm font-semibold">React / NodeJS / PostgreSQL</p>
        </button> */}
        {Projects.map((project) => (
          <a
            className="text-right mt-2 hover:text-gray-500"
            key={project.id}
            href={project.link}
            target="_blank"
          >
            <h2 className="text-xl uppercase font-thin ">{project.title}</h2>
            <p className="text-sm font-semibold">
              {project.technologies.join(" / ")}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
