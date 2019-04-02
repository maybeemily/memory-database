const { MemoryDatabase } = require('../lib/database.js');


describe('messing with memory database', () => {
    it('create new database and get empty object', () => {
        const newDatabase = new MemoryDatabase();
        expect(newDatabase.store).toEqual({});
    });
});
