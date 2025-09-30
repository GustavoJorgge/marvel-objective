# Marvel Objective — Entrega de Teste

### Resumo rápido
- Projeto: Single Page App React + TypeScript que lista personagens (API Marvel) e mostra detalhe completo do personagem.
- Objetivo: Seguir protótipo pré estabelecido no Teste Técnico, seguindo as regras de negocio e identidade visual.

### Observações quanto a bibliotecas
- Utilizei o React-router-dom para melhorar a troca de paginas home -> characterDetail

### Demonstração
- Deploy (Vercel): <[Marvel Objective](https://marvel-objective-peach.vercel.app/)>

### Principais funcionalidades
- Busca por nome com debounce.
- Paginação (10 itens/página) responsiva — mobile mostra até 5 itens.
- Tela de detalhe com imagem, descrição, contadores (comics / séries / eventos / histórias) e lista.
- Layout responsivo e acessível.
- Tratamento de erros e estados de loading.
- Deploy contínuo via Vercel.

### Tech stack
- Front: React + TypeScript (Vite)
- Estilos: CSS Modules
- HTTP: axios
- Deploy: Vercel

### Executando Projeto
1. Instale dependências
   ```npm install```

2. Duplique o arquivo .env.example e cole suas chaves Marvel:
   Exemplo:
   ```
   VITE_MARVEL_PUBLIC_KEY=your_public_key
   VITE_MARVEL_PRIVATE_KEY=your_private_key
   VITE_BASE_URL=/
   ```

3. Rodar em desenvolvimento:
   npm run dev
   - Geralemente em http://localhost:5173

4. Build de produção:
   npm run build
   npm run preview


Melhorias futuras (curtos itens de roadmap)
- Criar componente reutilizavel para aumentar/diminuir lista com dados dos personagens.
- Cache / React Query para reduzir chamadas repetidas.
- Skeleton loaders e lazy-loading de imagens por IntersectionObserver.
- Suporte a imagens otimizadas (responsive srcset / WebP).


# Obrigado pela oportunidade! Aguardo Feedback
