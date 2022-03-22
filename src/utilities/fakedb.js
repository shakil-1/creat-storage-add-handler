//use locale storage to manage card to data

    const addToDb = id =>{
    let shopingCard;

    //get the shoping card form local storage
    const storCard = localStorage.getItem('shoping-cart');
    if(storCard){
        shopingCard = JSON.parse(storCard);
    }
    else{
     shopingCard = {};   
    }


  
        //add quantity
        const quantity = shopingCard[id];
        if(quantity){
        const newQuantity = quantity + 1;
        shopingCard[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    }
    else{
        shopingCard[id] = 1;
        // localStorage.setItem( id , 1);
    }
    localStorage.setItem ('shoping-cart', JSON.stringify(shopingCard));
}

const removFormDb = id =>{
   const getStordCard = localStorage.getItem('shoping-cart');
   if(getStordCard){
       const shopingCard = JSON.parse(getStordCard)
    if(id in shopingCard)
    delete shopingCard[id];
    localStorage.setItem ('shoping-cart', JSON.stringify(shopingCard));
   
   }

}

// const deleteShopingCard = () => {
//     localStorage.removeItem('shoping-cart');
// }

export {addToDb, removFormDb, }