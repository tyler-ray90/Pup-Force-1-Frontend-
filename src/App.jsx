import 'App.scss';
import { data as dataAtom } from 'atoms';
import AboutPage from 'pages/AboutPage';
//Imported Pages
import HomePage from 'pages/HomePage';
import ResultPage from 'pages/ResultPage';
import SupportPage from 'pages/SupportPage';

import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Nav from 'components/Nav/Nav';
import FoodDetail from 'components/FoodDetail/FoodDetail';

const {
    NODE_ENV: mode,
    REACT_APP_DEV_API_PORT: port,
    REACT_APP_PROD_API_URL: liveApi,
} = process.env;
const apiURL =
    mode === 'development'
        ? `http://localhost:${port}/food`
        : `${liveApi}/food` || `http://localhost:${port}/food`;

const App = () => {
    //! START API CODE

    const [data, setData] = useRecoilState(dataAtom);
    const getFood = async () => {
        const response = await fetch(apiURL);
        const data = await response.json();
        setData(data);
    };

    const addOrUpdate = async (formData) => {
        await fetch(apiURL, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        getFood();
    };

    useEffect(() => {
        getFood();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //! END API CODE
    return (
        <div className="App">
            <Nav/>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => <HomePage {...props} />}
                />

                <Route exact path="/about" render={(props) => <AboutPage />} />
                <Route
                    exact
                    path="/support"
                    render={(props) => <SupportPage />}
                />
                 <Route 
                    exact path="/details"
                    render={(props) => <FoodDetail />}
                />
                <Route
                    path="/results/:food/:animal"
                    render={(props) => <ResultPage {...props} />}
                />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </div>
    );
};

export default App;
