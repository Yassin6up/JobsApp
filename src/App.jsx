import CardCompnent from "./components/Card"
import "./style.css"
function App() {


  return (
    <div className="container">
  <CardCompnent title = "iphone 11"  desc= "iphone for sell 150$" button="buy now" photo="https://th.bing.com/th?q=Pixel+6A&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-XA&cc=MA&setlang=en&adlt=strict&t=1&mw=247"/>
  <CardCompnent title = "iphone 12"  desc= "iphone for sell 550$" button="buy now" photo="https://www.bing.com/th/id/OIP.5ckFxySNflG-JDBYH0D20AHaJ4?w=133&h=180&c=7&r=0&o=5&pid=1.7"/>

  </div>
  );
}

export default App;




