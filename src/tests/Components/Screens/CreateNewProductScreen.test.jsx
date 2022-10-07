import { CreateNewProduct } from '../../../Components';
import { render, screen } from '@testing-library/react';

describe('Tests on <CreateNewProduct /> component', () => {

	test('should match the snapshot', () => {

		const { container } = render(
			<CreateNewProduct />
		)

		expect(container).toMatchSnapshot();
	})
})