import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const AreaAluno = () => {
  const { isAuthenticated } = useAuth();

  // Verifica se o usuário está autenticado
  if (!isAuthenticated) {
    // Se não estiver autenticado, redireciona para a página de login
    return <Navigate to="/login" replace />;
  }

  // Se o usuário estiver autenticado, exibe o conteúdo da área do aluno
  return (
    <div>
      <h2>Área do Aluno</h2>
      {/* Adicione aqui o conteúdo específico da área do aluno */}
    </div>
  );
};

export default AreaAluno;
