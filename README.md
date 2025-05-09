# 🌐 Multicloud Control Orchestrator with GraphQL

This project provides a lightweight, containerized **GraphQL-based control layer** for managing cloud resources across **AWS** and **OCI (Oracle Cloud Infrastructure)**. It uses **Hasura** as the central GraphQL engine and integrates with provider-specific GraphQL services via schema stitching or remote joins.

---

## 📦 Components

- **Hasura** – Central GraphQL engine
- **AWS Resource Composer** – GraphQL service for AWS resource orchestration
- **OCI Resource Composer** – GraphQL service for OCI resource orchestration
- **PostgreSQL** – Backing store for Hasura metadata

---

## 🐳 Dockerized Setup

### 🛠 Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 🚀 Running the Project

```bash
docker compose up
```

### 🔍 Accessing Services

- **Hasura Console:** [http://localhost:8080](http://localhost:8080)
- **AWS GraphQL Endpoint:** [http://awsresourcecompose:6001/graphql](http://awsresourcecompose:6001/graphql)
- **OCI GraphQL Endpoint:** [http://ociresourcecompose:7001/graphql](http://ociresourcecompose:7001/graphql)

> You can configure Hasura to use these remote schemas via its console.

---

## 📁 Folder Structure

```
cloud-control-orchestrator-graphql/
├── docker-compose.yml
├── awsresourcecompose/
│   ├── Dockerfile
│   ├── src/
│   │   ├── main.ts
│   │   └── schema.ts
├── ociresourcecompose/
│   ├── Dockerfile
│   ├── src/
│   │   ├── instance.ts
│   │   ├── main.ts
│   │   └── schema.ts
├── config/
│   ├── postgresql.conf
│   └── pg_hba.conf
```

---

## 🔧 How It Works

1. **Hasura** connects to PostgreSQL and loads metadata.
2. **Remote schemas** (AWS and OCI GraphQL services) are added to Hasura via the console.
3. **GraphQL queries** to Hasura can delegate to AWS/OCI services depending on the fields requested.
4. Supports schema federation or remote joins if needed.

---

## 📚 Technologies Used

- GraphQL
- TypeScript
- Node.js
- Hasura
- Docker / Docker Compose
- PostgreSQL

---

## ✍️ Author

Created by [Your Name / Organization]

---

## 📝 License

This project is licensed under the MIT License.
