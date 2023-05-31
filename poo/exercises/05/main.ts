import readline from 'readline';
import { Inventory } from './Inventory';
import { Piece } from './Piece';

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

    const inventory = new Inventory();

    let piece = new Piece();

    let answer: string;

    do {

        console.log('\nHello, welcome!\nWhat do you want?\n\n[1] - Register pieces;\n[2] - Remove piece;\n[3] - See all pieces;\n[0] - Close.\n');

        answer = await ask('Answer: ');

        switch(answer) {

            case '1':
                let quantity: number = await ask('\nHow many pieces do you want to register? ');

                for(let i = 0; i < quantity; i++) {

                    piece.setDescription(await ask(`\nWrite the ${i+1}ª piece description: `));
                    piece.setColor(await ask(`Write the ${i+1}ª piece color: `));
                    piece.setPrice(await ask(`Write the ${i+1}ª piece price: `));
                    piece.setHeight(await ask(`Write the ${i+1}ª piece height: `));
                    piece.setWidth(await ask(`Write the ${i+1}ª piece width: `));

                    inventory.registerPiece(piece);
                }
                break;

            case '2':
                inventory.removePiece(await ask("\nWhat's piece position do you want remove? "));
                break;

            case '3':
                inventory.showPieces();
                break;

            case '0':
                console.log("\nThank's. See you later!");
                break;

            default:
                console.log('\nInvalid answer!');
                break;
        }
    } while (answer !== '0');

}

main();