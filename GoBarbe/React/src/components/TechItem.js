import React from 'react'
import PropTypes from 'prop-types'
function TechItem({tech, handleDelete}) {
  return (
    <li>
      {tech}
      <button 
      onClick={handleDelete} 
      type="button">Remover</button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'Oculto'
};
TechItem.propTypes = {
  tech: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
}
export default TechItem