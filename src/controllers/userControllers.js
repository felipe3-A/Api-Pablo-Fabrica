import {pool} from "../dbConect.js"

export const getUser =async (req,res)=>{
    try {
        const datos = await model.findAll()
        res.json(datos)
    } catch (error) {
        console.log(message(error))
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