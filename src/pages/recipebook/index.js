// import { useAuth } from '../../contexts/auth/auth_context';
// import dotenv from 'dotenv';
import React, {useState, useEffect} from "react"
const apiKeySpring = process.env.apiKey || "f9cabc1a80b4416eab94bd0e6c909f3b"
const apiKey = apiKeySpring.replace(/"/g, '');

const RecipeBook = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&include-tags=vegetarian`)
    .then(response => response.json())
    .then(data => setRecipes(data.recipes))
  }, [])

  return (
    <div>
      <h1>Sample Recipes</h1>
      { recipes.map(recipe => (
        <div key={recipe.id}>
          <h3 style={{textAlign: "center"}}> {recipe.title}</h3>
          <img style={{marginLeft: "680px"}} src={recipe.image}/><br></br>
          <div style={{marginLeft:"500px",marginRight:"500px" }} dangerouslySetInnerHTML={{ __html: recipe.summary }} ></div>
        </div>
      ))}
    </div>
  );
};

export default RecipeBook;