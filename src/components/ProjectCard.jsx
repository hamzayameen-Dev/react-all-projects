import React from "react";
import githubimage from "../assets/github.png";
import websiteimage from "../assets/web.png";

const ProjectCard = ({ proj }) => {
	return (
		<div className="w-full sm:w-1/2 md:h-1/3 bg-white m-2 max-w-sm rounded-lg shadow-lg">
			<img
				className="w-full h-auto object-contain rounded-t-lg"
				src={proj.bgImage}
				alt=""
			/>
			<div className="p-5">
				<h5 className="text-gray-900 dark:text-white text-1xl mb-2 font-semibold tracking-tight">
					{proj.title}
				</h5>
				<div className="w-full flex justify-end">
					{proj.website_link && (
						<a href={proj.website_link} target="_blank" rel="noreferrer">
							<img className="w-6 mr-3" src={websiteimage} alt="github icon" />
						</a>
					)}
					{proj.github_link && (
						<a href={proj.github_link} target="_blank" rel="noreferrer">
							<img className="w-6" src={githubimage} alt="github icon" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
