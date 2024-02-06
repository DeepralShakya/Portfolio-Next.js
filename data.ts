import { RiComputerLine } from "react-icons/ri";
import { IService } from "./type";
import { FaDatabase } from "react-icons/fa";

export const services:IService[] = [
    {
        title:"Frontend Developer",
        about: "Hands-on experience in creating responsive and user-friendly interfaces in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, and <b>Next.js</b>.",
        Icon: RiComputerLine,
    },
    {
        title:"Backend Developer",
        about: "While my primary focus is frontend, I also have a solid understanding of backend technologies. Proficient in <b>PHP</b> and <b>MySQL</b>.",
        Icon: FaDatabase,
    },
]