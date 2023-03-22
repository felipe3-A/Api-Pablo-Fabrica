import express from 'express';
// import { pool } from './dbConect.js';
const app=express()
app.listen(3000)


// app.get('/prueba',async(req,res)=>{
//     const [resultado]=await pool.query('SELECT * FROM prueba.datos')
//     res.json(resultado)
// })

console.log('listen on port http://localhost:3000/prueba')
