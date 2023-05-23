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

async function main() {

    let higherNumber: number;

    for(let i = 0; i < 3; i++) {

        let number = await ask(`Write the ${i+1}º number: `);

        if (!higherNumber! || number > higherNumber) {

            higherNumber = number;
        }
    }

    console.log(`\nHigher number: ${higherNumber!}`);
}

main();