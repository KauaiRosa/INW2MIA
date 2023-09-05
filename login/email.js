function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebaseConfig.authDomain().singInWithEmailAndPassword(email,password)
    .then(()=>{
        alert('Usuário Logado');
    })
    .catch(err =>{
        console.log('error', error)
    })
}