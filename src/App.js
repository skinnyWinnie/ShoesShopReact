import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/header";
import Main from "./pages/main/main";
import { CartProvider } from "./components/CardContext";
import { FullBasket } from "./components/FullBasket/FullBasket";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <Header/>
        <FullBasket/>
        <Main/>
        <Footer/>
      </CartProvider>
      
    </div>
  );
}

export default App;
