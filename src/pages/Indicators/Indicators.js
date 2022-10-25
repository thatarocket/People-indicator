import {useState,useEffect} from "react";
import {getPerson} from "../../api/peopleApi";
import {getIndicators,addIndicator,deleteIndicator,editIndicator} from "../../api/indicatorsApi"

import Header from "../../components/Header/Header";
import SearchID from "../../components/SearchID/SearchID";
import AddIndicator from "../../components/AddIndicator/AddIndicator";
import TableIndicators from "../../components/TableIndicators/TableIndicators";

function Indicators() {

    //Search person
    const[id,setId] = useState(0);
    const[person,setPerson] = useState({});
    const[indicPerson,setIndicPerson] = useState([]); //indicadores da pessoa
    const[nomePerson,setNomePerson] = useState("");

    //show itens
    const[adicionavel,setAdicionavel] = useState(false);

    //indicadores
    const[indicadores,setIndicadores] = useState([]);    
    const[editing,setEditing] = useState(false); 

    //TableIndicator   
    const[indicador,setIndicador] = useState("");
    const[valor,setValor] = useState(0);
    const [open, setOpen] = useState(false);

    const getOnePerson = async (id) => {
        const register = await getPerson(id);
        if(register) {
            setPerson(register);  
            return register;  
        }    
        else return null;
    }; 

    const getAllIndicators = async (id) => {
        const allIndicators = await getIndicators();
        if(allIndicators) setIndicadores(allIndicators);
        return allIndicators;
    }

    const getIndicatorsPerson = () => {
        let  indicatorPerson = [];
        for(let i = 0; i < indicadores.length; i++) {           
            if(Number(indicadores[i].idPessoa) === Number(id)) {
                indicatorPerson.push(indicadores[i]);
            }
        }
        setIndicPerson(indicatorPerson);
    }

    useEffect(() => {
        getAllIndicators();
    }, []);

    // Modal
    const handleOpen = () => {
        setOpen(true); 
    }
    const handleClose = () => {
        setOpen(false);
    }

    // PROBLEMA: Dando erro quando não encontra o id
    const handleSearch = async (id) => { 
        const result = await getOnePerson(id);
        if(!result) {
            alert("ID não encontrado");
            setAdicionavel(false);
        }
        else {
            await getAllIndicators();
            getIndicatorsPerson();
            setNomePerson(result.nome);
            setAdicionavel(true);
        }  
    }

    const handleAdd = async(objectIndicator) => {
        await addIndicator(objectIndicator);
        await getAllIndicators();
        setEditing(false);
        setIndicador("");
        setValor(0);              
    }

    const handleDelete = async (id) => {
        await deleteIndicator(id);
        await getAllIndicators();
        setOpen(false);
    }

    const handleCancel = () => {
        setEditing(false);
        setIndicador("");
        setValor(0);    
    }

    const handleEdit = (row) => {
        setIndicador(row.nome);
        setValor(row.valor);  
        setEditing(true);
    }  

    const saveEdit = async () => {
        let obj = {
            "id": id,
            "idPessoa":id,
            "nome": indicador,
            "valor": valor
        };
        await editIndicator(obj);
        await getAllIndicators();
        setEditing(false);
        setIndicador("");
        setValor(0); 
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
                adicionavel={adicionavel}
                id={id}
                nome={nomePerson}                
                setIndicador={setIndicador}
                indicador={indicador}
                setValor={setValor}
                valor={valor}
                editing={editing}
                handleAdd={handleAdd}  
                handleCancel={handleCancel}                
                saveEdit={saveEdit}                
            />
            <TableIndicators
                indicPerson={indicPerson}
                adicionavel={adicionavel}
                handleOpen={handleOpen}                
                handleClose={handleClose}                
                open={open}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                
            />
        </>
    );
}

export default Indicators;