// admin.tsx
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './firebase/firebaseDataProvider';
import  CreateRandomPost  from './Components/PostList';

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={CreateRandomPost} />
  </Admin>
);

export default App;
