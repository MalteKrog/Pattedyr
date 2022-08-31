import animal from "./guitarClass.js"


export default class Inventory{
    constructor(){
        this.animals = [];
    }

    addGuitar(øretag, navn, art, køn, levested, observeringsdato){
        const newAnimal = new animal(øretag, navn, art, køn, levested, observeringsdato);
        this.animals.push(newAnimal);
    }

    getGuitar(øretag){
        for (const animal of this.animals){
            if (øretag === animal.øretag){
                return animal;
            }
        }
        //The value null represent the intentional absence of an object value;
        return null;
    }

    search(idealAnimal){
        //destructuring
        const {øretag, navn, art, køn, levested, observeringsdato} = idealAnimal;

        for (const animal of this.animals) {
            if (animal.øretag <= øretag && animal.navn===navn && animal.art===art && animal.køn===køn && animal.levested===levested && animal.observeringsdato===observeringsdato){
                return animal;
            }
        }

        return null;
    }

    allGuitars(){
        return this.animals;
    }

    deleteGuitar(øt) {
        const index=this.animals.map(animal => animal.øretag).indexOf(øt);
        this.animals.splice(index, 1); //removes guitar from guitar object list
    }
}