//Imported Components
import Contribute from 'components/Contribute/Contribute';
import FoodSearch from 'components/FoodSearch/FoodSearch';

// import Search from 'components/Search/Search';

const HomePage = (props) => {
    return (
        <div>
            {/* <h2>Welcome, (user) to Pooch-a-medic. Search below of a list of food your pet can and cannot eat.</h2>
        <Search/> */}
            <FoodSearch />
            <Contribute></Contribute>
        </div>
    );
};

export default HomePage;
