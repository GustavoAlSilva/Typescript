import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the last license plate number of your car? ', (input) => {

    const lastNumber = parseInt(input);

    switch(lastNumber) {

        case 0:
        case 5:
            console.log('\nYou cannot drive on monday.');
            break;

        case 1:
        case 6:
            console.log('\nYou cannot drive on tuesday.');
            break;

        case 2:
        case 7:
            console.log('\nYou cannot drive on wednesday.');
            break;

        case 3:
        case 8:
            console.log('\nYou cannot drive on thursday.');
            break;

        case 4:
        case 9:
            console.log('\nYou cannot drive on friday.');
            break;

        default:
            console.log('\nInvalid number!');
            break;
    }

    rl.close();
});