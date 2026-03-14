/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/region/cloud-region-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/CloudRegionTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20FluxrRegionTaxonomy
 * Union type representing CloudRegionTaxonomy in the DOMSpec ecosystem.
 * Defines region classifications tailored for cloud deployments in the FluxrKey system, integrating cloud provider-specific codes (e.g., AWS, Azure, GCP) with general geographic areas and specific locations. Aligns with cloud infrastructure standards like AWS Well-Architected Framework, Azure Geography, and GCP Regions/Zones, as well as ISO 3166 for country codes where applicable. Supports extensibility for custom regions in hybrid or multi-cloud setups within DNDHUBS platforms like Trakfox and HealthOrb.
 *
 * - 'us-east-1': AWS region in Eastern US (Virginia).
 *   @alias N. Virginia
 *   Classifications: AWS standard region, aligns with ISO 3166-2:US-VA.
 *   Identifiers: lowercase: 'us-east-1', camelCase: 'usEast1', snake_case: 'us_east_1', ALL_CAP: 'US_EAST_1', cache key: 'region:us-east-1:deploymentId'.
 *   Model Identifier Format: 'us-east-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'use1'; used in FluxrKey for low-latency US East Coast deployments, e.g., in HealthOrb DHIS2 data syncing or DNDHUBS marketplace APIs.
 *   @example
 *   Deploy FluxrKey service to 'us-east-1' via AWS CDK: new Stack(app, 'FluxrStack', { env: { region: 'us-east-1' } }).
 *
 * - 'us-east-2': AWS region in Eastern US (Ohio).
 *   @alias Ohio
 *   Classifications: AWS standard region, aligns with ISO 3166-2:US-OH.
 *   Identifiers: lowercase: 'us-east-2', camelCase: 'usEast2', snake_case: 'us_east_2', ALL_CAP: 'US_EAST_2', cache key: 'region:us-east-2:deploymentId'.
 *   Model Identifier Format: 'us-east-2-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'use2'; suitable for FluxrKey redundancy setups in US Midwest.
 *   @example
 *   Configure FluxrKey multi-region failover: { primary: 'us-east-1', secondary: 'us-east-2' }.
 *
 * - 'us-west-1': AWS region in Western US (N. California).
 *   @alias N. California
 *   Classifications: AWS standard region, aligns with ISO 3166-2:US-CA.
 *   Identifiers: lowercase: 'us-west-1', camelCase: 'usWest1', snake_case: 'us_west_1', ALL_CAP: 'US_WEST_1', cache key: 'region:us-west-1:deploymentId'.
 *   Model Identifier Format: 'us-west-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'usw1'; used in FluxrKey for West Coast data compliance.
 *   @example
 *   POST /api/deployments with body { region: 'us-west-1' } in Trakfox admin panel.
 *
 * - 'us-west-2': AWS region in Western US (Oregon).
 *   @alias Oregon
 *   Classifications: AWS standard region, aligns with ISO 3166-2:US-OR.
 *   Identifiers: lowercase: 'us-west-2', camelCase: 'usWest2', snake_case: 'us_west_2', ALL_CAP: 'US_WEST_2', cache key: 'region:us-west-2:deploymentId'.
 *   Model Identifier Format: 'us-west-2-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'usw2'; common for FluxrKey cost-optimized deployments.
 *   @example
 *   Azure-like mirroring in FluxrKey: map 'us-west-2' to 'westus2' for hybrid clouds.
 *
 * - 'ca-central-1': AWS region in Canada (Central).
 *   @alias Canada Central
 *   Classifications: AWS standard region, aligns with ISO 3166-2:CA-ON.
 *   Identifiers: lowercase: 'ca-central-1', camelCase: 'caCentral1', snake_case: 'ca_central_1', ALL_CAP: 'CA_CENTRAL_1', cache key: 'region:ca-central-1:deploymentId'.
 *   Model Identifier Format: 'ca-central-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used for FluxrKey Canadian data sovereignty.
 *   @example
 *   FluxrKey config: { region: 'ca-central-1', compliance: 'PIPEDA' }.
 *
 * - 'eu-central-1': AWS region in Europe (Frankfurt).
 *   @alias Frankfurt
 *   Classifications: AWS standard region, aligns with ISO 3166-2:DE-HE.
 *   Identifiers: lowercase: 'eu-central-1', camelCase: 'euCentral1', snake_case: 'eu_central_1', ALL_CAP: 'EU_CENTRAL_1', cache key: 'region:eu-central-1:deploymentId'.
 *   Model Identifier Format: 'eu-central-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'euc1'; for FluxrKey GDPR-compliant EU deployments.
 *   @example
 *   Deploy to 'eu-central-1' in FluxrKey CLI: fluxr deploy --region eu-central-1.
 *
 * - 'eu-west-1': AWS region in Europe (Ireland).
 *   @alias Ireland
 *   Classifications: AWS standard region, aligns with ISO 3166-2:IE-D.
 *   Identifiers: lowercase: 'eu-west-1', camelCase: 'euWest1', snake_case: 'eu_west_1', ALL_CAP: 'EU_WEST_1', cache key: 'region:eu-west-1:deploymentId'.
 *   Model Identifier Format: 'eu-west-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'euw1'; primary EU region for FluxrKey.
 *   @example
 *   HealthOrb integration: sync data to 'eu-west-1' for EU users.
 *
 * - 'eu-west-2': AWS region in Europe (London).
 *   @alias London
 *   Classifications: AWS standard region, aligns with ISO 3166-2:GB-ENG.
 *   Identifiers: lowercase: 'eu-west-2', camelCase: 'euWest2', snake_case: 'eu_west_2', ALL_CAP: 'EU_WEST_2', cache key: 'region:eu-west-2:deploymentId'.
 *   Model Identifier Format: 'eu-west-2-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'euw2'; for UK-specific FluxrKey setups.
 *   @example
 *   POST /api/regions with { code: 'eu-west-2' } in DNDHUBS API.
 *
 * - 'eu-west-3': AWS region in Europe (Paris).
 *   @alias Paris
 *   Classifications: AWS standard region, aligns with ISO 3166-2:FR-IDF.
 *   Identifiers: lowercase: 'eu-west-3', camelCase: 'euWest3', snake_case: 'eu_west_3', ALL_CAP: 'EU_WEST_3', cache key: 'region:eu-west-3:deploymentId'.
 *   Model Identifier Format: 'eu-west-3-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'euw3'; for French data residency in FluxrKey.
 *   @example
 *   FluxrKey Terraform: provider "aws" { region = "eu-west-3" }.
 *
 * - 'eu-north-1': AWS region in Europe (Stockholm).
 *   @alias Stockholm
 *   Classifications: AWS standard region, aligns with ISO 3166-2:SE-AB.
 *   Identifiers: lowercase: 'eu-north-1', camelCase: 'euNorth1', snake_case: 'eu_north_1', ALL_CAP: 'EU_NORTH_1', cache key: 'region:eu-north-1:deploymentId'.
 *   Model Identifier Format: 'eu-north-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'eun1'; for Nordic FluxrKey deployments.
 *   @example
 *   Configure FluxrKey for sustainability: prefer 'eu-north-1' for low-carbon energy.
 *
 * - 'ap-east-1': AWS region in Asia Pacific (Hong Kong).
 *   @alias Hong Kong
 *   Classifications: AWS standard region, aligns with ISO 3166-2:HK.
 *   Identifiers: lowercase: 'ap-east-1', camelCase: 'apEast1', snake_case: 'ap_east_1', ALL_CAP: 'AP_EAST_1', cache key: 'region:ap-east-1:deploymentId'.
 *   Model Identifier Format: 'ap-east-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For FluxrKey APAC edge computing.
 *   @example
 *   FluxrKey API call: GET /deployments?region=ap-east-1.
 *
 * - 'ap-south-1': AWS region in Asia Pacific (Mumbai).
 *   @alias Mumbai
 *   Classifications: AWS standard region, aligns with ISO 3166-2:IN-MH.
 *   Identifiers: lowercase: 'ap-south-1', camelCase: 'apSouth1', snake_case: 'ap_south_1', ALL_CAP: 'AP_SOUTH_1', cache key: 'region:ap-south-1:deploymentId'.
 *   Model Identifier Format: 'ap-south-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'aps1'; for Indian data localization in FluxrKey.
 *   @example
 *   Trakfox form submission: { region: 'ap-south-1', compliance: 'IRDAI' }.
 *
 * - 'ap-southeast-1': AWS region in Asia Pacific (Singapore).
 *   @alias Singapore
 *   Classifications: AWS standard region, aligns with ISO 3166-2:SG.
 *   Identifiers: lowercase: 'ap-southeast-1', camelCase: 'apSoutheast1', snake_case: 'ap_southeast_1', ALL_CAP: 'AP_SOUTHEAST_1', cache key: 'region:ap-southeast-1:deploymentId'.
 *   Model Identifier Format: 'ap-southeast-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'apse1'; hub for SE Asia FluxrKey ops.
 *   @example
 *   FluxrKey dashboard: filter deployments by 'ap-southeast-1'.
 *
 * - 'ap-southeast-2': AWS region in Asia Pacific (Sydney).
 *   @alias Sydney
 *   Classifications: AWS standard region, aligns with ISO 3166-2:AU-NSW.
 *   Identifiers: lowercase: 'ap-southeast-2', camelCase: 'apSoutheast2', snake_case: 'ap_southeast_2', ALL_CAP: 'AP_SOUTHEAST_2', cache key: 'region:ap-southeast-2:deploymentId'.
 *   Model Identifier Format: 'ap-southeast-2-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'apse2'; for Australian FluxrKey compliance.
 *   @example
 *   Integrate with HealthOrb: deploy to 'ap-southeast-2' for ANZ users.
 *
 * - 'ap-northeast-1': AWS region in Asia Pacific (Tokyo).
 *   @alias Tokyo
 *   Classifications: AWS standard region, aligns with ISO 3166-2:JP-13.
 *   Identifiers: lowercase: 'ap-northeast-1', camelCase: 'apNortheast1', snake_case: 'ap_northeast_1', ALL_CAP: 'AP_NORTHEAST_1', cache key: 'region:ap-northeast-1:deploymentId'.
 *   Model Identifier Format: 'ap-northeast-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'apne1'; for Japanese FluxrKey markets.
 *   @example
 *   FluxrKey SDK: init({ region: 'ap-northeast-1' }).
 *
 * - 'ap-northeast-2': AWS region in Asia Pacific (Seoul).
 *   @alias Seoul
 *   Classifications: AWS standard region, aligns with ISO 3166-2:KR-11.
 *   Identifiers: lowercase: 'ap-northeast-2', camelCase: 'apNortheast2', snake_case: 'ap_northeast_2', ALL_CAP: 'AP_NORTHEAST_2', cache key: 'region:ap-northeast-2:deploymentId'.
 *   Model Identifier Format: 'ap-northeast-2-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'apne2'; for Korean data residency.
 *   @example
 *   DNDHUBS marketplace: list services in 'ap-northeast-2'.
 *
 * - 'sa-east-1': AWS region in South America (São Paulo).
 *   @alias São Paulo
 *   Classifications: AWS standard region, aligns with ISO 3166-2:BR-SP.
 *   Identifiers: lowercase: 'sa-east-1', camelCase: 'saEast1', snake_case: 'sa_east_1', ALL_CAP: 'SA_EAST_1', cache key: 'region:sa-east-1:deploymentId'.
 *   Model Identifier Format: 'sa-east-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'sae1'; for Brazilian FluxrKey ops.
 *   @example
 *   FluxrKey config for LATAM: { region: 'sa-east-1' }.
 *
 * - 'me-south-1': AWS region in Middle East (Bahrain).
 *   @alias Bahrain
 *   Classifications: AWS standard region, aligns with ISO 3166-2:BH-13.
 *   Identifiers: lowercase: 'me-south-1', camelCase: 'meSouth1', snake_case: 'me_south_1', ALL_CAP: 'ME_SOUTH_1', cache key: 'region:me-south-1:deploymentId'.
 *   Model Identifier Format: 'me-south-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For ME FluxrKey expansions.
 *   @example
 *   Deploy FluxrKey to 'me-south-1' for GCC compliance.
 *
 * - 'af-south-1': AWS region in Africa (Cape Town).
 *   @alias Cape Town
 *   Classifications: AWS standard region, aligns with ISO 3166-2:ZA-WC.
 *   Identifiers: lowercase: 'af-south-1', camelCase: 'afSouth1', snake_case: 'af_south_1', ALL_CAP: 'AF_SOUTH_1', cache key: 'region:af-south-1:deploymentId'.
 *   Model Identifier Format: 'af-south-1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For African FluxrKey data centers.
 *   @example
 *   FluxrKey CLI: fluxr status --region af-south-1.
 *
 * - 'eastus': Azure region in Eastern US.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:US-VA.
 *   Identifiers: lowercase: 'eastus', camelCase: 'eastUs', snake_case: 'east_us', ALL_CAP: 'EASTUS', cache key: 'region:eastus:deploymentId'.
 *   Model Identifier Format: 'eastus-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'eastus1'; maps to AWS 'us-east-1' in FluxrKey hybrids.
 *   @example
 *   Azure FluxrKey deploy: az group create --location eastus.
 *
 * - 'eastus2': Azure region in Eastern US 2.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:US-VA.
 *   Identifiers: lowercase: 'eastus2', camelCase: 'eastUs2', snake_case: 'east_us_2', ALL_CAP: 'EASTUS2', cache key: 'region:eastus2:deploymentId'.
 *   Model Identifier Format: 'eastus2-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For FluxrKey US East redundancy.
 *   @example
 *   FluxrKey Azure config: { location: 'eastus2' }.
 *
 * - 'centralus': Azure region in Central US.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:US-IA.
 *   Identifiers: lowercase: 'centralus', camelCase: 'centralUs', snake_case: 'central_us', ALL_CAP: 'CENTRALUS', cache key: 'region:centralus:deploymentId'.
 *   Model Identifier Format: 'centralus-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For central US FluxrKey ops.
 *   @example
 *   Integrate with Trakfox: deploy to 'centralus'.
 *
 * - 'westus': Azure region in Western US.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:US-CA.
 *   Identifiers: lowercase: 'westus', camelCase: 'westUs', snake_case: 'west_us', ALL_CAP: 'WESTUS', cache key: 'region:westus:deploymentId'.
 *   Model Identifier Format: 'westus-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to AWS 'us-west-1'.
 *   @example
 *   FluxrKey hybrid: pair 'westus' with GCP 'us-west1'.
 *
 * - 'westus2': Azure region in Western US 2.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:US-WA.
 *   Identifiers: lowercase: 'westus2', camelCase: 'westUs2', snake_case: 'west_us_2', ALL_CAP: 'WESTUS2', cache key: 'region:westus2:deploymentId'.
 *   Model Identifier Format: 'westus2-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For FluxrKey West Coast.
 *   @example
 *   Azure CLI for FluxrKey: az vm create --location westus2.
 *
 * - 'westus3': Azure region in Western US 3.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:US-AZ.
 *   Identifiers: lowercase: 'westus3', camelCase: 'westUs3', snake_case: 'west_us_3', ALL_CAP: 'WESTUS3', cache key: 'region:westus3:deploymentId'.
 *   Model Identifier Format: 'westus3-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Emerging for FluxrKey expansions.
 *   @example
 *   FluxrKey config update: set region to 'westus3'.
 *
 * - 'northeurope': Azure region in Northern Europe.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:IE.
 *   Identifiers: lowercase: 'northeurope', camelCase: 'northEurope', snake_case: 'north_europe', ALL_CAP: 'NORTHEUROPE', cache key: 'region:northeurope:deploymentId'.
 *   Model Identifier Format: 'northeurope-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to AWS 'eu-west-1'.
 *   @example
 *   Deploy FluxrKey to 'northeurope' for EU North.
 *
 * - 'westeurope': Azure region in Western Europe.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:NL.
 *   Identifiers: lowercase: 'westeurope', camelCase: 'westEurope', snake_case: 'west_europe', ALL_CAP: 'WESTEUROPE', cache key: 'region:westeurope:deploymentId'.
 *   Model Identifier Format: 'westeurope-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For FluxrKey EU West.
 *   @example
 *   HealthOrb DHIS2: sync to 'westeurope'.
 *
 * - 'uksouth': Azure region in UK South.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:GB-ENG.
 *   Identifiers: lowercase: 'uksouth', camelCase: 'ukSouth', snake_case: 'uk_south', ALL_CAP: 'UKSOUTH', cache key: 'region:uksouth:deploymentId'.
 *   Model Identifier Format: 'uksouth-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: UK-specific for FluxrKey.
 *   @example
 *   FluxrKey UK compliance: use 'uksouth'.
 *
 * - 'southeastasia': Azure region in Southeast Asia.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:SG.
 *   Identifiers: lowercase: 'southeastasia', camelCase: 'southeastAsia', snake_case: 'southeast_asia', ALL_CAP: 'SOUTHEASTASIA', cache key: 'region:southeastasia:deploymentId'.
 *   Model Identifier Format: 'southeastasia-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to AWS 'ap-southeast-1'.
 *   @example
 *   DNDHUBS API: POST /deploy { region: 'southeastasia' }.
 *
 * - 'australiaeast': Azure region in Australia East.
 *   Classifications: Azure standard region, aligns with ISO 3166-2:AU-NSW.
 *   Identifiers: lowercase: 'australiaeast', camelCase: 'australiaEast', snake_case: 'australia_east', ALL_CAP: 'AUSTRALIAEAST', cache key: 'region:australiaeast:deploymentId'.
 *   Model Identifier Format: 'australiaeast-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For ANZ FluxrKey.
 *   @example
 *   FluxrKey Terraform: location = "australiaeast".
 *
 * - 'us-central1': GCP region in Central US.
 *   Classifications: GCP standard region, aligns with ISO 3166-2:US-IA.
 *   Identifiers: lowercase: 'us-central1', camelCase: 'usCentral1', snake_case: 'us_central1', ALL_CAP: 'US_CENTRAL1', cache key: 'region:us-central1:deploymentId'.
 *   Model Identifier Format: 'us-central1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For FluxrKey US Central.
 *   @example
 *   GCP FluxrKey: gcloud compute instances create --zone us-central1-a.
 *
 * - 'us-east1': GCP region in Eastern US.
 *   Classifications: GCP standard region, aligns with ISO 3166-2:US-SC.
 *   Identifiers: lowercase: 'us-east1', camelCase: 'usEast1', snake_case: 'us_east1', ALL_CAP: 'US_EAST1', cache key: 'region:us-east1:deploymentId'.
 *   Model Identifier Format: 'us-east1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to AWS 'us-east-1'.
 *   @example
 *   FluxrKey GCP config: { region: 'us-east1' }.
 *
 * - 'us-west1': GCP region in Western US.
 *   Classifications: GCP standard region, aligns with ISO 3166-2:US-OR.
 *   Identifiers: lowercase: 'us-west1', camelCase: 'usWest1', snake_case: 'us_west1', ALL_CAP: 'US_WEST1', cache key: 'region:us-west1:deploymentId'.
 *   Model Identifier Format: 'us-west1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For West Coast FluxrKey.
 *   @example
 *   Deploy to 'us-west1' in FluxrKey console.
 *
 * - 'europe-west1': GCP region in Western Europe.
 *   Classifications: GCP standard region, aligns with ISO 3166-2:BE.
 *   Identifiers: lowercase: 'europe-west1', camelCase: 'europeWest1', snake_case: 'europe_west1', ALL_CAP: 'EUROPE_WEST1', cache key: 'region:europe-west1:deploymentId'.
 *   Model Identifier Format: 'europe-west1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: EU West for FluxrKey.
 *   @example
 *   GCP CLI for FluxrKey: gcloud config set compute/region europe-west1.
 *
 * - 'asia-southeast1': GCP region in Southeast Asia.
 *   Classifications: GCP standard region, aligns with ISO 3166-2:SG.
 *   Identifiers: lowercase: 'asia-southeast1', camelCase: 'asiaSoutheast1', snake_case: 'asia_southeast1', ALL_CAP: 'ASIA_SOUTHEAST1', cache key: 'region:asia-southeast1:deploymentId'.
 *   Model Identifier Format: 'asia-southeast1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: SE Asia hub.
 *   @example
 *   FluxrKey integration: set region 'asia-southeast1'.
 *
 * - 'australia-southeast1': GCP region in Southeast Australia.
 *   Classifications: GCP standard region, aligns with ISO 3166-2:AU-NSW.
 *   Identifiers: lowercase: 'australia-southeast1', camelCase: 'australiaSoutheast1', snake_case: 'australia_southeast1', ALL_CAP: 'AUSTRALIA_SOUTHEAST1', cache key: 'region:australia-southeast1:deploymentId'.
 *   Model Identifier Format: 'australia-southeast1-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For ANZ.
 *   @example
 *   FluxrKey GCP deploy: region = 'australia-southeast1'.
 *
 * - 'global': Broad geographic region covering worldwide scope.
 *   Classifications: General, aligns with ISO 3166 global codes.
 *   Identifiers: lowercase: 'global', camelCase: 'global', snake_case: 'global', ALL_CAP: 'GLOBAL', cache key: 'region:global:deploymentId'.
 *   Model Identifier Format: 'global-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For FluxrKey global CDN or multi-region setups.
 *   @example
 *   FluxrKey config: { scope: 'global' } for worldwide access.
 *
 * - 'europe': Continental region for Europe.
 *   Classifications: General, aligns with ISO 3166-1:EU.
 *   Identifiers: lowercase: 'europe', camelCase: 'europe', snake_case: 'europe', ALL_CAP: 'EUROPE', cache key: 'region:europe:deploymentId'.
 *   Model Identifier Format: 'europe-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Aggregate for EU FluxrKey deployments.
 *   @example
 *   Group FluxrKey regions: ['europe', 'eu-west-1', 'eu-central-1'].
 *
 * - 'asia': Continental region for Asia.
 *   Classifications: General, aligns with ISO 3166-1:AS.
 *   Identifiers: lowercase: 'asia', camelCase: 'asia', snake_case: 'asia', ALL_CAP: 'ASIA', cache key: 'region:asia:deploymentId'.
 *   Model Identifier Format: 'asia-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For APAC FluxrKey.
 *   @example
 *   FluxrKey analytics: filter by 'asia'.
 *
 * - 'africa': Continental region for Africa.
 *   Classifications: General, aligns with ISO 3166-1:AF.
 *   Identifiers: lowercase: 'africa', camelCase: 'africa', snake_case: 'africa', ALL_CAP: 'AFRICA', cache key: 'region:africa:deploymentId'.
 *   Model Identifier Format: 'africa-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Emerging for FluxrKey Africa ops.
 *   @example
 *   Expand FluxrKey to 'africa' with 'af-south-1'.
 *
 * - 'northamerica': Continental region for North America.
 *   Classifications: General, aligns with ISO 3166-1:NA.
 *   Identifiers: lowercase: 'northamerica', camelCase: 'northAmerica', snake_case: 'north_america', ALL_CAP: 'NORTHAMERICA', cache key: 'region:northamerica:deploymentId'.
 *   Model Identifier Format: 'northamerica-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: US/CA aggregate.
 *   @example
 *   FluxrKey NA config: { continent: 'northamerica' }.
 *
 * - 'southamerica': Continental region for South America.
 *   Classifications: General, aligns with ISO 3166-1:SA.
 *   Identifiers: lowercase: 'southamerica', camelCase: 'southAmerica', snake_case: 'south_america', ALL_CAP: 'SOUTHAMERICA', cache key: 'region:southamerica:deploymentId'.
 *   Model Identifier Format: 'southamerica-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: LATAM for FluxrKey.
 *   @example
 *   Map 'southamerica' to 'sa-east-1' in FluxrKey.
 *
 * - 'oceania': Continental region for Oceania.
 *   Classifications: General, aligns with ISO 3166-1:OC.
 *   Identifiers: lowercase: 'oceania', camelCase: 'oceania', snake_case: 'oceania', ALL_CAP: 'OCEANIA', cache key: 'region:oceania:deploymentId'.
 *   Model Identifier Format: 'oceania-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: AU/NZ aggregate.
 *   @example
 *   FluxrKey Oceania deploy: include 'ap-southeast-2'.
 *
 * - 'antarctica': Continental region for Antarctica.
 *   Classifications: General, aligns with ISO 3166-1:AQ.
 *   Identifiers: lowercase: 'antarctica', camelCase: 'antarctica', snake_case: 'antarctica', ALL_CAP: 'ANTARCTICA', cache key: 'region:antarctica:deploymentId'.
 *   Model Identifier Format: 'antarctica-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Rare, for scientific FluxrKey use.
 *   @example
 *   Hypothetical FluxrKey: { region: 'antarctica' } for research.
 *
 * - 'london': Specific city/region (London, UK).
 *   Classifications: Geographic, aligns with ISO 3166-2:GB-LND.
 *   Identifiers: lowercase: 'london', camelCase: 'london', snake_case: 'london', ALL_CAP: 'LONDON', cache key: 'region:london:deploymentId'.
 *   Model Identifier Format: 'london-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'eu-west-2' or 'uksouth'.
 *   @example
 *   FluxrKey local: deploy near 'london' for low latency.
 *
 * - 'frankfurt': Specific city/region (Frankfurt, Germany).
 *   Classifications: Geographic, aligns with ISO 3166-2:DE-HE.
 *   Identifiers: lowercase: 'frankfurt', camelCase: 'frankfurt', snake_case: 'frankfurt', ALL_CAP: 'FRANKFURT', cache key: 'region:frankfurt:deploymentId'.
 *   Model Identifier Format: 'frankfurt-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'eu-central-1'.
 *   @example
 *   EU FluxrKey: use 'frankfurt' alias.
 *
 * - 'singapore': Specific city/region (Singapore).
 *   Classifications: Geographic, aligns with ISO 3166-2:SG.
 *   Identifiers: lowercase: 'singapore', camelCase: 'singapore', snake_case: 'singapore', ALL_CAP: 'SINGAPORE', cache key: 'region:singapore:deploymentId'.
 *   Model Identifier Format: 'singapore-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'ap-southeast-1'.
 *   @example
 *   FluxrKey SE Asia: { city: 'singapore' }.
 *
 * - 'sydney': Specific city/region (Sydney, Australia).
 *   Classifications: Geographic, aligns with ISO 3166-2:AU-NSW.
 *   Identifiers: lowercase: 'sydney', camelCase: 'sydney', snake_case: 'sydney', ALL_CAP: 'SYDNEY', cache key: 'region:sydney:deploymentId'.
 *   Model Identifier Format: 'sydney-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'ap-southeast-2'.
 *   @example
 *   ANZ FluxrKey deploy: alias 'sydney'.
 *
 * - 'mumbai': Specific city/region (Mumbai, India).
 *   Classifications: Geographic, aligns with ISO 3166-2:IN-MH.
 *   Identifiers: lowercase: 'mumbai', camelCase: 'mumbai', snake_case: 'mumbai', ALL_CAP: 'MUMBAI', cache key: 'region:mumbai:deploymentId'.
 *   Model Identifier Format: 'mumbai-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'ap-south-1'.
 *   @example
 *   Indian FluxrKey: use 'mumbai'.
 *
 * - 'tokyo': Specific city/region (Tokyo, Japan).
 *   Classifications: Geographic, aligns with ISO 3166-2:JP-13.
 *   Identifiers: lowercase: 'tokyo', camelCase: 'tokyo', snake_case: 'tokyo', ALL_CAP: 'TOKYO', cache key: 'region:tokyo:deploymentId'.
 *   Model Identifier Format: 'tokyo-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'ap-northeast-1'.
 *   @example
 *   FluxrKey Japan: { city: 'tokyo' }.
 *
 * - 'virginia': Specific city/region (Virginia, US).
 *   Classifications: Geographic, aligns with ISO 3166-2:US-VA.
 *   Identifiers: lowercase: 'virginia', camelCase: 'virginia', snake_case: 'virginia', ALL_CAP: 'VIRGINIA', cache key: 'region:virginia:deploymentId'.
 *   Model Identifier Format: 'virginia-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'us-east-1'.
 *   @example
 *   US East FluxrKey: alias 'virginia'.
 *
 * - 'oregon': Specific city/region (Oregon, US).
 *   Classifications: Geographic, aligns with ISO 3166-2:US-OR.
 *   Identifiers: lowercase: 'oregon', camelCase: 'oregon', snake_case: 'oregon', ALL_CAP: 'OREGON', cache key: 'region:oregon:deploymentId'.
 *   Model Identifier Format: 'oregon-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'us-west-2'.
 *   @example
 *   West US FluxrKey: use 'oregon'.
 *
 * - 'dublin': Specific city/region (Dublin, Ireland).
 *   Classifications: Geographic, aligns with ISO 3166-2:IE-D.
 *   Identifiers: lowercase: 'dublin', camelCase: 'dublin', snake_case: 'dublin', ALL_CAP: 'DUBLIN', cache key: 'region:dublin:deploymentId'.
 *   Model Identifier Format: 'dublin-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'eu-west-1'.
 *   @example
 *   EU FluxrKey: { city: 'dublin' }.
 *
 * - 'sao-paulo': Specific city/region (São Paulo, Brazil).
 *   Classifications: Geographic, aligns with ISO 3166-2:BR-SP.
 *   Identifiers: lowercase: 'sao-paulo', camelCase: 'saoPaulo', snake_case: 'sao_paulo', ALL_CAP: 'SAO_PAULO', cache key: 'region:sao-paulo:deploymentId'.
 *   Model Identifier Format: 'sao-paulo-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'sa-east-1'.
 *   @example
 *   LATAM FluxrKey: alias 'sao-paulo'.
 *
 * - 'cape-town': Specific city/region (Cape Town, South Africa).
 *   Classifications: Geographic, aligns with ISO 3166-2:ZA-WC.
 *   Identifiers: lowercase: 'cape-town', camelCase: 'capeTown', snake_case: 'cape_town', ALL_CAP: 'CAPE_TOWN', cache key: 'region:cape-town:deploymentId'.
 *   Model Identifier Format: 'cape-town-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Maps to 'af-south-1'.
 *   @example
 *   African FluxrKey: use 'cape-town'.
 *
 * - 'lagos': Specific city/region (Lagos, Nigeria).
 *   Classifications: Geographic, aligns with ISO 3166-2:NG-LA.
 *   Identifiers: lowercase: 'lagos', camelCase: 'lagos', snake_case: 'lagos', ALL_CAP: 'LAGOS', cache key: 'region:lagos:deploymentId'.
 *   Model Identifier Format: 'lagos-{deploymentType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Emerging for West Africa FluxrKey.
 *   @example
 *   FluxrKey expansion: plan for 'lagos'.
 */
