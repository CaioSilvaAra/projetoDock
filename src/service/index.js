const { SerialPort } = require("serialport");
const WebSocket = require("ws");
const { ReadlineParser } = require("@serialport/parser-readline"); // A correção está aqui

// Configurar o WebSocket server na porta 8081
const wss = new WebSocket.Server({ port: 8081 });

// Configurar a comunicação com a porta serial
const port = new SerialPort({ path: "COM3", baudRate: 19200 });

// Usar o ReadlineParser corretamente
const parser = port.pipe(new ReadlineParser({ delimiter: "\r" })); // Correção na instância do parser

// Quando um cliente se conecta ao WebSocket
wss.on("connection", (ws) => {
  console.log("Cliente WebSocket conectado");

  // Enviar uma mensagem inicial quando o cliente se conectar
  ws.send(
    "Conectado ao servidor WebSocket e esperando dados da porta serial..."
  );

  // Quando a porta serial for aberta, enviar uma mensagem para o cliente
  port.on("open", () => {
    console.log("Porta serial aberta com sucesso!");
    ws.send("Porta serial aberta com sucesso!");
  });

  // Quando dados são recebidos da porta serial (do parser), envie para o cliente WebSocket
  parser.on("data", (data) => {
    console.log(data);
    // if (data.startsWith("R")) {
    //   port.write("HALTS\r");
    // }
    // Verifique se a mensagem é válida antes de enviar para o WebSocket
    if (data && data.trim()) {
      // Certifica que há dados não vazios
      ws.send(data); // Enviar os dados para o cliente WebSocket
    } else {
      console.log("Nenhum dado válido recebido da porta serial.");
    }
  });

  // Se ocorrer algum erro na porta serial, envie para o cliente WebSocket
  port.on("error", (err) => {
    console.error("Erro na porta serial:", err.message);
    ws.send("Erro na porta serial: " + err.message);
  });

  // Se o cliente WebSocket se desconectar
  ws.on("close", () => {
    console.log("Cliente WebSocket desconectado");
  });
});

console.log("Servidor WebSocket rodando na porta 8081");
