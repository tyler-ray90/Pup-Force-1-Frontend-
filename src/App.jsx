import 'App.scss';
import { Route, Switch } from 'react-router-dom';

//Imported Pages
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import SupportPage from 'pages/SupportPage';

//Imported Components
import Nav from 'components/Nav/Nav';



const App = () => {
    //! BrowserRouter already in index.jsx
    return (
        <div className="App">
            {/* <Nav/> */}
            <Switch>
                <Route
                    exact path="/"
                    render={(props) => <HomePage {...props} />}
                />
                <Route
                    exact path="/about"
                    render={(props) => <AboutPage/>}
                />
                <Route 
                    exact path="/support"
                    render={(props) => <SupportPage/>}
                />
            </Switch>
        </div>
    );
};

export default App;
