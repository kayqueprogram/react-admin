// admin.tsx
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { authProvider } from './authProvider';
import { dataProvider } from './firebase/firebaseConfig';
import CreateRandomPost from './Components/PostList';

export const App: React.FC = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" list={CreateRandomPost} />
  </Admin>
);


