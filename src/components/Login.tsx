import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      login(username,password);
      navigate('/products');
    }
  };

  return (
    <div className='general-container'>
      <div className="login-container">
        <div className="login-card">
          <h1>Iniciar Sesión</h1>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>
      <div className="message-container">
        <h1>Bienvenidos al ApartaShower de Pipe y Mil</h1>
        <p>
          Finalmente nos lanzamos a la independencia, y queremos que tú formes parte de este nuevo comienzo.
          Te extendemos la invitación para que vengas y conozcas nuestro nuevo hogar… nuestro nuevo comienzo.
          Tú has sido invitado porque has sido parte de nuestro proceso, y por eso queremos compartir nuestra
          felicidad contigo.  
        </p>
        <p>
          Te invitamos a visitarnos, a compartir con nosotros una comida y una charla agradable. Como sabes,
          estamos empezando y a nuestro hogar aún le faltan cosas que iremos consiguiendo con el tiempo, pero
          si tú deseas ayudarnos con algún detalle, será muy bien recibido.
        </p>
        <p>
          Adjunto a tu invitación viene un usuario y una contraseña para que puedas entrar y echar un vistazo
          a las cosas que nos hacen falta. Allí dentro, elige con cuidado, porque una vez que apartes algún
          producto, no podrás deseleccionarlo. Además, los productos que un usuario ya haya seleccionado no 
          podrán ser seleccionados por otros.
        </p>
        <p>
          ¡Te esperamos con los brazos abiertos en nuestro nuevo hogar!
        </p>
      </div>
  </div>

  );
};

export default Login;
