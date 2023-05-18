// "tsc" para executar o projeto

// "ts-node app.ts" para executar diretamente o arquivo ts

// Tipos primitivos:
type Primitive = string |
                 boolean |
                 number |
                 bigint |
                 symbol |
                 null |
                 undefined;

// Tipagem implícita:
const x = 10;

const colorObj = { color: 'Black' };

// Tipagem explícita:
const y: number = 2.5; // Podemos utilizar "|" para adicionar mais de uma opção de tipo. Exemplo: "const y: number | string = 2.5; "

const animalObj: { animal: string } = { animal: 'Dog' };

const animalColor = (): string => { /* Caso haja parâmetros, eles também podem ser explicitamente tipados. Exemplo: " (color: string, animal: string) => ".
    Além disso, com "?", eles podem ser opcionais. Exemplo: " (color: string, animal?: string) => "  */

    return `${colorObj.color} ${animalObj.animal}`;
}

console.log(animalColor());

// Interface:
interface IAddress {

    address: string;
    city: string;

    showAddress(): void;
}

interface IUser {
    name: string;
    age: number;
    address?: IAddress; // Não é obrigatório

    showUser(): void;
}

const customer: IUser = {

    name: 'Gustavo',
    age: 20,
    address: {

        address: '123 Main Street',
        city: 'California',

        showAddress() {
            
            console.log(
                `Address: ${this.address}\n
                City: ${this.city}`
            );
        }
    },

    showUser() {

        console.log(
            `Name: ${this.name}\n
            Age: ${this.age}`
        );
    }
};

console.log(`Customer city: ${customer.address?.city ?? 'No city'}`); /* Precisa pôr o ponto de interrogação antes do ponto final pois, como
    o atributo "address" foi declarado com "?", o usuário pode não tê-lo e, portanto, o atributo pode ser undefined.
    Os dois pontos de interrogação que estão juntos (??) servem como tratamento caso o valor seja de fato undefined. */

customer.address!.city = 'Los Angeles'; // O Typescript pode não garantir que "address" seja não null. Mas com "!." nós podemos afirmar para ele

console.log(`New customer city: ${customer.address!.city}`);

interface IUserCrud {
    create(data: object): void;
    fetch(filter: object): IUser[];
    find(id: string): IUser;
}

class UserCrud implements IUserCrud {

    constructor(
        private name: string,
        private email: string,
        private password: string
    ) {}

    create(data: object): void {
        
        throw new Error("Method not implemented.");
    }

    fetch(filter: object): IUser[] { // Dá para utilizar "Array<IUser>" também

        throw new Error("Method not implemented.");
    }

    find(id: string): IUser {

        throw new Error("Method not implemented.");
    }
}

const user = new UserCrud('Gustavo', 'gustavo@gmail.com', '123');

let z: any; // "Qualquer coisa". Deve-se evitar, pois diminui a robustez proposta pela tipagem estática

z = 4;
z = 'abc';
z = true;

(z as string) = 'only string'; // Casting: alterando, momentâneamente, a tipagem para apenas "string"

z = 12.3; // Voltou a ser "any"

// "@ts-ignore" para ignorar o erro da próxima linha