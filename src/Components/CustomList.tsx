import React from 'react';
import { List, Datagrid, TextField, ListProps } from 'react-admin';

const CustomList: React.FC<ListProps> = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="content" />
            <TextField source="vid1" />
        </Datagrid>
    </List>
);

export default CustomList;
