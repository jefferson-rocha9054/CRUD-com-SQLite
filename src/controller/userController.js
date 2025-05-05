import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient 


export const getAllUser = async (req, res)=>{
    try {
        const user = await prisma.user.findMany()

        res.status(200).json(user)
    }catch (error) {
        res.status(500).json({
            mensagem: "erro ao buscar todos os usuarios",
            error:error.message
        })
    }
}

export const newUser = async (req, res)=>{
    const {name,email} = req.body
    
    try {
        const novousuario = await prisma.user.create({
            data: {name, email}
     })
    
    res.status(201).json(novousuario)
    }catch (error) {
        res.status(500).json({
        message:"Erro ao criar o novo usuario",
            erro: error.message
        })
    }

}

export const updateUser = async (req, res) => {

    const id = req.params.id
    const {name, email} = req.body

    try {
        const updateUser = await prisma.user.update({
            where: {id: parseInt(id)},
            data: (name, email)
        })
        res.status(200).json(updateUser)
     }catch (error) {
        res.status(400).json({
            mensagem:"erro ao atualizar usuario",
            erro: error.mensage
        })
     }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id
    const deleteUser = await prisma.user.delete({
        where: { id: Number(id) },
    });

res.status(200).json(deleteUser)
}