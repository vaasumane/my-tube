import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../Utils/searchSlice';

const Button = ({name}) => {
  const dispatch = useDispatch();
  const getcategory = useSelector((store) => store.search.category);

  const HandleSetCategory = (id)=>{
    console.log(id);
    dispatch(setCategory(id));
  }
  return (
   <>
    {name?.snippet?.assignable && <div>
      <button className={`  py-2 m-2 rounded-lg w-44 px-1 ${getcategory ===name?.id ? "bg-black text-white":"bg-gray-200" }`} onClick={()=>HandleSetCategory(name?.id)}>{name?.snippet?.title}</button>
    </div>}
   </>
    
  )
}

export default Button
