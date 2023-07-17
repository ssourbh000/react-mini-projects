import React, {useState, useEffect} from 'react';
import './Card.css';


function Card()
{

    const [detail, setDetail] = useState([]);
  // const [id, setId] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.npoint.io/20c1afef1661881ddc9c`);
      const data = await response.json();
      setDetail(data.playerList);
      console.log(data.playerList);
    })();
  },[]);

return(
    <>
        <div className='cards'>
            <input className="search-box" placeholder="search here"/>
            <div className="card-box">
                {detail.map((details, index) => (
                    <div className='card' key={index} >
                        <div className="pic">
                            <img src={`./player-images/${details.Id}.jpg`} className="banner" alt={`${details.PFName} img`} />
                        </div>
                        <div className='text' style={{textAlign:'center'}}>
                            {/* <h2>{data.Id}</h2> */}
                            <h3 className='name'>{details.PFName}</h3>
                            <h4 className='desc'>{details.SkillDesc}</h4>
                            <h4 className='number'>Value - ${parseInt(details.Value)}</h4>
                            
                        </div>
                        
                    </div>
                ))}
            </div>
            
        </div>
    </>
)
}

export default Card;