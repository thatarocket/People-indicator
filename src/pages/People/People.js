import Header from "../../components/Header/Header";
import TablePeople from "../../components/TablePeople/TablePeople";
import AddPerson from "../../components/AddPerson/AddPerson";
import { useState, useEffect } from "react";
import {getPeople,addPerson, deletePerson, editPerson} from "../../api/peopleApi";
import {getStructures} from "../../api/structureApi";

function People(props) {

    // Modal e editar pessoa
    const [open, setOpen] = useState(false);
    const[editing,setEditing] = useState(false); 
    //Campos para preencher
    const[id,setId] = useState(0);
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);   
    const[structure,setStructure] = useState("");
    // Referentes ao people e structures do Json
    const[listPeople,setPeople] = useState([]);
    const [listStructures, setStructures] = useState([]);

    const getAllStructures = async () => {
        try {
            const allStructures = await getStructures();
            setStructures(allStructures);
            return allStructures;
        }
        catch {
            return null;
        }
        
    };    
    const getAllPeople = async () => {
        try {
            const allRegisters = await getPeople();
            setPeople(allRegisters);
            return allRegisters;
        }
        catch {
            return null;
        }
    }; 

    useEffect(() => {   
        getAllStructures(); 
        getAllPeople();
    }, []);


    // Modal
    const handleOpen = () => {
        setOpen(true); 
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleAdd = async (objectPerson) => {
        await addPerson(objectPerson);
        await getAllPeople();
        setEditing(false);
        setName("");
        setAge(0);   
        setStructure("");   
    }

    const handleDelete = async (id) => {
        await deletePerson(id);
        await getAllPeople();
        setOpen(false);
    }

    const handleCancel = () => {
        setEditing(false);
        setName("");
        setAge(0);   
        setStructure("");   
    }

    const handleEdit = (row) => {
        setId(row.id);
        setName(row.nome);
        setAge(row.idade);    
        setEditing(true);
        if(listPeople && listStructures) {
            const result = (listStructures.find(structure => structure.id === row.estruturaId));
            console.log(result);
            if(result === undefined) setStructure("");
            else setStructure(result.id);        
        }        
    }  

    const saveEdit = async () => {
        let obj = {
            id:id,
            estruturaId: structure,
            nome: name,
            idade: age
        }
        await editPerson(obj);
        await getAllPeople();
        setEditing(false);
        setName("");
        setAge(0);   
        setStructure("");   
    }

    return(
        <>  
            <Header 
                text={'Cadastro de pessoas'}
            />
            <AddPerson
                editingStatus={editing}
                name={name}
                age={age}
                setName={setName}
                setAge={setAge}
                setStructure={setStructure}
                editing={editing}

                structure={structure}                
                listStructures = {listStructures}
                handleEdit={handleEdit}
                handleCancel={handleCancel}
                handleAdd = {handleAdd}
                saveEdit = {saveEdit}
            />
            <TablePeople 
                handleOpen = {handleOpen}
                handleClose = {handleClose}                 
                open = {open}
                listStructures = {listStructures}
                listPeople={listPeople}
                handleDelete={handleDelete}
                handleEdit={handleEdit}                
            />

        </>
    );
}

export default People;