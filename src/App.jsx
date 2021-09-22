import 'App.scss';
import { Route, Switch } from 'react-router-dom';

//Imported Pages
import HomePage from 'pages/HomePage';

//Imported Components



const App = () => {
    //! BrowserRouter already in index.jsx
    return (
        <div className="App">
            <nav>
                <h1 className='title'>Pooch-a-medic</h1>

            </nav>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => <HomePage {...props} />}
                />
            </Switch>
        </div>
    );
};

export default App;
