import CardCompnent from "./components/Card"
import "./style.css"
import ResponsiveAppBar from "./components/Navbar";
function App() {
  return (

  <div className="">
  <ResponsiveAppBar logo ="jobs.com " m1="home" m2="about" m3="pricing" l1="proffile" l2="deshbord" l3="logout" profil="https://images.pexels.com/photos/18599567/pexels-photo-18599567/free-photo-of-brick-wall-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
  <div className="container flex " >
  <CardCompnent title = "iphone 11"  desc= "iphone for sell 150$" content = "14"  photo="https://th.bing.com/th?q=Pixel+6A&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-XA&cc=MA&setlang=en&adlt=strict&t=1&mw=247"/>
  <CardCompnent title = "iphone 12"  desc= "iphone for sell 550$"   content = "10" photo="https://www.bing.com/th/id/OIP.5ckFxySNflG-JDBYH0D20AHaJ4?w=133&h=180&c=7&r=0&o=5&pid=1.7"/>
  <CardCompnent title = "iphone 13"  desc= "iphone for sell 150$"  content = "8" photo="https://th.bing.com/th?q=Pixel+6A&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-XA&cc=MA&setlang=en&adlt=strict&t=1&mw=247"/>
  <CardCompnent title = "handpack"  desc= "iphone for sell 550$"  content = "1" photo="https://www.bing.com/th/id/OIP.5ckFxySNflG-JDBYH0D20AHaJ4?w=133&h=180&c=7&r=0&o=5&pid=1.7"/>
  
  
  </div>
  </div>

  );
}

export default App;




