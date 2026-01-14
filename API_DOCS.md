# 📚 Documentação da API - Nest Hero API

Esta documentação descreve todas as rotas disponíveis na API de Heróis.

## 📋 Índice

- [Country (País)](#country-país)
- [Hero (Herói)](#hero-herói)
- [Power (Poder)](#power-poder)
- [Mission (Missão)](#mission-missão)

---

## Country (País)

Base URL: `/country`

### Listar todos os países

```
GET /country
```

**Resposta:** Lista de todos os países cadastrados.

---

### Buscar país por ID

```
GET /country/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do país |

**Resposta:** Dados do país correspondente.

---

### Criar país

```
POST /country
```

**Body:**

```json
{
  "name": "string"
}
```

| Campo  | Tipo   | Obrigatório | Descrição    |
| ------ | ------ | ----------- | ------------ |
| `name` | string | ✅          | Nome do país |

**Resposta:** País criado.

---

### Atualizar país

```
PUT /country/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do país |

**Body:**

```json
{
  "name": "string"
}
```

**Resposta:** País atualizado.

---

### Deletar país

```
DELETE /country/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do país |

**Resposta:** País deletado.

---

## Hero (Herói)

Base URL: `/hero`

### Listar todos os heróis

```
GET /hero
```

**Resposta:** Lista de todos os heróis cadastrados.

---

### Buscar herói por ID

```
GET /hero/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do herói |

**Resposta:** Dados do herói correspondente.

---

### Total de heróis

```
GET /hero/total/
```

**Resposta:** Número total de heróis cadastrados.

---

### Criar herói

```
POST /hero
```

**Body:**

```json
{
  "civilName": "string",
  "heroName": "string",
  "age": 0,
  "team": "string",
  "countryId": 0,
  "powerId": 0,
  "missionId": 0
}
```

| Campo       | Tipo   | Obrigatório | Descrição             |
| ----------- | ------ | ----------- | --------------------- |
| `civilName` | string | ✅          | Nome civil do herói   |
| `heroName`  | string | ✅          | Nome de herói         |
| `age`       | number | ✅          | Idade do herói        |
| `team`      | string | ❌          | Nome do time/equipe   |
| `countryId` | number | ✅          | ID do país de origem  |
| `powerId`   | number | ✅          | ID do poder principal |
| `missionId` | number | ❌          | ID da missão atual    |

**Resposta:** Herói criado.

---

### Atualizar herói

```
PUT /hero/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do herói |

**Body:**

```json
{
  "civilName": "string",
  "heroName": "string",
  "age": 0,
  "team": "string",
  "countryId": 0,
  "powerId": 0,
  "missionId": 0
}
```

**Resposta:** Herói atualizado.

---

### Deletar herói

```
DELETE /hero/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do herói |

**Resposta:** Herói deletado.

---

### Remover poder de um herói

```
DELETE /hero/:heroId/power/:powerId
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `heroId` | number | ID do herói |
| `powerId` | number | ID do poder a ser removido |

**Resposta:** Associação herói-poder removida.

---

## Power (Poder)

Base URL: `/power`

### Listar todos os poderes

```
GET /power
```

**Resposta:** Lista de todos os poderes cadastrados.

---

### Buscar poder por ID

```
GET /power/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do poder |

**Resposta:** Dados do poder correspondente.

---

### Criar poder

```
POST /power
```

**Body:**

```json
{
  "name": "string",
  "description": "string"
}
```

| Campo         | Tipo   | Obrigatório | Descrição          |
| ------------- | ------ | ----------- | ------------------ |
| `name`        | string | ✅          | Nome do poder      |
| `description` | string | ✅          | Descrição do poder |

**Resposta:** Poder criado.

---

### Atualizar poder

```
PUT /power/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do poder |

**Body:**

```json
{
  "name": "string",
  "description": "string"
}
```

**Resposta:** Poder atualizado.

---

### Deletar poder

```
DELETE /power/:id
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | number | ID do poder |

**Resposta:** Poder deletado.

---

## Mission (Missão)

Base URL: `/mission`

### Listar todas as missões

```
GET /mission
```

**Resposta:** Lista de todas as missões cadastradas.

---

### Criar missão

```
POST /mission
```

**Body:**

```json
{
  "name": "string",
  "duration": "2024-01-01T00:00:00.000Z",
  "description": "string"
}
```

| Campo         | Tipo     | Obrigatório | Descrição              |
| ------------- | -------- | ----------- | ---------------------- |
| `name`        | string   | ✅          | Nome da missão         |
| `duration`    | DateTime | ✅          | Data/duração da missão |
| `description` | string   | ✅          | Descrição da missão    |

**Resposta:** Missão criada.

---

## 🗂️ Modelos de Dados

### Country

```typescript
{
  id: number; // Auto-gerado
  name: string; // Único, máx 100 caracteres
}
```

### Hero

```typescript
{
  id: number;        // Auto-gerado
  civilName: string; // Máx 100 caracteres
  heroName: string;  // Único, máx 100 caracteres
  age: number;
  team?: string;     // Opcional, máx 100 caracteres
  countryId: number; // Referência para Country
  missionId?: number;// Opcional, referência para Mission
}
```

### Power

```typescript
{
  id: number; // Auto-gerado
  name: string; // Único, máx 100 caracteres
  description: string; // Máx 255 caracteres
}
```

### Mission

```typescript
{
  id: number; // Auto-gerado
  name: string; // Máx 255 caracteres
  duration: DateTime;
  description: string; // Máx 255 caracteres
}
```

---

## 🔗 Relacionamentos

- **Hero → Country**: Um herói pertence a um país (obrigatório)
- **Hero → Power**: Muitos-para-muitos através da tabela `heroPower`
- **Hero → Mission**: Um herói pode ter uma missão (opcional)

---

## ⚙️ Tecnologias

- **Framework**: NestJS
- **ORM**: Prisma
- **Banco de Dados**: PostgreSQL
