import Firebase from 'firebase';

export class FirebaseInstance {
  constructor() {
    let firebaseConfig = {
      apiKey: "D9aH2pulnTwWRWn5rdsylve7S9P40pcoDaUEBRz0",
      databaseURL: ''
    };

    this.firebase = Firebase.initializeApp(firebaseConfig);
    this.ref = this.firebase.database().ref();
  }
}
