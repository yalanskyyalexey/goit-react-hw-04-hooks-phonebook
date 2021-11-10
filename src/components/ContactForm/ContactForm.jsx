import { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm({ addContact }) {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleChange = e => {
		const { name, value } = e.currentTarget;
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'number':
				setNumber(value);
				break;
			default:
				return;
		}
	};
	const handleSubmit = e => {
		e.preventDefault();
		addContact({ name, number });
		reset();
	};

	const reset = () => {
		setName('');
		setNumber('');
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h1>Phonebook</h1>
			<label className={styles.label}>
				<span className={styles.text}>Name</span>
				<input
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
					required
					type='text'
					name='name'
					value={name}
					onChange={handleChange}
				/>
			</label>

			<label className={styles.label}>
				<span className={styles.text}>Number</span>
				<input
					type='tel'
					name='number'
					pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
					title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
					required
					value={number}
					onChange={handleChange}
				/>
			</label>
			<button className={styles.form__btn} type='submit'>
				Add contact
			</button>
		</form>
	);
}

export default ContactForm;
