const firebaseConfig = {
  apiKey: "AIzaSyBy0_DHVWTcvc4Gi_LDu_W1TZO7vYsACdU",
  authDomain: "projeto-2mia-teste.firebaseapp.com",
  projectId: "projeto-2mia-teste",
  storageBucket: "projeto-2mia-teste.appspot.com",
  messagingSenderId: "363063695749",
  appId: "1:363063695749:web:f8a85204a380d040768cec",
  measurementId: "G-YCSHH7Z93E"
};

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', ()=>{
  const email = emailField.value;
  const password = passwordField.value;

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
    console.log("Usuário Logado : ", user)
  })
  .catch((error)=>{
    const errorMessage = error.message;
    console.log("Erro de autenticação : ", errorMessage)
  });
});



