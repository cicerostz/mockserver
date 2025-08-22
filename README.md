# 🎬 MockServer - Servidor Simulado para Filmes

> Servidor simulado para prática de protocolo de comunicação HTTP (arquitetura de rede client-server)

## 📋 Descrição

Este projeto é um servidor simulado desenvolvido em Node.js que demonstra conceitos fundamentais de desenvolvimento web, incluindo:

- **Servidor HTTP nativo** usando ES Modules
- **Aplicação web frontend** com lista de filmes
- **Comunicação client-server** através de protocolos HTTP
- **Interface responsiva** para exibição de dados

## 🚀 Funcionalidades

### Backend (Servidor)
- ✅ Servidor HTTP nativo do Node.js
- ✅ Suporte a ES Modules (JavaScript moderno)
- ✅ Servindo arquivos estáticos
- ✅ API REST com dados JSON (webservice)
- ✅ Configuração CORS para requisições cross-origin
- ✅ Múltiplas portas (3000 para frontend, 3001 para API)
- ✅ Configuração de hostname e porta

### Frontend (Aplicação Web)
- ✅ Interface para lista de filmes
- ✅ Dados simulados (mock data) de filmes brasileiros
- ✅ Design responsivo com CSS
- ✅ Interação JavaScript para buscar filmes
- ✅ Exibição de título, gênero e sinopse

## 🎭 Filmes Disponíveis

A aplicação inclui dados simulados de filmes brasileiros populares:

1. **Ainda Estou Aqui** - Drama/Suspense
2. **A Substância** - Drama/Terror  
3. **Robô Selvagem** - Aventura/Animação/Comédia/Família



## 🔌 API Endpoints

### GET /
**URL:** `http://localhost:3001/`

**Resposta:**
```json
[
  {
    "id": "1d4f66c6-c48b-4743-ba6c-555aaafbfd0f",
    "title": "Ainda Estou Aqui",
    "genre": "Drama, Suspense",
    "synopsis": "Ainda Estou Aqui é uma adaptação..."
  },
  {
    "id": "3a15945f-95a0-476c-9187-9de5d2547137",
    "title": "A Substância",
    "genre": "Drama, Terror",
    "synopsis": "Em A Substância, Elisabeth Sparkle..."
  },
  {
    "id": "2da13f8f-9c45-4970-af69-1e221435b7ab",
    "title": "Robô Selvagem",
    "genre": "Aventura, Animação, Comédia, Família",
    "synopsis": "Uma nave naufraga numa terra..."
  }
]
```

**Headers de Resposta:**
- `Content-Type: application/json`
- `Access-Control-Allow-Origin: *` (CORS habilitado)

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **ES Modules** - Sistema de módulos moderno
- **HTML5** - Estrutura da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Interatividade frontend
- **Express** - Framework web (dependência)
- **TypeScript** - Tipagem estática (dependência de desenvolvimento)

## 📁 Estrutura do Projeto

```
mockserver/
├── dist/                    # Aplicação web frontend
│   ├── index.html          # Página principal
│   ├── app.js              # Lógica JavaScript
│   ├── styles.css          # Estilos CSS
│   └── banner.png          # Imagem banner
├── webservice/             # API/Webservice backend
│   └── server.js           # Servidor API com dados JSON
├── index.js                # Servidor principal (ES Modules)
├── index.cjs               # Versão CommonJS
├── index.mjs               # Versão ES Modules explícita
├── package.json            # Configurações do projeto
├── package-lock.json       # Lock de dependências
├── .gitignore              # Arquivos ignorados pelo Git
├── .nvmrc                  # Versão do Node.js
└── README.md               # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** (versão especificada no `.nvmrc`)
- **npm** (gerenciador de pacotes)

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/cicerostz/mockserver.git
cd mockserver
```

2. **Instale as dependências:**
```bash
npm install
```

### Execução

**Opção 1: Frontend com Serve (Recomendado)**
```bash
npm start
# Serve a aplicação frontend na porta 3000
```

**Opção 2: API/Webservice Backend**
```bash
node webservice/server.js
# Inicia a API na porta 3001
```

**Opção 3: Servidor ES Modules Simples**
```bash
node index.js
```

**Opção 4: Servidor CommonJS**
```bash
node index.cjs
```

**Opção 5: Servidor ES Modules Explícito**
```bash
node index.mjs
```

### Executando o Servidor Mock (JSON)

