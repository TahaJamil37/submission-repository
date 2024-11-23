import React from 'react'

export default function Filter({searchName,handleSearch}) {
  return (
    <div>
    filter shown with: <input value={searchName}  onChange={handleSearch} />
  </div>

  )
}
