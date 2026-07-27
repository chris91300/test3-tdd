
// regex qui permet de vérifier si l'utilisateur veut modifier le delimiter
const changeDelimiterRegex = /^\/\/(.+)\n(.*)/s;

// permet de vérifier si un tableau contient de nombre négative et si oui throw une erreur
function checkIfThereIsNegativeNumbers(arr) {
    const negativeNumbers = arr.filter(number => number < 0)
    console.log("dans negative")
    console.log(negativeNumbers)
    if (negativeNumbers.length != 0) {
        throw new Error(`negatives not allowed :${negativeNumbers.join(",")}`)
    }
}

export default function add(text) {
    if (test === "") {
        return 0;
    }

    if (changeDelimiterRegex.test(text)) {
        const utils = text.match(changeDelimiterRegex);
        const delimiter = utils[1];
        const numbers = utils[2];
        const numbersSplitted = numbers.split(delimiter);
        checkIfThereIsNegativeNumbers(numbersSplitted);
        return numbersSplitted.reduce((total, number) => total + Number(number), 0);
    } else {
        const numbers = text.replaceAll("\n", ",").split(",");
        checkIfThereIsNegativeNumbers(numbers);
        return numbers.reduce((total, number) => total + Number(number), 0);
    }


}