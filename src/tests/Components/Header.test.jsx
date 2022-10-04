import { Header } from '../../Components';
import { render, screen } from '@testing-library/react';
import { useAuth } from '../../Hooks/Auth/useAuth';

describe('Tests on <Header /> component', () => {

    const { onLogOut } = useAuth();

    test('should match the snapshot', () => {

        const { container } = render(
            <Header
                onLogOut={onLogOut}
            />
        )

        expect(container).toMatchSnapshot();
    })
})