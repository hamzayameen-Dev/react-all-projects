import accordionProject from "./assets/projects/accordion.png";
import comingSoon from "./assets/projects/coming-soon-img.png";
import menuProject from "./assets/projects/menu.png";
import unsplashImagesProject from "./assets/projects/unsplash-images.png";
import foodCartImage from "./assets/projects/food-cart.png";
import beachResortImage from "./assets/projects/beach-resort.png";

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
    bgImage: foodCartImage,
    website_link: "https://food-cart-tan.vercel.app/",
    github_link:
      "https://github.com/hamza-yameen/ReactJs-projects/tree/main/04-food-cart",
  },
  {
    id: 5,
    title: "Beach Resort",
    bgImage: beachResortImage,
    website_link: "https://react-beach-resort-pro.netlify.app/",
    github_link: "https://github.com/hamza-yameen/ReactJs-projects/tree/main/05-beach-resort-hotel-master",
  },
  {
    id: 6,
    title: "No Title",
    bgImage: comingSoon,
    website_link: "dummy",
    github_link: "dummy",
  },
];

export default projectsList;
