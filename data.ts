import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill, ITool } from "./type";
import { FaDatabase } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

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

export const languages:ISkill[] = [
    {
        name:"React",
        level: "70%",
        Icon: BsCircleFill,
    },
    {
        name:"HTML/CSS",
        level: "70%",
        Icon: BsCircleFill,
    },
    {
        name:"NextJs",
        level: "50%",
        Icon: BsCircleFill,
    },
    {
        name:"Python",
        level: "40%",
        Icon: BsCircleFill,
    },
    {
        name:"PHP",
        level: "60%",
        Icon: BsCircleFill,
    },
    {
        name:"MySQL",
        level: "50%",
        Icon: BsCircleFill,
    },
]

export const tools:ITool[] = [
    {
        name:"Figma",
        level: "60%",
        Icon: BsCircleFill,
    },
    {
        name:"Photoshop",
        level: "60%",
        Icon: BsCircleFill,
    },
]

export const projects:IProject[] = [
    {
        name:"Figma",
        level: "60%",
        Icon: BsCircleFill,
    },
    {
        name:"Photoshop",
        level: "60%",
        Icon: BsCircleFill,
    },
]