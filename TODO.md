Criar auth module com auth service, auth controller, auth guard, auth public decorator

instalar cookie parser, bcrypt

'auth'
auth controller()
'login' public
login() recebe o loginDto com username e senha
retorna chamando o login auth service
'logout'
logout()
limpa os cookies de authentificação

    'me'
    me() antes de ser chamado ele passa pelo auth guard e verificando se o token esta correto e passando o id
    salva a chamanda do auth service me e passando o id em uma variavel
    retorna o id, username, role

auth service() recebe o user service como injeção
login() recebe o dto de login
verifica a se usuario existe,
verifica a senha
se tudo estiver certo retorna username, id, role. e grava um cookie de authetificação

    me() recebe o id
    busca pelo id no userService
    retorna o username e role para controoler

auth guard()
vai ser um guard para verificar o token antes de chamar o endpoint
metodo para extrair o cookie

metodo para verificar se o jwt é valido, se for valido ele permite acessar o endpoint
senao for ele responde com unathorazide

auth module
instalar o cookie parser
decladar o auth como global

auth decorator
criar um decorator para rotas publics de controller
