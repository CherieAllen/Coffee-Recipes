import React, {useEffect, useState} from "react";

function FCoffee({firstName}){
    const [coffeeList, setCoffeeList] = useState();
    const [temperature,setTemperature] = useState('iced');
    useEffect(()=>{
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then( response => response.json())
        .then(data =>setCoffeeList(data))
        .catch (console.error)
    },[temperature])
  
    return(
    <>
        <h1> Coffee List (F)</h1>
        <p> Hello {firstName}</p>
        <button onClick ={()=> setTemperature('hot')}>Hot</button>
        <button onClick ={()=> setTemperature('iced')}>Iced</button>
        
        {!coffeeList
        ? <h2>Loading...</h2>
        : <>
        <h2>Coffees</h2> 
        {coffeeList.map(coffee => {
        return <p key={coffee.id}>{coffee.title}</p>


        }    
        )}


        </>  
        }
    </>    
    
    )
}




export default FCoffee;