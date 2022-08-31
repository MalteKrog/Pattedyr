export default class Controller{
    initialize(model, view){
        this.model = model;
        this.view = view;
    }

        buildTemplate(animal){
            return `<div class="card">
                        <div class="">
                            <h4>Øre tag</h4>
                            <p>${animal.getØretag()}</p>
                            <h4>Navn</h4>
                            <p>${animal.getNavn()}</p>
                            <h4>Art</h4>
                            <p>${animal.getArt()}</p>
                            <h4>Køn</h4>
                            <p>${animal.getKøn()}</p>
                            <h4>Levested</h4>
                            <p>${animal.getLevested()}</p>
                            <h4>Observeringsdato</h4>
                            <p>${animal.getObserveringsdato()}</p>
                        </div>
                        <button type="button" id="${animal.getØretag()}">Delete</button>
                     </div>`
         return `<tr class="customerrow">
         <td>${animal.getØretag()}</td>
         <td>${animal.getNavn()}</td>
         <td>${animal.getArt()}</td>
         <td>${animal.getKøn()}</td>
          <td>${animal.getLevested()}</td>
          <td>${animal.getObserveringsdato()}</td>
          <td><button type="button" id="${animal.getØretag()}">Delete</button</td>
          </tr>`;
         }

        snSearch (øretag){
         const animal = this.model.animalList.getGuitar(øretag);
         let template = "";

         if (animal !== null){
            template = this.buildTemplate(animal);
         } else {
                template = `
               <tr class ="customerrow">
               <td colspan="8">Nothing to show</td>
               </tr>`;
         }
         this.view.message(template);
        }

        search (searchAnimal){
            const animal = this.model.animalList.search(searchAnimal);
            let template = "";

            if (animal !== null){
             template = this.buildTemplate(animal);
            } else {
                template = `
                <tr class ="customerrow">
                <td colspan="8">Søg ordentligt idiot</td>
                </tr>`;
             }
            this.view.message(template);
        } 

        showAllGuitars(){
            let template = "";
            for (const animal of this.model.animalList.allGuitars()){
             template += this.buildTemplate(animal);
            }
            this.view.message(template);
        }

        newGuitar(animal) {
            const doesAnimalAlreadyExist = this.model.animalList.getGuitar(animal.øretag);

            if (doesAnimalAlreadyExist === null){
             this.model.animalList.addGuitar(animal.øretag, animal.navn, animal.art, animal.køn, animal.levested, animal.observeringsdato);
             this.view.snackbar("the animal was saved"); 
             this.showAllGuitars();
            } else{
                this.view.snackbar("The animal already exist");
            }
        }

        deleteGuitar (sn) {
            this.model.animalList.deleteGuitar(sn);
            this.view.snackbar("The animal was deleted")
        }

}



