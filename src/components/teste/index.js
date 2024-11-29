import React, { useState } from 'react';

function App() {
  // Estado para armazenar o valor do input
  const [inputValue, setInputValue] = useState('');
  // Estado para armazenar uma lista de mensagens
  const [messages, setMessages] = useState([]);

  // Função para lidar com a mudança no input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Função para lidar com o clique do botão
  const handleButtonClick = () => {
    if (inputValue.trim()) { // Verifica se o input não está vazio
      setMessages([...messages, inputValue]); // Adiciona a nova mensagem ao array
      setInputValue(''); // Limpa o input
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Adicionar Mensagem</button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Atualiza o estado quando o input muda
      />
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p> // Exibe todas as mensagens armazenadas
        ))}
      </div>
    </div>
  );
}

export default App;
