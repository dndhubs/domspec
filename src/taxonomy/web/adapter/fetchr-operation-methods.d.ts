/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/fetchr/FetchrOperationMethodTaxonomy.ts
 * @see https://github.com/dndhubs/domspec/wiki/FetchrOperationMethod
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20FetchrOperationMethodTaxonomy
 * Union type representing FetchrOperationMethodTaxonomy in the DOMSpec ecosystem.
 * This taxonomy defines the operation methods for data fetching within the Trakfox ecosystem,
 * aligning with GraphQL operation types and RESTful interaction patterns. It supports
 * querying, mutating, and subscribing to data, enabling seamless integration with Trakfox,
 * HealthOrb DHIS2, and DnDHubs platforms. The taxonomy is extensible via CustomFetchrOperationMethod
 * for organization-specific operation methods.
 *
 * - 'query': Represents a read-only data retrieval operation.
 *   Classifications: Aligns with GraphQL query operations, REST GET methods, ISO 20022 data retrieval standards.
 *   Identifiers: lowercase: 'query', camelCase: 'queryOperation', snake_case: 'query_operation', ALL_CAP: 'QUERY', cache key: 'operation:query:resourceId'.
 *   Model Identifier Format: 'query-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'read'; used in Trakfox for fetching user profiles or HealthOrb DHIS2 for retrieving patient records.
 *   @example
 *   ```graphql
 *   query GetUser($id: ID!) {
 *     user(id: $id) { name, email }
 *   }
 *   ```
 *   Example: GET /api/users/{id} in Trakfox to retrieve user details.
 *
 * - 'mutation': Represents a data modification operation, typically creating, updating, or deleting resources.
 *   Classifications: Aligns with GraphQL mutation operations, REST POST/PUT/DELETE methods, SCOR supply chain update standards.
 *   Identifiers: lowercase: 'mutation', camelCase: 'mutationOperation', snake_case: 'mutation_operation', ALL_CAP: 'MUTATION', cache key: 'operation:mutation:resourceId'.
 *   Model Identifier Format: 'mutation-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'write'; used in DnDHubs for updating marketplace listings or Trakfox for modifying cart items.
 *   @example
 *   ```graphql
 *   mutation UpdateCart($cartId: ID!, $items: [ItemInput!]!) {
 *     updateCart(cartId: $cartId, items: $items) { total }
 *   }
 *   ```
 *   Example: POST /api/cart/{cartId} in Trakfox to update cart contents.
 *
 * - 'subscription': Represents a real-time data subscription operation for receiving updates.
 *   Classifications: Aligns with GraphQL subscription operations, WebSocket-based real-time protocols, ISO 20022 event-driven messaging.
 *   Identifiers: lowercase: 'subscription', camelCase: 'subscriptionOperation', snake_case: 'subscription_operation', ALL_CAP: 'SUBSCRIPTION', cache key: 'operation:subscription:resourceId'.
 *   Model Identifier Format: 'subscription-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'stream'; used in Trakfox for real-time analytics dashboards or HealthOrb DHIS2 for live patient data updates.
 *   @example
 *   ```graphql
 *   subscription OnOrderUpdate($orderId: ID!) {
 *     orderUpdated(orderId: $orderId) { status }
 *   }
 *   ```
 *   Example: WebSocket subscription in Trakfox for real-time order status updates.
 */
export type FetchrOperationMethodTaxonomy = 'query' | 'mutation' | 'subscription';