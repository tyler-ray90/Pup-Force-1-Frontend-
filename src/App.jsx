import 'App.scss';
import { Route, Switch } from 'react-router-dom';

//Imported Pages
import HomePage from 'pages/HomePage';

const App = () => {
    //! BrowserRouter already in index.jsx
    return (
        <div className="App">
            <header>This is the header</header>
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
