const VALID_ANSWER = ['A', 'B', 'C', 'D', 'E'];

export class Validation {

    static validateAnswer(answer: string) {

        return VALID_ANSWER.includes(answer);
    }
}