import { useEffect, useState } from 'react'

const ACCENT_CLASS = {
  yellow: '',
  blue: 'project-bg-text--blue',
  green: 'project-bg-text--green',
}

function ProjectCarousel({ projects }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setCurrent(0)
  }, [projects])

  useEffect(() => {
    function handleKeyDown(event) {
      if (projects.length === 0) return
      if (event.key === 'ArrowLeft') {
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
      }
      if (event.key === 'ArrowRight') {
        setCurrent((prev) => (prev + 1) % projects.length)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [projects])

  function goTo(index) {
    if (projects.length === 0) return
    setCurrent(((index % projects.length) + projects.length) % projects.length)
  }

  const activeProject = projects[current]

  return (
    <section className="project-section">
      <div className="project-track">
        {activeProject ? (
          <div className="project-slide active">
            <div
              className={`project-bg-text ${ACCENT_CLASS[activeProject.accent] ?? ''}`.trim()}
              aria-hidden="true"
            >
              {activeProject.bgText}
            </div>
            <div className="project-card">
              <div className="project-card-inner">
                <span className="project-tag">{activeProject.tag}</span>
                <h3 className="project-title">{activeProject.title}</h3>
                <p className="project-desc">{activeProject.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="project-slide active">
            <div className="project-card">
              <div className="project-card-inner">
                <h3 className="project-title">No projects found</h3>
                <p className="project-desc">Try another category.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        className="arrow arrow-left"
        aria-label="Previous project"
        onClick={() => goTo(current - 1)}
        disabled={projects.length === 0}
      >
        ‹
      </button>
      <button
        type="button"
        className="arrow arrow-right"
        aria-label="Next project"
        onClick={() => goTo(current + 1)}
        disabled={projects.length === 0}
      >
        ›
      </button>
    </section>
  )
}

export default ProjectCarousel
