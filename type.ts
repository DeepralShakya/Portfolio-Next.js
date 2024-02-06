import { IconType } from "react-icons";

export interface IService{
    title: string,
    about: string,
    Icon: IconType
}

export interface ISkill{
    name: string,
    level: string,
    Icon: IconType
}

export interface ITool{
    name: string,
    level: string,
    Icon: IconType
}

export interface IProject{
    name: string,
    description: string,
    image: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    key:string[]
}

export type Category = "react" | "Nextjs" | "python" | "PHP & MySQL";

