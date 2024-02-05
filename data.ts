import { RiComputerLine } from "react-icons/ri";
import { IService } from "./type";
import { FaServer } from "react-icons/fa";

export const services:IService[] = [
    {
        title:"Frontend Developer",
        about: "Knowledge in <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <b>REACT</b>, <b>NEXTJS</b>",
        Icon: RiComputerLine,
    },
    {
        title:"Backend Developer",
        about: "Knowlege in <b>PHP</b>, <b>MySQL</b>",
        Icon: FaServer,
    },
]