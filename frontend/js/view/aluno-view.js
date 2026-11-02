/*
 * VIEW DE ALUNOS - VERSÃO 1.1
 *
 * A View continua responsável pelo DOM,
 * pelos eventos e pela apresentação dos dados.
 */

const AlunoView = {

    elementos: {},

    /*
     * Localiza os elementos da página.
     */
    inicializar() {

        AlunoView.elementos.formulario =
            document.getElementById("form-aluno");

        AlunoView.elementos.ra =
            document.getElementById("ra");

        AlunoView.elementos.nome =
            document.getElementById("nome");

        AlunoView.elementos.email =
            document.getElementById("email");

        AlunoView.elementos.curso =
            document.getElementById("curso");

        AlunoView.elementos.turma =
            document.getElementById("turma");

        AlunoView.elementos.mensagem =
            document.getElementById("mensagem");

        AlunoView.elementos.corpoTabela =
            document.getElementById("corpo-tabela-alunos");

        AlunoView.elementos.totalAlunos =
            document.getElementById("total-alunos");

        AlunoView.elementos.saidaJson =
            document.getElementById("saida-json");

        AlunoView.elementos.btnCadastrar =
            document.getElementById("btn-cadastrar");
    },

    /*
     * Configura o evento submit do formulário.
     */
    configurarFormulario(aoEnviar) {

        AlunoView.elementos.formulario.addEventListener(
            "submit",
            function (evento) {

                evento.preventDefault();

                const dados = AlunoView.lerDados();

                aoEnviar(dados);
            }
        );
    },

    /*
     * Lê os dados digitados.
     */
    lerDados() {

        return {
            ra: AlunoView.elementos.ra.value,
            nome: AlunoView.elementos.nome.value,
            email: AlunoView.elementos.email.value,
            curso: AlunoView.elementos.curso.value,
            turma: AlunoView.elementos.turma.value
        };
    },

    /*
     * Exibe mensagem de sucesso.
     */
    exibirSucesso(mensagem) {

        AlunoView.elementos.mensagem.textContent = mensagem;

        AlunoView.elementos.mensagem.className =
            "mensagem sucesso";
    },

    /*
     * Exibe mensagem de erro.
     */
    exibirErro(mensagem) {

        AlunoView.elementos.mensagem.textContent = mensagem;

        AlunoView.elementos.mensagem.className =
            "mensagem erro";
    },

    /*
     * Limpa os campos após cadastro.
     */
    limparFormulario() {

        AlunoView.elementos.formulario.reset();

        AlunoView.elementos.ra.focus();
    },

    /*
     * Altera o estado do botão durante
     * uma requisição à API.
     */
    definirCarregamento(carregando) {

        AlunoView.elementos.btnCadastrar.disabled =
            carregando;

        AlunoView.elementos.btnCadastrar.textContent =
            carregando
                ? "Cadastrando..."
                : "Cadastrar aluno";
    },

    /*
     * Reconstrói a tabela.
     */
    exibirLista(alunos) {

        const corpoTabela =
            AlunoView.elementos.corpoTabela;

        corpoTabela.textContent = "";

        AlunoView.elementos.totalAlunos.textContent =
            `Total: ${alunos.length}`;

        if (alunos.length === 0) {

            const linha =
                document.createElement("tr");

            const celula =
                document.createElement("td");

            celula.colSpan = 7;

            celula.textContent =
                "Nenhum aluno foi cadastrado.";

            linha.appendChild(celula);

            corpoTabela.appendChild(linha);

            return;
        }

        alunos.forEach(function (aluno) {

            const linha =
                document.createElement("tr");

            const valores = [
                aluno.id,
                aluno.ra,
                aluno.nome,
                aluno.email,
                aluno.curso,
                aluno.turma,
                aluno.ativo ? "Ativo" : "Inativo"
            ];

            valores.forEach(function (valor) {

                const celula =
                    document.createElement("td");

                celula.textContent = valor;

                linha.appendChild(celula);
            });

            corpoTabela.appendChild(linha);
        });
    },

    /*
     * Exibe os alunos no formato JSON.
     */
    exibirJson(textoJson) {

        AlunoView.elementos.saidaJson.textContent =
            textoJson;
    }
};