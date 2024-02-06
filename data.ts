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
        name: "News-App",
        description: "A simple and responsive React-based news application that allows users to stay informed on current events. The app fetches real-time news data and categorizes it based on different topics. Features include a clean user interface and a seamless reading experience. Built with React, React Router, and integrated with a news API.",
        image: "/images/newsApp.png",
        github_url: "https://github.com/DeepralShakya/news-app-react",
        category: ["React"],
        key_value:["react", "Bootstrap"]
    },
    {
        name: "Weather-App",
        description: "This Weather App is a user-friendly and informative application that provides real-time weather updates and forecasts for any location worldwide. It allow users to quickly access accurate weather data such as temperature, humidity, wind speed, and more.",
        image: "/images/weatherApp.jpg",
        github_url: "https://github.com/DeepralShakya/Weather_App",
        category: ["Android Development"],
        key_value:["java", "Android"]
    },
    {
        name: "Sudoku Solver",
        description: "This Python project is a Sudoku solver that employs efficient algorithms to solve Sudoku puzzles of varying difficulties. It provides a user-friendly interface for inputting Sudoku puzzles, and the solver uses a backtracking algorithm to find the solution.",
        image: "/images/sudokuSolver.png",
        github_url: "https://github.com/DeepralShakya/sudokusolver",
        category: ["Python"],
        key_value:["python"]
    },
    {
        name: "Mobile-Shopping-E-commerce-Website",
        description: "MobileKhajana is a full-stack e-commerce website designed to offer a seamless mobile shopping experience for customers. This GitHub project provides both the frontend and backend components necessary to create an online platform for buying and selling mobile devices, accessories, and related products.",
        image: "/images/mobileKhajana.png",
        github_url: "https://github.com/DeepralShakya/MobileKhajana---Mobile-Shopping-E-commerce-Website",
        category: ["PHP & MySQL"],
        key_value:["PHP", "MySQL"]
    },
    {
        name: "BMI Calculator",
        description: "Efficient BMI calculator developed with React, providing a user-friendly interface to quickly compute Body Mass Index.",
        image: "/images/bmiCalculator.png",
        github_url: "https://github.com/DeepralShakya/bmiCalculator-react",
        category: ["React"],
        key_value:["react"]
    },
    {
        name: "Hangman-Game",
        description: "Hangman game created with react/typescript.",
        image: "/images/hangman.png",
        github_url: "https://github.com/DeepralShakya/hangman-react-typescript",
        category: ["React"],
        key_value:["react", "typescript"]
    },
]