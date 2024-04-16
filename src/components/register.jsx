import { useState } from 'react';
// const API_URL =

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
        if (password!== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
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
}
    