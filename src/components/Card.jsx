import React, {useState} from 'react';
import './styles/App.css';
import './styles/Card.css'

function Card({name = "Unnamed", description = "No Description"}) {
  const [expanded, setExpanded] = useState(false);


  
  return (
    <div className="card-container">
        <div className="card">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="image">
          
        </div>
    </div>
  );
}

export default Card;
