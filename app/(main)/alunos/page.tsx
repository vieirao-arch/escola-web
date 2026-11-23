'use client'
import { alunoService } from '@/services/aluno-service'
import { AlunoComRelacoes } from '@/types/escola'
import { useRouter } from 'next/navigation'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { DataTable } from 'primereact/datatable'
import { Toast } from 'primereact/toast'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function Alunos() {
    const [alunos, setAlunos] = useState<AlunoComRelacoes[]>([])
    const router = useRouter()
    const [carregando, setCarregando] = useState(false)
    const notificacao = useRef<Toast>(null)

    const buscarAlunos = useCallback(async () => {
        setCarregando(true)
        try {
            const alunosApi = await alunoService.listar()
            setAlunos(alunosApi)
        } catch {
            console.log('Erro ao carregar alunos da api.')
        } finally {
            setCarregando(false)
        }
    }, [])

    useEffect(() => {
        buscarAlunos()
    }, [buscarAlunos])
    async function deletarAluno(aluno:any) {
        confirmDialog({
            header: "Tem certeza que deseja apagar esse aluno?",
            message:`Ao excluir o aluno ${aluno.nome},não será possivel recuperar os dados`,
            icon: "pi pi-exclamation-triangle",
            rejectLabel:'Cancelar',
            acceptLabel:'Deletar',
            rejectIcon:'pi pitimes',
            acceptIcon:'pi pi-check-circle',
            accept:() => {
                alunoService.deletar(aluno.id)
                .then(() =>{
                     notificacao.current?.show({
            summary: 'Aluno cadastrado com sucesso.',
            severity: 'success',
            detail: ' O aluno foi deletado da base de dados'
            })

                })
            }

        })
    }

    return (
        <div>
            <ConfirmDialog/>
            <section className="flex justify-content-end">
                <Button link icon="pi pi-plus" outlined label="Cadastrar aluno" onClick={() => router.push('/alunos/cadastrar')}></Button>
            </section>
            <DataTable emptyMessage="Nenhum aluno encontrado" value={alunos} loading={carregando}>
                <Column header="Matricula" field="matricula"></Column>
                <Column header="Nome" field="nome"></Column>
                <Column
                    header="Data Nascimento"
                    field="nascimento"
                    body={(aluno) => new Date(aluno.nascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                ></Column>
                <Column header="E-mail" field="email"></Column>
               <Column
               header = "Opções"
               body = {(aluno) => { 
                return (
                    <div>
                        <Button icon = "pi pi pencil"label = "Editar" rounded size = "small" text severity ="info" title = "Editar alluno" />
                        <Button icon ="pi pi-trash" rounded label = "Deletar" size ="samll" text severity ="danger" title = "Deletar aluno"
                        onClick={() =>deletarAluno}
                        />
                    </div>

                )
               }}
               ></Column>
            </DataTable>
        </div>
    )
}
