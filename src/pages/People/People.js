import Header from "../../components/Header/Header";
import TablePeople from "../../components/TablePeople/TablePeople";
import AddPerson from "../../components/AddPerson/AddPerson";
import { useState, useEffect } from "react";
import {getPeople,addPerson} from "../../api/peopleApi";
import {getStructures} from "../../api/structureApi";

function People(props) {

    // Modal e editar pessoa
    const [open, setOpen] = useState(false);
    const[editing,setEditing] = useState(false); 
    //Campos para preencher
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);   
    const[structure,setStructure] = useState(0);
    // Referentes ao people e structures do Json
    const[listPeople,setPeople] = useState([]);
    const [listStructures, setStructures] = useState([]);

    useEffect(() => {     
        const getAllStructures = async () => {
            const allStructures = await getStructures();
            if(allStructures) setStructures(allStructures);
        };    
        const getAllPeople = async () => {
            const allRegisters = await getPeople();
            if(allRegisters) setPeople(allRegisters);
        };   
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

    const handleEdit = (row) => {
        setName(row.name);
        setAge(row.age);    
        setEditing(true);
        setStructure("");
    }  

    const handleCancel = () => {
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
                addPerson = {addPerson}
            />
            <TablePeople 
                handleOpen = {handleOpen}
                handleClose = {handleClose}                 
                open = {open}
                listStructures = {listStructures}
                listPeople={listPeople}
                
            />

        </>
    );
}

export default People;