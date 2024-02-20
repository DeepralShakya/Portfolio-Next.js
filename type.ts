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
    id: number,
    name: string,
    description: string,
    image: string,
    github_url: string,
    category: Category[],
    key_value:string[]
}

export type Category = "React" | "Nextjs" | "Python" | "PHP & MySQL" | "Android Development" | "NextJs";

