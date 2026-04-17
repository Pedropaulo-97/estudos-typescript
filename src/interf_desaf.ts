interface Equipamento {
    id: string
    nome: string
    disponivel: boolean
    ultimaManutencao?: string
}

interface SalaCirurgica {
    numero: number
    equipamentos: Equipamento[]
    responsavel: string
}


function verificarEquipamentos(dados: SalaCirurgica): void {
    dados.equipamentos.forEach((equi) => {
        console.log(`Equipamento: ${equi.nome} - Disponível: ${equi.disponivel}`)
    })
}

const sala: SalaCirurgica = {
    numero: 5,
    equipamentos: [
        {
            id: "eq-001",
            nome: "Bisturi Elétrico",
            disponivel: true,
            ultimaManutencao: "2025-03-01"
        }
    ],
    responsavel: "Enf. Ana Paula"
}

verificarEquipamentos(sala);