"use client"
import { InputText } from "primereact/inputtext";
import { useState } from "react";
export default function CadastrarAluno() {
const [matricula, setMatricula] = useState('')
const [nome, setNome] = useState('')
const [nascimento, setNascimento] = useState('')
const [email, setEmail] = useState('')

    return (
        <div>
            <h3>Cadastrar novo Aluno</h3>
            <form className="flex flex-column gap-2">
                <div className="flex flex-column ">
                    <label htmlFor="matricula" className="font-semibold">Matrícula</label>
                    <InputText
                    value = {matricula} onChange={(evento) => setMatricula(e.target.value)}
                     id="matricula" placeholder="Digite a matrícula do aluno" maxLength={10}/>
                </div>
                <div className="flex flex-column ">
                    <label htmlFor="matricula" className="font-semibold">Nome</label>
                    <InputText
                    value = {nome} onChange={(evento) => setNome(e.target.value)}
                     id="nome" placeholder="Digite o nome do aluno" maxLength={100}/>
                </div>
                <div className="flex flex-column ">
                    <label htmlFor="nascimento" className="font-semibold">Data de Nascimento</label>
                    <InputText
                    value = {nascimento} onChange={(evento) => setNascimento(e.target.value)}
                     id="nascimento" placeholder="Digite a data de nascimento do aluno" maxLength={10}/>
                </div>
                <div className="flex flex-column ">
                    <label htmlFor="email" className="font-semibold">E-mail</label>
                    <InputText
                    value = {email} onChange={(evento) => setEmail(e.target.value)}
                     id="email" placeholder="Digite o email do aluno" type="email"/>
                </div>
            </form>
        </div>
    )
}