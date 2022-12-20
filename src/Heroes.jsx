import { useState } from "react"


function Heroes(){
  const [names, setNames] = useState([
    "Шерлок Холмс", 
    "Доктор Ватсон", 
    "Профессор Мориарти",
    "Миссис Хадсон",
    "Ирен Адлер"
  ])
  function handleDelete(index){
    setNames(names.filter((i, idx) => index !== idx))
  }
  return(
  <ul>
    {names.map((item, idx) => {
      return(
        <li key={idx} onClick={() => handleDelete(idx)}>{item}</li>
      )
    })}
  </ul>
  )
}
export default Heroes