import "./styles.css";

export default function App(props) {
  return (
    <div className = "app" >
        
        <Card title = "Pizza" para = "200"/>
        <Card title= "Momos" para = "120" />
        <Card title= "Sandwich" para = "150" />
        <Card title= "Burger" para = "180" />
        <Card title= "Maggie" para = "80" />
        <Card title= "Fried rice" para = "180" />
        </div>
  );
}

const Card = (props) => {
  
  return(
    
  <div className = "card">
  <h1 className="title">{props.title || "Food Name"}</h1>
  <p className="para">You have consumed {props.para} calories. </p>
    </div>
  );
}