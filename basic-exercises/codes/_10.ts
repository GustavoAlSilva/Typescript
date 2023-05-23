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

async function main() {

    let irineu: number = 0;
    let felipe: number = 0;
    let jarbas: number = 0;

    for(let i = 0; i < 20; i++) {

        let number = await ask('\nWhat is your favorite candidate?\n\n[88] - Irineu;\n[95] - Felipe Smith;\n[23] - Jarbas;\n\n');

        if (number === 88) {

            irineu++;
        } else if (number === 95) {

            felipe++;
        } else if (number === 23) {

            jarbas++;
        }
    }

    let favorite: string;

    if (irineu > felipe && irineu > jarbas) {

        favorite = 'Irineu';
    } else if (felipe > irineu && felipe > jarbas) {

        favorite = 'Felipe Smith';
    } else if (jarbas > irineu && jarbas > felipe) {

        favorite = 'Jarbas';
    } else {

        favorite = 'Draw!';
    }

    console.log(`\nIrineu: ${irineu}\nFelipe Smith: ${felipe}\nJarbas: ${jarbas}\n\nFavorite candidate: ${favorite}`);
}

main();