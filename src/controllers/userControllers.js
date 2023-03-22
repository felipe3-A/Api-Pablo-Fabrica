import { pool} from "../dbConect.js"

export const getUsers =async (req,res)=>{
    const [result]=await pool.query('SELECT *FROM prueba.datos;')
    res.json(result)
}
export const postUsers = async (req,res)=>{
    res.send('Usuario creado')
}
export const deletetUsers = async (req,res)=>{
    res.send('Usuario borrado')
}
export const putUsers = async (req,res)=>{
    res.send('Usuario actualizado')
}