interface Medicamento{
    id: string
    nome: string
    dosagem: number
    unidade: string
    observacao?: string
}

interface PrescricaoCirurgica{
    cirurgiaId: string
    medicamentos: Medicamento[]
    validadoPor: string
}

function prescreverMedicamento(dados: PrescricaoCirurgica): void {
    console.log(`Validado por: ${dados.validadoPor}`)
    dados.medicamentos.forEach((med) => {
        console.log(`Medicamento: ${med.nome} - ${med.dosagem}${med.unidade}`)
    })
}

prescreverMedicamento({
    cirurgiaId: "cir-001",
    medicamentos: [
        {
            id: "med-001",
            nome: "Propofol",
            dosagem: 200,
            unidade: "mg"
        }
    ],
    validadoPor: "Dr. Carlos Mendes"
})

