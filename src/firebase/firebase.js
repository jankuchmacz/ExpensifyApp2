import firebase from 'firebase';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASURMENT_ID,
  }; //all code copied from add firebase to your web app (firebase.google.com)


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };





/*database.ref('notes').push({
      title: '5 note',
      body: 'This is my next next 3 note'
});*/
//database.ref('notes/-NtkB_4zvllmVHfH4SGC').remove();

/*database.ref('expenses').push({
  description: 'Rent',
  note: '1 note',
  amount: 10950,
  createdAt: 4568922
});*/
/*database.ref('expenses')
  .once('value')
  .then((snapshot)=>{
    const expenses = [];
    snapshot.forEach((childSnapshot)=>{
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });*/

/*database.ref('expenses').on('value', (snapshot)=>{
  const expenses = [];
  snapshot.forEach((childSnap)=>{
    expenses.push({
      id: childSnap.key,
      ...childSnap.val()
    });
  });
  console.log(expenses);
}, (e)=>{
  console.log('Error during data fetching: ', e);
})*/

//subscribers
//child_removed event
/*database.ref('expenses').on('child_removed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});
//child_changed
database.ref('expenses').on('child_changed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});
//child_added
database.ref('expenses').on('child_added', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});*/





/*const firebaseNotes = {
  notes: {
    12: {
      title: '12 note',
      body: 'This is my note'
    }, 
    13: {
      title: '13 note',
      body: 'This is my next note'
    }
  }
};

const notes = [{
  id: '12',
  title: '12 note',
  body: 'This is my note'
}, {
  id: '13',
  title: '13 note',
  body: 'This is my next note'
}];
database.ref('notes').set(notes);*/

/*database.ref('location/country')
  .once('value')
  .then((snapshot)=>{
    const val = snapshot.val();
    console.log(val);
  }).catch((e)=>{
    console.log(e);
  })*/



/*const onValueChange = database.ref().on('value', (snapshot)=>{
    console.log(snapshot.val());
}, (e)=> {
  console.log(e);
});
setTimeout(()=>{
  database.ref().update({
    age: 30
  })
}, 3500);

setTimeout(()=>{
  database.ref().off('value', onValueChange);
}, 7000);

setTimeout(()=>{
  database.ref().update({
    age: 31
  })
}, 10500);*/

/*database.ref().on('value', (snapshot)=> {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
}, (e)=>{
  console.log(e);
});
setTimeout(()=>{
  database.ref().update({
    name: 'Andrew'
  })
}, 3500);*/


/*database.ref().set({
    name: 'Janek K',
    age: 29,
    stressLevel: 6,
    job: {
      title: 'Software dev',
      company: 'Google'
    },
    location: {
      city: 'Cracow',
      country: 'PL'
    }
 }).then(()=>{
    console.log('Data is saved!');
 }).catch((error)=>{
    console.log(error);
 });

 //database.ref('isSingle').set(null);

 database.ref().update({
      stressLevel: 9,
      'job/company': 'Amazon',
      'location/city': 'Seattle'
 });*/

 /*database.ref().update({
   name: 'Janek Kuchmacz',
   age: 30,
   job: 'Lecturer',
   isSingle: null
 });*/


/*database.ref()
   .remove()
   .then(()=>{
      console.log('Data removed');
   }).catch((error)=>{
      console.log(error);
   });*/


 //database.ref().set('This is my data');
 //database.ref('age').set(27);
 //database.ref('location/city').set('Warsaw');

 /*database.ref('attributes').set({
      height: 180,
      weight: 80
 }).then(()=>{
   console.log('Data is saved 2!');
 }).catch((error)=>{
   console.log(error);
 })*/



