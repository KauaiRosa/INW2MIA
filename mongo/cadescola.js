// configura a conexão com o mongodb e o banco de dados

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
{
   useNewUrlParser:true,
   useUnifiedTopology:true,
   serverSelectionTimeoutMS: 20000
})

const db = mongoose.connection;

db.on('error ', console.error.bind(console, 'connection error: '));

db.once('open', function(){
   console.log("Estamos conectados ao mongoDB");
})
// criando uma collection dentro do mongodb

const alunosSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
});

const Aluno = mongoose.model("Aluno", alunosSchema);

const paulo  = new Aluno({
    matricula : "rm12696",
    nome : "Paulo da Silva",
    idade : 18,
    turma : "2MIA"
})

const Maria  = new Aluno({
    matricula : "rm13694",
    nome : "Maria Rosa",
    idade : 17,
    turma : "2MIA"
})

paulo.save();
Maria.save();

