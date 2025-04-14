export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Gabriel Carvalho da Silva</h1>
        <h2 className="text-2xl mb-6">Analista de Sistemas</h2>
        <p className="text-xl">
          Especialista em Integrações e Desenvolvimento de Soluções
        </p>
        <div className="mt-8 space-x-4">
          <a 
            href="mailto:gabriel.carvalhosilva@outlook.com.br"
            className="bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-100 transition-colors"
          >
            Contato
          </a>
          <a 
            href="https://linkedin.com/in/seu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
} 