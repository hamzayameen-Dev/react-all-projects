import React from "react";
import ProjectCard from "./ProjectCard";
import projectsList from "../Data";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-3xl mx-auto text-center mt-16 px-1">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span
            style={{
              textGradient: "linear-gradient(to right, #142850, #13476f)",
            }}
          >
            React.js Projects
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gradient-from to-gradient-to"></span>
        </h2>
        <p className="text-gray-600 text-[22px]">
          Here are various projects with{" "}
          <a
            href="https://github.com/hamza-yameen/ReactJs-projects"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 font-bold hover:text-blue-700 underline"
          >
            github repository
          </a>{" "}
          ranging from basic to advanced levels, with a primary focus on helping
          beginners and intermediate developers understand the core concepts and
          architecture of React.js components. The goal is to sharpen your
          skills in React and strengthen your understanding of essential
          JavaScript concepts.
        </p>
      </div>
      <div className="flex size-full flex-wrap justify-center mt-5 pb-5">
        {projectsList.length > 0 &&
          projectsList.map((proj) => {
            return <ProjectCard key={proj.id} proj={proj} />;
          })}
      </div>
    </div>
  );
};

export default Projects;
