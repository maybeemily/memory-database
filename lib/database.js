const uuidv4 = require('uuid/v4');
class MemoryDatabase {
    constructor() {
        this.store = {};
    }
    //newObject = 
    create(objectToSave) {
        const randomId = uuidv4();
        const newObject = {
            ...objectToSave, _id: randomId
        };
        this.store[randomId] = newObject;
        console.log(this.store);
        return newObject;
    }

}

module.exports = { MemoryDatabase };
