import React from 'react';
import { addToDb, removFormDb } from '../../utilities/fakedb';
import './Cosmatic.css'

const Cosmatic = (props) => {
    const {name, price, id} = props.cosmatic;
    const addToCard = (id) =>{
    addToDb(id);
    }
  
    const removeFormCard = id => {
       removFormDb(id);
    }



    return (
        <div className='product'>
            <h3> buy this : {name} </h3>
            <p>only for : $ {price}</p>
            <p> id :  {id}</p>
            {/* <button onClick={addTocardRapper}>Add to Card name</button> */}
            <button onClick={() => addToCard(id)}>Add to Card</button>
            <button onClick={() => removeFormCard(id)}>Remove</button>
        </div>
    );
};

export default Cosmatic;