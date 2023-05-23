import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('How much brass do you want? ', (input) => {

    const brass = parseFloat(input);

    const zinc = brass * 0.3;

    const copper = brass * 0.7;

    console.log(`\nRequired quantity of zinc: ${zinc}\nRequired quantity of copper: ${copper}`);

    rl.close();
});