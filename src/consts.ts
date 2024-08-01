// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "TFR";
export const SITE_TITLE = "The Fall Rivers";
export const SITE_DESCRIPTION = "The Fall Rivers Official Website";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "The Fall Rivers";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://waline.thefallrivers.online";
export const TRANSITION_API = true;

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "Uncategorized",
  tagPage: "Blog - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about" }, // About page
  { id: "blog", text: "Blogs", href: "/blog", svg: "blog" }, // Blog page
  { id: "friend", text: "Friends", href: "/friend", svg: "friend" }, // Friends page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:admin@thefallrivers.online", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://t.me/thefallrivers",
    ariaLabel: "Telegram",
    title: "Telegram",
    svg: "telegram",
  },
  {
    href: "https://github.com/fugoou/TheFallRivers",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
