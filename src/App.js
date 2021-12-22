
import RegisterForm from './form/registerForm';
import LoginForm from './form/loginForm';
import { Routes, Route} from "react-router-dom";
import MetaMaskForm from './form/metamask';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/connect" element={<MetaMaskForm/>} />
    </Routes>
  );
}

export default App;
