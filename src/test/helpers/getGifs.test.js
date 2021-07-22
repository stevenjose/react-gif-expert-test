import { getGifs } from "../../helpers/getGifs";

describe('test', () => {
    test('probar el helpers que regrese un array de elementos', async () => {
        const resp = await getGifs('One Punch');
        expect( resp.length ).toBe( 10 );
    });

    test('probar el helpers cuando no se envia parametro', async () => {
        const resp = await getGifs('');
        expect( resp.length ).toBe( 0 );
    });
});