import React, { useEffect, useRef, useState } from "react";

function SerialComunication() {
  const [data, setData] = useState([]); // Estado para armazenar os dados recebidos (incluindo mensagens enviadas pelo input)
  const messagesEndRef = useRef(null); // Referência para o final da lista de mensagens

  // Conectar ao servidor WebSocket
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8081");

    ws.onopen = () => {
      console.log("Conectado ao servidor WebSocket");
    };

    ws.onmessage = (event) => {
      const newData = event.data;
      setData((prevData) => [...prevData, newData]); // Adiciona nova mensagem recebida
    };

    ws.onerror = (error) => {
      console.error("Erro na conexão WebSocket:", error);
    };

    ws.onclose = () => {
      console.log("Conexão WebSocket fechada");
    };

    // Limpeza quando o componente for desmontado
    return () => {
      ws.close();
    };
  }, []);

  // Rolar automaticamente para o final quando as mensagens mudam
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  return (
    <div style={{ height: "580px", overflowY: "auto" }}>
      <h1>Comunicação Serial</h1>

      {/* Exibe as mensagens (WebSocket + input) */}
      {data.map((mensagemData, index) => (
        <div key={index}>{mensagemData}</div>
      ))}

      {/* Ref para rolar automaticamente para o final */}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default SerialComunication;
