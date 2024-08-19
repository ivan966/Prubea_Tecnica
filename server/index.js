const express = require("express")
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "usuario_crud",
}); 
//crear
app.post("/create",(req,res)=>{
    const nombre  = req.body.nombre;
    const apellido  = req.body.apellido;
    const edad  = req.body.edad;
    const pais  = req.body.pais;

    db.query('INSERT INTO  usuarios(nombre,apellido,edad,pais) VALUES(?,?,?,?)',[nombre,apellido,edad,pais],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    }
    );

});

//mostrar
app.get("/usuarios",(req,res)=>{
    
    db.query('SELECT * FROM usuarios',
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    }
    );

});
//actualizar
app.put("/update",(req,res)=>{
    const id  = req.body.id;
    const nombre  = req.body.nombre;
    const apellido  = req.body.apellido;
    const edad  = req.body.edad;
    const pais  = req.body.pais;

    db.query('UPDATE usuarios SET nombre=?,apellido=?,edad=?,pais=? WHERE id=?',[nombre,apellido,edad,pais,id],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    }
    );

});

//eliminar
app.put("/delete/:id",(req,res)=>{
    const id  = req.params.id;

    db.query('DELETE FROM usuarios WHERE id=?',id,
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    }
    );

});

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})