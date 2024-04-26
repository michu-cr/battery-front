import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/index.js';
import { ToastContainer, toast } from 'react-toastify';
import './userlogin.css';

const Userlogin = () => {
  const [log, setlog] = useState({
    email: '',
    password: '',
  });
  const onLog = (e, key) => {
    setlog({ ...log, [key]: e.target.value });
  };
  const navigate = useNavigate();
  const onLogin = async () => {
    const response = await axios.post('/user/login', log);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    toast.success('LOGIN SUCCESFULL', {
      onClose: () => {
        navigate('/brandlist');
      },
      autoClose: 1000,
    });
  };
  return (
    <div className="userlog">
      <ToastContainer />

      <div className="userinput">
        <h1>
          <u>USER LOGIN</u>
        </h1>
        <Input
          onChange={e => {
            onLog(e, 'email');
          }}
          placeholder="EMAIL"
          type="text"
        />
        <Input
          onChange={e => {
            onLog(e, 'password');
          }}
          type="text"
          placeholder="PASSWORD"
        />
        <br />
        <br />
        <Button onClick={onLogin} className="userloginbtn">
          LOGIN
        </Button>
      </div>
    </div>
  );
};
export default Userlogin;
