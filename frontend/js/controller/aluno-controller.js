const AlunoController = {

    iniciar() {

        let continuar = true;

        while (continuar) {

            const dados = AlunoView.lerDados();

            const resultado = AlunoModel.cadastrar(dados);

            if (resultado.sucesso) {

                AlunoView.exibirAluno(resultado.aluno);

            } else {

                AlunoView.exibirErro(resultado.mensagem);

            }

            continuar = AlunoView.perguntarNovoCadastro();
        }

        const alunos = AlunoModel.listar();

        AlunoView.exibirLista(alunos);

        const textoJson = JSON.stringify(alunos, null, 2);

        AlunoView.exibirJson(textoJson);

        const dadosRecuperados = JSON.parse(textoJson);

        AlunoView.exibirDadosRecuperados(dadosRecuperados);
    }
};

AlunoController.iniciar();