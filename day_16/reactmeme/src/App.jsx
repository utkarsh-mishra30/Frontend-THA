import './App.css';

// function Navbar(){
//   return <h1>Navbar</h1>
// }
const Card = () => {
  
    return(
      
      <div className = "card">
        <img src="https://miro.medium.com/max/1404/1*yVVyZ0aHlQV08AfZ08hj8w.jpeg" alt="" />
        <h1>React Card </h1>
      <p>Hello this a react meme card !</p>
      </div>
    )
    
  
}


function App() {
    return ( 
      <div className = "app" >
        {/* <Navbar/> */}
        <Card/>
        <Card/>
        
        
        
        
        </div>
    );
}

export default App;