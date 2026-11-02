/*
 * CONTROLLER DE ALUNOS - VERSÃO 1.1
 *
 * O Controller coordena a comunicação entre:
 *
 * View -> Model -> Service -> API
 */
const AlunoController = {

    /*
     * Inicializa a aplicação.
     */
    async iniciar() {

        /*
         * Localiza os elementos da página.
         */
        AlunoView.inicializar();

        /*
         * Configura o envio do formulário.
         */
        AlunoView.configurarFormulario(
            async function (dados) {
                await AlunoController.cadastrar(dados);
            }
        );

        /*
         * Carrega os alunos da API ao abrir a página.
         */
        await AlunoController.atualizarVisualizacao();
    },

    /*
     * Coordena o cadastro de um aluno.
     */
    async cadastrar(dados) {

        /*
         * Realiza a validação inicial no frontend.
         */
        const validacao = AlunoModel.validar(dados);

        if (!validacao.sucesso) {

            AlunoView.exibirErro(
                validacao.mensagem
            );

            return;
        }

        /*
         * Desabilita temporariamente o botão.
         */
        AlunoView.definirCarregamento(true);

        try {

            /*
             * Envia os dados para a API.
             */
            const resultado =
                await AlunoService.cadastrar(
                    validacao.dados
                );

            /*
             * Exibe a mensagem enviada pelo backend.
             */
            AlunoView.exibirSucesso(
                resultado.mensagem
            );

            /*
             * Limpa os campos.
             */
            AlunoView.limparFormulario();

            /*
             * Atualiza a tabela usando os dados
             * oficiais do backend.
             */
            await AlunoController.atualizarVisualizacao();

        } catch (erro) {

            /*
             * Pode receber erro de validação da API,
             * RA duplicado ou erro de conexão.
             */
            AlunoView.exibirErro(
                erro.message
            );

        } finally {

            /*
             * Reativa o botão independentemente
             * do resultado da operação.
             */
            AlunoView.definirCarregamento(false);
        }
    },

    /*
     * Consulta a API e atualiza a interface.
     */
    async atualizarVisualizacao() {

        try {

            /*
             * Busca os alunos no backend.
             */
            const alunos =
                await AlunoService.listar();

            /*
             * Atualiza a tabela.
             */
            AlunoView.exibirLista(alunos);

            /*
             * Atualiza a representação JSON.
             */
            const textoJson =
                JSON.stringify(
                    alunos,
                    null,
                    2
                );

            AlunoView.exibirJson(textoJson);

        } catch (erro) {

            AlunoView.exibirErro(
                erro.message
            );

            /*
             * Mantém a interface em um estado válido
             * mesmo se o backend estiver indisponível.
             */
            AlunoView.exibirLista([]);

            AlunoView.exibirJson("[]");
        }
    }
};

AlunoController.iniciar();