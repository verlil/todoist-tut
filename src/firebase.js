import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: 'AIzaSyA4k1JD9_-FW-suqCfd0OWFL81lpDRaxdg',
    authDomain: 'todoist-tut-react-lil.firebaseapp.com',
    databaseURL: 'https://todoist-tut-react-lil.firebaseio.com',
    projectId: 'todoist-tut-react-lil',
    storageBucket: 'todoist-tut-react-lil.appspot.com',
    messagingSenderId: '95551059792',
    appId: '1:95551059792:web:9e699b40c35011c7f81e55',
    measurementId: 'G-QV9EQ5MW0G'
});


export { firebaseConfig as firebase };