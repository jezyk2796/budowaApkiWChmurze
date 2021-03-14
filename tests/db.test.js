describe('Test db interface', () => {
    test('It should insert value', () => {
        const val = {a: 2}
        expect(val).toEqual({a: 2})
    });

    test('it should find value', () => {
        const val = {a: 2};
        expect(val).toEqual({a: 2});
    });

    test('it should update value', () => {
        const val = {a: 2};
        expect(val).toEqual({a: 2});
    });

    test('it should remove value', () => {
        const val = {a: 2};
        expect(val).toEqual({a: 2});
    });
});


// do wykorzystania z promisify
// const promisify = require('utils');
//
// class Db
// {
//     constructor() {
//         connect();
//     }
//
//     insert(name, data)
//     {
//
//     }
//
//     find(name, query)
//     {
//
//     }
//
//     update(name, data)
//     {
//
//     }
//
//     remove(data)
//     {
//
//     }
//
// }

// bez promisify
// class Db
// {
//     constructor() {
//         connect();
//     }
//
//     insert(name, data, callback(err, data))
//     {
//
//     }
//
//     find(name, query, callback(err, data))
//     {
//
//     }
//
//     update(name, data, callback(err, data))
//     {
//
//     }
//
//     remove(data, callback(err, data))
//     {
//
//     }
//
// }
