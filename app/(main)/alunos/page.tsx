import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default function Alunos () {
    const alunos =[
        {matricula:'202601',nome:'thiago vieira',dataNasc:'2000-05-06',email:'thiagovieira@gmail.com'},
        {matricula:'202602',nome:'thiago vieira',dataNasc:'2000-05-06',email:'thiagovieira@gmail.com'},
        {matricula:'202603',nome:'thiago vieira',dataNasc:'2000-05-06',email:'thiagovieira@gmail.com'},
    ]
    return (
        <DataTable emptyMessage='Nenhum aluno encontrado' value={alunos}>
            
            <Column header ='Matricula' field="matricula"></Column>
            <Column header ='Nome' field="nome"></Column>
            <Column header ='Data Nascimento' field="dataNasc"></Column>
            <Column header ='E-mail' field="email"></Column>
        </DataTable>
    )
    
}