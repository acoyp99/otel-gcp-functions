# OpenTelemetry Demo for JavaScript GCP Cloud Functions

This repository contains a demo showcasing the implementation of OpenTelemetry in JavaScript, specifically targeted for Google Cloud Functions. The demo includes Docker Compose setup, Dockerfile, and necessary configurations.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Docker Compose](#docker-compose)
- [Dockerfile](#dockerfile)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm
- Docker
- Google Cloud SDK

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/otel-gcp-functions.git
   cd opentelemetry-demo

2. Install dependencies:

   ```bash
   npm install

3. Set up your Google Cloud Project and enable Cloud Functions API 
- [Set up Google Cloud Project](https://developers.google.com/workspace/guides/create-project)
- [Enable Google Workspace APIs](https://developers.google.com/workspace/guides/enable-apis#admin-sdk-api)

4. Configure your Google Cloud credentials:
   ```bash
   gcloud auth application-default login

## Configuration

Configure OpenTelemetry by updating the .env file with your preferred settings:
**`.env`**
```bash


