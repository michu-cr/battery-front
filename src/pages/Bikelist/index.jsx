import { useState, useEffect } from 'react';
import axios from '../../utils/index.js';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './bike.css';

const Bikelist = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setvehicle] = useState([]);
  const vehiclelist = async () => {
    const response = await axios.get(`/vehicle/list/${id}`);
    setvehicle(response.data);
  };
  const onBatlist = id => {
    navigate(`/batlist/${id}`);
  };

  useEffect(() => {
    vehiclelist();
  }, []);
  return (
    <div className="bikelist">
      {vehicle.map(item => {
        return (
          <div onClick={() => onBatlist(item._id)} className="blist">
            <img src={item.image} alt="" />
            <p>NAME:{item.name}</p>
            <p>FUALTYPE:{item.fualtype}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Bikelist;
