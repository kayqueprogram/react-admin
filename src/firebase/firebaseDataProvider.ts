import { FirebaseDataProvider } from 'react-admin-firebase';
import { firestoreClient } from './firebaseConfig';

const dataProvider = FirebaseDataProvider(firestoreClient);

export default dataProvider;
