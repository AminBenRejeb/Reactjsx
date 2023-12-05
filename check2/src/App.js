import './App.css';

//importation des composants nécessaires
import Cardd from './Components/Card';
import photo from './n.jpg'



function App() {
  const firstName = "AmiN"; 
  return (
    

    <div  style ={{background:'#F4EAE0'}} className="App">
      
<Cardd/>
<br/><br/>
   <div>
    {firstName? (
      <>
      <p style={{fontWeight:'bold',textAlign:'center'}}>Bonjour, {firstName}!</p>
      <img  src={photo} alt="image" style={{ width: '250px', height: '250px',marginLeft:'40px',marginTop:'20px',marginBottom:'20px',borderRadius:'50%',border:'solid' }} />
      </>
    ):(
      <p style={{fontWeight:'bold',textAlign:'center'}}>Bonjour, là !</p>
    )}

     </div>
  </div>
      
  );
};

export default App;
