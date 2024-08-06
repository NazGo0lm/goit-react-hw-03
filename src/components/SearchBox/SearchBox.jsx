//import React from 'react'
import clsx from 'clsx'
import searchBox from './SearchBox.module.css'

//import { useState } from "react"

const SearchBox = ({filterValue,handleFilter}) => {
  


  return (
    
    <>
      <p>Find contacts by name</p>
      <input type="text" className={clsx(searchBox['input-style'])}
        value={filterValue} onChange={handleFilter}/>  
    
    </>
  )
}

export default SearchBox
