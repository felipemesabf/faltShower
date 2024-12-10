import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      login(username);
      navigate('/products');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
