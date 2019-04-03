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
        expect(newDatabase.findById(user._id)).toEqual(expect.any(Object));
        expect((newDatabase.findById(user._id))._id).toEqual(user._id);
    });
    it('returns objects in the store', () => {
        const newDatabase = new MemoryDatabase();
        const user = newDatabase.create({ username: 'my name', email: 'my@email.com' });
        const user2 = newDatabase.create({ username: 'my name', email: 'my@email.com' });
        const user3 = newDatabase.create({ username: 'my name', email: 'my@email.com' });
        expect(newDatabase.find()).toEqual(expect.any(Array));
        expect(newDatabase.find()).toContain(user);
        expect(newDatabase.find()).toContain(user2);
        expect(newDatabase.find()).toContain(user3);
    });
    it('findByIdAndUpdate', () => {
        const newDatabase = new MemoryDatabase();
        const user = newDatabase.create({ username: 'my name', email: 'my@email.com' });
        const updatedUser = newDatabase.findByIdAndUpdate(user._id, { username: 'spongebob', email: 'spongebob@email.com' });
        expect(updatedUser.username).toEqual('spongebob');
    });
    it('findByIdAndUpdate returns null if ID doesnt exist', () => {
        const newDatabase = new MemoryDatabase();
        const updatedUser = newDatabase.findByIdAndUpdate(123456, { username: 'spongebob', email: 'spongebob@email.com' });
        expect(updatedUser).toEqual(null);
    });
    it('findByIdAndDelete', () => {
        const newDatabase = new MemoryDatabase();
        const user = newDatabase.create({ username: 'my name', email: 'my@email.com' });
        const deletedUser = newDatabase.findByIdAndDelete(user._id);
        expect(deletedUser).toEqual(user);
    });
    it('findByIdAndDelete returns null if ID doesnt exist', () => {
        const newDatabase = new MemoryDatabase();
        const deletedUser = newDatabase.findByIdAndDelete(123456);
        expect(deletedUser).toEqual(null);
    });

});
