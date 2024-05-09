// import { getRandomInt } from './Numbers-utils'

// const getRandomItemsFromArray = (array, count) => {
//     const randomItems = [];
//     const maxIndex = array.length - 1;

//     for (let i = 0; i < count; i++) {
//         const randomIndex = getRandomInt(0, maxIndex);
//         randomItems.push(array[randomIndex]);
//     }

//     const randomItemsStrings = randomItems.map((item) => JSON.stringify(item))
//     return Array.from(new Set(randomItemsStrings)).map((item) => JSON.parse(item));
// }

export const getRandomItemsFromArray = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
};
