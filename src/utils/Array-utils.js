import { getRandomInt } from './Numbers-utils'

export const getRandomItemsFromArray = (array, count) => {
    const randomItems = [];
    const maxIndex = array.length - 1;

    for (let i = 0; i < count; i++) {
        const randomIndex = getRandomInt(0, maxIndex);
        randomItems.push(array[randomIndex]);
    }

    return randomItems;
}
