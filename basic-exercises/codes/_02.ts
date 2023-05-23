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

    const discipline = await ask('Write the discipline name: ');

    const average = await ask('Write your average final: ');

    const attendance = await ask('Write your class attendance: ');

    if (average >= 7 && attendance >= 75) {

        console.log(`\nWith an average of ${average} and an attendance of ${attendance}%, you have passed ${discipline}! Congratulations!`)
    } else {

        console.log('\nYou failed. Sorry...');
    }
}

main();