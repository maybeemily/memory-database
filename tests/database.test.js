const { MemoryDatabase } = require('../lib/database.js');


describe('messing with memory database', () => {
    it('create new database and get empty object', () => {
        const newDatabase = new MemoryDatabase();
        expect(newDatabase.store).toEqual({});
    });
    it('capture uuid and set as key ', () => {
        const newDatabase = new MemoryDatabase();
        const user = newDatabase.create({ username: 'my name', email: 'my@email.com' });
        expect(user._id).toEqual(expect.any(String));
    });

    it('findById function returns id', () => {
        const newDatabase = new MemoryDatabase();
        const user = newDatabase.create({ username: 'my name', email: 'my@email.com' });
        console.log(newDatabase.findById(user._id));
        expect(newDatabase.findById(user._id)).toEqual(expect.any(Object));
        expect((newDatabase.findById(user._id))._id).toEqual(user._id);
    });

});
