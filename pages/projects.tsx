import ProjectCard from '@/components/ProjectCard'
import ProjectsNavbar from '@/components/ProjectsNavbar'
import { projects } from '@/data'
import { Category } from '@/type'
import React, { useState, useMemo } from 'react'

const Projects = () => {
  const [categoryFilter, setCategoryFilter] = useState(projects)
  const [active, setActive] = useState('All')
  const [details, setDetails] = useState<number | null>(null)

  const handlerFilterCategory = (category: Category | 'All') => {
    if (category === 'All') {
      setCategoryFilter(projects)
      setActive(category)
      return
    }

    const filteredProjects = projects.filter(project => project.category.includes(category))
    setCategoryFilter(filteredProjects)
    setActive(category)
  }

  const filteredProjects = useMemo(() => categoryFilter, [categoryFilter])

  return (
    <div className='p-5 overflow-y-scroll' style={{ height: '65vh' }}>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
      <div className='relative grid grid-cols-12 gap-4 my-3'>
        {filteredProjects.map(project => (
          <div className='col-span-12 p-2 sm:col-span-6 lg:col-span-4' key={project.name}>
            <ProjectCard project={project} details={details} setDetails={setDetails} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