export type CloudRegionTaxonomy = CoreCloudRegion | CustomCloudRegion;
export type CoreCloudRegion = 'us-east-1' | 'us-east-2' | 'us-west-1' | 'us-west-2' | 'ca-central-1' | 'eu-central-1' | 'eu-west-1' | 'eu-west-2' | 'eu-west-3' | 'eu-north-1' | 'ap-east-1' | 'ap-south-1' | 'ap-southeast-1' | 'ap-southeast-2' | 'ap-northeast-1' | 'ap-northeast-2' | 'sa-east-1' | 'me-south-1' | 'af-south-1' | 'eastus' | 'eastus2' | 'centralus' | 'westus' | 'westus2' | 'westus3' | 'northeurope' | 'westeurope' | 'uksouth' | 'southeastasia' | 'australiaeast' | 'us-central1' | 'us-east1' | 'us-west1' | 'europe-west1' | 'asia-southeast1' | 'australia-southeast1' | 'global' | 'europe' | 'asia' | 'africa' | 'northamerica' | 'southamerica' | 'oceania' | 'antarctica' | 'london' | 'frankfurt' | 'singapore' | 'sydney' | 'mumbai' | 'tokyo' | 'virginia' | 'oregon' | 'dublin' | 'sao-paulo' | 'cape-town' | 'lagos';
export type CustomCloudRegion = string & { __region?: 'CustomCloudRegion' };