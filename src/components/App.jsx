import css from './App.module.css';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      setContacts(localContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const createContact = (name, number) => {
    if (!contacts.find(el => el.name === name)) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts([newContact, ...contacts]);
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(el => el.id !== contactId));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(e =>
      e.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
