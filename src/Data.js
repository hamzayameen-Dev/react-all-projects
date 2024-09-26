import accordionProject from "./assets/projects/accordion.png";
import comingSoon from "./assets/projects/coming-soon-img.png";
import menuProject from "./assets/projects/menu.png";
import unsplashImagesProject from "./assets/projects/unsplash-images.png";

const projectsList = [
	{
		id: 1,
		title: "Accordion",
		bgImage: accordionProject,
		website_link: "https://accordion-react-js-project.vercel.app/",
		github_link:
			"https://github.com/hamza-yameen/ReactJs-projects/tree/main/01-accordion",
	},
	{
		id: 2,
		title: "Menu",
		bgImage: menuProject,
		website_link: "https://menu-react-js-project.vercel.app/",
		github_link:
			"https://github.com/hamza-yameen/ReactJs-projects/tree/main/02-menu",
	},
	{
		id: 3,
		title: "Unsplash Images",
		bgImage: unsplashImagesProject,
		website_link: null,
		github_link:
			"https://github.com/hamza-yameen/ReactJs-projects/tree/main/03-unsplash-images",
	},
	{
		id: 4,
		title: "Food Cart",
		bgImage: comingSoon,
		website_link: "dummy",
		github_link: "dummy",
	},
];

export default projectsList;
