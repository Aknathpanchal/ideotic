import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from "./Home.module.css";
const ImagesBreed = () => {


    

    const [Data,setData ] = useState([])

    useEffect(() => {
        
        GetData1()
 
    }, [])



    const GetData1 =()=>{
        axios(`https://dog.ceo/api/breed/african/images`).then((res)=>{
          setData(res.data.message)
        
        })
        .catch((err)=>{
            console.log(err)
        })
    }


  return (
    <div>
   {
    <div className={styles.data1}>
        {Data.map((name) => {
          return (
            <>
              <div className={styles.div2}>
                <img
                  className={styles.img}
                  height="240px"
                  width="310px"
                  src={name}
                  alt="name"
                />
              </div>
            </>
          );
        })}
      </div>
   }
      
    </div>
  )
}

export default ImagesBreed