/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './components/Login';
import ProductList from './components/ProductList';

const PrivateRoute = ({ children }:any) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<PrivateRoute><ProductList /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
