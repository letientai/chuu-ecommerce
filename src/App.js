import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/globalStyled.scss';
import { Navbar } from './components/layout/navbar/navbar';
import { Footer } from './components/layout/footer/footer';
import { Routerr } from './router/router';
function App() {
  return (
    <div> 
      {/* <Navbar/> */}
      <Routerr/>
      {/* <Footer/> */}

    </div>
  );
}

export default App;
