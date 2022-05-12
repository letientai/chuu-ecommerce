import './App.css';
import { Home } from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/globalStyled.scss';
import { Navbar } from './components/layout/navbar/navbar';
function App() {
  return (
    <div> 
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
