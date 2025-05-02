
const Card = (children)=>{
    //card to be a component which returns jsx of card UI, accepts card details.
    const {flag,name} = children;
    return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '0.5px', 
            borderStyle: 'solid',
            borderColor: 'lightgray',
            borderRadius: '5px',
            padding: '10px',
            width:100,
            height: 100,          
        }} className="countryCard">
            <img style={{width:50,height:50}}src={flag} alt={`Flag of ${name}` }/>
            <div><h5>{name}</h5></div>
            
    </div>
)}

export default Card;
