const AlunoController = {

    iniciar() {

        AlunoView.inicializar();

        AlunoView.configurarFormulario(
            function (dados) {
                AlunoController.cadastrar(dados);
            }
        );

        AlunoController.atualizarVisualizacoes();
    },

    cadastrar(dados) {

        const resultado = AlunoModel.cadastrar(dados);

        if (!resultado.sucesso) {

            AlunoView.exibirErro(resultado.mensagem);

            return;
        }

        AlunoView.exibirSucesso(
            `Aluno ${resultado.aluno.nome} cadastrado com sucesso.`
        );

        AlunoView.limparFormulario();

        AlunoController.atualizarVisualizacoes();
    },

    atualizarVisualizacoes() {

        const alunos = AlunoModel.listar();

        AlunoView.exibirLista(alunos);

        const textoJson = JSON.stringify(alunos, null, 2);

        AlunoView.exibirJson(textoJson);
    }
};

AlunoController.iniciar();