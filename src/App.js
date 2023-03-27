import {
  Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Formdata from './pages/formData';
import Getapidata from './pages/getApiData';
function App() {
  return (

<div>
<Router>
    <div>
      <button><Link to="/">Get</Link></button>
      <button><Link to="/post">Post</Link></button>
    </div>


    <Switch>
   
      <Route exact path="/" element={<Formdata/>}/>
      <Route path="/login" element={<Getapidata/>}/>
    
    </Switch>
</Router>
</div>
  );
}
export default App;
