
export default function add(text) {
    if (test === "") {
        return 0;
    }

    const numbers = text.split(",");
    return numbers.reduce((total, number) => total + Number(number), 0);
}