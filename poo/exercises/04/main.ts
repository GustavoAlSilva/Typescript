import readline from 'readline';
import { AnswerKey } from './AnswerKey';
import { StudentAnswer } from './StudentAnswer';
import { Validation } from './Validation';

function ask(question: string): Promise<any> {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
  
    return new Promise((resolve) => {

        rl.question(question, (response: string) => {

            rl.close();

            resolve(response);
        });
    });
}

async function main() {

    let score = 0;

    const answerKey = new AnswerKey();

    const studentAnswer = new StudentAnswer();

    let answer: string;

    console.log('Por favor, responta com A, B, C, D ou E.')

    do {

        answer = await ask('\nAnswer key - 1ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion01(answer);

    do {

        answer = await ask('Answer key - 2ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion02(answer);

    do {

        answer = await ask('Answer key - 3ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion03(answer);

    do {

        answer = await ask('Answer key - 4ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion04(answer);

    do {

        answer = await ask('Answer key - 5ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion05(answer);

    do {

        answer = await ask('\nStudent answer - 1ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion01(answer);

    do {

        answer = await ask('Student answer - 2ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion02(answer);
    do {

        answer = await ask('Student answer - 3ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion03(answer);
    do {

        answer = await ask('Student answer - 4ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion04(answer);
    do {

        answer = await ask('Student answer - 5ª answer: ');
    } while(!Validation.validateAnswer(answer));

    answerKey.setQuestion05(answer);

    if (answerKey.getQuestion01() === studentAnswer.getQuestion01()) {

        score += 2;
    }

    if (answerKey.getQuestion02() === studentAnswer.getQuestion02()) {

        score += 2;
    }

    if (answerKey.getQuestion03() === studentAnswer.getQuestion03()) {

        score += 2;
    }

    if (answerKey.getQuestion04() === studentAnswer.getQuestion04()) {

        score += 2;
    }

    if (answerKey.getQuestion05() === studentAnswer.getQuestion05()) {

        score += 2;
    }

    console.log(`\nFinal Score: ${score}`);
}

main();