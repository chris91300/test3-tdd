
// regex qui permet de vérifier si l'utilisateur veut modifier le delimiter
// le delimiter peut être entre crochet
const changeDelimiterRegex = /^\/\/\[?(.+?)\]?\n(.*)/s;

// permet de vérifier si un tableau contient de nombre négative et si oui throw une erreur
function checkIfThereIsNegativeNumbers(arr) {
    const negativeNumbers = arr.filter(number => number < 0)
    if (negativeNumbers.length != 0) {
        throw new Error(`negatives not allowed :${negativeNumbers.join(",")}`)
    }
}

function addString(total, nbrStringify) {
    const nbr = Number(nbrStringify);
    if (nbr <= 1000) {
        return total + nbr;
    } else {
        return total;
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

        if (delimiter.includes("] [")) {
            const delimiterModified = delimiter.replaceAll("] [", ",")
            const delimiterSplitted = delimiterModified.split(",");
            let newListOfNumber = numbers;
            // afin de mieux gérer les nombreuse variante, je remplace tous les delmiter par ","
            delimiterSplitted.forEach(element => {
                newListOfNumber = newListOfNumber.replaceAll(element, ",");
            });

            const numbersToAdd = newListOfNumber.split(",");
            checkIfThereIsNegativeNumbers(numbersToAdd);
            return numbersToAdd.reduce(addString, 0);
        } else {
            const numbersSplitted = numbers.split(delimiter);
            checkIfThereIsNegativeNumbers(numbersSplitted);
            return numbersSplitted.reduce(addString, 0);
        }


    } else {
        const numbers = text.replaceAll("\n", ",").split(",");
        checkIfThereIsNegativeNumbers(numbers);
        return numbers.reduce(addString, 0);
    }


}