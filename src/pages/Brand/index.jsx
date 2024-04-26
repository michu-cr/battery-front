import { useState, useEffect } from 'react';
import axios from '../../utils/index.js';
import './brand.css';
import { useNavigate } from 'react-router-dom';

const Brand = () => {
  const [brands, setbrands] = useState([]);
  const brandlists = async () => {
    const response = await axios.get('/brand');
    setbrands(response.data);
  };
  useEffect(() => {
    brandlists();
  }, []);
  const navigate = useNavigate();
  const onClick = async id => {
    navigate(`/bike/${id}`);
  };
  return (
    <div className="brand">
      {brands.map(item => {
        return (
          <div className="bdlist" onClick={() => onClick(item._id)}>
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default Brand;
