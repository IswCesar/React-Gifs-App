import React, { useState} from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])
  
  // const handleAdd = () => {
  //   setCategories(['Power rangers', ...categories])
  // }
  
  return (
  <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories = { setCategories }/>
    <hr />
    {/* <button onClick={ handleAdd}>Add</button> */}
    <ol>
      {
        categories.map((cat) => 
          <GifGrid category = { cat } key = {cat} />
        )
      }
    </ol>
  </>)
}

export default GifExpertApp