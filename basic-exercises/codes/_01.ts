import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let evenSum: number = 0;
let evenQtd: number = 0;
let oddSum: number = 0;
let oddQtd: number = 0;

let count: number = 1;

function looping() {

    rl.question(`Write the ${count}º number: `, (input) => {

        let num: number = parseInt(input);

        if (num % 2 === 0) {

            evenSum += num;

            evenQtd++;
        } else {

            oddSum += num;

            oddQtd++;
        }

        count++;

        if (count <= 10) {

            looping();
        } else {

            rl.close();
        }
    });
}

looping();

rl.on('close', () => {

    console.log(`\nSum of evens: ${evenSum}\nQuantity of evens: ${evenQtd}\nSum of odds: ${oddSum}\nQuantity of odds: ${oddQtd}\n`);
});
