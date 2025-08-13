/**
 * Union type representing DeploymentEnvironmentTaxonomy in the DOMSpec ecosystem.
 * Defines deployment models for error context in @dndhub/error and broader DndHub applications.
 * Supports classification of runtime deployments beyond CI environments, aiding in multi-setup error tracking.
 *
 * - 'localhost': Local machine deployment.
 *   Classifications: Development standards.
 *   Identifiers: lowercase: 'localhost', camelCase: 'localhostDeployment', snake_case: 'localhost_deployment', ALL_CAP: 'LOCALHOST', cache key: 'deploy:localhost:errId'.
 *   Model Identifier Format: 'deploy-localhost-{timestamp}'.
 *   Variations and Use Cases: Used for local servers (e.g., http://localhost:3000); common in dev/testing with no external access.
 *   Example Usage: Localhost errors in DomsClientError.tsx during development.
 *
 * - 'cloud': Cloud-based deployment.
 *   Classifications: AWS/Azure/GCP standards.
 *   Identifiers: lowercase: 'cloud', camelCase: 'cloudDeployment', snake_case: 'cloud_deployment', ALL_CAP: 'CLOUD', cache key: 'deploy:cloud:errId'.
 *   Model Identifier Format: 'deploy-cloud-{timestamp}'.
 *   Variations and Use Cases: Scalable hosting (e.g., Vercel); errors in cloud scaling or APIs.
 *   Example Usage: Cloud errors in fluxr integrations with Supabase.
 *
 * - 'onpremise': On-premise server deployment.
 *   Classifications: Self-hosted standards.
 *   Identifiers: lowercase: 'onpremise', camelCase: 'onpremiseDeployment', snake_case: 'onpremise_deployment', ALL_CAP: 'ONPREMISE', cache key: 'deploy:onpremise:errId'.
 *   Model Identifier Format: 'deploy-onpremise-{timestamp}'.
 *   Variations and Use Cases: Internal data centers; errors in hardware/network configs.
 *   Example Usage: On-premise errors in enterprise DndHub setups.
 *
 * - 'container': Containerized deployment.
 *   Classifications: Docker/Kubernetes standards.
 *   Identifiers: lowercase: 'container', camelCase: 'containerDeployment', snake_case: 'container_deployment', ALL_CAP: 'CONTAINER', cache key: 'deploy:container:errId'.
 *   Model Identifier Format: 'deploy-container-{timestamp}'.
 *   Variations and Use Cases: Docker images/orchestration; errors in container orchestration.
 *   Example Usage: Container errors in Kubernetes clusters via DomsError.ts.
 *
 * - 'hybrid': Hybrid cloud/on-premise deployment.
 *   Classifications: Mixed infrastructure standards.
 *   Identifiers: lowercase: 'hybrid', camelCase: 'hybridDeployment', snake_case: 'hybrid_deployment', ALL_CAP: 'HYBRID', cache key: 'deploy:hybrid:errId'.
 *   Model Identifier Format: 'deploy-hybrid-{timestamp}'.
 *   Variations and Use Cases: Combined setups for flexibility; errors in sync between environments.
 *   Example Usage: Hybrid errors in DndCoLab data syncing.
 *
 * - 'serverless': Serverless function deployment.
 *   Classifications: AWS Lambda/Vercel Functions standards.
 *   Identifiers: lowercase: 'serverless', camelCase: 'serverlessDeployment', snake_case: 'serverless_deployment', ALL_CAP: 'SERVERLESS', cache key: 'deploy:serverless:errId'.
 *   Model Identifier Format: 'deploy-serverless-{timestamp}'.
 *   Variations and Use Cases: Event-driven; errors in cold starts or scaling.
 *   Example Usage: Serverless errors in Vercel functions.
 *
 * - 'edge': Edge computing deployment.
 *   Classifications: CDN/Cloudflare standards.
 *   Identifiers: lowercase: 'edge', camelCase: 'edgeDeployment', snake_case: 'edge_deployment', ALL_CAP: 'EDGE', cache key: 'deploy:edge:errId'.
 *   Model Identifier Format: 'deploy-edge-{timestamp}'.
 *   Variations and Use Cases: Low-latency; errors in global distribution.
 *   Example Usage: Edge errors in Cloudflare Workers.
 *
 * - 'vm': Virtual machine deployment.
 *   Classifications: VMWare/EC2 standards.
 *   Identifiers: lowercase: 'vm', camelCase: 'vmDeployment', snake_case: 'vm_deployment', ALL_CAP: 'VIRTUAL_MACHINE', cache key: 'deploy:vm:errId'.
 *   Model Identifier Format: 'deploy-vm-{timestamp}'.
 *   Variations and Use Cases: Isolated VMs; errors in virtualization layers.
 *   Example Usage: VM errors in AWS EC2 instances.
 *
 * - 'bare-metal': Bare-metal hardware deployment.
 *   Classifications: Direct hardware standards.
 *   Identifiers: lowercase: 'bare-metal', camelCase: 'bareMetalDeployment', snake_case: 'bare_metal_deployment', ALL_CAP: 'BARE_METAL', cache key: 'deploy:bare-metal:errId'.
 *   Model Identifier Format: 'deploy-bare-metal-{timestamp}'.
 *   Variations and Use Cases: High-performance; errors in hardware faults.
 *   Example Usage: Bare-metal errors in on-premise servers.
 *
 * - 'paas': Platform as a Service deployment.
 *   Classifications: Heroku/Vercel standards.
 *   Identifiers: lowercase: 'paas', camelCase: 'paasDeployment', snake_case: 'paas_deployment', ALL_CAP: 'PAAS', cache key: 'deploy:paas:errId'.
 *   Model Identifier Format: 'deploy-paas-{timestamp}'.
 *   Variations and Use Cases: Managed platforms; errors in auto-scaling.
 *   Example Usage: PaaS errors in Vercel deployments.
 *
 * - 'iaas': Infrastructure as a Service deployment.
 *   Classifications: AWS/Azure standards.
 *   Identifiers: lowercase: 'iaas', camelCase: 'iaasDeployment', snake_case: 'iaas_deployment', ALL_CAP: 'IAAS', cache key: 'deploy:iaas:errId'.
 *   Model Identifier Format: 'deploy-iaas-{timestamp}'.
 *   Variations and Use Cases: Virtualized infra; errors in provisioning.
 *   Example Usage: IaaS errors in cloud VM management.
 */
export type DeploymentEnvironmentTaxonomy = CoreDeploymentEnvironment | CustomDeploymentEnvironment;
export type CoreDeploymentEnvironment = 'localhost' | 'cloud' | 'onpremise' | 'container' | 'hybrid' | 'serverless' | 'edge' | 'vm' | 'bare-metal' | 'paas' | 'iaas';
export type CustomDeploymentEnvironment = string & { __deploymentEnvironment?: 'CustomDeploymentEnvironment' };