import  Card from './Components/Card.js'
import './App.css';


function App() {

  const cards = [
    {
      title:"Estes es un titulo de prueba",
      content: "Este es un ejemplode contendio por agregar"
    },
    {
      title:"Estes es un titulo de prueba2",
      content: "Este es un ejemplode contendio por agregar2"
    },
    {
      title:"Estes es un titulo de prueba3",
      content: "Este es un ejemplode contendio por agregar3"
    }
  ]


  return (
   <div>
     <Card title={cards[0].title} content={cards[0].content} />
     <Card title={cards[1].title} content={cards[1].content} />
     <Card title={cards[2].title} content={cards[2].content} />
   </div>
  );
}

export default App;
