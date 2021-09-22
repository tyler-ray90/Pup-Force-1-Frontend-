//Imported Components
import FoodSearch from 'components/FoodSearch/FoodSearch';
// import Search from 'components/Search/Search';
import { useEffect, useState } from 'react';
const {
    NODE_ENV: mode,
    REACT_APP_DEV_API_PORT: port,
    REACT_APP_PROD_API_URL: liveApi,
} = process.env;
const apiURL =
    mode === 'development'
        ? `http://localhost:${port}/food`
        : `${liveApi}/food` || `http://localhost:${port}/food`;

const HomePage = (props) => {
    //! START API CODE

    const [data, setData] = useState([]);
    const getFood = async () => {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
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
    }, []);

    //! END API CODE

    return (
        <div>
            {/* <h2>Welcome, (user) to Pooch-a-medic. Search below of a list of food your pet can and cannot eat.</h2>
        <Search/> */}
            <FoodSearch data={data} addOrUpdate={addOrUpdate} />
        </div>
    );
};

export default HomePage;
