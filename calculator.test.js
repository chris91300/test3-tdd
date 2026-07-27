import add from "./calculator"


describe("test of calculator", () => {

    it("should return 0 when is an empty string", () => {
        const sum = add("");
        expect(sum).toEqual(0);
    })

    it("should return 1 when the parameter is '1'", () => {
        const sum = add("1");
        expect(sum).toEqual(1);
    })

    it("should return 3 when the parameter is '1,2'", () => {
        const sum = add("1,2");
        expect(sum).toEqual(3);
    })

    it("should return 15 when the parameter is '1,2,3,4,5'", () => {
        const sum = add("1,2,3,4,5");
        expect(sum).toEqual(15);
    })

    it("should return 15 when the parameter is '1\n2,3\n4,5'", () => {
        const sum = add("1\n2,3\n4,5");
        expect(sum).toEqual(15);
    })

    it("should return 15 when the parameter is '//;\n1;2;3;4;5'", () => {
        const sum = add("//;\n1;2;3;4;5");
        expect(sum).toEqual(15);
    })

    it("should return 15 when the parameter is '//@\n1@2@3@4'", () => {
        const sum = add("//@\n1@2@3@4");
        expect(sum).toEqual(10);
    })

    it("should return an negative numbers error when the parameter is '1, -2, 3, -4'", () => {
        expect(() => add('1, -2, 3, -4')).toThrow("negatives not allowed : -2, -4");
    })

    it("should return 2 when the parameter is '2,1001'", () => {
        const sum = add("2,1001");
        expect(sum).toEqual(2);
    })

    it("should return 10 when the parameter is '//[;@@]\n1;@@2;@@3;@@4'", () => {
        const sum = add("//[;@@]\n1;@@2;@@3;@@4");
        expect(sum).toEqual(10);
    })

    it("should return 10 when the parameter is '//[;@@]\n1;@@]2;@@]3;@@]4'", () => {
        const sum = add("//[;@@]]\n1;@@]2;@@]3;@@]4");
        expect(sum).toEqual(10);
    })

    it("should return 10 when the parameter is '//[;@@] [:]\n1;@@2:3;4'", () => {
        const sum = add("//[;@@] [:] [;]\n1;@@2:3;4");
        expect(sum).toEqual(10);
    })
})