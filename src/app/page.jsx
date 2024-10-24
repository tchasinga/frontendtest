import Aboutus from "./Components/Pages/Aboutus";
import Conclusion from "./Components/Pages/Conclusion";
import Details from "./Components/Pages/Details";
import Footer from "./Components/Pages/Footer";
import Heros from "./Components/Pages/Heros";
import More from "./Components/Pages/More";

export default function Home() {
  return (
    <div className="">
      <Heros />
      <Aboutus />
      <Details />
      <More />
      <Footer /> 
      <Conclusion />
    </div>
  );
}
