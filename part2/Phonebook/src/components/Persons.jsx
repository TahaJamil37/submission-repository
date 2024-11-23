import React from 'react'

export default function Persons({filteredPersons}) {
  return (
    <div>

{filteredPersons?.map((person,index)=><p key={index}>{person.name}<br/>{person?.number}</p>)}
    </div>
  )
}
