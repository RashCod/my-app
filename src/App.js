import "./App.css";
import { AppleBlock } from "./components/AppleBlock/AppleBlock";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { SectionOne } from "./components/SectionOne/SectionOne";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Modal } from "./components/Cart/Modal";

function App() {
  return (
    <div className="App">
      <Header />
    
      <Routes>
      <Route path="/*" element={  <SectionOne />} />       
      <Route path="/catalog" element={<AppleBlock />} />       
       <Route path="/cart" element={<Cart />} />
       {/* <Route path="/modal" element={<Modal/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
