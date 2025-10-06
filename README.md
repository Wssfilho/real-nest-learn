# HeroAPI
API construída em Nest.JS para o cadastro de uma base geral de Super Heróis.


---
# Guia

## 1. Sobre o Nest.JS
https://docs.nestjs.com/

## 2. Instalar o Node e o NPM
https://nodejs.org/pt/download/prebuilt-installer

### Verificar a versão do Node
``` powershell
node --version
```

### Verificar a versão do NPM
``` powershell
npm--version
```

## 3. Criar o Projeto 
``` powershell
nest new HeroAPI
```


## 4. Executar a Aplicação
``` powershell
npm run start:dev
```

## 5. Prisma (ORM)
![prismapng](https://github.com/user-attachments/assets/f4834259-755e-411a-979b-57c8230a96e0)

https://docs.nestjs.com/recipes/prisma

### Instalar o Prisma
``` powershell
npx prisma init
```
### Criar Migração
``` powershell
npx prisma migrate dev
```
### Para resetar um banco de dados
``` powershell
npx prisma migrate reset
```
### Para ver o banco pelo prisma studio
```powershell
nox prisma studio
```


### Criação do Serviço
``` powershell
nest generate service hero
```
### Criação do Controller
``` powershell
nest generate controller hero
```

### Criação do Módulo
``` powershell
nest generate module hero
```











