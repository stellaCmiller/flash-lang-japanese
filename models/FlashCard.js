export default class FlashCard {
    constructor(english, reading, kanji){
        this.english = english;
        this.reading = reading;
        this.kanji = kanji;
    }

    display(){
        console.log("Kill me, I want this to be over");
        console.log(this.english + "" + this.reading + "" + this.kanji);
    }
}