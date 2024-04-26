import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../utils';
import './battery.css';

const Batterymodel = () => {
  const navigate = useNavigate();
  const onBikelist = () => {
    navigate('/bike');
  };
  const [battery, setbattery] = useState([]);
  const onBatterylist = async () => {
    const response = await axios.get('/battery');
    setbattery(response.data);
  };
  useEffect(() => {
    onBatterylist();
  }, []);
  return (
    <div className="bats">
      {battery.map(item => {
        return (
          <div onClick={onBikelist} className="list">
            <img src={item.image} alt="" />
            <h3>Name:{item.modelname}</h3>
            <p>Warrenty: {item.warrenty}</p>
            <p>capacity:{item.capacity}</p>
            <p>Price:{item.price}</p>
            <p>EXprice:{item.exchangeprice}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Batterymodel;
