import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('How old are you? ', (input) => {

    const age = parseInt(input);

    if (age < 18) {

        console.log('\nYou are not a voter.');
    } else if (age >= 18 && age <= 65) {

        console.log('\nYou are a mandatory voter.');
    } else {

        console.log('\nYou are a optional voter.');
    }

    rl.close();
});