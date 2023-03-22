import css from './ContactItem.module.css';

import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ name, number, contactId, onDeleteContact }) {
  return (
    <>
      <li className={css.item}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          className={css.button}
          onClick={() => onDeleteContact(contactId)}
        >
          delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
