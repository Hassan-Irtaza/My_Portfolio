import { FILTERS } from '../data/projects'

function Filters({ activeFilter, onFilterChange }) {
  return (
    <section className="filters">
      <div className="filter-group" role="group" aria-label="Project categories">
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`pill${activeFilter === filter.id ? ' active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Filters
