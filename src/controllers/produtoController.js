const produtos = require("../database/produtos");

exports.listar = (req, res) => {
    res.json(produtos);
};

exports.buscar = (req, res) => {
    const id = parseInt(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);
};

exports.cadastrar = (req, res) => {
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        categoria: req.body.categoria
    };

    produtos.push(novoProduto);

    res.status(201).json({
        mensagem: "Produto cadastrado",
        produto: novoProduto
    });
};

exports.atualizar = (req, res) => {
    const id = parseInt(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.categoria = req.body.categoria;

    res.json({
        mensagem: "Produto atualizado",
        produto
    });
};

exports.remover = (req, res) => {
    const id = parseInt(req.params.id);

    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produtos.splice(indice, 1);

    res.json({
        mensagem: "Produto removido com sucesso"
    });
};