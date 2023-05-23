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

const grades: number[] = [];

async function main() {

    for(let i = 0; i < 4; i++) {

        let grade = await ask(`Write the ${i+1}ª grade: `);

        grades.push(parseFloat(grade));
    }
    
    let gradesSum: number = 0;

    for(let i = 0; i < 4; i++) {
        let grade = grades[i];

        gradesSum += grade;
    }

    const average = gradesSum / grades.length;

    if (average >= 9) {

        console.log('\nA');
    } else if (average >= 8) {

        console.log('\nB');
    } else if (average >= 7) {

        console.log('\nC');
    } else {

        console.log('\nD');
    }
}

main();