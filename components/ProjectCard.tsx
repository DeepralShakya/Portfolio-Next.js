import { IProject } from '@/type'
import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

const ProjectCard: FunctionComponent<{project: IProject, details: null | number, setDetails: (id: null | number) => void}> = ({ project: { id, name, image, description, github_url, category, key_value },
    details,
    setDetails }) => {
        const detailsRef = useRef<HTMLDivElement>(null);
        const [scrollToDetails, setScrollToDetails] = useState(false);

        const handleClick = (projectId: number) => {
            setDetails(projectId);
            setScrollToDetails(true);
        };
    
        useEffect(() => {
            if (scrollToDetails && detailsRef.current) {
                detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setScrollToDetails(false); // Reset the state
            }
        }, [scrollToDetails]);

        return (
            <div>
                <img src={image} alt={name} className='mx-auto cursor-pointer' style={{ height: '140px' }} onClick={() => handleClick(id)} />
                <p className='my-2 text-center'>{name}</p>
    
                {details === id && (
                    <div ref={detailsRef} className='absolute top-0 left-0 z-10 grid w-full grid-cols-2 text-black bg-orange-100 rounded gap-x-8'>
                        <div className='ml-2'>
                            <img src={image} alt={name} className='h-48 m-4 mx-auto rounded' />
                            <div className='flex justify-center'>
                                <a href={github_url} className='flex items-center m-2'><FaGithub /><span className='p-1'>GitHub</span></a>
                            </div>
                        </div>
    
                        <div>
                            <h1 className='m-2 text-xl font-bold'>{name}</h1>
                            <h2 className='p-1 mr-4 text-justify'>{description}</h2>
                            <div className='flex flex-wrap mt-2 tracking-wider'>
                                {
                                    key_value.map((value) => (<span key={value} className='p-1 m-2 text-white bg-black rounded'>{value}</span>))
                                }
                            </div>
                        </div>
    
                        <button onClick={() => setDetails(null)}><MdClose size={30} className='absolute rounded-full top-2 right-1 bg-red-500' /></button>
    
                    </div>
                )}
            </div>
        )
    }

export default ProjectCard;
