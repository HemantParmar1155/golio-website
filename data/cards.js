import lmsImg from "../assets/lms.png";
import propertyImg from "../assets/property.png";
import vrImg from "../assets/vr.png";
import uiuxIcon from "../assets/uiux.png";
import mobileIcon from "../assets/mobileui.png";
import frontendIcon from "../assets/frontend development.png";

export const projectCards = [
    {
        id:1,
        type: "project",
        image: lmsImg,
        title: "E-tutor - education & online LMS",
        buttonText: "View Case Study",
    },
    {
        id:2,
        type: "project",
        image: propertyImg,
        title: "Pagoupon - Properties Agency Website",
        buttonText: "View Case Study",
    },
    {
        id:3,
        type: "project",
        image: vrImg,
        title: "Find workspace - Mobile app design",
        buttonText: "View Case Study",
    }
];

export const serviceCards = [
  {
    id: 1,
    type: "service",
    icon: uiuxIcon,
    title: "UI/UX Design",
    description:
      "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum.",
    buttonText: "Learn More",
    bgColor: "#f3f7ff",
  },
  {
    id: 2,
    type: "service",
    icon: mobileIcon,
    title: "Mobile App Design",
    description:
      "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum.",
    buttonText: "Learn More",
    bgColor: "#fff1f7",
  },
  {
    id: 3,
    type: "service",
    icon: frontendIcon,
    title: "Front-end Development",
    description:
      "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum.",
    buttonText: "Learn More",
    bgColor: "#f9fafb",
  },
];