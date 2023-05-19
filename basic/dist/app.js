// "tsc" para executar o projeto
var _a, _b;
// Tipagem implícita:
const x = 10;
const colorObj = { color: 'Black' };
// Tipagem explícita:
const y = 2.5; // Podemos utilizar "|" para adicionar mais de uma opção de tipo. Exemplo: "const y: number | string = 2.5; "
const animalObj = { animal: 'Dog' };
const animalColor = () => {
    return `${colorObj.color} ${animalObj.animal}`;
};
console.log(animalColor());
const customer = {
    name: 'Gustavo',
    age: 20,
    address: {
        address: '123 Main Street',
        city: 'California',
        showAddress() {
            console.log(`Address: ${this.address}\n
                City: ${this.city}`);
        }
    },
    showUser() {
        console.log(`Name: ${this.name}\n
            Age: ${this.age}`);
    }
};
console.log(`Customer city: ${(_b = (_a = customer.address) === null || _a === void 0 ? void 0 : _a.city) !== null && _b !== void 0 ? _b : 'No city'}`); /* Precisa pôr o ponto de interrogação antes do ponto final pois, como
    o atributo "address" foi declarado com "?", o usuário pode não tê-lo e, portanto, o atributo pode ser undefined.
    Os dois pontos de interrogação que estão juntos (??) servem como tratamento caso o valor seja de fato undefined. */
customer.address.city = 'Los Angeles'; // O Typescript pode não garantir que "address" seja não null. Mas com "!." nós podemos afirmar para ele
console.log(`New customer city: ${customer.address.city}`);
class UserCrud {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    create(data) {
        throw new Error("Method not implemented.");
    }
    fetch(filter) {
        throw new Error("Method not implemented.");
    }
    find(id) {
        throw new Error("Method not implemented.");
    }
}
const user = new UserCrud('Gustavo', 'gustavo@gmail.com', '123');
let z; // "Qualquer coisa". Deve-se evitar, pois diminui a robustez proposta pela tipagem estática
z = 4;
z = 'abc';
z = true;
z = 'only string'; // Casting: alterando, momentâneamente, a tipagem para apenas "string"
z = 12.3; // Voltou a ser "any"
// "@ts-ignore" para ignorar o erro da próxima linha
//# sourceMappingURL=app.js.map