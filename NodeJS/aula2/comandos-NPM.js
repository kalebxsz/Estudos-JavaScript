/* # ================================
# NPM - Script de comandos comuns
# ================================

# Ver versões
node -v
npm -v 

# ================================
# Inicializar projeto
npm init
npm init -y
# ================================

# Instalar dependências
npm install pacote
npm i pacote
# ================================

# Instalar dependência de desenvolvimento
npm install pacote --save-dev
npm install pacote -D
# ================================

# Instalar todas as dependências do projeto
npm install
# ================================

# Instalar pacote global
npm install -g pacote
# ================================

# Remover pacote
npm uninstall pacote
# ================================

# Atualizar pacotes
npm update
npm update pacote
# ================================


# Listar dependências
npm list
npm list --depth=0
# ================================


# Executar scripts
npm run dev
npm run build
npm start
npm test
# ================================


# Auditoria de segurança
npm audit
npm audit fix
npm audit fix --force
# ================================


# Limpar cache do npm
npm cache clean --force
# ================================


# Reinstalar dependências (reset comum)
rm -rf node_modules package-lock.json
npm install
# ================================


# Buscar pacotes no registry
npm search pacote
# ================================

# Mostrar informações de um pacote
npm info pacote
# ================================

# Ver pacotes globais instalados
npm list -g --depth=0 */


