import  {useEffect, useState} from "react"
import { useAuth } from '../../contexts/auth/auth_context';

const Dashboard = () => {
  const { logout } = useAuth();
  const [personalRecipes, setPersonalRecipes] = useState([])

  const handleClick = () => {
    logout();
  };

  //adapted from Dylan's login example
  useEffect(()=> {
    getPersonalRecipes()
  },[])

  //found help from Landon Schlagen's youtube channel
  const getPersonalRecipes = async () => {
    const res = await fetch("http://localhost:5000/personalrecipes");
    const data = await res.json()
    console.log("Here's that list")
    setPersonalRecipes(data);
    console.log(data)
  }


  return (
    <div>
      <h2>Family Recipes</h2>
      
      {personalRecipes.map((recipe) => (
        <>
          <div key={recipe.id}>{recipe.title}</div>
          <img key={recipe.id} src={recipe.image}/>
          </>
        ))}
        <button style={{background:"#3630a3", color:"white", margin: "auto", width: "100px", height: "40px", borderRadius: "10px"}} onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default Dashboard;
