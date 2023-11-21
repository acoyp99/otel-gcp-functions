# OpenTelemetry Demo for JavaScript GCP Cloud Functions

This repository contains a demo showcasing the implementation of OpenTelemetry in several scenarios, specifically targeted for Google Cloud Functions. The repo includes a Local demo and a Google Cloud Configuration with dependencies integration and the use of Google Cloud Trace.
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
   IMAGE_VERSION=1.6.0
   IMAGE_NAME=ghcr.io/open-telemetry/demo
   TRACETEST_IMAGE_VERSION=v0.14.5

   # Demo Platform
   ENV_PLATFORM=local
   
   # OpenTelemetry Collector
   OTEL_COLLECTOR_HOST=otelcol
   OTEL_COLLECTOR_PORT_GRPC=4317
   OTEL_COLLECTOR_PORT_HTTP=4318
   OTEL_EXPORTER_OTLP_ENDPOINT=http://${OTEL_COLLECTOR_HOST}:${OTEL_COLLECTOR_PORT_GRPC}
   PUBLIC_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=http://localhost:8080/otlp-http/v1/traces

   # OpenTelemetry Resource Definitions
   OTEL_RESOURCE_ATTRIBUTES="service.namespace=opentelemetry-demo"

   # Metrics Temporality
   OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE=cumulative

   # ********************
   # Telemetry Components - 
   # ********************
   # Grafana
   GRAFANA_SERVICE_PORT=3000
   GRAFANA_SERVICE_HOST=grafana

   # Jaeger
   JAEGER_SERVICE_PORT=16686
   JAEGER_SERVICE_HOST=jaeger

   # Prometheus
   PROMETHEUS_SERVICE_PORT=9090
   PROMETHEUS_SERVICE_HOST=prometheus
   PROMETHEUS_ADDR=${PROMETHEUS_SERVICE_HOST}:${PROMETHEUS_SERVICE_PORT}




