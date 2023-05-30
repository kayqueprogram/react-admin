import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, Create, SimpleForm, TextInput } from 'react-admin';
import { authProvider } from './authProvider';
import dataProvider from './firebase/firebaseConfig';
import CustomListGuesser from './Components/CustomListGuesser';
import CreateRandomPost from './Components/CreateRandomPost';

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="posts" list={CustomListGuesser} edit={EditGuesser} create={PostCreate} />
  </Admin>
);

const PostCreate: React.FC = (props) => (
  <Create title="Criar um Post" {...props}>
    <SimpleForm>
      <TextInput source='title' label='Título' />
      <TextInput multiline source='content' label='Conteúdo' />
    </SimpleForm>
  </Create>
);

export default App;
