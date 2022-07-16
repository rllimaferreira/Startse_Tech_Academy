import { getPeople } from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);
    // for(let i=0; i<starWarsService.length; i++) {
    //     console.log(starWarsService[i].name);
    // }

    // for(let propPerson in starWarsService[0]) {
    //     console.log(propPerson);
    // }

    for(let person of starWarsPeople) {
        console.log(person.name);
    }
}

main();