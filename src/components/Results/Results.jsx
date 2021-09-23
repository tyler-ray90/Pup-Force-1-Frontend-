
import './Results.scss';

const Results = ({ pet, food, boolean}) => {


    return (
        <div className="results">
            <h2 className="results__h2">NO</h2>
            <div className="results__field">
                <p className="results__field__result">{pet}</p>
            </div>
            <div className="results__grayLine"></div>
            <h2 className="results__h2">{boolean ? "can eat" : "can't eat"}</h2>
            <div className="results__field">
                <p className="results__field__result">{food}</p>
            </div>
            <div className="results__grayLine"></div>
            <h3 className="results__recommendation" style={{color: boolean ? 'green' : 'red'}}>{boolean ? "Safe to Eat" : "Not Recommended"}</h3>
            { !boolean &&
                <button className="results__contactVet"><span className="results__contactVet__star">*</span>Contact a Vet</button>
            }
        </div>
    )
}

export default Results
