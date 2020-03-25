/**
 * 
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar uma informação no backend 
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação no backend
 * 
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmtros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * npm install nodemon -D (esse parametro -D é para que ele seja adicionado somente em desenvolvimento)
 * npm install knex
 * npm install sqlite3
 * npx knex init -> cria um arquivo na raiz com as configurações do db
 * 
 * 
 * Entidades: Ong, Caso
 * Funcionalidades: Login de oNG, Lougout de ONG, Cadastro de ONG, Cadastrar novos casos, Deletar Casos, Listar casos especificos de uma ONG, Listar todos os casos, Entrar em contato com a ONG
 * 
 * npx knex migrate:make create_ongs
 * npx knex migrate:latest
 * npx knex migrate:make create_incidents
 * npm install cors
 * 
**/