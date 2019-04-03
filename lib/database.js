const uuidv4 = require('uuid/v4');
class MemoryDatabase {
    constructor() {
        this.store = {};
    }

    create(objectToSave) {
        const randomId = uuidv4();
        const newObject = {
            ...objectToSave, _id: randomId
        };
        this.store[randomId] = newObject;
        return newObject;
    }

    findById(id) {
        const keysArray = Object.keys(this.store);
        if(keysArray.includes(id)) {
            return this.store[id];
        }
        else {
            return null;
        }
    }
    
    find() {
        const valuesArray = Object.values(this.store);
        return valuesArray;
    }

    findByIdAndUpdate(id, newObject) {
        const newObjectCopy = {
            ...newObject, _id: id
        };
        const keysArray = Object.keys(this.store);
        if(keysArray.includes(id)) {
            this.store[id] = newObjectCopy;
            return newObjectCopy;
        }
        else {
            return null;
        }
    }

    findByIdAndDelete(id) {
        const keysArray = Object.keys(this.store);
        if(keysArray.includes(id)) {
            const removed = this.store[id];
            delete this.store[id];
            return removed;
        }
        else {
            return null;
        } 
    }
    
    drop() {
        return this.store = {};
    }
}

module.exports = { MemoryDatabase };
