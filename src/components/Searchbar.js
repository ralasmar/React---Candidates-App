import React, { useState } from 'react';
//import { Card } from "./Card"

export function Searchbar(props){
  const [query, setQuery] = useState("");
  // const [queryResults, setQueryResults] = useState([])

  const handleSearch = (query) => {
    console.log("button clicked")
    let results = [];

      
     const items = JSON.parse(localStorage.getItem("CARDS"))
     console.log(items)

    for(let i=0; i < items.length; i++){
      if (items[i] && items[i].name && items[i].name.city.toLowerCase().includes(query.toLowerCase())){
        console.log("HELLLO??")
        results.push(items[i]);
      }
    }
    props.onSearchResults(results)
  }

  
  return (
    <div  id="search-bar" className={props.darkMode ? "dark": ""}>
    <div style={{ display:'flex', flexDirection: 'row', margin: '4px' }}>
     <input 
        className='search-bar' 
        type="text" 
        value={query}
        onChange={(e) => {setQuery(e.target.value);
        console.log("Input value:", e.target.value);
        }}
        placeholder='Search'/>
      <button 
        className="search-btn" 
        type="submit"
         onClick={() => handleSearch(query)}
      >Go</button>
    </div>
    </div>
  )
}
