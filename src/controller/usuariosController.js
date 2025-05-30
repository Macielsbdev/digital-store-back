const {prisma} = require("../services");

async function criarUsuario(dados) {
    try {
        
        return await prisma.usuarios.create();
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }

    // return await prisma..findMany();
    
}

async function buscarUmUsuario(id) {
    try {

        return await prisma.usuarios.findFirst({
            where: {
                produto_id: Number(id)
            }
        });

    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.m
        }
    }
    
}

async function criarUsuario(dados) {
    try {

        return await prisma.usuarios.create({
            data: dados
            
        });

    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }



    // return await executarSQL(`INSERT INTO produtos (produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco}, ${dados.produto_desconto}, '${dados.produto_imagem}', ${dados.marca_id}, ${dados.categoria_id})`)
}

async function apagarUsuario(id){
    try {

        return await prisma.usuarios.delete({
            where : {
            usuario_id: Number(id)
            }
            
        });

    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }



    
}

async function editarUsuario(id, dados){
    try {
        return await prisma.usuarios.update({
            where : {usuario_id: Number(id)},
            data: dados
            
        })

    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }



    
}



// return await executarSQL(`DELETE FROM produtos WHERE produto_id = ${id}`)

module.exports = {
    criarUsuario
}