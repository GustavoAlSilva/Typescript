import readline from 'readline';

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

const vector: number[] = [];

async function main() {

    for(let i = 0; i < 10; i++) {

        let number = await ask(`Write the number of position ${i}: `);

        vector.push(number);
    }

    const wanted = await ask(`Write the number to be searched for: `);

    let found: boolean | number = false;
    
    for(let i = 0; i < 10; i++) {
        let number = vector[i];

        if (number === wanted) {

            found = i;
        }
    }

    if (found) {

        console.log(`\nFound at position ${found}!`);
    } else {
    
        console.log("\nNot found!");
    }
}

main();