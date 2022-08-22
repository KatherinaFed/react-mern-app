import React from 'react';

interface InputProps {
  setValue: (str: string) => void;
  value: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  setValue,
  value,
  type,
  placeholder,
}) => {
  return (
    <input
      onChange={(event) => setValue(event.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
