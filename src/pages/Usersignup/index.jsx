import Input from '../../Components/Input';
import axios from '../../utils/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import { ToastContainer, toast } from 'react-toastify';
import './usersignup.css';

const Usersignup = () => {
  const [sign, setsign] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phonenumber: '',
    place: '',
    image: '',
  });
  const onSignin = async (e, key) => {
    if (key == 'image') {
      const imageData = new FormData();
      imageData.append('file', e.target.files[0]);
      const response = await axios.post('/image', imageData);
      setsign({ ...sign, image: response.data.url });
    } else {
      setsign({ ...sign, [key]: e.target.value });
    }
  };

  console.log(sign);
  const navigate = useNavigate();
  const onSubmit = async () => {
    await axios.post('/user/signup', sign);
    console.log(sign);
    toast.success('SUBMITED PLEASE LOGIN', {
      onClose: () => {
        navigate('/login');
      },
      autoClose: 1000,
    });
  };
  const onLog = () => {
    navigate('/login');
  };

  return (
    <div className="usersignup">
      <ToastContainer />

      <div className="userin">
        <h1>
          <u> USER SIGN UP</u>
        </h1>
        <Input
          type="text"
          className="in"
          onChange={e => {
            onSignin(e, 'name');
          }}
          placeholder="NAME"
        />
        <Input
          className="in"
          type="text"
          onChange={e => {
            onSignin(e, 'email');
          }}
          placeholder="EMAIL"
        />
        <Input
          className="in"
          type="text"
          onChange={e => {
            onSignin(e, 'password');
          }}
          placeholder="PASSWORD"
        />
        <Input
          className="in"
          type="text"
          onChange={e => {
            onSignin(e, 'confirmPassword');
          }}
          placeholder="CONFIRM PASSWORD"
        />
        <Input
          className="in"
          type="text"
          onChange={e => {
            onSignin(e, 'phonenumber');
          }}
          placeholder="PHONE NUMBER"
        />
        <Input
          className="in"
          type="file"
          onChange={e => {
            onSignin(e, 'image');
          }}
          placeholder="IMAGE"
        />
        <select
          className="in"
          onChange={e => {
            onSignin(e, 'place');
          }}
        >
          <option value="PLACE" selected>
            CHOOS PLACE{' '}
          </option>
          <option value="FAROKE">FAROK</option>
          <option value="KOYAS">KOYAS</option>
          <option value="CHERUVANNUR">CHERUVANNUR</option>
          <option value="SRAMBIA">SRAMBIA</option>
          <option value="KOONDAYITHODE">KOONDAYITHODE</option>
          <option value="MODERN">MODERN</option>
          <option value="ARREKAD">AREEKAD</option>
          <option value="MEENCHANDHA">MEENCHANDHA</option>
          <option value="VATTAKINAR">VATTAKINAR</option>
          <option value="KANNANCHERY">KANNANCHERY</option>
          <option value="PANNIYANKARA">PANNIYANKARA</option>
          <option value="ELECTIC COMPANY">ELECTRIC COMPANY</option>
          <option value="KALLAYI">KALLAYI</option>
          <option value="VATTAMBAIL">VATTAMBAIL</option>
          <option value="PVS">PVS</option>
        </select>
        <br />
        <br />
        <Button onClick={onLog} className="login">
          LOGIN
        </Button>
        <Button className="submit" onClick={onSubmit}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};
export default Usersignup;
