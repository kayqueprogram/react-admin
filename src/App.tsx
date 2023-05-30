import React from 'react';
import { Admin, Resource, ListGuesser, Edit, Create, SimpleForm, TextInput } from 'react-admin';
import { authProvider } from './authProvider';
import dataProvider from './firebase/firebaseConfig';
import CustomList from './Components/CustomList';

import PartialListGuesser from './Components/CreateRandomPost';

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="posts" list={CustomList} edit={ResourceEdit} create={PostCreate} />
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

const ResourceEdit: React.FC = (props) => (
  <Edit title="Editar Recurso" {...props}>
      <SimpleForm>
          <TextInput source="title" label="Título" />
          <TextInput multiline source="content" label="Conteúdo" />
          <TextInput source="vid1" label="Vídeo 1" />
      </SimpleForm>
  </Edit>
);

export default App;
