/**
 * @class
 * @author kennedy mwangi - mbinu.net
 */

class Animal {

    /**
     * @params {string} name - name of the animal
     * @params {color} color - color of the animal
     */

    constructor(name,color){
        this.name = name;
        this.color = color;
    };

    /**
     * Get the name of the animal
     * @return {string} The name of the animal
     */
    async getName(){
        return this.name;
    };

    /**
     * Get the color of the animal
     * @return {string} The color of the animal
     */
    async getColor(){
        return this.color;
    };

};