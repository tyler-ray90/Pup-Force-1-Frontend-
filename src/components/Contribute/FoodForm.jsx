import { data as dataAtom } from 'atoms';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { apiURL } from 'constants/endpoints';

const FoodForm = ({ currentAnimal, currentFood }) => {
    const [_, setData] = useRecoilState(dataAtom);
    const getFood = async () => {
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(error.message);
            setData([]);
        }
    };

    const addOrUpdate = async (formData) => {
        await fetch(apiURL, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        getFood();
    };

    const [formData, setFormData] = useState({
        food: currentFood,
        animal: currentAnimal,
        edible: false,
        notes: '',
    });

    const processUpdate = (event) => {
        event.preventDefault();
        console.log(formData);
        const { food, animal, edible, notes } = formData;
        addOrUpdate({
            food: food?.trim(),
            animal: animal?.trim(),
            edible,
            notes,
        });
    };

    const handleChange = (event) => {
        const updatedFormData = { ...formData };
        if (event.target.type === 'checkbox') {
            updatedFormData[event.target.name] =
                !updatedFormData[event.target.name];
        } else {
            updatedFormData[event.target.name] = event.target.value;
        }
        setFormData(updatedFormData);
    };
    return (
        <form
            onChange={(event) => handleChange(event)}
            onSubmit={(event) => processUpdate(event)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                flexGap: '1em',
            }}
        >
            <input type="submit" value="Contribute!" />
            <input
                type="text"
                name="animal"
                placeholder="animal name"
                value={formData.animal}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="food"
                placeholder="food name"
                value={formData.food}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="notes"
                placeholder="any notes?"
                value={formData.notes}
                onChange={handleChange}
            />
            <div>
                <label htmlFor="edible" style={{ color: 'blue' }}>
                    edible?
                    <input
                        type="checkbox"
                        name="edible"
                        onChange={handleChange}
                    ></input>
                </label>
                <span></span>
            </div>
        </form>
    );
};

export default FoodForm;
