import readline from 'readline';
import { Person } from './Person';

function ask(question: string): Promise<any> {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
  
    return new Promise((resolve) => {

        rl.question(question, (response: string | number) => {

            rl.close();

            resolve(response);
        });
    });
}

async function main() {

    const name = await ask('Write your name: ');
    const gender = await ask('Write your gender: ');
    const age = await ask('Write your age: ');

    const person = new Person(name, gender, age)

    console.log(`\nName: ${person.name}\nGender: ${person.gender}\nAge: ${person.age}`);
}

main();