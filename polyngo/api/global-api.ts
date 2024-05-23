import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export async function fetchIdiomas() {
  try {
    const url = `${baseURL}/idiomas`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar informações sobre idiomas");
  }
}

export async function fetchFormacoes() {
  try {
    const url = `${baseURL}/formacoes`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar informações sobre formações");
  }
}

export async function fetchFormacaoById(id: string) {
  try {
    const url = `${baseURL}/formacoes/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar informações da formação com ID ${id}`);
  }
}


/*

EXEMPLO DE FUNÇÃO DE CHAMADA DE DADOS DE ALGUM ENDPOINT

  const [dados, setDados] = useState([])

   useEffect(() => {
     // Função para buscar os idiomas
     const fetchData = async () => {
       try {
         const dadosObtidos = await fetchAlgo();
         setDados(dadosObtidos);
       } catch (error) {
         console.error("Erro ao buscar os dados:");
       }
     };

     fetchData();
     
    }, []);
    console.log(dados);
    
*/