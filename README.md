<h1 align="center">
<img src="https://raw.githubusercontent.com/davidfaria/gympoint-frontend/master/.github/logo.png">
</h1>
<h3 align="center">
Aplicação full stack utilizando Node.js, React.js e React Native (somente Android) - GoStack Bootcamp <a href="https://rocketseat.com.br" target="__blank">Rocketseat</a>
</h3>
<h4>
<p>Sistema básico para gerenciamento de academias.</p>
<p>Foi desenvolvida uma API REST com NODE.JS.</p>
<p>Um sistema de gerenciamento com REACT JS, que cadastra alunos, planos e matrículas.</p>
<p>Um aplicativo mobile com REACT NATIVE para alunos, que registra o checkin na academia e possibilita tirar dúvida com os professores.</p>
</h4>

## Instruções
```bash
# download / Clone o repositório:
git clone https://github.com/rurbano3d/gymPoint-bootcamp-rocketseat.git
```
## Backend
```bash
# Acesse o diretório
cd backend 

# instalando as dependências do package.json:
yarn install

# Nesta API utilizei o POSTGRESQL e o REDIS
# criar .env para informar as SUAS variáveis de ambiente
cp .env.example .env

#iniciar a aplicação
yarn dev
```

## Frontend
```bash
# Acesse o diretório
cd frontend

# instalando as dependências do package.json:
yarn install

#iniciar a aplicação
yarn start
```
## Teste utilizando o browser.

http://localhost:3000

## Mobile
```bash
# Acesse o diretório
cd mobile 

# instalando as dependências do package.json:
yarn install

#instalando o aplicativo no emulador ANDROID:
react-native run-android

#iniciar a aplicação 
yarn start
```



```bash

# credenciais de acesso no Frontend
user: admin@gympoint.com
password: 123456
```
