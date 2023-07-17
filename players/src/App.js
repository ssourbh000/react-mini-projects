import './App.css';
import Card from './Card'


function App() {

  

  // const playerDetails = async () => {

  //   const response = await fetch(`https://api.npoint.io/20c1afef1661881ddc9c`);
  //   const data = await response.json();
  //   setDetail(data.playerList);
  //   setId(data.playerList)
  //   console.log(detail);
  // }


  return (
    <div className="App">
      <Card  />
    </div>
  );
}

export default App;
