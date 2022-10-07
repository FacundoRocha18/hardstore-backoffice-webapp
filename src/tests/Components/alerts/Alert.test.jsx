import { Alert } from '../../../Components/alerts/Alert';
import { fireEvent, render, screen } from '@testing-library/react';
import { useAlert } from '../../../Hooks/Alerts/useAlert'

describe('Tests on <Alert /> component', () => {

	test('should match the snapshot', () => {

		const { container } = render(
			<Alert
				type='info'
				title='Inicio de sesion exitoso'
				message='Bienvenido Facundo.'
			/>
		)

		expect(container).toMatchSnapshot();
	})

	test('should show a title, message and icon (based on alert variant)', () => {
		render(
			<Alert
				type='success'
				title='Inicio de sesion exitoso'
				message='Bienvenido Facundo.'
				isActive={true}
			/>
		)

		const icon = screen.getAllByTestId('test-icon');
		const title = screen.getByTestId('test-title');
		const message = screen.getByTestId('test-message')

		console.log(typeof icon[0])

		expect(icon[0].innerHTML).toEqual(expect.any(String))
		expect(message.innerHTML).toEqual(expect.any(String))
		expect(title.innerHTML).toEqual(expect.any(String))
	})

	/* test('should close the alert', () => {

		render(
			<Alert
				type='success'
				title='Inicio de sesion exitoso'
				message='Bienvenido Facundo'
				isActive={true}
				close={close}
			/>
		)
		fireEvent.click(screen.getByTestId('test-close-button'))
		expect(isActive).toEqual(false)
	}) */
})