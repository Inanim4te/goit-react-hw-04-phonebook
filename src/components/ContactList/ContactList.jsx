import css from './ContactList.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

function ContactList({ filteredContacts, onDeleteContact }) {
  return (
    <div>
      <ul className={css.list}>
        {filteredContacts().map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              contactId={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
