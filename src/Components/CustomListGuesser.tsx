import React from 'react';
import { ListGuesser, FieldProps } from 'react-admin';

const CustomListGuesser: React.FC<FieldProps> = (props) => {
  // Define os campos que serão exibidos
  const displayFields = ['title', 'content', 'vid1'];

  // Filtra as props dos campos que serão exibidos
  const filteredProps = Object.keys(props).reduce((acc, key) => {
    if (displayFields.includes(key)) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FieldProps);

  return <ListGuesser {...filteredProps} />;
};

export default CustomListGuesser;
