'use client'

import { alunoService } from "@/services/aluno-service"
import { useParams } from "next/navigation"
import { Toast } from "primereact/toast"
import { useCallback, useEffect, useState } from "react"

export default function AlunoDetalhes (){
    const parametros = useParams ()
    const [buscando, setBuscando]= useState(false)
    const [aluno, setAluno] = useState()
    const notificacao = useRef<Toast>(null)
    
        const buscarAluno = useCallback(async () => {
            setBuscando(true)
            try {
                const aluno = await alunoService.buscarPorId(Number(parametros.id))
              setAluno(aluno)
            } catch {
                notificacao.current?.show({
                    summary: 'Erro ao carregar os dados!',
                    severity: 'warn',
                    detail: 'Não foi possível carregar os dados do aluno.'
                })
            } finally {
                setBuscando(false)
            }
        }, [parametros])
    
        useEffect(() => {
            buscarAluno()
        }, [buscarAluno])

    return (
        <div>
            <Toast ref={Notification}/>
        </div>
    )
}

function useRef<T>(arg0: null) {
    throw new Error("Function not implemented.")
}
