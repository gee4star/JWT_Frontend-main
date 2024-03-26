// import { useAuth } from '../../contexts/auth/auth_context';
// import dotenv from 'dotenv';
import React, {useState, useEffect} from "react"
const apiKeySpring = process.env.apiKey || "f9cabc1a80b4416eab94bd0e6c909f3b"
const apiKey = apiKeySpring.replace(/"/g, '');
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]
const RecipeBook = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&include-tags=vegetarian`)
    .then(response => response.json())
    .then(data => setRecipes(data.recipes))
  }, [])
  //   const { logout } = useAuth();

  //   const handleClick = () => {
  //     logout();
  //   };

  return (
    <div>
      <h1>Sample Recipes</h1>
      { recipes.map(recipe => (
        <div key={recipe.id}>
          <h3> {recipe.title}</h3>
          <img src={recipe.image}/>
          <span>{recipe.summary}</span>
        </div>
      ))}
    </div>
  );
};

export default RecipeBook;