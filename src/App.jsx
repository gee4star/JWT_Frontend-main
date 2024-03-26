import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth';
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RecipeBook from "./pages/recipebook"




function App() {
  return (
    // <div style={{backgroundImage: `url(https://media.gettyimages.com/id/1208790368/photo/healthy-fresh-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=0TnVfYOk8VkYEvEDTHlLtXDbKUg4sjbiI5Gfb9GfKjo=)`}}>

    // </div>


    <div className='App'>
      <Navbar className="nav"/>
      <img className="fruits" src="https://media.gettyimages.com/id/1208790368/photo/healthy-fresh-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=0TnVfYOk8VkYEvEDTHlLtXDbKUg4sjbiI5Gfb9GfKjo="></img>
      <img className="heart"src="https://usagif.com/wp-content/uploads/gif-heart-67.gif"height="200px" width="250px"alt="gif of flowering tree petals falling gently"/>
      <title className='Name1'>Healthy Hearts Recipe App</title>
      <h1>Healthy Hearts Recipe App</h1>


      {/* <h1>Healthy Hearts Recipe App</h1> */}

      <h2 className="cat">Hello, Beautiful People of the World!</h2>
      
{/* <Footer className="footer"/> */}
      {/* ReactDOM.createRoot(document.getElementById('root')).render(<App />); */}







      <Routes>
      <Route path='/recipebook' element={<RecipeBook />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  
  );
}

export default App;
