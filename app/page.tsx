"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  return (
    <main>
      {messages.map((message) => (
        <div key={message.id}>
          {message.role === "user" ? "Usuário: " : "AI: "}
          {message.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar mensagem</button>
      </form>
    </main>
  );
}
