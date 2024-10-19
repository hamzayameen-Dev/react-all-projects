import React from "react";
import hamza_yameen from "../assets/hamza.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import website from "../assets/web.png";

const Hero = () => {
  return (
    <div className="w-full bg-home-custom-gradient flex justify-center">
      <div className="w-[80%] flex py-[50px] mb-2">
        <div className="w-2/5 flex justify-center items-center">
          <img
            className="size-56 rounded-full"
            src={hamza_yameen}
            alt="Hamza Yameen profile"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            I&apos;m Hamza Yameen, A Software Engineer
          </h1>
          <p className="text-gray-600 text-[25px]">
            with three years of experience in web and mobile applications
            development. Hamza have the good understanding of JavaScript,
            TypeScript, and Python, I excel at crafting dynamic and interactive
            web and mobile applications that solve real-world problems.
          </p>
          <div className="mt-4 flex">
            <a href="https://hamzayameen.com/" target="_blank" rel="noreferrer">
              <img className="size-8 mr-2" src={website} alt="github icon" />
            </a>
            <a
              href="https://github.com/hamza-yameen"
              target="_blank"
              rel="noreferrer"
            >
              <img className="size-8 mr-2" src={github} alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-yameen/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="size-8 mr-2" src={linkedin} alt="github icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
