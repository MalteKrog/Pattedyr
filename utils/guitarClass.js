export default class animal {
    constructor (øretag, navn, art, køn, levested, observeringsdato) {
         this.øretag = øretag;
         this.navn = navn;
         this.art = art;
         this.køn = køn; 
         this.levested = levested;
         this.observeringsdato = observeringsdato;
    }

    getØretag(){
        return this.øretag;
    }

    getNavn(){
        return this.navn;
    }

    getArt(){
        return this.art;
    }

    getKøn(){
        return this.køn;
    }

    getLevested(){
        return this.levested;
    }

    getObserveringsdato(){
        return this.observeringsdato;
    }

}