import AuthContextProvider from "./Components/contexts/AuthContextProvider";
import CartContextProvider from "./Components/contexts/CartContextProvider";
import CrudContextProvider from "./Components/contexts/CrudContextProvider";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import MainRoutes from "./Routes/MainRoutes";

function App() {
    return (
      <>
      <AuthContextProvider>
      <CrudContextProvider>
      <CartContextProvider>

        <Navbar/>
      <MainRoutes/>
      </CartContextProvider>
      </CrudContextProvider>
      </AuthContextProvider>
      <Footer/>
      </>
    );
  }
  
  export default App;