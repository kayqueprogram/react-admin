import React from 'react';
import { Edit, SimpleForm, TextInput, ListProps } from 'react-admin';

const ResourceEdit: React.FC<ListProps> = (props) => (
    <Edit title="Editar Recurso" {...props}>
        <SimpleForm>
            <TextInput source="title" label="Título" />
            <TextInput multiline source="content" label="Conteúdo" />
            <TextInput source="vid1" label="Vídeo 1" />
        </SimpleForm>
    </Edit>
);

export default ResourceEdit;
