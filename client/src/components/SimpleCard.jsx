import React from 'react'
import style from "../style/ImageCard.module.css"
import { useNavigate } from 'react-router-dom'

const SimpleCard = ({data}) => {
  console.log(data);
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate("/details")
    }
  return (
    <div className={style.card} onClick={handleclick}>
        {/* <img className={style.image}src={data} alt="" /> */}
    </div>
  )
}

export default SimpleCard