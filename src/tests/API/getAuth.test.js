import { getAuth } from '../../API'


describe('Test on API caller getAuth', () => {

    test('should return an object with Login data (status, message, token, username)', async () => {

        const { status, message, token, username } = await getAuth('54591334', '54591334')

        console.log({ status, message, token, username })

        expect( status ).toBeTruthy();
        expect( message ).toEqual( 'Inicio de sesión exitoso, bienvenido Facundo Rocha' );
        expect( token ).toEqual( expect.any(String) );
        expect( username ).toEqual( 'Facundo Rocha' );
    })
})