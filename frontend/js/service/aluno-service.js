/*
 * SERVICE DE ALUNOS - VERSÃO 1.1
 *
 * O AlunoService é responsável pela comunicação
 * entre o frontend e a API.
 *
 * O Controller não precisa conhecer os detalhes
 * do fetch() e dos cabeçalhos que serão enviados.
 */
const AlunoService = {

    /*
     * Endereço base dos endpoints relacionados
     * aos alunos.
     */
    URL_API: "http://localhost:3000/api/alunos",

    /*
     * Processa uma resposta recebida da API.
     */
    async processarResposta(resposta) {

        try {

            /*
             * Converte o JSON recebido em
             * um objeto JavaScript.
             */
            const resultado = await resposta.json();

            /*
             * A propriedade ok será verdadeira para
             * respostas entre 200 e 299.
             */
            if (!resposta.ok) {

                /*
                 * Utiliza a mensagem enviada pela API.
                 *
                 * Se ela não existir, utiliza uma
                 * mensagem padrão.
                 */
                throw new Error(
                    resultado.mensagem ||
                    "Não foi possível concluir a operação."
                );
            }

            /*
             * Devolve o objeto JavaScript para quem
             * chamou o Service.
             */
            return resultado;

        } catch (erro) {

            /*
             * Se o servidor retornar um JSON inválido.
             */
            if (erro instanceof SyntaxError) {
                throw new Error(
                    "O servidor retornou uma resposta inválida."
                );
            }

            throw erro;
        }
    },

    /*
     * Executa uma requisição e trata possíveis
     * problemas de conexão com o backend.
     */
    async requisitar(opcoes = {}) {

        let resposta;

        try {

            /*
             * fetch() envia a requisição para a API.
             *
             * O segundo argumento contém as opções,
             * como método, cabeçalhos e corpo.
             */
            resposta = await fetch(
                AlunoService.URL_API,
                opcoes
            );

        } catch (erro) {

            /*
             * Esse bloco será executado quando não for
             * possível estabelecer comunicação.
             *
             * Exemplos:
             * - servidor desligado;
             * - endereço incorreto;
             * - problema de rede;
             * - bloqueio de CORS.
             */
            throw new Error(
                "Não foi possível conectar ao servidor."
            );
        }

        /*
         * Depois de receber a resposta, encaminhamos
         * seu processamento para outro método.
         */
        return AlunoService.processarResposta(resposta);
    },

    /*
     * Solicita a lista de alunos.
     *
     * Como GET é o método padrão do fetch(),
     * poderíamos omitir a propriedade method.
     */
    async listar() {

        const resultado = await AlunoService.requisitar({
            method: "GET"
        });

        return resultado.dados;
    },

    /*
     * Envia os dados de um novo aluno para a API.
     */
    async cadastrar(dados) {

        const resultado = await AlunoService.requisitar({
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(dados)
        });

        return resultado;
    }
};