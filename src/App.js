import './App.css';
import { Home } from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/globalStyled.scss';
import { Navbar } from './components/layout/navbar/navbar';
import { Footer } from './components/layout/footer/footer';
function App() {
  return (
    <div> 
      <Navbar/>
      <Home/>
      <Footer/>

    </div>
  );
}

export default App;
