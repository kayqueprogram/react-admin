import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const CustomList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="content" />
            <TextField source="vid1" />
        </Datagrid>
    </List>
);

export default CustomList;