// DESAFIO: CRIANDO 'UNION TYPES' NA PRATICA!


type StatusLeito = 'disponivel' | 'ocupado' | 'em_higienizacao' | 'manutencao'

type TurnoEnfermagem = 'manha' | 'tarde' | 'noite'

interface Enfermeiro{
    id: string
    nome: string
    turno: TurnoEnfermagem
    leitoAtual?: StatusLeito
};

function escalaEnfermeiro(enfermeiro: Enfermeiro): void {
    console.log(`O enfermeiro ${enfermeiro.nome} está trabalhando no turno da ${enfermeiro.turno}.`)
}

const enfermeiro1: Enfermeiro = {
    id: 'enf-001',    
    nome: 'João Paulo',
    turno: 'manha'
}

escalaEnfermeiro(enfermeiro1)