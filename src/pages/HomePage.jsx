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
<<<<<<< HEAD
    return <div>
        <FoodSearch />
    </div>;
=======
    //! START API CODE

    const [data, setData] = useState(null);
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
    }, []);

    //! END API CODE

    return (
        <div>
            {/* <h2>Welcome, (user) to Pooch-a-medic. Search below of a list of food your pet can and cannot eat.</h2>
        <Search/> */}
            <FoodSearch data={data} addOrUpdate={addOrUpdate} />
        </div>
    );
>>>>>>> 940572a3d9d5c29f28eb3f298f74cfda33d48fad
};

export default HomePage;
