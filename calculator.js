
const changeDelimiterRegex = /^\/\/(.+)\n(.*)/s;

export default function add(text) {
    if (test === "") {
        return 0;
    }

    if (changeDelimiterRegex.test(text)) {
        const utils = text.match(changeDelimiterRegex);
        const delimiter = utils[1];
        const numbers = utils[2];
        const numbersSplitted = numbers.split(delimiter);
        return numbersSplitted.reduce((total, number) => total + Number(number), 0);
    } else {
        const numbers = text.replaceAll("\n", ",").split(",");
        return numbers.reduce((total, number) => total + Number(number), 0);
    }


}