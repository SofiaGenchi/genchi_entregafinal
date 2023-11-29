import { useState } from "react"
import './TaskItem.css'

export default function TaskItem({ item, handleDelete, index }) {

    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

  return (
    <li key={item} style={{ textDecoration: isChecked ? 'line-through' : 'none', opacity: isChecked ? 0.5 : 1 }}>
        <input className="mx-2" type="checkbox" onClick={toggleCheckbox} />
        {item}
        <button className="mx-5" onClick={() => handleDelete(index)}>eliminar</button>
    </li>
  )
}
