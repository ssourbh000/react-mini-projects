import React,{ useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import Text from './Text';

function App() {

  const APP_ID = "8c3e28b7";
  const APP_KEY = "a2fed081c5e6061a44cb62473d34544c";

  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=&{APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect( ()=>{
    getRecipe();
  },[query]);

  const getRecipe = async () =>{
  
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();

      console.log(data);
      if(data.hits.length == 0 && data.q != ''){
        alert("ohho! get some food");
      }else{
        setRecipes(data.hits);
      }
    
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
     
      <form onSubmit={getSearch} className="search-form">
        
        <br />
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="search your food recipe" />
        <button className='search-button' type="submit" style={{cursor: "pointer"}}>
        Search
        </button>
        
      </form>

      <Text />
      <div className='recipes'>
        
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients} 
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
