import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login () {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        const handleUsernameChange = (e) => {
          setUsername(e.target.value);
        };
      
        const handlePasswordChange = (e) => {
          setPassword(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Submitting:', { username, password });
          // clear form after submission
          setUsername('');
          setPassword('');
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <p> </p>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <p> </p>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <p> </p>

            <button type="submit">Login</button>
          </form>
        );
      };