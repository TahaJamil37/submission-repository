import React from 'react'

export default function PersonForm({newName,handleChange,newNumber,handleNumberChange,handleSubmit}) {
  return (
    <form>
    <div>
      name: <input value={newName} onChange={handleChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button onClick={handleSubmit}>add</button>
    </div>
  </form>
  )
}
