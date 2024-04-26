import axios from '../../utils/index';
import { useEffect, useState } from 'react';
import { getId } from '../../utils/tok';
import { useParams } from 'react-router-dom';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './book.css';

const Book = () => {
  const { id } = useParams();

  const [selectedPrice, setSelectedPrice] = useState('');
  const handlePriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const [bat, setbat] = useState([]);
  const bookBat = async () => {
    const response1 = await axios.get(`/battery/bat/${id}`);
    setbat(response1.data);
  };

  const [shop, setshop] = useState({});
  const onShop = async () => {
    const response = await axios.get('/shop');
    setshop(response.data[0]);
  };

  const navigate = useNavigate();
  const onClick = async () => {
    const data = {
      battery: id,
      user: getId(),
      price: selectedPrice,
    };
    console.log(data);
    await axios.post('/book/', data);
    toast.success('BOOKING SUCCESSFUL', {
      onClose: () => {
        navigate('/login');
      },
      autoClose: 2000,
    });
  };

  useEffect(() => {
    onShop();
    bookBat();
  }, []);

  return (
    <div className="books">
      <ToastContainer />
      <div className="bookbat">
        <img src={bat.image} alt="" />
        <h2>Modelname:_{bat.modelname}</h2>
        <h2>Warranty:_{bat.warrenty}</h2>
        <h2>Capacity:_{bat.capacity}</h2>
        <h2>Voltage:_{bat.voltage}</h2>
        <select
          className="select"
          value={selectedPrice}
          onChange={handlePriceChange}
        >
          <option selected>SELECT PRICE FOR YOU</option>
          <option value={bat.price}>M R P:_{bat.price}</option>
          <option value={bat.exchangeprice}>
            BATTERY EXCHANGE PRICE:_{bat.exchangeprice}
          </option>
        </select>
        <Button onClick={onClick} className="btnbook">
          BOOK IT
        </Button>
      </div>
      <div className="shoplist">
        <h1>
          <u>SHOP DETAIL</u>
        </h1>
        <br />
        <img src={shop.image} alt="" />
        <p>SHOP:{shop.shopname}</p>
        <p>EMAIL:{shop.email}</p>
        <p>CONTACT:{shop.phonenumber}</p>
        <p>ADDRESS:{shop.address}</p>
      </div>
    </div>
  );
};
export default Book;
