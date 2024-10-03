import React from 'react';

const DeleteConfirmation = ({ onDeleteConfirm, onDeleteCancel }) => {
  return (
    <div className="modal">
      <h2>Delete Node</h2>
      <p>Are you sure you want to delete this node?</p>
      <button onClick={onDeleteConfirm}>Yes</button>
      <button onClick={onDeleteCancel}>No</button>
    </div>
  );
};

export default DeleteConfirmation;
