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
├── index.js                # Servidor principal (ES Modules)
├── index.cjs               # Versão CommonJS
├── index.mjs               # Versão ES Modules explícita
├── package.json            # Configurações do projeto
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

### Executando o Servidor Mock (JSON)

O servidor HTTP que retorna os dados simulados em JSON está localizado em:

```
dist/webserver/server.js
```

Execute o servidor com:
```bash
node dist/webserver/server.js
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

1. **Inicie o servidor** usando um dos comandos acima
2. **Abra a aplicação web** no navegador
3. **Clique no botão "Buscar Filmes"** para carregar a lista
4. **Explore os filmes** disponíveis com suas sinopses

## 📚 Conceitos Demonstrados

### Arquitetura Client-Server
- **Cliente:** Navegador web executando HTML/CSS/JavaScript
- **Servidor:** Node.js servindo conteúdo via protocolo HTTP
- **Comunicação:** Requisições HTTP entre cliente e servidor

### ES Modules vs CommonJS
- **ES Modules:** Padrão moderno (`import`/`export`)
- **CommonJS:** Padrão tradicional (`require`/`module.exports`)
- **Compatibilidade:** Suporte a ambos os sistemas

### Frontend Responsivo
- **HTML Semântico:** Estrutura bem organizada
- **CSS Flexbox/Grid:** Layout responsivo
- **JavaScript Moderno:** Manipulação do DOM

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
# Executar testes (placeholder)
npm test

# Verificar versão do Node.js
node --version

# Listar dependências
npm list
```

## 📝 Próximas Melhorias

- [ ] API REST completa para filmes
- [ ] Banco de dados para persistência
- [ ] Sistema de busca e filtros
- [ ] Autenticação de usuários
- [ ] Upload de imagens de filmes
- [ ] Testes automatizados
- [ ] Deploy em produção

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

**Versão:** 1.2.0 | **Última atualização:** 2024

> 💡 **Dica:** Este projeto é ideal para estudantes que estão aprendendo desenvolvimento web e querem entender os fundamentos da comunicação HTTP e arquitetura cliente-servidor.