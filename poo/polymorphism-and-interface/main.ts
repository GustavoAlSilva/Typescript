import readline from 'readline';
import { IEntity } from './IEntity';
import { IndividualEntity } from './IndividualEntity';
import { LegalEntity } from './LegalEntity';

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

    let entity: IEntity;

    let answer: string;

    do {

        answer = await ask('\nAre you an individual or legal entity?\n\n[1] - Individual entity\n[2] - Legal entity\n\n');
    } while (answer !== '1' && answer !== '2');

    if(answer === '1') {

        entity = new IndividualEntity(); // Polimorfismo
    } else {

        entity = new LegalEntity(); // Polimorfismo
    }

    entity.setName(await ask('\nWrite the name: '));

    let idDocument: string;

    do {

        idDocument = await ask('Write a valid identification document (CPF or CNPJ): ');
    } while (!entity.idDocumentValidate(idDocument));

    entity.setIdDocument(idDocument);

    console.log(`\nName: ${entity.getName()}\nIdentification document: ${entity.getIdDocument()}`)
}

main();

/* 
    Polimofismo: quando algo pode assumir várias formas. No exemplo desse código a variável "entity", do tipo "IEntity", pode ser instanciada tanto
    como "IndividualEntity", quanto como "LegalEntity"
*/