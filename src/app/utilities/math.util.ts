export class MathUtil {
    public static getRandomNumber(digits: number) {
        let random = Math.random() * Math.pow(10, digits);

        return Math.floor(random);
    }
}
