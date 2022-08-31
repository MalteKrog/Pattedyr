 import Inventory from "../utils/inventoryClass.js";

 export default class Model {
    constructor(){
        this.animalList = new Inventory
        this.animalList.addGuitar("123456", "Karsten", "Løve", "M", "Savanne", "22-09-00");

        this.animalList.addGuitar("132456", "Lars", "Næsehorn", "M", "Savanne", "22-09-00");

        this.animalList.addGuitar("234567", "Sanne", "Elefant", "F", "Savanne", "22-09-00");

        this.animalList.addGuitar("345678", "Malte", "Mink", "M", "Kælder", "22-09-00");

        this.animalList.addGuitar("456789", "Mikkel", "Tiger", "F", "Savanne", "22-09-00");

        this.animalList.addGuitar("235678", "Christian", "Søløve", "M", "Havet", "22-09-00");

        this.animalList.addGuitar("397584", "Frederik", "Papegøje", "M", "Jungle", "22-09-00");
    }
 }