import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route} from "react-router-dom";
import Home from './routes/Home';
import Sports from './routes/Sports';
import Menu from './routes/Menu';


function App() {
  return (  
    <div className="App">

  

    <Routes>
      <Route path='/' element={<Menu/>}>
      <Route  index element={<Home/>}></Route>
      <Route path='/sports' element={<Sports/>}></Route>
      </Route>
    </Routes>



    </div>
  );
}

export default App;
