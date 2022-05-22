

export default function Data({ id, idAssento, nome, cpf, data, setData }) {

    function changeNome(value) {
        setData(data.map((item) => {
            if (item.idAssento === idAssento) item.nome = value;
            return item;
        }));
    }
    
    function changeCpf(value) {
        setData(data.map((item) => {
            if (item.idAssento === idAssento) item.cpf = value;
            return item;
        }));
    }

    return (
        <>
            <label htmlFor="NameId">Nome do Comprador (Assento {id}):</label>
            <input type="text" value={nome} onChange={(e) => changeNome(e.target.value)} placeholder="Digite seu nome..." id="NameId" required></input>
            <label htmlFor="CpfId">CPF do Comprador (Assento {id}):</label>
            <input type="text" value={cpf} onChange={(e) => changeCpf(e.target.value)} placeholder="Digite seu nome..." id="CpfId" pattern="[0-9]{11}" required></input>
        </>
    )
}