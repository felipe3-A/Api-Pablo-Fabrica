import {pool} from "../dbConect.js"

export const getUser =async (req,res)=>{
    try {
        const[rows]=await pool.query('SELECT *FROM prueba.users;')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'not foud'  
        })   
    } 
}

export const postUser = async (req,res)=>{
    res.send('Usuario creado')
}
export const deletetUser = async (req,res)=>{
    res.send('Usuario borrado')
}
export const putUser = async (req,res)=>{
    res.send('Usuario actualizado')
}