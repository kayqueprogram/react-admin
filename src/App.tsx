// admin.tsx
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { authProvider } from './authProvider';
import  dataProvider  from './firebase/firebaseConfig';
import CreateRandomPost from './Components/PostList';

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" list={ListGuesser} />
  </Admin>
);

export default App;


