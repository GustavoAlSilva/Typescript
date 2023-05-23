import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Write the temperature in Fahrenheit: ', (input) => {

    const fahrenheit = parseFloat(input);

    const celsius = 5 * (fahrenheit - 32) / 9;

    console.log(`\n${fahrenheit} °F is equivalent to ${celsius.toFixed(2)} °C.`);

    rl.close();
});