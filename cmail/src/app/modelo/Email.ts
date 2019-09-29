export class Email {
    destinatario: String;
    assunto: String;
    conteudo: String;
    dataDeEnvio: String;

    constructor({ destinatario = '', assunto = '', conteudo = '', dataDeEnvio = '' }) {
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
        this.dataDeEnvio = dataDeEnvio;
    }

    get introducaoDoConteudo() { return this.conteudo.substr(0, 140) + '...' }
}   