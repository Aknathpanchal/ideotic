import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBreedsAPI } from '../Redux/breed/breed.actions';
import ImageCard from '../components/ImageCard';
import style from "../style/Breeds.module.css"

const Breeds = () => {
  const dispatch = useDispatch();
  const { data, getBreeds } = useSelector((state) => state. breed);
console.log("data",data);
  // localStorage, check if data
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getBreedsAPI());
    }
  }, [dispatch,data]);

  return (
    <div className={style.container}>
      {getBreeds.loading && <div>Loading...</div>}
      {getBreeds.error && <div>Error...</div>}
      {!getBreeds.loading &&
        data.map((feed,i) => (
          <ImageCard key={i} data={feed}/>
        ))}
    </div>
  );
}

export default Breeds