import "./App.css";
import { Home } from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/globalStyled.scss";
import { Navbar } from "./components/layout/navbar/navbar";
import { Footer } from "./components/layout/footer/footer";
import { Detail } from "./pages/detail/detail";
function App() {
  return (
    <>
      <Navbar />
      <Detail />
      <Footer/>
    </>
  );
}

export default App;
