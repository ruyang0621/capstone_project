import {
  BsListStars,
  BsFillTelephoneForwardFill,
  BsFillBarChartLineFill,
} from "react-icons/bs";
import { FaPortrait } from "react-icons/fa";

const links = [
  {
    id: 1,
    text: "summary",
    path: "/",
    icon: <BsFillBarChartLineFill />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "all-jobs",
    icon: <BsListStars />,
  },
  {
    id: 3,
    text: "all contacts",
    path: "all-contacts",
    icon: <BsFillTelephoneForwardFill />,
  },
  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <FaPortrait />,
  },
];

export default links;
