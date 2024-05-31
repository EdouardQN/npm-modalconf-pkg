import React from 'react';
import { Modal } from './types';


const ConfirmationModal: React.FC<Modal> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const style: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#dddddd',
    border: '4px solid #307470',
    boxShadow: '24px',
    padding: '16px',
  };

  return (
    <div style={style}>
      <div>
        <h2>Confirmation</h2>
        <p>Employee successfully created</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;