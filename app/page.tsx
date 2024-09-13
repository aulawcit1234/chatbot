"use client";

import { useChat } from "ai/react";
import Image from "next/image";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="grid grid-rows-[min-content_1fr_min-content] bg-zinc-800 w-[440px] h-[600px] rounded-lg p-5">
        <h1 className="text-lg mb-6 text-center">AI Chatbot</h1>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center mt-6 gap-2">
            <Image
              src=""
              className="rounded-full"
              width={80}
              height={80}
              alt="Chatbot"
            />
            <p>Como posso te ajudar?</p>
          </div>
        ) : (
          <div className="max-h-[556px] space-y-5 overflow-y-auto [&::-webkit-scrollbar]:hidden">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className="flex gap-3 mb-2 text-slate-50 text-sm"
                >
                  {message.role === "user" && (
                    <div className="flex-shrink-0">
                      <Image
                        src=""
                        className="rounded-full"
                        width={40}
                        height={40}
                        alt="user"
                      />
                    </div>
                  )}
                  {message.role === "assistant" && (
                    <div className="flex-shrink-0">
                      <Image
                        src=""
                        className="rounded-full"
                        width={40}
                        height={40}
                        alt="Chatbot"
                      />
                    </div>
                  )}
                  <p className="leading-relaxed mb-4 mr-3">
                    <span className="block font-bold text-slate-50">
                      {message.role === "user" ? "Usuário" : "AI"}
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex justify-center gap-2">
          <input
            disabled={isLoading}
            className="text-black p-2 rounded w-full"
            value={input}
            placeholder="Faça uma pergunta"
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-blue-500 px-3 py-2 rounded">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}