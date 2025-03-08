import { IProject } from '@/type'
import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

const ProjectCard: FunctionComponent<{
  project: IProject, 
  details: null | number, 
  setDetails: (id: null | number) => void
}> = ({ project: { id, name, image, description, github_url, category, key_value },
  details,
  setDetails }) => {

  const detailsRef = useRef<HTMLDivElement>(null);

  // Handle the click to open the details view
  const handleClick = (projectId: number) => {
    setDetails(projectId);
  };

  useEffect(() => {
    if (details === id && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [details, id]);

  return (
    <div>
      <img
        src={image}
        alt={name}
        className='mx-auto cursor-pointer hover:opacity-80'
        style={{ height: '140px' }}
        onClick={() => handleClick(id)}
      />
      <p className='my-2 text-center'>{name}</p>

      {details === id && (
        <div ref={detailsRef} className='absolute top-0 left-0 z-10 grid w-full grid-cols-2 bg-orange-100 rounded gap-x-8'>
          <div className='ml-2'>
            <img src={image} alt={name} className='h-48 m-4 mx-auto rounded' />
            <div className='flex justify-center'>
              <a href={github_url} className='flex items-center m-2'>
                <FaGithub />
                <span className='p-1'>GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h1 className='m-2 text-xl font-bold'>{name}</h1>
            <h2 className='p-1 mr-4 text-justify'>{description}</h2>
            <div className='flex flex-wrap mt-2 tracking-wider'>
              {key_value.map((value) => (
                <span key={value} className='p-1 m-2 text-white bg-black rounded'>{value}</span>
              ))}
            </div>
          </div>

          <button onClick={() => setDetails(null)} className="absolute bg-red-500 rounded-full top-2 right-1">
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
