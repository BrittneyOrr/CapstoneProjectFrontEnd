import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterUser(user) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        // if (password!== confirmPassword) {
        //     setError('Passwords do not match');
        //     return;
        // }
        setIsLoading(true);
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
            navigate('/login');
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    return (
        <div className='register-container'>
            <form onSubmit={handleSubmit}>
                <h3>Register for an account below to make a review:</h3>
                    <label>
                        Username:{' '}
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <p> </p>

                    <label>
                        Email:{' '}
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <p> </p>


                    <label> 
                        Password:{' '}
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                        <p> </p>

                    <button type='submit'> Register</button>
                    {error && <p>{error}    </p>}
            </form>
        </div>
    );
}
