import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../utils/index.js';
import Button from '../../Components/Button/index.jsx';
import './batterylist.css';

const Bat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bater, setbater] = useState([]);
  const bookbat = async () => {
    const response = await axios.get(`/battery/${id}`);
    setbater(response.data);
  };
  const onBook = bid => {
    navigate(`/book/${bid}`);
  };
  useEffect(() => {
    bookbat();
  }, []);
  return (
    <div className="bat">
      {bater.map(item => {
        return (
          <div className="blist1">
            <img src={item.image} alt="" />
            <h2>NAME:_{item.modelname}</h2>
            <h2>WARRENTY:_{item.warrenty}</h2>
            <p>VOLTAGE:_{item.voltage}</p>
            <p>CAPACITY:_{item.capacity}</p>
            <p>PRICE:_{item.price}</p>
            <p>EXPRICE:_{item.exchangeprice}</p>
            <p>STOCK:_{item.inStock ? 'YES' : 'NO'}</p>
            {item.inStock ? (
              <Button onClick={() => onBook(item._id)} className="choosbtn">
                CHOOSE BATTERY
              </Button>
            ) : (
              <p className="nostock">Battery not available</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Bat;
