import './App.css';
import {Switch,Route,Link} from 'react-router-dom'
import AdminHome from './components/admin';
import StaffHome from './components/staff';
import Guest from './components/guest';

function App() {
  return (
   <div className='container'>
     Main app page 

     <div className="router">
       <Switch>
         <Route path='/admin'>
           <AdminHome />
         </Route>

         <Route path="/staff">
           <StaffHome />
         </Route>

         <Route path='/guest'>
            <Guest />
         </Route>
       </Switch>
     </div>
   </div>
  );
}

export default App;