O servidor HTTP que retorna os dados simulados em JSON está localizado em:

```
webservice/server.js
```

O servidor utiliza ES Modules e já inclui cabeçalhos CORS para permitir requisições de qualquer origem.

Execute o servidor com:
```bash
node webservice/server.js
```

### Como acessar os dados JSON

Após iniciar o servidor, acesse no navegador ou via curl:

- **Endpoint JSON:** `http://localhost:3001/`

Exemplo usando curl:
```bash
curl http://localhost:3001/
```

O JSON será exibido na resposta HTTP. O terminal exibe apenas logs do servidor.

### Aplicação Web
Navegue até a pasta `dist/` e abra `index.html` para visualizar a interface web (se aplicável).

## 🌐 Como Usar a Aplicação

**Para o Frontend:**
1. **Inicie o servidor frontend:**
   ```bash
   npm start
   ```

2. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

3. **Interaja com a aplicação:**
   - Clique no botão "Buscar Filmes"
   - Veja a lista de filmes carregada dinamicamente

**Para a API/Webservice:**
1. **Inicie o servidor da API:**
   ```bash
   node webservice/server.js
   ```

2. **Acesse a API:**
   ```
   http://localhost:3001
   ```

3. **Teste a API:**
   - Faça requisições GET para obter dados JSON
   - Use ferramentas como Postman, curl ou fetch() no JavaScript

## 📚 Conceitos Demonstrados

### 🏗️ **Arquitetura Client-Server**
- Separação clara entre cliente (frontend) e servidor (backend)
- Comunicação via protocolo HTTP
- Servindo conteúdo estático e dinâmico
- API REST para comunicação entre serviços

### 📦 **ES Modules vs CommonJS**
- Implementação moderna com `import/export`
- Compatibilidade com versões anteriores (CommonJS)
- Configuração `"type": "module"` no package.json

### 🌐 **API REST e CORS**
- Endpoint JSON para dados estruturados
- Configuração CORS para requisições cross-origin
- Separação de responsabilidades (frontend/backend)

### 🎨 **Frontend Responsivo**
- Interface web interativa
- Manipulação do DOM com JavaScript
- CSS responsivo para diferentes dispositivos

### 🔧 **Múltiplos Servidores**
- Frontend servido na porta 3000
- API/Backend na porta 3001
- Arquitetura de microserviços simplificada

## 🎯 Objetivos Educacionais

Este projeto foi desenvolvido para ensinar:

- ✅ **Protocolos HTTP** e comunicação web
- ✅ **Arquitetura cliente-servidor**
- ✅ **ES Modules** e JavaScript moderno
- ✅ **Desenvolvimento full-stack** básico
- ✅ **Manipulação do DOM** com JavaScript
- ✅ **Design responsivo** com CSS
- ✅ **Versionamento** com Git

## 🔧 Scripts Disponíveis

```bash
# Iniciar servidor frontend (porta 3000)
npm start

# Executar testes (placeholder)
npm test

# Verificar versão do Node.js
node --version

# Listar dependências
npm list
```

## 📝 Próximas Melhorias

- [x] ~~API REST completa para filmes~~ ✅ **Implementado**
- [x] ~~Configuração CORS~~ ✅ **Implementado**
- [x] ~~Múltiplos servidores~~ ✅ **Implementado**
- [ ] Implementação de rotas dinâmicas (POST, PUT, DELETE)
- [ ] Sistema de autenticação básico
- [ ] Banco de dados simulado (JSON file)
- [ ] Sistema de busca e filtros
- [ ] Validação de dados de entrada
- [ ] Upload de imagens de filmes
- [ ] Testes automatizados
- [ ] Docker containerization
- [ ] Deploy em produção
- [ ] Documentação da API com Swagger

## 👨‍💻 Autor

**Cícero Silva**
- GitHub: [@cicerostz](https://github.com/cicerostz)

## 📄 Licença

Este projeto está sob a licença **ISC**.

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a [documentação](#-como-executar)
2. Abra uma [issue](https://github.com/cicerostz/mockserver/issues)
3. Entre em contato com o autor

---

**Versão:** 1.2.0 | **Última atualização:** 22/08/2025

> 💡 **Dica:** Este projeto é ideal para estudantes que estão aprendendo desenvolvimento web e querem entender os fundamentos da comunicação HTTP e arquitetura cliente-servidor.