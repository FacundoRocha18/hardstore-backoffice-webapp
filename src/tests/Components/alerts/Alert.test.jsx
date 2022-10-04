import { Alert } from '../../../Components';
import { render, screen } from '@testing-library/react';

describe('Tests on <Alert /> component', () => {

    test('should match the snapshot', () => {

        const { container } = render(
            <Alert
                type={'info'}
								title={'Inicio de sesion exitoso'}
								message={'Bienvenido Facundo.'}
								isActive={true}
            />
        )

        expect(container).toMatchSnapshot();
    })
})