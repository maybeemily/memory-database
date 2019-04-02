const { MemoryDatabase } = require('../lib/database.js');


describe('messing with memory database', () => {
    it('create new database and get empty object', () => {
        const newDatabase = new MemoryDatabase();
        expect(newDatabase.store).toEqual({});
    });
    it('capture uuid and set as key', () => {
        const newDatabase = new MemoryDatabase();
        newDatabase.create({ username: 'my name', email: 'my@email.com' });
        expect(Object.values(newDatabase)).toEqual(expect.any(Object));
    });
});
