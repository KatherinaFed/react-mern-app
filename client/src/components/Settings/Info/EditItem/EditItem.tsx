import React, { useEffect, useRef, useState } from 'react';
import { EditItemContainer } from './style';

interface EditItemProps {
  id: string;
  name: string;
  type: string;
  handleChange: (e: any) => void;
}

const EditItem = ({ id, name, type, handleChange }: EditItemProps) => {
  const [disabled, setDisabled] = useState(true);
  const textInput = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    setDisabled(false);
    if (textInput.current) {
      textInput.current.focus();
    }
  };

  const handleSave = () => {
    setDisabled(true);
  };

  return (
    <EditItemContainer>
      <div className="name-container">
        <p>{name}</p>
      </div>

      <div className="input-container">
        <input id={id} type={type} ref={textInput} onChange={handleChange} />

        <div className="edit-button">
          <button type="submit">Save</button>
          {/* {disabled ? (
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          ) : (
            <button type="submit" onClick={handleSave}>Save</button>
          )} */}
        </div>
      </div>
    </EditItemContainer>
  );
};

export default EditItem;
