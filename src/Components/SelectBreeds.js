import React from 'react'

const SelectBreed = ({ breed, allBreeds, handleChange }) => {
  return (
    <select value={breed} onChange={handleChange}>
      <option value="empty">Select a breed!</option>
      {allBreeds.map(breed => (<option key={breed} value={breed}>{breed}</option>))}
    </select>
  )
};


export default SelectBreed