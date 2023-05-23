import readline from 'readline';

function ask(question: string): Promise<any> {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
  
    return new Promise((resolve) => {

        rl.question(question, (response: string) => {

            rl.close();

            resolve(parseInt(response));
        });
    });
}

const matrix: number[][] = [];

async function main() {

    for(let line = 0; line < 3; line++) {

        matrix[line] = [];

        for(let col = 0; col < 3; col++) {

            matrix[line][col] = await ask(`Write position number [${line}][${col}]: `);
        }
    }

    let sum = 0;

    for(let line = 0; line < 3; line++) {

        for(let col = 0; col < 3; col++) {

            sum += matrix[line][col];
        }
    }

    console.log(`\nSum: ${sum}`);
}

main();