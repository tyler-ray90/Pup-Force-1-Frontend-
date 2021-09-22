import 'App.scss';
import {Route, Switch} from 'react-router-dom';

//Imported Pages
import HomePage from "pages/HomePage";

//Imported Components
import Search from 'components/Search/Search';


const App = () => {
    //! BrowserRouter already in index.jsx
    return <div className="App">;
    <nav>This is the nav</nav>
    <Search/>

        <Switch>
        <Route exact path = "/" render={(props) => 
        <HomePage/>
        } />


        </Switch>
    </div>
};

export default App;
