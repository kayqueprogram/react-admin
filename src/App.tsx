// admin.tsx
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './firebase/firebaseDataProvider';
import  PostList  from './Components/PostList';

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;
