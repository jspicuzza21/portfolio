const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
  
  // Set the configuration for your app
  // TODO: Replace with your app's config object
  const firebaseConfig = {
    apiKey: 'AIzaSyCDDYYTIy1TelepQ-NQjo-CGjKgIqhAvYM',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: 'gs://scpo-cyber-portal.appspot.com/'
  };

  firebase.initializeApp(firebaseConfig);


  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = firebase.storage();

  // Create a storage reference from our storage service
  const storageRef = storage.ref();

  module.exports=storageRef;