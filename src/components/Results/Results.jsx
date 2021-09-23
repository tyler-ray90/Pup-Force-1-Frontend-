import './Results.scss';
import { Redirect, useParams } from 'react-router-dom';
import { data as dataAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { findResult } from 'utils.js/parse';
import { useState, useEffect } from 'react';
import {
    waitingString,
    isEdibleString,
    isNotEdibleString,
} from 'constants/displayStrings';

const Results = () => {
    const { food, animal } = useParams();
    const [data] = useRecoilState(dataAtom);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (data && food && animal) {
            setResult(
                findResult({
                    data,
                    selectedFood: food,
                    selectedAnimal: animal,
                })
            );
        }
    }, [data, food, animal]);

    const loaded = () => {
        return ![isEdibleString, isNotEdibleString].includes(result.answer) ? (
            <Redirect to="/" />
        ) : (
            <div className="results">
                <h2 className="results__h2">NO</h2>
                <div className="results__field">
                    <p className="results__field__result">{animal}</p>
                </div>
                <div className="results__grayLine"></div>
                <h2 className="results__h2">
                    {result.answer === isEdibleString ? 'can eat' : "can't eat"}
                </h2>
                <div className="results__field">
                    <p className="results__field__result">{food}</p>
                </div>
                <div className="results__grayLine"></div>
                <h3
                    className="results__recommendation"
                    style={{
                        color:
                            result.answer === isEdibleString ? 'green' : 'red',
                    }}
                >
                    {result.answer === isEdibleString
                        ? 'Safe to Eat'
                        : 'Not Recommended'}
                </h3>
                {result.answer === isNotEdibleString && (
                    <button className="results__contactVet">
                        <span className="results__contactVet__star">*</span>
                        Contact a Vet
                    </button>
                )}
            </div>
        );
    };

    return data && result ? loaded() : <></>;
};

export default Results;
