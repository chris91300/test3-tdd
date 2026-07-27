import calculator from "./calculator"


describe("test of calculator", () => {

    it("should return 0 when is an empty string", () => {
        const sum = calculator("");
        expect(sum).toBeEqual(0);
    })

    it("should return 1 when the parameter is '1'", () => {
        const sum = calculator("1");
        expect(sum).toBeEqual(1);
    })

    it("should return 3 when the parameter is '1,2'", () => {
        const sum = calculator("");
        expect(sum).toBeEqual(0);
    })
})