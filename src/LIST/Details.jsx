import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const Details = ({info}) => {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);
  const [loadImg, setLoadImg] = useState(false);

  const getDetailsUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

  useEffect(() => {
    setLoad(false);
    (async () => {
      const res = await fetch(getDetailsUrl + info.id + '.json');
      const data = await res.json();
      data.avatar = data.avatar.substring(0, data.avatar.length - String(info.id).length) + info.id;
      // data.avatar += info.id; 
      setLoadImg(false);
      setUser(data);
      setLoad(true);
    })();
  }, [info]);


  return (
    <>      
      {load &&
      <div className="details-box">
        {!loadImg && <div className='loading-img'></div>}     
        <img 
          src={user.avatar} 
          alt='avatar' 
          onLoad={() => setLoadImg(true)}
          style={loadImg ? {display: 'block'} : {display: 'none'}}
          className='load-img'
        />
        <div className='details-item details-box_name'>{user.name}</div>
        <div className='details-item details-box_city'>City: {user.details.city}</div>
        <div className='details-item details-box_company'>Company: {user.details.company}</div>
        <div className='details-item details-box_position'>Position: {user.details.position}</div>
      </div>
      }
    </>    
  );
}

Details.propTypes = {
  info: PropTypes.object
}