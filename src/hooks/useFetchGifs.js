import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  // the effect makes just works when category has changed
  useEffect(()=> {

    getGifts(category).then((imgs) => { 
      
      setState({
        data:imgs,
        loading: false
      });
      
    })
  }, [category])

  return state
}