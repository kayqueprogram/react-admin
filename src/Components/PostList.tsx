import React from 'react';
import { Create, SimpleForm, TextInput, useDataProvider } from 'react-admin';

const CreateRandomPost: React.FC = () => {
  const dataProvider = useDataProvider();

  const handleCreate = async (values: any) => {
    const randomId = Math.random().toString(36).substring(7);
    const post = {
      id: randomId,
      name: values.name,
      content: values.content,
      vid1: values.vid1
    };

    await dataProvider.create('posts', { data: post });

    // Redirecionar para a lista de posts após a criação
    window.location.href = '/#/posts';
  };

  return (
    <Create resource="posts" redirect={false}>
      <SimpleForm onSubmit={handleCreate}>
        <TextInput source="name" />
        <TextInput source="content" />
        <TextInput source="vid1" />
      </SimpleForm>
    </Create>
  );
};

export default CreateRandomPost;
