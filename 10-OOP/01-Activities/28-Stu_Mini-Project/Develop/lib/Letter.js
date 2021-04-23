class Letter {
    constructor(char){
        this.visible = !/[a-z1-9]/.test(char);
        this.char = char;
    }


toString () {
    if(this.visible === true){
        return this.char;
    }
    return "_"
}

getSolution(){
    return this.char;
}


guess(charGuess){
    if(charGuess.toUpperCase() === this.char.toUpperCase()){
        this.visible = char;
        return true;
    }
    return false;
}
}
module.exports = Letter;
