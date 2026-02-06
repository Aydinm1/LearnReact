import Card from "./components/Card";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
function App(){
 return(
 <div className="d-flex justify-content-around gap-4 p-4 flex-wrap">
  
  <Card
    title="Card Title"
    description="This is a description of the card."
    image={img1}
    buttonText="Click Me"
    buttonLink="https://www.example.com">
  </Card>
    
  <Card
    title="Card Title"
    description="This is a description of the card."
    image={img2}
    buttonText="Click Me"
    buttonLink="https://www.example.com">
  </Card>
    
  <Card
    title="Card Title"
    description="This is a description of the card."
    image={img3}
    buttonText="Click Me"
    buttonLink="https://www.example.com">
  </Card>
  </div>

 )
}

export default App;