import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { useAuth } from '../../contexts/auth/auth_context';
import './index.css';

const LoginForm = ({ setNewUser }) => {
  const nav = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleClick = () => {
    setNewUser(true);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    console.log('Success');
    nav('/dashboard');
  };

  return (
    <div className='forms'>
      <h2>Login</h2>
      <form autoComplete='off' onSubmit={(e) => onSubmit(e)}>
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Your Email Here'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Your Password Here'
          minLength='6'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <button type='submit'>Log In</button>
        <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button>
      </p> 
      </form>
     
    </div>
  );
};

export default LoginForm;
