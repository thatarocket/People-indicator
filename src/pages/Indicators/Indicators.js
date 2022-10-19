import Header from "../../components/Header/Header";
import SearchID from "../../components/SearchID/SearchID";
import {useState,useEffect} from "react";
import {getPeople} from "../../api/peopleApi";
import AddIndicator from "../../components/AddIndicator/AddIndicator";
import TableIndicators from "../../components/TableIndicators/TableIndicators";

function Indicators() {

    const[id,setId] = useState(0);
    const[listPeople,setPeople] = useState([]);
    const[indicadores,setIndicadores] = useState([]);
    const[nome,setNome] = useState("");
    const[adicionavel,setAdicionavel] = useState(false);
    const[indicador,setIndicador] = useState("");
    const[valor,setValor] = useState(0);

    const [open, setOpen] = useState(false);

    const getAllPeople = async () => {
        const allRegisters = await getPeople();
        if(allRegisters) setPeople(allRegisters);
    }; 

    useEffect(() => {
        getAllPeople();
    }, []);

     // Modal
    const handleOpen = () => {
        setOpen(true); 
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleSearch = async (id) => {
        await getAllPeople();
        const idNumber = Number(id);
        const result = (listPeople.find(person => person.id === idNumber));    
        if(!result) {
            alert("ID não encontrado");
            setAdicionavel(false);
        }
        else {
            setIndicadores(result.indicadores);
            setNome(result.nome);
            setAdicionavel(true);
        }
    }

    const handleAdd = async() => {
        
    }

    const handleDelete = async (id) => {
        // await deletePerson(id);
        // await getAllPeople();
        // setOpen(false);
    }

    const handleCancel = () => {
        // setEditing(false);
        // setName("");
        // setAge(0);   
        // setStructure("");   
    }

    const handleEdit = (row) => {
        // setId(row.id);
        // setName(row.nome);
        // setAge(row.idade);    
        // setEditing(true);
        // if(listPeople && listStructures) {
        //     const result = (listStructures.find(structure => structure.id === row.estruturaId));
        //     console.log(result);
        //     if(result === undefined) setStructure("");
        //     else setStructure(result.id);        
        // }        
    }  

    const saveEdit = async () => {
        // let obj = {
        //     id:id,
        //     estruturaId: structure,
        //     nome: name,
        //     idade: age
        // }
        // await editPerson(obj);
        // await getAllPeople();
        // setEditing(false);
        // setName("");
        // setAge(0);   
        // setStructure("");   
    }


    return(
        <>  
            <Header 
                text={'Indicadores'}
            />
            <SearchID
                setId={setId}
                id={id}
                handleSearch={handleSearch}
            />
            <AddIndicator
                nome={nome}
                setIndicador={setIndicador}
                Indicador={indicador}
                setValor={setValor}
                valor={valor}
                handleAdd={handleAdd}
                adicionavel={adicionavel}
            />
            <TableIndicators
                adicionavel={adicionavel}
                indicadores={indicadores}
                handleOpen={handleOpen}
                handleClose={handleClose}
                open={open}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </>
    );
}

export default Indicators;