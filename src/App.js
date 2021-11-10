import { useState, useEffect } from 'react';
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter';

function App() {
	const [contacts, setContacts] = useState(() => {
		return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
	});
	const [filter, setFilter] = useState('');

	useEffect(() => {
		window.localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	const addContact = ({ name, number }) => {
		const contact = {
			id: uuidv4(),
			name,
			number,
		};

		const isContact = name.toLowerCase();
		contacts.some(contact => contact.name.toLowerCase() === isContact)
			? alert(`${name} is already in contacts.`)
			: setContacts(prevState => [contact, ...prevState]);
	};

	const deleteContact = uniqId => {
		setContacts(prevState =>
			prevState.filter(contact => contact.id !== uniqId)
		);
	};

	const changeFilter = e => {
		setFilter(e.currentTarget.value);
	};

	const visibleContacts = () => {
		const normalizedFilter = filter.toLowerCase();
		return contacts.filter(
			contact =>
				contact.name.toLowerCase().includes(normalizedFilter) ||
				contact.number.includes(filter)
		);
	};

	const filteredContacts = visibleContacts();
	return (
		<div className={s.appWrapper}>
			<ContactForm addContact={addContact} />
			<h2>Contacts</h2>
			<Filter value={filter} onChange={changeFilter} />
			<ContactList contacts={filteredContacts} onDelete={deleteContact} />
		</div>
	);
}

export default App;
