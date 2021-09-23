import {
    unknownAnswerString,
    waitingString,
    isEdibleString,
    isNotEdibleString,
} from 'constants/displayStrings';

export const findResult = ({ data, selectedFood, selectedAnimal }) => {
    const info = data.find(({ food }) => food === selectedFood);
    if (!info) {
        return { answer: waitingString };
    }
    const result = info.data.find(({ animal }) => animal === selectedAnimal);
    if (!result) {
        return { answer: unknownAnswerString };
    }
    const notes = result.notes ?? null;
    return result.edible === 'true'
        ? { answer: isEdibleString, notes }
        : { answer: isNotEdibleString, notes };
};
