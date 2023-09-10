type Color = {
  defaultColor: string;
  defaultTextColor: string;
  defaultHorizontalColor: string;
};

type Icon = {
  menu: string;
  gitHubLogo: string;
  blogLogo: string;
  contact: string;
  arrowTop: string;
};

type Theme = {
  color: Color;
  icon: Icon;
};

const theme: Theme = {
  color: {
    defaultColor: "#5bb3e9",
    defaultTextColor: "rgb(69, 70, 73)",
    defaultHorizontalColor: "rgb(160, 160, 160)",
  },
  icon: {
    menu: "/icons/menu.svg",
    gitHubLogo: "/icons/github-logo.png",
    blogLogo: "/icons/blog.svg",
    contact: "/icons/contact.svg",
    arrowTop: "/icons/top.svg",
  },
};

export default theme;
