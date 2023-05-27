import { FirebaseDataProvider } from 'react-admin-firebase';
import { firestoreClient, firebaseAppAuth } from './firebaseConfig';

const dataProvider = FirebaseDataProvider(firestoreClient, firebaseAppAuth);

export default dataProvider;
