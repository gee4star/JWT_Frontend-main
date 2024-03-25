import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { useAuth } from '../../contexts/auth/auth_context';

const SignUp = ({ setNewUser }) => {
  const nav = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleClick = () => {
    setNewUser(false);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      console.log('Passwords Dont Match');
    } else {
      await signUp(formData)
      nav('/dashboard')
    }
  };

  return (
    <div className='forms'>
      <h2>SignUp</h2>
      <form onSubmit={(e) => onSubmit(e)} autoComplete='off'>
        <label htmlFor='name1'>Name: </label>
        <input
          type='text'
          id='name1'
          name='name'
          placeholder='First and Last Name'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <label htmlFor='email1'>Email: </label>
        <input
          type='email'
          id='email1'
          name='email'
          placeholder='Email'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <label htmlFor='password1'>Password: </label>
        <input
          type='password'
          id='password1'
          name='password'
          placeholder='Password'
          minLength='6'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <input
          type='password'
          id='password2'
          name='password2'
          placeholder='Confirm Password'
          minLength='6'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;
