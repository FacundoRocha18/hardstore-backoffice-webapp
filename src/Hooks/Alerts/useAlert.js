import { useState, useEffect } from "react";

export const useAlert = () => {

	const [isActive, setIsActive] = useState(false);

	const [title, setTitle] = useState('Some title');

	const [message, setMessage] = useState('Some message');

	const [type, setType] = useState(null);

	useEffect(() => {

		const timer = setTimeout(() => close(), 3000);

		return () => {
			clearTimeout(timer);
		}
	})

	const show = (title, message, type) => {

		setTitle(title);
		setMessage(message);
		setType(type);
		setIsActive(true);
	};

	const close = () => setIsActive(false);

	return ({
		isActive,
		title,
		message,
		type,
		openAlert: show,
		closeAlert: close
	})
}
