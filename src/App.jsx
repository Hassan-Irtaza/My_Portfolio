import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filters from './components/Filters'
import ProjectCarousel from './components/ProjectCarousel'
import { PROJECTS } from './data/projects'

function App() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter)

  return (
    <>
      <Navbar />
      <Hero />
      <Filters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ProjectCarousel projects={visibleProjects} />
    </>
  )
}

export default App
