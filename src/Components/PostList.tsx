import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin';
import { useFirebase } from 'react-admin-firebase';

const PostList: React.FC = () => {
    const firebase = useFirebase();

    return (
        <List resource="posts" dataProvider={firebase}>
            <Datagrid>
                <TextField source="name" />
                <TextField source="author" />
                <DateField source="publishedAt" />
                <EditButton basePath="/posts" />
                <DeleteButton basePath="/posts" />
            </Datagrid>
        </List>
    );
};

export default PostList;
