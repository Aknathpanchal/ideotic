import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getsingleBreedsAPI } from '../Redux/breed/breed.actions';
import style from "../style/Details.module.css"

const Details = () => {
  const dispatch = useDispatch();
  const { singledata, getBreeds } = useSelector((state) => state. breed);

  useEffect(() => {
    
      dispatch(getsingleBreedsAPI());
    
  }, []);

  return (
    <div className={style.single}>
      {getBreeds.loading && <div>Loading...</div>}
      {getBreeds.error && <div>Error...</div>}
      {!getBreeds.loading ? <div><img className={style.imagee} src={singledata} alt="" /></div>:""}
       
    </div>
  );
}

export default Details