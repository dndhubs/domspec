/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/resource/resource-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ResourceTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ResourceTaxonomy
 * Union type representing ResourceTaxonomy in the DOMSpec ecosystem.
 * Defines a comprehensive set of resource types for data, workflows, and configurations across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with industry standards (e.g., HL7 for healthcare, SCOR for supply chain, ISO 19115 for geospatial) and enterprise systems (e.g., SAP, Salesforce) to ensure interoperability in APIs, analytics, and integrations (e.g., HealthOrb DHIS2 adapters by August 11, 2025). Supports validation utilities in @domspecs/core for consistent resource handling in queries, permissions, and storage.
 *
 * - 'page': A web page or UI view.
 *   Classifications: UI/UX standards (WCAG), HTML5 DOM.
 *   Identifiers: lowercase: 'page', camelCase: 'pageResource', snake_case: 'page_resource', ALL_CAP: 'PAGE', cache key: 'resource:page:resourceId'.
 *   Model Identifier Format: 'page-{id}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'view', 'screen'; used in Trakfox for rendering homepages, DnDHubs for marketplace pages.
 *   @example
 *   GET /api/ui?page=home // Fetch page in Trakfox
 *
 * - 'component': A reusable UI element.
 *   Classifications: UI component frameworks (e.g., React, Vue).
 *   Identifiers: lowercase: 'component', camelCase: 'componentResource', snake_case: 'component_resource', ALL_CAP: 'COMPONENT', cache key: 'resource:component:resourceId'.
 *   Model Identifier Format: 'component-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'widget', 'module'; used in DnDHubs for buttons, Trakfox for form fields.
 *   @example
 *   GET /api/ui?type=component&id=button // Fetch component in DnDHubs
 *
 * - 'widget': A small, interactive UI element.
 *   Classifications: UI standards, aligns with micro-frontends.
 *   Identifiers: lowercase: 'widget', camelCase: 'widgetResource', snake_case: 'widget_resource', ALL_CAP: 'WIDGET', cache key: 'resource:widget:resourceId'.
 *   Model Identifier Format: 'widget-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'gadget', 'plugin'; used in Trakfox dashboards for charts.
 *   @example
 *   POST /api/ui { "type": "widget", "id": "chart" } // Create widget in Trakfox
 *
 * - 'theme': A UI styling configuration.
 *   Classifications: CSS standards, theming frameworks.
 *   Identifiers: lowercase: 'theme', camelCase: 'themeResource', snake_case: 'theme_resource', ALL_CAP: 'THEME', cache key: 'resource:theme:resourceId'.
 *   Model Identifier Format: 'theme-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'skin', 'style'; used in Trakfox for dark/light modes.
 *   @example
 *   POST /api/ui { "type": "theme", "id": "dark" } // Apply theme in Trakfox
 *
 * - 'form': A data input form.
 *   Classifications: HTML5 forms, WCAG accessibility.
 *   Identifiers: lowercase: 'form', camelCase: 'formResource', snake_case: 'form_resource', ALL_CAP: 'FORM', cache key: 'resource:form:resourceId'.
 *   Model Identifier Format: 'form-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'input', 'survey'; used in Trakfox for user input, HealthOrb for patient forms.
 *   @example
 *   POST /api/ui { "type": "form", "id": "signup" } // Create form in Trakfox
 *
 * - 'layout': A structural UI arrangement.
 *   Classifications: CSS Grid, Flexbox standards.
 *   Identifiers: lowercase: 'layout', camelCase: 'layoutResource', snake_case: 'layout_resource', ALL_CAP: 'LAYOUT', cache key: 'resource:layout:resourceId'.
 *   Model Identifier Format: 'layout-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'structure', 'template'; used in DnDHubs for page layouts.
 *   @example
 *   GET /api/ui?type=layout&id=grid // Fetch layout in DnDHubs
 *
 * - 'navigation': A navigation system or menu.
 *   Classifications: UI navigation, ARIA standards.
 *   Identifiers: lowercase: 'navigation', camelCase: 'navigationResource', snake_case: 'navigation_resource', ALL_CAP: 'NAVIGATION', cache key: 'resource:navigation:resourceId'.
 *   Model Identifier Format: 'navigation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'nav', 'menu'; used in Trakfox for site menus.
 *   @example
 *   GET /api/ui?type=navigation&id=primary // Fetch navigation in Trakfox
 *
 * - 'menu': A menu for user options.
 *   Classifications: UI menu standards, ARIA.
 *   Identifiers: lowercase: 'menu', camelCase: 'menuResource', snake_case: 'menu_resource', ALL_CAP: 'MENU', cache key: 'resource:menu:resourceId'.
 *   Model Identifier Format: 'menu-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'dropdown', 'navmenu'; used in DnDHubs for user menus.
 *   @example
 *   GET /api/ui?type=menu&id=user // Fetch menu in DnDHubs
 *
 * - 'dialog': A dialog box or popup.
 *   Classifications: UI dialog, ARIA modal standards.
 *   Identifiers: lowercase: 'dialog', camelCase: 'dialogResource', snake_case: 'dialog_resource', ALL_CAP: 'DIALOG', cache key: 'resource:dialog:resourceId'.
 *   Model Identifier Format: 'dialog-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'popup', 'alert'; used in Trakfox for confirmation dialogs.
 *   @example
 *   POST /api/ui { "type": "dialog", "id": "confirm" } // Create dialog in Trakfox
 *
 * - 'modal': A modal window.
 *   Classifications: UI modal, ARIA accessibility.
 *   Identifiers: lowercase: 'modal', camelCase: 'modalResource', snake_case: 'modal_resource', ALL_CAP: 'MODAL', cache key: 'resource:modal:resourceId'.
 *   Model Identifier Format: 'modal-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'overlay', 'window'; used in HealthOrb for patient data modals.
 *   @example
 *   POST /api/ui { "type": "modal", "id": "patient" } // Create modal in HealthOrb
 *
 * - 'panel': A UI panel or section.
 *   Classifications: UI layout, CSS panels.
 *   Identifiers: lowercase: 'panel', camelCase: 'panelResource', snake_case: 'panel_resource', ALL_CAP: 'PANEL', cache key: 'resource:panel:resourceId'.
 *   Model Identifier Format: 'panel-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'section', 'pane'; used in DataOrb for dashboard panels.
 *   @example
 *   GET /api/ui?type=panel&id=stats // Fetch panel in DataOrb
 *
 * - 'toolbar': A UI toolbar.
 *   Classifications: UI controls, ARIA toolbar.
 *   Identifiers: lowercase: 'toolbar', camelCase: 'toolbarResource', snake_case: 'toolbar_resource', ALL_CAP: 'TOOLBAR', cache key: 'resource:toolbar:resourceId'.
 *   Model Identifier Format: 'toolbar-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'controlbar', 'actionbar'; used in Trakfox for editor toolbars.
 *   @example
 *   GET /api/ui?type=toolbar&id=edit // Fetch toolbar in Trakfox
 *
 * - 'sidebar': A UI sidebar.
 *   Classifications: UI navigation, CSS sidebar.
 *   Identifiers: lowercase: 'sidebar', camelCase: 'sidebarResource', snake_case: 'sidebar_resource', ALL_CAP: 'SIDEBAR', cache key: 'resource:sidebar:resourceId'.
 *   Model Identifier Format: 'sidebar-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sidepanel', 'nav'; used in DnDHubs for navigation sidebars.
 *   @example
 *   GET /api/ui?type=sidebar&id=nav // Fetch sidebar in DnDHubs
 *
 * - 'header': A UI header section.
 *   Classifications: UI layout, HTML5 header.
 *   Identifiers: lowercase: 'header', camelCase: 'headerResource', snake_case: 'header_resource', ALL_CAP: 'HEADER', cache key: 'resource:header:resourceId'.
 *   Model Identifier Format: 'header-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'topbar', 'banner'; used in Trakfox for page headers.
 *   @example
 *   GET /api/ui?type=header&id=main // Fetch header in Trakfox
 *
 * - 'footer': A UI footer section.
 *   Classifications: UI layout, HTML5 footer.
 *   Identifiers: lowercase: 'footer', camelCase: 'footerResource', snake_case: 'footer_resource', ALL_CAP: 'FOOTER', cache key: 'resource:footer:resourceId'.
 *   Model Identifier Format: 'footer-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'bottombar', 'base'; used in DnDHubs for page footers.
 *   @example
 *   GET /api/ui?type=footer&id=main // Fetch footer in DnDHubs
 *
 * - 'color': A UI color scheme or palette.
 *   Classifications: CSS color standards, theming.
 *   Identifiers: lowercase: 'color', camelCase: 'colorResource', snake_case: 'color_resource', ALL_CAP: 'COLOR', cache key: 'resource:color:resourceId'.
 *   Model Identifier Format: 'color-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'palette', 'shade'; used in Trakfox for theme customization.
 *   @example
 *   POST /api/ui { "type": "color", "id": "primary" } // Set color in Trakfox
 *
 * - 'content': Generic content resource.
 *   Classifications: CMS standards (Dublin Core), RESTful content APIs.
 *   Identifiers: lowercase: 'content', camelCase: 'contentResource', snake_case: 'content_resource', ALL_CAP: 'CONTENT', cache key: 'resource:content:resourceId'.
 *   Model Identifier Format: 'content-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'asset', 'media'; used in DataOrb for generic content, Trakfox for posts.
 *   @example
 *   POST /api/content { "type": "content", "id": "post1" } // Create content in DataOrb
 *
 * - 'article': A published article.
 *   Classifications: CMS standards, schema.org Article.
 *   Identifiers: lowercase: 'article', camelCase: 'articleResource', snake_case: 'article_resource', ALL_CAP: 'ARTICLE', cache key: 'resource:article:resourceId'.
 *   Model Identifier Format: 'article-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'post', 'story'; used in Trakfox for blog articles.
 *   @example
 *   GET /api/content?type=article&id=blog1 // Fetch article in Trakfox
 *
 * - 'post': A social or blog post.
 *   Classifications: Social media standards (Activity Streams).
 *   Identifiers: lowercase: 'post', camelCase: 'postResource', snake_case: 'post_resource', ALL_CAP: 'POST', cache key: 'resource:post:resourceId'.
 *   Model Identifier Format: 'post-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'update', 'entry'; used in DnDHubs for social posts.
 *   @example
 *   POST /api/content { "type": "post", "id": "social1" } // Create post in DnDHubs
 *
 * - 'document': A formal document.
 *   Classifications: ISO 32000 (PDF), HL7 for healthcare docs.
 *   Identifiers: lowercase: 'document', camelCase: 'documentResource', snake_case: 'document_resource', ALL_CAP: 'DOCUMENT', cache key: 'resource:document:resourceId'.
 *   Model Identifier Format: 'document-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'file', 'record'; used in HealthOrb for reports.
 *   @example
 *   GET /api/content?type=document&id=report1 // Fetch document in HealthOrb
 *
 * - 'publication': A published work.
 *   Classifications: Publishing standards, DOI.
 *   Identifiers: lowercase: 'publication', camelCase: 'publicationResource', snake_case: 'publication_resource', ALL_CAP: 'PUBLICATION', cache key: 'resource:publication:resourceId'.
 *   Model Identifier Format: 'publication-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'paper', 'journal'; used in GEOCoLab for research papers ($99 tier).
 *   @example
 *   GET /api/content?type=publication&id=paper1 // Fetch publication in GEOCoLab
 *
 * - 'report': A data or analytics report.
 *   Classifications: Reporting standards (OLAP), BI tools.
 *   Identifiers: lowercase: 'report', camelCase: 'reportResource', snake_case: 'report_resource', ALL_CAP: 'REPORT', cache key: 'resource:report:resourceId'.
 *   Model Identifier Format: 'report-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'analysis', 'summary'; used in DataOrb for analytics reports.
 *   @example
 *   GET /api/content?type=report&id=sales1 // Fetch report in DataOrb
 *
 * - 'media': Generic media resource.
 *   Classifications: Media standards (MPEG, HLS).
 *   Identifiers: lowercase: 'media', camelCase: 'mediaResource', snake_case: 'media_resource', ALL_CAP: 'MEDIA', cache key: 'resource:media:resourceId'.
 *   Model Identifier Format: 'media-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'asset', 'multimedia'; used in Trakfox for media uploads.
 *   @example
 *   POST /api/content { "type": "media", "id": "video1" } // Upload media in Trakfox
 *
 * - 'asset': A digital asset.
 *   Classifications: DAM (Digital Asset Management) standards.
 *   Identifiers: lowercase: 'asset', camelCase: 'assetResource', snake_case: 'asset_resource', ALL_CAP: 'ASSET', cache key: 'resource:asset:resourceId'.
 *   Model Identifier Format: 'asset-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'resource', 'media'; used in DnDHubs for digital assets.
 *   @example
 *   GET /api/content?type=asset&id=image1 // Fetch asset in DnDHubs
 *
 * - 'file': A generic file resource.
 *   Classifications: File standards (POSIX), cloud storage.
 *   Identifiers: lowercase: 'file', camelCase: 'fileResource', snake_case: 'file_resource', ALL_CAP: 'FILE', cache key: 'resource:file:resourceId'.
 *   Model Identifier Format: 'file-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'document', 'attachment'; used in Trakfox for uploads.
 *   @example
 *   POST /api/content { "type": "file", "id": "doc1" } // Upload file in Trakfox
 *
 * - 'attachment': A file attached to a resource.
 *   Classifications: Email standards (MIME), CMS.
 *   Identifiers: lowercase: 'attachment', camelCase: 'attachmentResource', snake_case: 'attachment_resource', ALL_CAP: 'ATTACHMENT', cache key: 'resource:attachment:resourceId'.
 *   Model Identifier Format: 'attachment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'file', 'addendum'; used in HealthOrb for email attachments.
 *   @example
 *   POST /api/content { "type": "attachment", "id": "pdf1" } // Attach file in HealthOrb
 *
 * - 'image': An image file.
 *   Classifications: Image standards (JPEG, PNG), EXIF.
 *   Identifiers: lowercase: 'image', camelCase: 'imageResource', snake_case: 'image_resource', ALL_CAP: 'IMAGE', cache key: 'resource:image:resourceId'.
 *   Model Identifier Format: 'image-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'photo', 'picture'; used in DnDHubs for product images.
 *   @example
 *   GET /api/content?type=image&id=product1 // Fetch image in DnDHubs
 *
 * - 'video': A video file.
 *   Classifications: Video standards (MP4, HLS).
 *   Identifiers: lowercase: 'video', camelCase: 'videoResource', snake_case: 'video_resource', ALL_CAP: 'VIDEO', cache key: 'resource:video:resourceId'.
 *   Model Identifier Format: 'video-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'clip', 'stream'; used in GEOCoLab for climate videos ($99 tier).
 *   @example
 *   GET /api/content?type=video&id=climate1 // Fetch video in GEOCoLab
 *
 * - 'audio': An audio file.
 *   Classifications: Audio standards (MP3, WAV).
 *   Identifiers: lowercase: 'audio', camelCase: 'audioResource', snake_case: 'audio_resource', ALL_CAP: 'AUDIO', cache key: 'resource:audio:resourceId'.
 *   Model Identifier Format: 'audio-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sound', 'track'; used in DataOrb for podcasts.
 *   @example
 *   GET /api/content?type=audio&id=podcast1 // Fetch audio in DataOrb
 *
 * - 'archive': A compressed or archived file.
 *   Classifications: Archive standards (ZIP, TAR).
 *   Identifiers: lowercase: 'archive', camelCase: 'archiveResource', snake_case: 'archive_resource', ALL_CAP: 'ARCHIVE', cache key: 'resource:archive:resourceId'.
 *   Model Identifier Format: 'archive-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'zip', 'bundle'; used in Trakfox for data exports.
 *   @example
 *   POST /api/content { "type": "archive", "id": "data1" } // Create archive in Trakfox
 *
 * - 'gallery': A collection of media.
 *   Classifications: Media gallery standards, CMS.
 *   Identifiers: lowercase: 'gallery', camelCase: 'galleryResource', snake_case: 'gallery_resource', ALL_CAP: 'GALLERY', cache key: 'resource:gallery:resourceId'.
 *   Model Identifier Format: 'gallery-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'album', 'collection'; used in DnDHubs for product galleries.
 *   @example
 *   GET /api/content?type=gallery&id=products // Fetch gallery in DnDHubs
 *
 * - 'product': An e-commerce product.
 *   Classifications: E-commerce standards (Shopify API), SCOR.
 *   Identifiers: lowercase: 'product', camelCase: 'productResource', snake_case: 'product_resource', ALL_CAP: 'PRODUCT', cache key: 'resource:product:resourceId'.
 *   Model Identifier Format: 'product-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'item', 'good'; used in DnDHubs for marketplace products (beta Q4 2025).
 *   @example
 *   GET /api/commerce?type=product&id=sku123 // Fetch product in DnDHubs
 *
 * - 'deal': A promotional deal.
 *   Classifications: E-commerce promotions, PCI DSS compliant.
 *   Identifiers: lowercase: 'deal', camelCase: 'dealResource', snake_case: 'deal_resource', ALL_CAP: 'DEAL', cache key: 'resource:deal:resourceId'.
 *   Model Identifier Format: 'deal-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'offer', 'sale'; used in Trakfox for discounts.
 *   @example
 *   POST /api/commerce { "type": "deal", "id": "promo1" } // Create deal in Trakfox
 *
 * - 'offer': A commercial offer.
 *   Classifications: E-commerce, marketing standards.
 *   Identifiers: lowercase: 'offer', camelCase: 'offerResource', snake_case: 'offer_resource', ALL_CAP: 'OFFER', cache key: 'resource:offer:resourceId'.
 *   Model Identifier Format: 'offer-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'deal', 'proposal'; used in DnDHubs for special offers.
 *   @example
 *   GET /api/commerce?type=offer&id=special1 // Fetch offer in DnDHubs
 *
 * - 'invoice': A billing invoice.
 *   Classifications: Financial standards (ISO 20022), PCI DSS.
 *   Identifiers: lowercase: 'invoice', camelCase: 'invoiceResource', snake_case: 'invoice_resource', ALL_CAP: 'INVOICE', cache key: 'resource:invoice:resourceId'.
 *   Model Identifier Format: 'invoice-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'bill', 'statement'; used in Trakfox for billing.
 *   @example
 *   GET /api/commerce?type=invoice&id=inv123 // Fetch invoice in Trakfox
 *
 * - 'order': A customer order.
 *   Classifications: E-commerce standards, SCOR.
 *   Identifiers: lowercase: 'order', camelCase: 'orderResource', snake_case: 'order_resource', ALL_CAP: 'ORDER', cache key: 'resource:order:resourceId'.
 *   Model Identifier Format: 'order-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'purchase', 'transaction'; used in DnDHubs for marketplace orders.
 *   @example
 *   POST /api/commerce { "type": "order", "id": "ord123" } // Create order in DnDHubs
 *
 * - 'cart': A shopping cart.
 *   Classifications: E-commerce cart standards, PCI DSS.
 *   Identifiers: lowercase: 'cart', camelCase: 'cartResource', snake_case: 'cart_resource', ALL_CAP: 'CART', cache key: 'resource:cart:resourceId'.
 *   Model Identifier Format: 'cart-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'basket', 'checkout'; used in Trakfox for shopping carts.
 *   @example
 *   GET /api/commerce?type=cart&id=user123 // Fetch cart in Trakfox
 *
 * - 'payment': A payment transaction.
 *   Classifications: Financial standards (ISO 20022), PCI DSS.
 *   Identifiers: lowercase: 'payment', camelCase: 'paymentResource', snake_case: 'payment_resource', ALL_CAP: 'PAYMENT', cache key: 'resource:payment:resourceId'.
 *   Model Identifier Format: 'payment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'transaction', 'charge'; used in DnDHubs for payments.
 *   @example
 *   POST /api/commerce { "type": "payment", "id": "pay123" } // Process payment in DnDHubs
 *
 * - 'refund': A refund transaction.
 *   Classifications: Financial standards, PCI DSS.
 *   Identifiers: lowercase: 'refund', camelCase: 'refundResource', snake_case: 'refund_resource', ALL_CAP: 'REFUND', cache key: 'resource:refund:resourceId'.
 *   Model Identifier Format: 'refund-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'return', 'reimbursement'; used in Trakfox for refunds.
 *   @example
 *   POST /api/commerce { "type": "refund", "id": "ref123" } // Process refund in Trakfox
 *
 * - 'discount': A discount offer.
 *   Classifications: E-commerce promotions, marketing.
 *   Identifiers: lowercase: 'discount', camelCase: 'discountResource', snake_case: 'discount_resource', ALL_CAP: 'DISCOUNT', cache key: 'resource:discount:resourceId'.
 *   Model Identifier Format: 'discount-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'coupon', 'rebate'; used in DnDHubs for promotions.
 *   @example
 *   POST /api/commerce { "type": "discount", "id": "disc123" } // Apply discount in DnDHubs
 *
 * - 'promotion': A promotional campaign.
 *   Classifications: Marketing standards, e-commerce.
 *   Identifiers: lowercase: 'promotion', camelCase: 'promotionResource', snake_case: 'promotion_resource', ALL_CAP: 'PROMOTION', cache key: 'resource:promotion:resourceId'.
 *   Model Identifier Format: 'promotion-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'campaign', 'deal'; used in Trakfox for marketing campaigns.
 *   @example
 *   GET /api/commerce?type=promotion&id=camp1 // Fetch promotion in Trakfox
 *
 * - 'catalog': A product catalog.
 *   Classifications: E-commerce standards, schema.org Product.
 *   Identifiers: lowercase: 'catalog', camelCase: 'catalogResource', snake_case: 'catalog_resource', ALL_CAP: 'CATALOG', cache key: 'resource:catalog:resourceId'.
 *   Model Identifier Format: 'catalog-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'inventory', 'list'; used in DnDHubs for product listings.
 *   @example
 *   GET /api/commerce?type=catalog&id=main // Fetch catalog in DnDHubs
 *
 * - 'inventory': Stock inventory.
 *   Classifications: Retail standards (NRF ARTS), SCOR.
 *   Identifiers: lowercase: 'inventory', camelCase: 'inventoryResource', snake_case: 'inventory_resource', ALL_CAP: 'INVENTORY', cache key: 'resource:inventory:resourceId'.
 *   Model Identifier Format: 'inventory-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'stock', 'supply'; used in Trakfox for inventory tracking.
 *   @example
 *   GET /api/commerce?type=inventory&id=store1 // Fetch inventory in Trakfox
 *
 * - 'shipping': A shipping process.
 *   Classifications: Logistics standards, SCOR.
 *   Identifiers: lowercase: 'shipping', camelCase: 'shippingResource', snake_case: 'shipping_resource', ALL_CAP: 'SHIPPING', cache key: 'resource:shipping:resourceId'.
 *   Model Identifier Format: 'shipping-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'delivery', 'transport'; used in DnDHubs for shipping orders.
 *   @example
 *   POST /api/commerce { "type": "shipping", "id": "ship123" } // Process shipping in DnDHubs
 *
 * - 'fulfillment': An order fulfillment process.
 *   Classifications: E-commerce standards, SCOR.
 *   Identifiers: lowercase: 'fulfillment', camelCase: 'fulfillmentResource', snake_case: 'fulfillment_resource', ALL_CAP: 'FULFILLMENT', cache key: 'resource:fulfillment:resourceId'.
 *   Model Identifier Format: 'fulfillment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'delivery', 'completion'; used in Trakfox for order fulfillment.
 *   @example
 *   POST /api/commerce { "type": "fulfillment", "id": "ful123" } // Process fulfillment in Trakfox
 *
 * - 'return': A product return process.
 *   Classifications: E-commerce returns, SCOR.
 *   Identifiers: lowercase: 'return', camelCase: 'returnResource', snake_case: 'return_resource', ALL_CAP: 'RETURN', cache key: 'resource:return:resourceId'.
 *   Model Identifier Format: 'return-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'refund', 'exchange'; used in DnDHubs for returns.
 *   @example
 *   POST /api/commerce { "type": "return", "id": "ret123" } // Process return in DnDHubs
 *
 * - 'user': A user entity.
 *   Classifications: Identity standards (OAuth, NIST SP 800-63).
 *   Identifiers: lowercase: 'user', camelCase: 'userResource', snake_case: 'user_resource', ALL_CAP: 'USER', cache key: 'resource:user:resourceId'.
 *   Model Identifier Format: 'user-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'account', 'profile'; used in Trakfox for user management.
 *   @example
 *   POST /api/identity { "type": "user", "id": "user123" } // Create user in Trakfox
 *
 * - 'team': A group of users.
 *   Classifications: Identity management, LDAP.
 *   Identifiers: lowercase: 'team', camelCase: 'teamResource', snake_case: 'team_resource', ALL_CAP: 'TEAM', cache key: 'resource:team:resourceId'.
 *   Model Identifier Format: 'team-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'group', 'squad'; used in HealthOrb for care teams.
 *   @example
 *   GET /api/identity?type=team&id=care1 // Fetch team in HealthOrb
 *
 * - 'role': A user role or permission set.
 *   Classifications: RBAC standards, OAuth scopes.
 *   Identifiers: lowercase: 'role', camelCase: 'roleResource', snake_case: 'role_resource', ALL_CAP: 'ROLE', cache key: 'resource:role:resourceId'.
 *   Model Identifier Format: 'role-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'permission', 'access'; used in Trakfox for user roles.
 *   @example
 *   POST /api/identity { "type": "role", "id": "admin" } // Create role in Trakfox
 *
 * - 'organization': An organizational entity.
 *   Classifications: Business standards, ERP (SAP).
 *   Identifiers: lowercase: 'organization', camelCase: 'organizationResource', snake_case: 'organization_resource', ALL_CAP: 'ORGANIZATION', cache key: 'resource:organization:resourceId'.
 *   Model Identifier Format: 'organization-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'company', 'entity'; used in DnDHubs for org management.
 *   @example
 *   GET /api/identity?type=organization&id=org1 // Fetch organization in DnDHubs
 *
 * - 'tenant': A tenant in a multi-tenant system.
 *   Classifications: Multi-tenancy standards, SaaS.
 *   Identifiers: lowercase: 'tenant', camelCase: 'tenantResource', snake_case: 'tenant_resource', ALL_CAP: 'TENANT', cache key: 'resource:tenant:resourceId'.
 *   Model Identifier Format: 'tenant-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'client', 'account'; used in Trakfox for multi-tenant setups.
 *   @example
 *   GET /api/identity?type=tenant&id=tenant1 // Fetch tenant in Trakfox
 *
 * - 'credential': An authentication credential.
 *   Classifications: Identity standards (OAuth, JWT).
 *   Identifiers: lowercase: 'credential', camelCase: 'credentialResource', snake_case: 'credential_resource', ALL_CAP: 'CREDENTIAL', cache key: 'resource:credential:resourceId'.
 *   Model Identifier Format: 'credential-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'auth', 'key'; used in HealthOrb for secure access.
 *   @example
 *   POST /api/identity { "type": "credential", "id": "cred1" } // Create credential in HealthOrb
 *
 * - 'identity': An identity record.
 *   Classifications: NIST SP 800-63, KYC standards.
 *   Identifiers: lowercase: 'identity', camelCase: 'identityResource', snake_case: 'identity_resource', ALL_CAP: 'IDENTITY', cache key: 'resource:identity:resourceId'.
 *   Model Identifier Format: 'identity-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'user_id', 'profile'; used in Trakfox for identity verification.
 *   @example
 *   GET /api/identity?type=identity&id=user123 // Fetch identity in Trakfox
 *
 * - 'permission': A permission grant.
 *   Classifications: RBAC, OAuth scopes.
 *   Identifiers: lowercase: 'permission', camelCase: 'permissionResource', snake_case: 'permission_resource', ALL_CAP: 'PERMISSION', cache key: 'resource:permission:resourceId'.
 *   Model Identifier Format: 'permission-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'access', 'right'; used in DnDHubs for access control.
 *   @example
 *   POST /api/identity { "type": "permission", "id": "read" } // Grant permission in DnDHubs
 *
 * - 'session': A user session.
 *   Classifications: Session management, OWASP standards.
 *   Identifiers: lowercase: 'session', camelCase: 'sessionResource', snake_case: 'session_resource', ALL_CAP: 'SESSION', cache key: 'resource:session:resourceId'.
 *   Model Identifier Format: 'session-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'login', 'active_session'; used in Trakfox for user sessions.
 *   @example
 *   GET /api/identity?type=session&id=sess123 // Fetch session in Trakfox
 *
 * - 'token': An authentication token.
 *   Classifications: JWT, OAuth tokens.
 *   Identifiers: lowercase: 'token', camelCase: 'tokenResource', snake_case: 'token_resource', ALL_CAP: 'TOKEN', cache key: 'resource:token:resourceId'.
 *   Model Identifier Format: 'token-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'jwt', 'auth_token'; used in HealthOrb for secure tokens.
 *   @example
 *   POST /api/identity { "type": "token", "id": "tok123" } // Generate token in HealthOrb
 *
 * - 'profile': A user profile.
 *   Classifications: Identity standards, schema.org Person.
 *   Identifiers: lowercase: 'profile', camelCase: 'profileResource', snake_case: 'profile_resource', ALL_CAP: 'PROFILE', cache key: 'resource:profile:resourceId'.
 *   Model Identifier Format: 'profile-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'user', 'account'; used in DnDHubs for user profiles.
 *   @example
 *   GET /api/identity?type=profile&id=user123 // Fetch profile in DnDHubs
 *
 * - 'account': A user or financial account.
 *   Classifications: Identity and financial standards (ISO 20022).
 *   Identifiers: lowercase: 'account', camelCase: 'accountResource', snake_case: 'account_resource', ALL_CAP: 'ACCOUNT', cache key: 'resource:account:resourceId'.
 *   Model Identifier Format: 'account-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'user', 'ledger'; used in Trakfox for user accounts.
 *   @example
 *   GET /api/identity?type=account&id=acc123 // Fetch account in Trakfox
 *
 * - 'group': A group of users or entities.
 *   Classifications: LDAP, group management standards.
 *   Identifiers: lowercase: 'group', camelCase: 'groupResource', snake_case: 'group_resource', ALL_CAP: 'GROUP', cache key: 'resource:group:resourceId'.
 *   Model Identifier Format: 'group-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'team', 'community'; used in HealthOrb for patient groups.
 *   @example
 *   GET /api/identity?type=group&id=grp123 // Fetch group in HealthOrb
 *
 * - 'delegation': A delegated access grant.
 *   Classifications: OAuth delegation, RBAC.
 *   Identifiers: lowercase: 'delegation', camelCase: 'delegationResource', snake_case: 'delegation_resource', ALL_CAP: 'DELEGATION', cache key: 'resource:delegation:resourceId'.
 *   Model Identifier Format: 'delegation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'proxy', 'access'; used in Trakfox for delegated access.
 *   @example
 *   POST /api/identity { "type": "delegation", "id": "del123" } // Create delegation in Trakfox
 *
 * - 'authorization': An authorization record.
 *   Classifications: OAuth, NIST SP 800-63.
 *   Identifiers: lowercase: 'authorization', camelCase: 'authorizationResource', snake_case: 'authorization_resource', ALL_CAP: 'AUTHORIZATION', cache key: 'resource:authorization:resourceId'.
 *   Model Identifier Format: 'authorization-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'auth', 'permission'; used in DnDHubs for authorization records.
 *   @example
 *   POST /api/identity { "type": "authorization", "id": "auth123" } // Create authorization in DnDHubs
 *
 * - 'workflow': A workflow process.
 *   Classifications: BPMN, workflow standards.
 *   Identifiers: lowercase: 'workflow', camelCase: 'workflowResource', snake_case: 'workflow_resource', ALL_CAP: 'WORKFLOW', cache key: 'resource:workflow:resourceId'.
 *   Model Identifier Format: 'workflow-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'process', 'flow'; used in GEOCoLab for automation ($2,497 tier).
 *   @example
 *   POST /api/workflow { "type": "workflow", "id": "wf123" } // Create workflow in GEOCoLab
 *
 * - 'job': A scheduled job.
 *   Classifications: Workflow standards, cron jobs.
 *   Identifiers: lowercase: 'job', camelCase: 'jobResource', snake_case: 'job_resource', ALL_CAP: 'JOB', cache key: 'resource:job:resourceId'.
 *   Model Identifier Format: 'job-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'task', 'batch'; used in Trakfox for scheduled jobs.
 *   @example
 *   GET /api/workflow?type=job&id=job123 // Fetch job in Trakfox
 *
 * - 'task': A task within a workflow.
 *   Classifications: BPMN task standards.
 *   Identifiers: lowercase: 'task', camelCase: 'taskResource', snake_case: 'task_resource', ALL_CAP: 'TASK', cache key: 'resource:task:resourceId'.
 *   Model Identifier Format: 'task-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'action', 'item'; used in DnDHubs for task management.
 *   @example
 *   POST /api/workflow { "type": "task", "id": "task123" } // Create task in DnDHubs
 *
 * - 'process': A business process.
 *   Classifications: BPMN process standards.
 *   Identifiers: lowercase: 'process', camelCase: 'processResource', snake_case: 'process_resource', ALL_CAP: 'PROCESS', cache key: 'resource:process:resourceId'.
 *   Model Identifier Format: 'process-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'workflow', 'procedure'; used in HealthOrb for care processes.
 *   @example
 *   GET /api/workflow?type=process&id=proc123 // Fetch process in HealthOrb
 *
 * - 'pipeline': A data or workflow pipeline.
 *   Classifications: Pipeline standards (CI/CD, ETL).
 *   Identifiers: lowercase: 'pipeline', camelCase: 'pipelineResource', snake_case: 'pipeline_resource', ALL_CAP: 'PIPELINE', cache key: 'resource:pipeline:resourceId'.
 *   Model Identifier Format: 'pipeline-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'flow', 'stream'; used in GEOCoLab for data pipelines.
 *   @example
 *   POST /api/workflow { "type": "pipeline", "id": "pipe123" } // Create pipeline in GEOCoLab
 *
 * - 'stage': A stage in a workflow.
 *   Classifications: BPMN stage standards.
 *   Identifiers: lowercase: 'stage', camelCase: 'stageResource', snake_case: 'stage_resource', ALL_CAP: 'STAGE', cache key: 'resource:stage:resourceId'.
 *   Model Identifier Format: 'stage-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'phase', 'step'; used in Trakfox for workflow stages.
 *   @example
 *   GET /api/workflow?type=stage&id=stage1 // Fetch stage in Trakfox
 *
 * - 'step': A step in a workflow.
 *   Classifications: BPMN step standards.
 *   Identifiers: lowercase: 'step', camelCase: 'stepResource', snake_case: 'step_resource', ALL_CAP: 'STEP', cache key: 'resource:step:resourceId'.
 *   Model Identifier Format: 'step-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'task', 'action'; used in DnDHubs for workflow steps.
 *   @example
 *   GET /api/workflow?type=step&id=step1 // Fetch step in DnDHubs
 *
 * - 'approval': An approval action.
 *   Classifications: Workflow standards, BPMN.
 *   Identifiers: lowercase: 'approval', camelCase: 'approvalResource', snake_case: 'approval_resource', ALL_CAP: 'APPROVAL', cache key: 'resource:approval:resourceId'.
 *   Model Identifier Format: 'approval-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'consent', 'signoff'; used in HealthOrb for approvals.
 *   @example
 *   POST /api/workflow { "type": "approval", "id": "app123" } // Create approval in HealthOrb
 *
 * - 'escalation': An escalation action.
 *   Classifications: Workflow standards, ITIL.
 *   Identifiers: lowercase: 'escalation', camelCase: 'escalationResource', snake_case: 'escalation_resource', ALL_CAP: 'ESCALATION', cache key: 'resource:escalation:resourceId'.
 *   Model Identifier Format: 'escalation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'elevate', 'urgent'; used in Trakfox for escalations.
 *   @example
 *   POST /api/workflow { "type": "escalation", "id": "esc123" } // Create escalation in Trakfox
 *
 * - 'automation': An automated process.
 *   Classifications: Automation standards, RPA.
 *   Identifiers: lowercase: 'automation', camelCase: 'automationResource', snake_case: 'automation_resource', ALL_CAP: 'AUTOMATION', cache key: 'resource:automation:resourceId'.
 *   Model Identifier Format: 'automation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'script', 'bot'; used in GEOCoLab for automated workflows ($2,497 tier).
 *   @example
 *   POST /api/workflow { "type": "automation", "id": "auto123" } // Create automation in GEOCoLab
 *
 * - 'trigger': A workflow trigger.
 *   Classifications: Workflow standards, event-driven systems.
 *   Identifiers: lowercase: 'trigger', camelCase: 'triggerResource', snake_case: 'trigger_resource', ALL_CAP: 'TRIGGER', cache key: 'resource:trigger:resourceId'.
 *   Model Identifier Format: 'trigger-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'event', 'hook'; used in Trakfox for event triggers.
 *   @example
 *   POST /api/workflow { "type": "trigger", "id": "trig123" } // Create trigger in Trakfox
 *
 * - 'action': A workflow action.
 *   Classifications: BPMN action standards.
 *   Identifiers: lowercase: 'action', camelCase: 'actionResource', snake_case: 'action_resource', ALL_CAP: 'ACTION', cache key: 'resource:action:resourceId'.
 *   Model Identifier Format: 'action-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'task', 'operation'; used in DnDHubs for workflow actions.
 *   @example
 *   POST /api/workflow { "type": "action", "id": "act123" } // Create action in DnDHubs
 *
 * - 'condition': A workflow condition.
 *   Classifications: BPMN condition standards.
 *   Identifiers: lowercase: 'condition', camelCase: 'conditionResource', snake_case: 'condition_resource', ALL_CAP: 'CONDITION', cache key: 'resource:condition:resourceId'.
 *   Model Identifier Format: 'condition-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rule', 'constraint'; used in HealthOrb for workflow conditions.
 *   @example
 *   POST /api/workflow { "type": "condition", "id": "cond123" } // Create condition in HealthOrb
 *
 * - 'transition': A workflow transition.
 *   Classifications: BPMN transition standards.
 *   Identifiers: lowercase: 'transition', camelCase: 'transitionResource', snake_case: 'transition_resource', ALL_CAP: 'TRANSITION', cache key: 'resource:transition:resourceId'.
 *   Model Identifier Format: 'transition-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'change', 'move'; used in Trakfox for workflow transitions.
 *   @example
 *   POST /api/workflow { "type": "transition", "id": "trans123" } // Create transition in Trakfox
 *
 * - 'milestone': A workflow milestone.
 *   Classifications: BPMN milestone standards.
 *   Identifiers: lowercase: 'milestone', camelCase: 'milestoneResource', snake_case: 'milestone_resource', ALL_CAP: 'MILESTONE', cache key: 'resource:milestone:resourceId'.
 *   Model Identifier Format: 'milestone-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'checkpoint', 'goal'; used in GEOCoLab for project milestones.
 *   @example
 *   GET /api/workflow?type=milestone&id=mile123 // Fetch milestone in GEOCoLab
 *
 * - 'notification': A user notification.
 *   Classifications: Notification standards (push, email).
 *   Identifiers: lowercase: 'notification', camelCase: 'notificationResource', snake_case: 'notification_resource', ALL_CAP: 'NOTIFICATION', cache key: 'resource:notification:resourceId'.
 *   Model Identifier Format: 'notification-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'alert', 'message'; used in Trakfox for user notifications.
 *   @example
 *   POST /api/communication { "type": "notification", "id": "notif123" } // Send notification in Trakfox
 *
 * - 'email': An email message.
 *   Classifications: Email standards (SMTP, MIME).
 *   Identifiers: lowercase: 'email', camelCase: 'emailResource', snake_case: 'email_resource', ALL_CAP: 'EMAIL', cache key: 'resource:email:resourceId'.
 *   Model Identifier Format: 'email-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'message', 'mail'; used in HealthOrb for patient emails.
 *   @example
 *   POST /api/communication { "type": "email", "id": "email123" } // Send email in HealthOrb
 *
 * - 'message': A generic message.
 *   Classifications: Messaging standards (XMPP, SMS).
 *   Identifiers: lowercase: 'message', camelCase: 'messageResource', snake_case: 'message_resource', ALL_CAP: 'MESSAGE', cache key: 'resource:message:resourceId'.
 *   Model Identifier Format: 'message-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'chat', 'text'; used in DnDHubs for user messages.
 *   @example
 *   POST /api/communication { "type": "message", "id": "msg123" } // Send message in DnDHubs
 *
 * - 'comment': A user comment.
 *   Classifications: Social media standards (Disqus, Activity Streams).
 *   Identifiers: lowercase: 'comment', camelCase: 'commentResource', snake_case: 'comment_resource', ALL_CAP: 'COMMENT', cache key: 'resource:comment:resourceId'.
 *   Model Identifier Format: 'comment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reply', 'note'; used in Trakfox for post comments.
 *   @example
 *   POST /api/communication { "type": "comment", "id": "com123" } // Create comment in Trakfox
 *
 * - 'feedback': User feedback.
 *   Classifications: Feedback standards, NPS.
 *   Identifiers: lowercase: 'feedback', camelCase: 'feedbackResource', snake_case: 'feedback_resource', ALL_CAP: 'FEEDBACK', cache key: 'resource:feedback:resourceId'.
 *   Model Identifier Format: 'feedback-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'review', 'response'; used in DnDHubs for user feedback.
 *   @example
 *   POST /api/communication { "type": "feedback", "id": "fb123" } // Submit feedback in DnDHubs
 *
 * - 'announcement': A public announcement.
 *   Classifications: Communication standards, CMS.
 *   Identifiers: lowercase: 'announcement', camelCase: 'announcementResource', snake_case: 'announcement_resource', ALL_CAP: 'ANNOUNCEMENT', cache key: 'resource:announcement:resourceId'.
 *   Model Identifier Format: 'announcement-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'notice', 'bulletin'; used in Trakfox for platform updates.
 *   @example
 *   POST /api/communication { "type": "announcement", "id": "ann123" } // Create announcement in Trakfox
 *
 * - 'alert': An urgent alert.
 *   Classifications: Notification standards, alerting systems.
 *   Identifiers: lowercase: 'alert', camelCase: 'alertResource', snake_case: 'alert_resource', ALL_CAP: 'ALERT', cache key: 'resource:alert:resourceId'.
 *   Model Identifier Format: 'alert-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'warning', 'notification'; used in HealthOrb for urgent alerts.
 *   @example
 *   POST /api/communication { "type": "alert", "id": "alert123" } // Send alert in HealthOrb
 *
 * - 'channel': A communication channel.
 *   Classifications: Messaging standards, XMPP.
 *   Identifiers: lowercase: 'channel', camelCase: 'channelResource', snake_case: 'channel_resource', ALL_CAP: 'CHANNEL', cache key: 'resource:channel:resourceId'.
 *   Model Identifier Format: 'channel-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'stream', 'group'; used in DnDHubs for chat channels.
 *   @example
 *   GET /api/communication?type=channel&id=chat1 // Fetch channel in DnDHubs
 *
 * - 'thread': A conversation thread.
 *   Classifications: Forum standards, Activity Streams.
 *   Identifiers: lowercase: 'thread', camelCase: 'threadResource', snake_case: 'thread_resource', ALL_CAP: 'THREAD', cache key: 'resource:thread:resourceId'.
 *   Model Identifier Format: 'thread-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'conversation', 'discussion'; used in Trakfox for comment threads.
 *   @example
 *   GET /api/communication?type=thread&id=thread123 // Fetch thread in Trakfox
 *
 * - 'conversation': A user conversation.
 *   Classifications: Messaging standards, XMPP.
 *   Identifiers: lowercase: 'conversation', camelCase: 'conversationResource', snake_case: 'conversation_resource', ALL_CAP: 'CONVERSATION', cache key: 'resource:conversation:resourceId'.
 *   Model Identifier Format: 'conversation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'chat', 'dialogue'; used in DnDHubs for user conversations.
 *   @example
 *   GET /api/communication?type=conversation&id=conv123 // Fetch conversation in DnDHubs
 *
 * - 'ticket': A support ticket.
 *   Classifications: Ticketing standards (Zendesk API).
 *   Identifiers: lowercase: 'ticket', camelCase: 'ticketResource', snake_case: 'ticket_resource', ALL_CAP: 'TICKET', cache key: 'resource:ticket:resourceId'.
 *   Model Identifier Format: 'ticket-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'issue', 'case'; used in Trakfox for support tickets.
 *   @example
 *   POST /api/communication { "type": "ticket", "id": "tick123" } // Create ticket in Trakfox
 *
 * - 'chat': A chat session.
 *   Classifications: Messaging standards, XMPP.
 *   Identifiers: lowercase: 'chat', camelCase: 'chatResource', snake_case: 'chat_resource', ALL_CAP: 'CHAT', cache key: 'resource:chat:resourceId'.
 *   Model Identifier Format: 'chat-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'message', 'conversation'; used in DnDHubs for live chats.
 *   @example
 *   POST /api/communication { "type": "chat", "id": "chat123" } // Start chat in DnDHubs
 *
 * - 'broadcast': A broadcast message.
 *   Classifications: Communication standards, email marketing.
 *   Identifiers: lowercase: 'broadcast', camelCase: 'broadcastResource', snake_case: 'broadcast_resource', ALL_CAP: 'BROADCAST', cache key: 'resource:broadcast:resourceId'.
 *   Model Identifier Format: 'broadcast-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'announcement', 'alert'; used in Trakfox for broadcasts.
 *   @example
 *   POST /api/communication { "type": "broadcast", "id": "broad123" } // Send broadcast in Trakfox
 *
 * - 'subscription': A subscription to a service.
 *   Classifications: Subscription standards, SaaS billing.
 *   Identifiers: lowercase: 'subscription', camelCase: 'subscriptionResource', snake_case: 'subscription_resource', ALL_CAP: 'SUBSCRIPTION', cache key: 'resource:subscription:resourceId'.
 *   Model Identifier Format: 'subscription-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'plan', 'membership'; used in DnDHubs for subscriptions.
 *   @example
 *   POST /api/communication { "type": "subscription", "id": "sub123" } // Create subscription in DnDHubs
 *
 * - 'digest': A summary digest.
 *   Classifications: Email standards, newsletter systems.
 *   Identifiers: lowercase: 'digest', camelCase: 'digestResource', snake_case: 'digest_resource', ALL_CAP: 'DIGEST', cache key: 'resource:digest:resourceId'.
 *   Model Identifier Format: 'digest-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'summary', 'newsletter'; used in Trakfox for email digests.
 *   @example
 *   POST /api/communication { "type": "digest", "id": "dig123" } // Send digest in Trakfox
 *
 * - 'analytics': Generic analytics resource.
 *   Classifications: Analytics standards (Google Analytics, OLAP).
 *   Identifiers: lowercase: 'analytics', camelCase: 'analyticsResource', snake_case: 'analytics_resource', ALL_CAP: 'ANALYTICS', cache key: 'resource:analytics:resourceId'.
 *   Model Identifier Format: 'analytics-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'insights', 'data'; used in DataOrb for analytics tracking.
 *   @example
 *   GET /api/analytics?type=analytics&id=track1 // Fetch analytics in DataOrb
 *
 * - 'visualization': A data visualization.
 *   Classifications: Visualization standards (D3, Chart.js).
 *   Identifiers: lowercase: 'visualization', camelCase: 'visualizationResource', snake_case: 'visualization_resource', ALL_CAP: 'VISUALIZATION', cache key: 'resource:visualization:resourceId'.
 *   Model Identifier Format: 'visualization-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'chart', 'graph'; used in Trakfox for visualizations.
 *   @example
 *   GET /api/analytics?type=visualization&id=chart1 // Fetch visualization in Trakfox
 *
 * - 'dashboard': An analytics dashboard.
 *   Classifications: BI standards, dashboard frameworks.
 *   Identifiers: lowercase: 'dashboard', camelCase: 'dashboardResource', snake_case: 'dashboard_resource', ALL_CAP: 'DASHBOARD', cache key: 'resource:dashboard:resourceId'.
 *   Model Identifier Format: 'dashboard-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'panel', 'board'; used in DataOrb for dashboards.
 *   @example
 *   GET /api/analytics?type=dashboard&id=dash1 // Fetch dashboard in DataOrb
 *
 * - 'metric': A performance metric.
 *   Classifications: Analytics standards, KPI frameworks.
 *   Identifiers: lowercase: 'metric', camelCase: 'metricResource', snake_case: 'metric_resource', ALL_CAP: 'METRIC', cache key: 'resource:metric:resourceId'.
 *   Model Identifier Format: 'metric-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'measure', 'kpi'; used in GEOCoLab for climate metrics ($99 tier).
 *   @example
 *   GET /api/analytics?type=metric&id=temp1 // Fetch metric in GEOCoLab
 *
 * - 'insight': An analytics insight.
 *   Classifications: BI standards, data insights.
 *   Identifiers: lowercase: 'insight', camelCase: 'insightResource', snake_case: 'insight_resource', ALL_CAP: 'INSIGHT', cache key: 'resource:insight:resourceId'.
 *   Model Identifier Format: 'insight-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'finding', 'analysis'; used in Trakfox for user insights.
 *   @example
 *   GET /api/analytics?type=insight&id=user1 // Fetch insight in Trakfox
 *
 * - 'trend': A data trend.
 *   Classifications: Analytics standards, time-series analysis.
 *   Identifiers: lowercase: 'trend', camelCase: 'trendResource', snake_case: 'trend_resource', ALL_CAP: 'TREND', cache key: 'resource:trend:resourceId'.
 *   Model Identifier Format: 'trend-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'pattern', 'tendency'; used in DataOrb for trend analysis.
 *   @example
 *   GET /api/analytics?type=trend&id=sales1 // Fetch trend in DataOrb
 *
 * - 'forecast': A predictive forecast.
 *   Classifications: Predictive analytics, ML standards.
 *   Identifiers: lowercase: 'forecast', camelCase: 'forecastResource', snake_case: 'forecast_resource', ALL_CAP: 'FORECAST', cache key: 'resource:forecast:resourceId'.
 *   Model Identifier Format: 'forecast-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'prediction', 'projection'; used in GEOCoLab for climate forecasts ($2,497 tier).
 *   @example
 *   GET /api/analytics?type=forecast&id=climate1 // Fetch forecast in GEOCoLab
 *
 * - 'aggregation': A data aggregation.
 *   Classifications: OLAP standards, data aggregation.
 *   Identifiers: lowercase: 'aggregation', camelCase: 'aggregationResource', snake_case: 'aggregation_resource', ALL_CAP: 'AGGREGATION', cache key: 'resource:aggregation:resourceId'.
 *   Model Identifier Format: 'aggregation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'summary', 'rollup'; used in DataOrb for aggregations.
 *   @example
 *   GET /api/analytics?type=aggregation&id=sales1 // Fetch aggregation in DataOrb
 *
 * - 'segment': A data segment.
 *   Classifications: Analytics standards, CRM segmentation.
 *   Identifiers: lowercase: 'segment', camelCase: 'segmentResource', snake_case: 'segment_resource', ALL_CAP: 'SEGMENT', cache key: 'resource:segment:resourceId'.
 *   Model Identifier Format: 'segment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'group', 'category'; used in Trakfox for user segments.
 *   @example
 *   GET /api/analytics?type=segment&id=user1 // Fetch segment in Trakfox
 *
 * - 'kpi': A key performance indicator.
 *   Classifications: KPI standards, BI frameworks.
 *   Identifiers: lowercase: 'kpi', camelCase: 'kpiResource', snake_case: 'kpi_resource', ALL_CAP: 'KPI', cache key: 'resource:kpi:resourceId'.
 *   Model Identifier Format: 'kpi-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'metric', 'indicator'; used in DnDHubs for performance tracking.
 *   @example
 *   GET /api/analytics?type=kpi&id=sales1 // Fetch KPI in DnDHubs
 *
 * - 'scorecard': A performance scorecard.
 *   Classifications: BI standards, scorecard frameworks.
 *   Identifiers: lowercase: 'scorecard', camelCase: 'scorecardResource', snake_case: 'scorecard_resource', ALL_CAP: 'SCORECARD', cache key: 'resource:scorecard:resourceId'.
 *   Model Identifier Format: 'scorecard-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'report', 'dashboard'; used in DataOrb for scorecards.
 *   @example
 *   GET /api/analytics?type=scorecard&id=perf1 // Fetch scorecard in DataOrb
 *
 * - 'benchmark': A performance benchmark.
 *   Classifications: Analytics standards, benchmarking.
 *   Identifiers: lowercase: 'benchmark', camelCase: 'benchmarkResource', snake_case: 'benchmark_resource', ALL_CAP: 'BENCHMARK', cache key: 'resource:benchmark:resourceId'.
 *   Model Identifier Format: 'benchmark-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'standard', 'reference'; used in GEOCoLab for benchmarks ($99 tier).
 *   @example
 *   GET /api/analytics?type=benchmark&id=climate1 // Fetch benchmark in GEOCoLab
 *
 * - 'analysis': An analytics analysis.
 *   Classifications: BI standards, data analysis.
 *   Identifiers: lowercase: 'analysis', camelCase: 'analysisResource', snake_case: 'analysis_resource', ALL_CAP: 'ANALYSIS', cache key: 'resource:analysis:resourceId'.
 *   Model Identifier Format: 'analysis-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'study', 'report'; used in Trakfox for user analysis.
 *   @example
 *   GET /api/analytics?type=analysis&id=user1 // Fetch analysis in Trakfox
 *
 * - 'statistics': Statistical data.
 *   Classifications: Statistical standards, BI.
 *   Identifiers: lowercase: 'statistics', camelCase: 'statisticsResource', snake_case: 'statistics_resource', ALL_CAP: 'STATISTICS', cache key: 'resource:statistics:resourceId'.
 *   Model Identifier Format: 'statistics-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'stats', 'metrics'; used in DataOrb for statistical reports.
 *   @example
 *   GET /api/analytics?type=statistics&id=stats1 // Fetch statistics in DataOrb
 *
 * - 'data': Generic data resource.
 *   Classifications: Data standards (ISO/IEC 11179).
 *   Identifiers: lowercase: 'data', camelCase: 'dataResource', snake_case: 'data_resource', ALL_CAP: 'DATA', cache key: 'resource:data:resourceId'.
 *   Model Identifier Format: 'data-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'info', 'dataset'; used in HealthOrb for generic data.
 *   @example
 *   GET /api/data?type=data&id=data1 // Fetch data in HealthOrb
 *
 * - 'dataset': A structured dataset.
 *   Classifications: Data standards, FAIR principles.
 *   Identifiers: lowercase: 'dataset', camelCase: 'datasetResource', snake_case: 'dataset_resource', ALL_CAP: 'DATASET', cache key: 'resource:dataset:resourceId'.
 *   Model Identifier Format: 'dataset-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'data', 'collection'; used in GEOCoLab for datasets ($2,497 tier).
 *   @example
 *   GET /api/data?type=dataset&id=climate1 // Fetch dataset in GEOCoLab
 *
 * - 'record': A data record.
 *   Classifications: Database standards, SQL.
 *   Identifiers: lowercase: 'record', camelCase: 'recordResource', snake_case: 'record_resource', ALL_CAP: 'RECORD', cache key: 'resource:record:resourceId'.
 *   Model Identifier Format: 'record-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'entry', 'row'; used in HealthOrb for patient records.
 *   @example
 *   GET /api/data?type=record&id=rec123 // Fetch record in HealthOrb
 *
 * - 'entity': A data entity.
 *   Classifications: ERD standards, database modeling.
 *   Identifiers: lowercase: 'entity', camelCase: 'entityResource', snake_case: 'entity_resource', ALL_CAP: 'ENTITY', cache key: 'resource:entity:resourceId'.
 *   Model Identifier Format: 'entity-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'object', 'item'; used in Trakfox for data entities.
 *   @example
 *   GET /api/data?type=entity&id=ent123 // Fetch entity in Trakfox
 *
 * - 'model': A data model.
 *   Classifications: Data modeling standards, UML.
 *   Identifiers: lowercase: 'model', camelCase: 'modelResource', snake_case: 'model_resource', ALL_CAP: 'MODEL', cache key: 'resource:model:resourceId'.
 *   Model Identifier Format: 'model-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'schema', 'template'; used in DnDHubs for data models.
 *   @example
 *   GET /api/data?type=model&id=model1 // Fetch model in DnDHubs
 *
 * - 'schema': A data schema.
 *   Classifications: JSON Schema, database standards.
 *   Identifiers: lowercase: 'schema', camelCase: 'schemaResource', snake_case: 'schema_resource', ALL_CAP: 'SCHEMA', cache key: 'resource:schema:resourceId'.
 *   Model Identifier Format: 'schema-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'structure', 'blueprint'; used in Trakfox for data schemas.
 *   @example
 *   GET /api/data?type=schema&id=schema1 // Fetch schema in Trakfox
 *
 * - 'index': A database index.
 *   Classifications: Database standards, SQL indexing.
 *   Identifiers: lowercase: 'index', camelCase: 'indexResource', snake_case: 'index_resource', ALL_CAP: 'INDEX', cache key: 'resource:index:resourceId'.
 *   Model Identifier Format: 'index-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'key', 'lookup'; used in HealthOrb for database indexing.
 *   @example
 *   POST /api/data { "type": "index", "id": "idx123" } // Create index in HealthOrb
 *
 * - 'query': A database query.
 *   Classifications: SQL standards, query languages.
 *   Identifiers: lowercase: 'query', camelCase: 'queryResource', snake_case: 'query_resource', ALL_CAP: 'QUERY', cache key: 'resource:query:resourceId'.
 *   Model Identifier Format: 'query-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'search', 'request'; used in DataOrb for queries.
 *   @example
 *   POST /api/data { "type": "query", "id": "qry123" } // Run query in DataOrb
 *
 * - 'view': A database view.
 *   Classifications: SQL view standards, database.
 *   Identifiers: lowercase: 'view', camelCase: 'viewResource', snake_case: 'view_resource', ALL_CAP: 'VIEW', cache key: 'resource:view:resourceId'.
 *   Model Identifier Format: 'view-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'table', 'perspective'; used in Trakfox for data views.
 *   @example
 *   GET /api/data?type=view&id=view1 // Fetch view in Trakfox
 *
 * - 'projection': A data projection.
 *   Classifications: Database standards, MongoDB projections.
 *   Identifiers: lowercase: 'projection', camelCase: 'projectionResource', snake_case: 'projection_resource', ALL_CAP: 'PROJECTION', cache key: 'resource:projection:resourceId'.
 *   Model Identifier Format: 'projection-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'subset', 'filter'; used in HealthOrb for data projections.
 *   @example
 *   GET /api/data?type=projection&id=proj123 // Fetch projection in HealthOrb
 *
 * - 'collection': A data collection.
 *   Classifications: NoSQL standards, MongoDB collections.
 *   Identifiers: lowercase: 'collection', camelCase: 'collectionResource', snake_case: 'collection_resource', ALL_CAP: 'COLLECTION', cache key: 'resource:collection:resourceId'.
 *   Model Identifier Format: 'collection-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'dataset', 'group'; used in GEOCoLab for data collections.
 *   @example
 *   GET /api/data?type=collection&id=col123 // Fetch collection in GEOCoLab
 *
 * - 'table': A database table.
 *   Classifications: SQL standards, relational databases.
 *   Identifiers: lowercase: 'table', camelCase: 'tableResource', snake_case: 'table_resource', ALL_CAP: 'TABLE', cache key: 'resource:table:resourceId'.
 *   Model Identifier Format: 'table-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'dataset', 'relation'; used in Trakfox for tables.
 *   @example
 *   GET /api/data?type=table&id=table1 // Fetch table in Trakfox
 *
 * - 'field': A data field.
 *   Classifications: Database standards, schema.org.
 *   Identifiers: lowercase: 'field', camelCase: 'fieldResource', snake_case: 'field_resource', ALL_CAP: 'FIELD', cache key: 'resource:field:resourceId'.
 *   Model Identifier Format: 'field-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'column', 'attribute'; used in HealthOrb for data fields.
 *   @example
 *   GET /api/data?type=field&id=field1 // Fetch field in HealthOrb
 *
 * - 'attribute': A data attribute.
 *   Classifications: Data modeling, schema.org.
 *   Identifiers: lowercase: 'attribute', camelCase: 'attributeResource', snake_case: 'attribute_resource', ALL_CAP: 'ATTRIBUTE', cache key: 'resource:attribute:resourceId'.
 *   Model Identifier Format: 'attribute-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'property', 'field'; used in DnDHubs for attributes.
 *   @example
 *   GET /api/data?type=attribute&id=attr1 // Fetch attribute in DnDHubs
 *
 * - 'relationship': A data relationship.
 *   Classifications: ERD standards, relational databases.
 *   Identifiers: lowercase: 'relationship', camelCase: 'relationshipResource', snake_case: 'relationship_resource', ALL_CAP: 'RELATIONSHIP', cache key: 'resource:relationship:resourceId'.
 *   Model Identifier Format: 'relationship-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'link', 'association'; used in Trakfox for data relationships.
 *   @example
 *   GET /api/data?type=relationship&id=rel123 // Fetch relationship in Trakfox
 *
 * - 'integration': A system integration.
 *   Classifications: Integration standards (REST, SOAP).
 *   Identifiers: lowercase: 'integration', camelCase: 'integrationResource', snake_case: 'integration_resource', ALL_CAP: 'INTEGRATION', cache key: 'resource:integration:resourceId'.
 *   Model Identifier Format: 'integration-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'connection', 'link'; used in HealthOrb for DHIS2 integrations.
 *   @example
 *   POST /api/integration { "type": "integration", "id": "int123" } // Create integration in HealthOrb
 *
 * - 'connector': A component linking systems or services.
 *   Classifications: Integration standards (REST, SOAP), API platforms.
 *   Identifiers: lowercase: 'connector', camelCase: 'connectorResource', snake_case: 'connector_resource', ALL_CAP: 'CONNECTOR', cache key: 'resource:connector:resourceId'.
 *   Model Identifier Format: 'connector-{id}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'adapter', 'link'; used in HealthOrb for DHIS2 connectors, Trakfox for external integrations.
 *   @example
 *   POST /api/integration { "type": "connector", "id": "dhis2" } // Create connector in HealthOrb
 *
 * - 'webhook': A webhook for event-driven integration.
 *   Classifications: Webhook standards, event-driven architectures.
 *   Identifiers: lowercase: 'webhook', camelCase: 'webhookResource', snake_case: 'webhook_resource', ALL_CAP: 'WEBHOOK', cache key: 'resource:webhook:resourceId'.
 *   Model Identifier Format: 'webhook-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'hook', 'callback'; used in Trakfox for real-time notifications, DnDHubs for event triggers.
 *   @example
 *   POST /api/integration { "type": "webhook", "id": "wh123" } // Create webhook in Trakfox
 *
 * - 'endpoint': An API endpoint.
 *   Classifications: RESTful API standards, OpenAPI.
 *   Identifiers: lowercase: 'endpoint', camelCase: 'endpointResource', snake_case: 'endpoint_resource', ALL_CAP: 'ENDPOINT', cache key: 'resource:endpoint:resourceId'.
 *   Model Identifier Format: 'endpoint-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'api', 'route'; used in HealthOrb for DHIS2 API endpoints, DnDHubs for marketplace APIs.
 *   @example
 *   GET /api/integration?type=endpoint&id=api123 // Fetch endpoint in HealthOrb
 *
 * - 'apispec': An API specification.
 *   Classifications: OpenAPI, Swagger standards.
 *   Identifiers: lowercase: 'apispec', camelCase: 'apiSpecResource', snake_case: 'api_spec_resource', ALL_CAP: 'APISPEC', cache key: 'resource:apispec:resourceId'.
 *   Model Identifier Format: 'apispec-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'swagger', 'spec'; used in Trakfox for API documentation.
 *   @example
 *   GET /api/integration?type=apispec&id=spec123 // Fetch API spec in Trakfox
 *
 * - 'mapping': A data mapping configuration.
 *   Classifications: ETL standards, data integration.
 *   Identifiers: lowercase: 'mapping', camelCase: 'mappingResource', snake_case: 'mapping_resource', ALL_CAP: 'MAPPING', cache key: 'resource:mapping:resourceId'.
 *   Model Identifier Format: 'mapping-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'transformation', 'schema'; used in GEOCoLab for data mappings ($2,497 tier).
 *   @example
 *   POST /api/integration { "type": "mapping", "id": "map123" } // Create mapping in GEOCoLab
 *
 * - 'transformation': A data transformation process.
 *   Classifications: ETL standards, data pipelines.
 *   Identifiers: lowercase: 'transformation', camelCase: 'transformationResource', snake_case: 'transformation_resource', ALL_CAP: 'TRANSFORMATION', cache key: 'resource:transformation:resourceId'.
 *   Model Identifier Format: 'transformation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'convert', 'mapping'; used in HealthOrb for data transformations.
 *   @example
 *   POST /api/integration { "type": "transformation", "id": "trans123" } // Create transformation in HealthOrb
 *
 * - 'sync': A data synchronization process.
 *   Classifications: Sync protocols, data integration.
 *   Identifiers: lowercase: 'sync', camelCase: 'syncResource', snake_case: 'sync_resource', ALL_CAP: 'SYNC', cache key: 'resource:sync:resourceId'.
 *   Model Identifier Format: 'sync-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'synchronize', 'update'; used in Trakfox for data syncing.
 *   @example
 *   POST /api/integration { "type": "sync", "id": "sync123" } // Run sync in Trakfox
 *
 * - 'migration': A data migration process.
 *   Classifications: Data migration standards, ETL.
 *   Identifiers: lowercase: 'migration', camelCase: 'migrationResource', snake_case: 'migration_resource', ALL_CAP: 'MIGRATION', cache key: 'resource:migration:resourceId'.
 *   Model Identifier Format: 'migration-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'transfer', 'move'; used in DataOrb for database migrations.
 *   @example
 *   POST /api/integration { "type": "migration", "id": "mig123" } // Run migration in DataOrb
 *
 * - 'adapter': An integration adapter.
 *   Classifications: Integration standards, adapter patterns.
 *   Identifiers: lowercase: 'adapter', camelCase: 'adapterResource', snake_case: 'adapter_resource', ALL_CAP: 'ADAPTER', cache key: 'resource:adapter:resourceId'.
 *   Model Identifier Format: 'adapter-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'connector', 'bridge'; used in HealthOrb for system adapters.
 *   @example
 *   POST /api/integration { "type": "adapter", "id": "adp123" } // Create adapter in HealthOrb
 *
 * - 'bridge': A system bridge for integration.
 *   Classifications: Integration standards, bridge patterns.
 *   Identifiers: lowercase: 'bridge', camelCase: 'bridgeResource', snake_case: 'bridge_resource', ALL_CAP: 'BRIDGE', cache key: 'resource:bridge:resourceId'.
 *   Model Identifier Format: 'bridge-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'connector', 'link'; used in Trakfox for system bridges.
 *   @example
 *   POST /api/integration { "type": "bridge", "id": "brg123" } // Create bridge in Trakfox
 *
 * - 'gateway': An API gateway.
 *   Classifications: API gateway standards, cloud platforms.
 *   Identifiers: lowercase: 'gateway', camelCase: 'gatewayResource', snake_case: 'gateway_resource', ALL_CAP: 'GATEWAY', cache key: 'resource:gateway:resourceId'.
 *   Model Identifier Format: 'gateway-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'proxy', 'router'; used in DnDHubs for API gateways.
 *   @example
 *   GET /api/integration?type=gateway&id=gw123 // Fetch gateway in DnDHubs
 *
 * - 'proxy': A proxy service.
 *   Classifications: Proxy standards, networking.
 *   Identifiers: lowercase: 'proxy', camelCase: 'proxyResource', snake_case: 'proxy_resource', ALL_CAP: 'PROXY', cache key: 'resource:proxy:resourceId'.
 *   Model Identifier Format: 'proxy-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'forwarder', 'intermediary'; used in HealthOrb for secure proxies.
 *   @example
 *   POST /api/integration { "type": "proxy", "id": "prx123" } // Create proxy in HealthOrb
 *
 * - 'router': A routing service.
 *   Classifications: Networking standards, API routing.
 *   Identifiers: lowercase: 'router', camelCase: 'routerResource', snake_case: 'router_resource', ALL_CAP: 'ROUTER', cache key: 'resource:router:resourceId'.
 *   Model Identifier Format: 'router-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'route', 'switch'; used in Trakfox for API routing.
 *   @example
 *   POST /api/integration { "type": "router", "id": "rtr123" } // Create router in Trakfox
 *
 * - 'middleware': A middleware component.
 *   Classifications: Middleware standards, software architecture.
 *   Identifiers: lowercase: 'middleware', camelCase: 'middlewareResource', snake_case: 'middleware_resource', ALL_CAP: 'MIDDLEWARE', cache key: 'resource:middleware:resourceId'.
 *   Model Identifier Format: 'middleware-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'filter', 'interceptor'; used in DnDHubs for middleware processing.
 *   @example
 *   POST /api/integration { "type": "middleware", "id": "mid123" } // Create middleware in DnDHubs
 *
 * - 'container': A containerized application.
 *   Classifications: Container standards (Docker, Kubernetes).
 *   Identifiers: lowercase: 'container', camelCase: 'containerResource', snake_case: 'container_resource', ALL_CAP: 'CONTAINER', cache key: 'resource:container:resourceId'.
 *   Model Identifier Format: 'container-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'pod', 'image'; used in Trakfox for container deployments.
 *   @example
 *   POST /api/infrastructure { "type": "container", "id": "cont123" } // Deploy container in Trakfox
 *
 * - 'function': A serverless function.
 *   Classifications: Serverless standards (AWS Lambda, FaaS).
 *   Identifiers: lowercase: 'function', camelCase: 'functionResource', snake_case: 'function_resource', ALL_CAP: 'FUNCTION', cache key: 'resource:function:resourceId'.
 *   Model Identifier Format: 'function-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'lambda', 'serverless'; used in DataOrb for serverless functions.
 *   @example
 *   POST /api/infrastructure { "type": "function", "id": "func123" } // Deploy function in DataOrb
 *
 * - 'service': A microservice or service.
 *   Classifications: Microservices standards, SOA.
 *   Identifiers: lowercase: 'service', camelCase: 'serviceResource', snake_case: 'service_resource', ALL_CAP: 'SERVICE', cache key: 'resource:service:resourceId'.
 *   Model Identifier Format: 'service-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'microservice', 'api'; used in DnDHubs for service deployments.
 *   @example
 *   GET /api/infrastructure?type=service&id=svc123 // Fetch service in DnDHubs
 *
 * - 'cluster': A compute cluster.
 *   Classifications: Cluster standards (Kubernetes, Hadoop).
 *   Identifiers: lowercase: 'cluster', camelCase: 'clusterResource', snake_case: 'cluster_resource', ALL_CAP: 'CLUSTER', cache key: 'resource:cluster:resourceId'.
 *   Model Identifier Format: 'cluster-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'group', 'nodegroup'; used in GEOCoLab for compute clusters ($2,497 tier).
 *   @example
 *   GET /api/infrastructure?type=cluster&id=clust123 // Fetch cluster in GEOCoLab
 *
 * - 'node': A compute node.
 *   Classifications: Cluster standards, distributed systems.
 *   Identifiers: lowercase: 'node', camelCase: 'nodeResource', snake_case: 'node_resource', ALL_CAP: 'NODE', cache key: 'resource:node:resourceId'.
 *   Model Identifier Format: 'node-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'server', 'instance'; used in Trakfox for nodes.
 *   @example
 *   GET /api/infrastructure?type=node&id=node123 // Fetch node in Trakfox
 *
 * - 'deployment': A deployment process.
 *   Classifications: CI/CD standards, DevOps.
 *   Identifiers: lowercase: 'deployment', camelCase: 'deploymentResource', snake_case: 'deployment_resource', ALL_CAP: 'DEPLOYMENT', cache key: 'resource:deployment:resourceId'.
 *   Model Identifier Format: 'deployment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'release', 'rollout'; used in DnDHubs for deployments.
 *   @example
 *   POST /api/infrastructure { "type": "deployment", "id": "dep123" } // Create deployment in DnDHubs
 *
 * - 'environment': A deployment environment.
 *   Classifications: Environment standards, DevOps.
 *   Identifiers: lowercase: 'environment', camelCase: 'environmentResource', snake_case: 'environment_resource', ALL_CAP: 'ENVIRONMENT', cache key: 'resource:environment:resourceId'.
 *   Model Identifier Format: 'environment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'env', 'stage'; used in Trakfox for environments (e.g., prod, dev).
 *   @example
 *   GET /api/infrastructure?type=environment&id=prod // Fetch environment in Trakfox
 *
 * - 'resource': A generic infrastructure resource.
 *   Classifications: Infrastructure standards (ITIL).
 *   Identifiers: lowercase: 'resource', camelCase: 'resourceResource', snake_case: 'resource_resource', ALL_CAP: 'RESOURCE', cache key: 'resource:resource:resourceId'.
 *   Model Identifier Format: 'resource-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'asset', 'component'; used in DataOrb for generic resources.
 *   @example
 *   GET /api/infrastructure?type=resource&id=res123 // Fetch resource in DataOrb
 *
 * - 'capacity': Infrastructure capacity.
 *   Classifications: Capacity planning, ITIL.
 *   Identifiers: lowercase: 'capacity', camelCase: 'capacityResource', snake_case: 'capacity_resource', ALL_CAP: 'CAPACITY', cache key: 'resource:capacity:resourceId'.
 *   Model Identifier Format: 'capacity-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'limit', 'quota'; used in GEOCoLab for capacity planning.
 *   @example
 *   GET /api/infrastructure?type=capacity&id=cap123 // Fetch capacity in GEOCoLab
 *
 * - 'scaling': A scaling configuration.
 *   Classifications: Scalability standards, cloud computing.
 *   Identifiers: lowercase: 'scaling', camelCase: 'scalingResource', snake_case: 'scaling_resource', ALL_CAP: 'SCALING', cache key: 'resource:scaling:resourceId'.
 *   Model Identifier Format: 'scaling-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'autoscaling', 'resize'; used in Trakfox for auto-scaling configs.
 *   @example
 *   POST /api/infrastructure { "type": "scaling", "id": "scale123" } // Create scaling config in Trakfox
 *
 * - 'instance': A compute instance.
 *   Classifications: Cloud standards (AWS EC2, GCP).
 *   Identifiers: lowercase: 'instance', camelCase: 'instanceResource', snake_case: 'instance_resource', ALL_CAP: 'INSTANCE', cache key: 'resource:instance:resourceId'.
 *   Model Identifier Format: 'instance-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'vm', 'server'; used in DnDHubs for instances.
 *   @example
 *   GET /api/infrastructure?type=instance&id=inst123 // Fetch instance in DnDHubs
 *
 * - 'server': A server resource.
 *   Classifications: Server standards, ITIL.
 *   Identifiers: lowercase: 'server', camelCase: 'serverResource', snake_case: 'server_resource', ALL_CAP: 'SERVER', cache key: 'resource:server:resourceId'.
 *   Model Identifier Format: 'server-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'host', 'node'; used in HealthOrb for servers.
 *   @example
 *   GET /api/infrastructure?type=server&id=srv123 // Fetch server in HealthOrb
 *
 * - 'network': A network resource.
 *   Classifications: Networking standards, TCP/IP.
 *   Identifiers: lowercase: 'network', camelCase: 'networkResource', snake_case: 'network_resource', ALL_CAP: 'NETWORK', cache key: 'resource:network:resourceId'.
 *   Model Identifier Format: 'network-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'lan', 'wan'; used in Trakfox for network configs.
 *   @example
 *   GET /api/infrastructure?type=network&id=net123 // Fetch network in Trakfox
 *
 * - 'loadbalancer': A load balancer.
 *   Classifications: Load balancing standards, cloud platforms.
 *   Identifiers: lowercase: 'loadbalancer', camelCase: 'loadBalancerResource', snake_case: 'load_balancer_resource', ALL_CAP: 'LOADBALANCER', cache key: 'resource:loadbalancer:resourceId'.
 *   Model Identifier Format: 'loadbalancer-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'balancer', 'distributor'; used in DnDHubs for load balancers.
 *   @example
 *   GET /api/infrastructure?type=loadbalancer&id=lb123 // Fetch load balancer in DnDHubs
 *
 * - 'registry': A container registry.
 *   Classifications: Container registry standards (Docker Hub).
 *   Identifiers: lowercase: 'registry', camelCase: 'registryResource', snake_case: 'registry_resource', ALL_CAP: 'REGISTRY', cache key: 'resource:registry:resourceId'.
 *   Model Identifier Format: 'registry-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'repo', 'store'; used in Trakfox for container registries.
 *   @example
 *   GET /api/infrastructure?type=registry&id=reg123 // Fetch registry in Trakfox
 *
 * - 'transaction': A financial transaction.
 *   Classifications: Financial standards (ISO 20022), PCI DSS.
 *   Identifiers: lowercase: 'transaction', camelCase: 'transactionResource', snake_case: 'transaction_resource', ALL_CAP: 'TRANSACTION', cache key: 'resource:transaction:resourceId'.
 *   Model Identifier Format: 'transaction-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'payment', 'transfer'; used in DnDHubs for transactions.
 *   @example
 *   POST /api/financial { "type": "transaction", "id": "txn123" } // Process transaction in DnDHubs
 *
 * - 'account': A financial account.
 *   Classifications: Financial standards (ISO 20022).
 *   Identifiers: lowercase: 'account', camelCase: 'accountResource', snake_case: 'account_resource', ALL_CAP: 'ACCOUNT', cache key: 'resource:account:resourceId'.
 *   Model Identifier Format: 'account-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'ledger', 'wallet'; used in Trakfox for accounts.
 *   @example
 *   GET /api/financial?type=account&id=acc123 // Fetch account in Trakfox
 *
 * - 'ledger': A financial ledger.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'ledger', camelCase: 'ledgerResource', snake_case: 'ledger_resource', ALL_CAP: 'LEDGER', cache key: 'resource:ledger:resourceId'.
 *   Model Identifier Format: 'ledger-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'book', 'record'; used in DnDHubs for ledgers.
 *   @example
 *   GET /api/financial?type=ledger&id=led123 // Fetch ledger in DnDHubs
 *
 * - 'journal': A financial journal.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'journal', camelCase: 'journalResource', snake_case: 'journal_resource', ALL_CAP: 'JOURNAL', cache key: 'resource:journal:resourceId'.
 *   Model Identifier Format: 'journal-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'log', 'entry'; used in Trakfox for journals.
 *   @example
 *   GET /api/financial?type=journal&id=jrnl123 // Fetch journal in Trakfox
 *
 * - 'budget': A financial budget.
 *   Classifications: Financial planning standards.
 *   Identifiers: lowercase: 'budget', camelCase: 'budgetResource', snake_case: 'budget_resource', ALL_CAP: 'BUDGET', cache key: 'resource:budget:resourceId'.
 *   Model Identifier Format: 'budget-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'plan', 'forecast'; used in DnDHubs for budgets.
 *   @example
 *   POST /api/financial { "type": "budget", "id": "bud123" } // Create budget in DnDHubs
 *
 * - 'tax': A tax record.
 *   Classifications: Tax standards, IRS compliance.
 *   Identifiers: lowercase: 'tax', camelCase: 'taxResource', snake_case: 'tax_resource', ALL_CAP: 'TAX', cache key: 'resource:tax:resourceId'.
 *   Model Identifier Format: 'tax-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'duty', 'levy'; used in Trakfox for tax records.
 *   @example
 *   GET /api/financial?type=tax&id=tax123 // Fetch tax in Trakfox
 *
 * - 'billing': A billing record.
 *   Classifications: Financial standards, PCI DSS.
 *   Identifiers: lowercase: 'billing', camelCase: 'billingResource', snake_case: 'billing_resource', ALL_CAP: 'BILLING', cache key: 'resource:billing:resourceId'.
 *   Model Identifier Format: 'billing-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'invoice', 'charge'; used in DnDHubs for billing.
 *   @example
 *   POST /api/financial { "type": "billing", "id": "bill123" } // Create billing in DnDHubs
 *
 * - 'subscription': A financial subscription.
 *   Classifications: Subscription standards, SaaS billing.
 *   Identifiers: lowercase: 'subscription', camelCase: 'subscriptionResource', snake_case: 'subscription_resource', ALL_CAP: 'SUBSCRIPTION', cache key: 'resource:subscription:resourceId'.
 *   Model Identifier Format: 'subscription-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'plan', 'membership'; used in Trakfox for subscriptions.
 *   @example
 *   POST /api/financial { "type": "subscription", "id": "sub123" } // Create subscription in Trakfox
 *
 * - 'statement': A financial statement.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'statement', camelCase: 'statementResource', snake_case: 'statement_resource', ALL_CAP: 'STATEMENT', cache key: 'resource:statement:resourceId'.
 *   Model Identifier Format: 'statement-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'report', 'balance'; used in DnDHubs for statements.
 *   @example
 *   GET /api/financial?type=statement&id=stmt123 // Fetch statement in DnDHubs
 *
 * - 'reconciliation': A financial reconciliation.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'reconciliation', camelCase: 'reconciliationResource', snake_case: 'reconciliation_resource', ALL_CAP: 'RECONCILIATION', cache key: 'resource:reconciliation:resourceId'.
 *   Model Identifier Format: 'reconciliation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'recon', 'audit'; used in Trakfox for reconciliations.
 *   @example
 *   POST /api/financial { "type": "reconciliation", "id": "rec123" } // Create reconciliation in Trakfox
 *
 * - 'expense': A financial expense.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'expense', camelCase: 'expenseResource', snake_case: 'expense_resource', ALL_CAP: 'EXPENSE', cache key: 'resource:expense:resourceId'.
 *   Model Identifier Format: 'expense-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'cost', 'outlay'; used in DnDHubs for expenses.
 *   @example
 *   POST /api/financial { "type": "expense", "id": "exp123" } // Record expense in DnDHubs
 *
 * - 'revenue': Financial revenue.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'revenue', camelCase: 'revenueResource', snake_case: 'revenue_resource', ALL_CAP: 'REVENUE', cache key: 'resource:revenue:resourceId'.
 *   Model Identifier Format: 'revenue-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'income', 'sales'; used in Trakfox for revenue tracking.
 *   @example
 *   GET /api/financial?type=revenue&id=rev123 // Fetch revenue in Trakfox
 *
 * - 'asset': A financial asset.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'asset', camelCase: 'assetResource', snake_case: 'asset_resource', ALL_CAP: 'ASSET', cache key: 'resource:asset:resourceId'.
 *   Model Identifier Format: 'asset-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'property', 'resource'; used in DnDHubs for assets.
 *   @example
 *   GET /api/financial?type=asset&id=ast123 // Fetch asset in DnDHubs
 *
 * - 'liability': A financial liability.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'liability', camelCase: 'liabilityResource', snake_case: 'liability_resource', ALL_CAP: 'LIABILITY', cache key: 'resource:liability:resourceId'.
 *   Model Identifier Format: 'liability-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'debt', 'obligation'; used in Trakfox for liabilities.
 *   @example
 *   GET /api/financial?type=liability&id=liab123 // Fetch liability in Trakfox
 *
 * - 'equity': Financial equity.
 *   Classifications: Accounting standards, GAAP.
 *   Identifiers: lowercase: 'equity', camelCase: 'equityResource', snake_case: 'equity_resource', ALL_CAP: 'EQUITY', cache key: 'resource:equity:resourceId'.
 *   Model Identifier Format: 'equity-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'capital', 'networth'; used in DnDHubs for equity records.
 *   @example
 *   GET /api/financial?type=equity&id=eq123 // Fetch equity in DnDHubs
 *
 * - 'patient': A healthcare patient.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'patient', camelCase: 'patientResource', snake_case: 'patient_resource', ALL_CAP: 'PATIENT', cache key: 'resource:patient:resourceId'.
 *   Model Identifier Format: 'patient-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'client', 'subject'; used in HealthOrb for patient records.
 *   @example
 *   GET /api/clinical?type=patient&id=pat123 // Fetch patient in HealthOrb
 *
 * - 'practitioner': A healthcare practitioner.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'practitioner', camelCase: 'practitionerResource', snake_case: 'practitioner_resource', ALL_CAP: 'PRACTITIONER', cache key: 'resource:practitioner:resourceId'.
 *   Model Identifier Format: 'practitioner-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'doctor', 'provider'; used in HealthOrb for practitioner records.
 *   @example
 *   GET /api/clinical?type=practitioner&id=prac123 // Fetch practitioner in HealthOrb
 *
 * - 'appointment': A healthcare appointment.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'appointment', camelCase: 'appointmentResource', snake_case: 'appointment_resource', ALL_CAP: 'APPOINTMENT', cache key: 'resource:appointment:resourceId'.
 *   Model Identifier Format: 'appointment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'booking', 'visit'; used in HealthOrb for appointments.
 *   @example
 *   POST /api/clinical { "type": "appointment", "id": "apt123" } // Create appointment in HealthOrb
 *
 * - 'observation': A healthcare observation.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'observation', camelCase: 'observationResource', snake_case: 'observation_resource', ALL_CAP: 'OBSERVATION', cache key: 'resource:observation:resourceId'.
 *   Model Identifier Format: 'observation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'measurement', 'result'; used in HealthOrb for patient observations.
 *   @example
 *   GET /api/clinical?type=observation&id=obs123 // Fetch observation in HealthOrb
 *
 * - 'procedure': A healthcare procedure.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'procedure', camelCase: 'procedureResource', snake_case: 'procedure_resource', ALL_CAP: 'PROCEDURE', cache key: 'resource:procedure:resourceId'.
 *   Model Identifier Format: 'procedure-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'operation', 'treatment'; used in HealthOrb for procedures.
 *   @example
 *   POST /api/clinical { "type": "procedure", "id": "proc123" } // Create procedure in HealthOrb
 *
 * - 'medication': A medication record.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'medication', camelCase: 'medicationResource', snake_case: 'medication_resource', ALL_CAP: 'MEDICATION', cache key: 'resource:medication:resourceId'.
 *   Model Identifier Format: 'medication-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'drug', 'prescription'; used in HealthOrb for medications.
 *   @example
 *   GET /api/clinical?type=medication&id=med123 // Fetch medication in HealthOrb
 *
 * - 'diagnosis': A healthcare diagnosis.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'diagnosis', camelCase: 'diagnosisResource', snake_case: 'diagnosis_resource', ALL_CAP: 'DIAGNOSIS', cache key: 'resource:diagnosis:resourceId'.
 *   Model Identifier Format: 'diagnosis-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'condition', 'finding'; used in HealthOrb for diagnoses.
 *   @example
 *   GET /api/clinical?type=diagnosis&id=diag123 // Fetch diagnosis in HealthOrb
 *
 * - 'encounter': A healthcare encounter.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'encounter', camelCase: 'encounterResource', snake_case: 'encounter_resource', ALL_CAP: 'ENCOUNTER', cache key: 'resource:encounter:resourceId'.
 *   Model Identifier Format: 'encounter-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'visit', 'interaction'; used in HealthOrb for patient encounters.
 *   @example
 *   GET /api/clinical?type=encounter&id=enc123 // Fetch encounter in HealthOrb
 *
 * - 'careplan': A healthcare care plan.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'careplan', camelCase: 'carePlanResource', snake_case: 'care_plan_resource', ALL_CAP: 'CAREPLAN', cache key: 'resource:careplan:resourceId'.
 *   Model Identifier Format: 'careplan-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'plan', 'treatment'; used in HealthOrb for care plans.
 *   @example
 *   POST /api/clinical { "type": "careplan", "id": "cp123" } // Create care plan in HealthOrb
 *
 * - 'claim': A healthcare insurance claim.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'claim', camelCase: 'claimResource', snake_case: 'claim_resource', ALL_CAP: 'CLAIM', cache key: 'resource:claim:resourceId'.
 *   Model Identifier Format: 'claim-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'billing', 'reimbursement'; used in HealthOrb for claims.
 *   @example
 *   POST /api/clinical { "type": "claim", "id": "clm123" } // Create claim in HealthOrb
 *
 * - 'lab': A laboratory test.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'lab', camelCase: 'labResource', snake_case: 'lab_resource', ALL_CAP: 'LAB', cache key: 'resource:lab:resourceId'.
 *   Model Identifier Format: 'lab-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'test', 'analysis'; used in HealthOrb for lab tests.
 *   @example
 *   GET /api/clinical?type=lab&id=lab123 // Fetch lab in HealthOrb
 *
 * - 'imaging': A medical imaging record.
 *   Classifications: Healthcare standards (DICOM, FHIR).
 *   Identifiers: lowercase: 'imaging', camelCase: 'imagingResource', snake_case: 'imaging_resource', ALL_CAP: 'IMAGING', cache key: 'resource:imaging:resourceId'.
 *   Model Identifier Format: 'imaging-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'scan', 'radiology'; used in HealthOrb for imaging records.
 *   @example
 *   GET /api/clinical?type=imaging&id=img123 // Fetch imaging in HealthOrb
 *
 * - 'prescription': A medical prescription.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'prescription', camelCase: 'prescriptionResource', snake_case: 'prescription_resource', ALL_CAP: 'PRESCRIPTION', cache key: 'resource:prescription:resourceId'.
 *   Model Identifier Format: 'prescription-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rx', 'medication'; used in HealthOrb for prescriptions.
 *   @example
 *   POST /api/clinical { "type": "prescription", "id": "rx123" } // Create prescription in HealthOrb
 *
 * - 'referral': A healthcare referral.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'referral', camelCase: 'referralResource', snake_case: 'referral_resource', ALL_CAP: 'REFERRAL', cache key: 'resource:referral:resourceId'.
 *   Model Identifier Format: 'referral-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'transfer', 'recommendation'; used in HealthOrb for referrals.
 *   @example
 *   POST /api/clinical { "type": "referral", "id": "ref123" } // Create referral in HealthOrb
 *
 * - 'admission': A healthcare admission.
 *   Classifications: Healthcare standards (HL7, FHIR).
 *   Identifiers: lowercase: 'admission', camelCase: 'admissionResource', snake_case: 'admission_resource', ALL_CAP: 'ADMISSION', cache key: 'resource:admission:resourceId'.
 *   Model Identifier Format: 'admission-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'hospitalization', 'entry'; used in HealthOrb for admissions.
 *   @example
 *   POST /api/clinical { "type": "admission", "id": "adm123" } // Create admission in HealthOrb
 *
 * - 'equipment': Manufacturing equipment.
 *   Classifications: Manufacturing standards (ISO 9001).
 *   Identifiers: lowercase: 'equipment', camelCase: 'equipmentResource', snake_case: 'equipment_resource', ALL_CAP: 'EQUIPMENT', cache key: 'resource:equipment:resourceId'.
 *   Model Identifier Format: 'equipment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'machine', 'tool'; used in DnDHubs for equipment tracking.
 *   @example
 *   GET /api/operational?type=equipment&id=eqp123 // Fetch equipment in DnDHubs
 *
 * - 'production': A production process.
 *   Classifications: Manufacturing standards (SCOR).
 *   Identifiers: lowercase: 'production', camelCase: 'productionResource', snake_case: 'production_resource', ALL_CAP: 'PRODUCTION', cache key: 'resource:production:resourceId'.
 *   Model Identifier Format: 'production-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'manufacturing', 'build'; used in Trakfox for production processes.
 *   @example
 *   POST /api/operational { "type": "production", "id": "prod123" } // Create production in Trakfox
 *
 * - 'quality': A quality control process.
 *   Classifications: Quality standards (ISO 9001).
 *   Identifiers: lowercase: 'quality', camelCase: 'qualityResource', snake_case: 'quality_resource', ALL_CAP: 'QUALITY', cache key: 'resource:quality:resourceId'.
 *   Model Identifier Format: 'quality-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'qa', 'control'; used in DnDHubs for quality checks.
 *   @example
 *   POST /api/operational { "type": "quality", "id": "qa123" } // Create quality check in DnDHubs
 *
 * - 'maintenance': A maintenance process.
 *   Classifications: Maintenance standards (ISO 55000).
 *   Identifiers: lowercase: 'maintenance', camelCase: 'maintenanceResource', snake_case: 'maintenance_resource', ALL_CAP: 'MAINTENANCE', cache key: 'resource:maintenance:resourceId'.
 *   Model Identifier Format: 'maintenance-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'repair', 'service'; used in GEOCoLab for maintenance ($99 tier).
 *   @example
 *   POST /api/operational { "type": "maintenance", "id": "mnt123" } // Create maintenance in GEOCoLab
 *
 * - 'inventory': Manufacturing inventory.
 *   Classifications: Inventory standards (SCOR).
 *   Identifiers: lowercase: 'inventory', camelCase: 'inventoryResource', snake_case: 'inventory_resource', ALL_CAP: 'INVENTORY', cache key: 'resource:inventory:resourceId'.
 *   Model Identifier Format: 'inventory-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'stock', 'supply'; used in Trakfox for inventory tracking.
 *   @example
 *   GET /api/operational?type=inventory&id=inv123 // Fetch inventory in Trakfox
 *
 * - 'batch': A production batch.
 *   Classifications: Manufacturing standards (SCOR).
 *   Identifiers: lowercase: 'batch', camelCase: 'batchResource', snake_case: 'batch_resource', ALL_CAP: 'BATCH', cache key: 'resource:batch:resourceId'.
 *   Model Identifier Format: 'batch-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'lot', 'group'; used in DnDHubs for batches.
 *   @example
 *   POST /api/operational { "type": "batch", "id": "bat123" } // Create batch in DnDHubs
 *
 * - 'inspection': A quality inspection.
 *   Classifications: Quality standards (ISO 9001).
 *   Identifiers: lowercase: 'inspection', camelCase: 'inspectionResource', snake_case: 'inspection_resource', ALL_CAP: 'INSPECTION', cache key: 'resource:inspection:resourceId'.
 *   Model Identifier Format: 'inspection-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'check', 'review'; used in Trakfox for inspections.
 *   @example
 *   POST /api/operational { "type": "inspection", "id": "insp123" } // Create inspection in Trakfox
 *
 * - 'workorder': A manufacturing work order.
 *   Classifications: Manufacturing standards (SCOR).
 *   Identifiers: lowercase: 'workorder', camelCase: 'workOrderResource', snake_case: 'work_order_resource', ALL_CAP: 'WORKORDER', cache key: 'resource:workorder:resourceId'.
 *   Model Identifier Format: 'workorder-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'job', 'task'; used in DnDHubs for work orders.
 *   @example
 *   POST /api/operational { "type": "workorder", "id": "wo123" } // Create work order in DnDHubs
 *
 * - 'assembly': An assembly process.
 *   Classifications: Manufacturing standards (SCOR).
 *   Identifiers: lowercase: 'assembly', camelCase: 'assemblyResource', snake_case: 'assembly_resource', ALL_CAP: 'ASSEMBLY', cache key: 'resource:assembly:resourceId'.
 *   Model Identifier Format: 'assembly-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'build', 'construction'; used in Trakfox for assemblies.
 *   @example
 *   POST /api/operational { "type": "assembly", "id": "asm123" } // Create assembly in Trakfox
 *
 * - 'defect': A manufacturing defect.
 *   Classifications: Quality standards (ISO 9001).
 *   Identifiers: lowercase: 'defect', camelCase: 'defectResource', snake_case: 'defect_resource', ALL_CAP: 'DEFECT', cache key: 'resource:defect:resourceId'.
 *   Model Identifier Format: 'defect-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'issue', 'fault'; used in DnDHubs for defect tracking.
 *   @example
 *   POST /api/operational { "type": "defect", "id": "def123" } // Report defect in DnDHubs
 *
 * - 'material': A manufacturing material.
 *   Classifications: Manufacturing standards (SCOR).
 *   Identifiers: lowercase: 'material', camelCase: 'materialResource', snake_case: 'material_resource', ALL_CAP: 'MATERIAL', cache key: 'resource:material:resourceId'.
 *   Model Identifier Format: 'material-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'resource', 'component'; used in Trakfox for materials.
 *   @example
 *   GET /api/operational?type=material&id=mat123 // Fetch material in Trakfox
 *
 * - 'supplier': A supplier entity.
 *   Classifications: Supply chain standards (SCOR).
 *   Identifiers: lowercase: 'supplier', camelCase: 'supplierResource', snake_case: 'supplier_resource', ALL_CAP: 'SUPPLIER', cache key: 'resource:supplier:resourceId'.
 *   Model Identifier Format: 'supplier-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'vendor', 'provider'; used in DnDHubs for suppliers.
 *   @example
 *   GET /api/operational?type=supplier&id=sup123 // Fetch supplier in DnDHubs
 *
 * - 'procurement': A procurement process.
 *   Classifications: Procurement standards (SCOR).
 *   Identifiers: lowercase: 'procurement', camelCase: 'procurementResource', snake_case: 'procurement_resource', ALL_CAP: 'PROCUREMENT', cache key: 'resource:procurement:resourceId'.
 *   Model Identifier Format: 'procurement-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'purchase', 'acquisition'; used in Trakfox for procurement.
 *   @example
 *   POST /api/operational { "type": "procurement", "id": "proc123" } // Create procurement in Trakfox
 *
 * - 'logistics': A logistics process.
 *   Classifications: Logistics standards (SCOR).
 *   Identifiers: lowercase: 'logistics', camelCase: 'logisticsResource', snake_case: 'logistics_resource', ALL_CAP: 'LOGISTICS', cache key: 'resource:logistics:resourceId'.
 *   Model Identifier Format: 'logistics-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'transport', 'shipping'; used in DnDHubs for logistics.
 *   @example
 *   POST /api/operational { "type": "logistics", "id": "log123" } // Create logistics in DnDHubs
 *
 * - 'delivery': A delivery process.
 *   Classifications: Logistics standards (SCOR).
 *   Identifiers: lowercase: 'delivery', camelCase: 'deliveryResource', snake_case: 'delivery_resource', ALL_CAP: 'DELIVERY', cache key: 'resource:delivery:resourceId'.
 *   Model Identifier Format: 'delivery-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'shipping', 'transport'; used in Trakfox for deliveries.
 *   @example
 *   POST /api/operational { "type": "delivery", "id": "del123" } // Create delivery in Trakfox
 *
 * - 'policy': A regulatory policy.
 *   Classifications: Governance standards (ISO 37000).
 *   Identifiers: lowercase: 'policy', camelCase: 'policyResource', snake_case: 'policy_resource', ALL_CAP: 'POLICY', cache key: 'resource:policy:resourceId'.
 *   Model Identifier Format: 'policy-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rule', 'guideline'; used in HealthOrb for policies.
 *   @example
 *   GET /api/regulatory?type=policy&id=pol123 // Fetch policy in HealthOrb
 *
 * - 'regulation': A regulatory regulation.
 *   Classifications: Regulatory standards (GDPR, HIPAA).
 *   Identifiers: lowercase: 'regulation', camelCase: 'regulationResource', snake_case: 'regulation_resource', ALL_CAP: 'REGULATION', cache key: 'resource:regulation:resourceId'.
 *   Model Identifier Format: 'regulation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'law', 'standard'; used in Trakfox for regulations.
 *   @example
 *   GET /api/regulatory?type=regulation&id=reg123 // Fetch regulation in Trakfox
 *
 * - 'compliance': A compliance record.
 *   Classifications: Compliance standards (ISO 27001).
 *   Identifiers: lowercase: 'compliance', camelCase: 'complianceResource', snake_case: 'compliance_resource', ALL_CAP: 'COMPLIANCE', cache key: 'resource:compliance:resourceId'.
 *   Model Identifier Format: 'compliance-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'adherence', 'conformance'; used in HealthOrb for compliance reports.
 *   @example
 *   POST /api/regulatory { "type": "compliance", "id": "comp123" } // Create compliance in HealthOrb
 *
 * - 'audit': An audit record.
 *   Classifications: Audit standards (ISO 27001).
 *   Identifiers: lowercase: 'audit', camelCase: 'auditResource', snake_case: 'audit_resource', ALL_CAP: 'AUDIT', cache key: 'resource:audit:resourceId'.
 *   Model Identifier Format: 'audit-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'review', 'check'; used in DnDHubs for audits.
 *   @example
 *   GET /api/regulatory?type=audit&id=aud123 // Fetch audit in DnDHubs
 *
 * - 'permit': A regulatory permit.
 *   Classifications: Regulatory standards.
 *   Identifiers: lowercase: 'permit', camelCase: 'permitResource', snake_case: 'permit_resource', ALL_CAP: 'PERMIT', cache key: 'resource:permit:resourceId'.
 *   Model Identifier Format: 'permit-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'license', 'authorization'; used in Trakfox for permits.
 *   @example
 *   POST /api/regulatory { "type": "permit", "id": "perm123" } // Create permit in Trakfox
 *
 * - 'license': A regulatory license.
 *   Classifications: Regulatory standards.
 *   Identifiers: lowercase: 'license', camelCase: 'licenseResource', snake_case: 'license_resource', ALL_CAP: 'LICENSE', cache key: 'resource:license:resourceId'.
 *   Model Identifier Format: 'license-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'permit', 'certification'; used in HealthOrb for licenses.
 *   @example
 *   GET /api/regulatory?type=license&id=lic123 // Fetch license in HealthOrb
 *
 * - 'certificate': A regulatory certificate.
 *   Classifications: Regulatory standards.
 *   Identifiers: lowercase: 'certificate', camelCase: 'certificateResource', snake_case: 'certificate_resource', ALL_CAP: 'CERTIFICATE', cache key: 'resource:certificate:resourceId'.
 *   Model Identifier Format: 'certificate-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'credential', 'cert'; used in DnDHubs for certificates.
 *   @example
 *   POST /api/regulatory { "type": "certificate", "id": "cert123" } // Create certificate in DnDHubs
 *
 * - 'standard': A regulatory standard.
 *   Classifications: Regulatory standards (ISO, ANSI).
 *   Identifiers: lowercase: 'standard', camelCase: 'standardResource', snake_case: 'standard_resource', ALL_CAP: 'STANDARD', cache key: 'resource:standard:resourceId'.
 *   Model Identifier Format: 'standard-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'norm', 'guideline'; used in Trakfox for standards.
 *   @example
 *   GET /api/regulatory?type=standard&id=std123 // Fetch standard in Trakfox
 *
 * - 'requirement': A regulatory requirement.
 *   Classifications: Compliance standards.
 *   Identifiers: lowercase: 'requirement', camelCase: 'requirementResource', snake_case: 'requirement_resource', ALL_CAP: 'REQUIREMENT', cache key: 'resource:requirement:resourceId'.
 *   Model Identifier Format: 'requirement-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rule', 'mandate'; used in HealthOrb for requirements.
 *   @example
 *   GET /api/regulatory?type=requirement&id=req123 // Fetch requirement in HealthOrb
 *
 * - 'violation': A regulatory violation.
 *   Classifications: Compliance standards.
 *   Identifiers: lowercase: 'violation', camelCase: 'violationResource', snake_case: 'violation_resource', ALL_CAP: 'VIOLATION', cache key: 'resource:violation:resourceId'.
 *   Model Identifier Format: 'violation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'breach', 'infraction'; used in DnDHubs for violation tracking.
 *   @example
 *   POST /api/regulatory { "type": "violation", "id": "viol123" } // Report violation in DnDHubs
 *
 * - 'assessment': A regulatory assessment.
 *   Classifications: Compliance standards.
 *   Identifiers: lowercase: 'assessment', camelCase: 'assessmentResource', snake_case: 'assessment_resource', ALL_CAP: 'ASSESSMENT', cache key: 'resource:assessment:resourceId'.
 *   Model Identifier Format: 'assessment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'evaluation', 'audit'; used in Trakfox for assessments.
 *   @example
 *   POST /api/regulatory { "type": "assessment", "id": "ass123" } // Create assessment in Trakfox
 *
 * - 'control': A regulatory control.
 *   Classifications: Compliance standards (ISO 27001).
 *   Identifiers: lowercase: 'control', camelCase: 'controlResource', snake_case: 'control_resource', ALL_CAP: 'CONTROL', cache key: 'resource:control:resourceId'.
 *   Model Identifier Format: 'control-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'measure', 'safeguard'; used in HealthOrb for controls.
 *   @example
 *   GET /api/regulatory?type=control&id=ctrl123 // Fetch control in HealthOrb
 *
 * - 'risk': A regulatory risk.
 *   Classifications: Risk management standards (ISO 31000).
 *   Identifiers: lowercase: 'risk', camelCase: 'riskResource', snake_case: 'risk_resource', ALL_CAP: 'RISK', cache key: 'resource:risk:resourceId'.
 *   Model Identifier Format: 'risk-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'threat', 'hazard'; used in DnDHubs for risk tracking.
 *   @example
 *   POST /api/regulatory { "type": "risk", "id": "risk123" } // Report risk in DnDHubs
 *
 * - 'issue': A regulatory issue.
 *   Classifications: Compliance standards.
 *   Identifiers: lowercase: 'issue', camelCase: 'issueResource', snake_case: 'issue_resource', ALL_CAP: 'ISSUE', cache key: 'resource:issue:resourceId'.
 *   Model Identifier Format: 'issue-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'problem', 'concern'; used in Trakfox for issue tracking.
 *   @example
 *   POST /api/regulatory { "type": "issue", "id": "iss123" } // Report issue in Trakfox
 *
 * - 'remediation': A regulatory remediation.
 *   Classifications: Compliance standards.
 *   Identifiers: lowercase: 'remediation', camelCase: 'remediationResource', snake_case: 'remediation_resource', ALL_CAP: 'REMEDIATION', cache key: 'resource:remediation:resourceId'.
 *   Model Identifier Format: 'remediation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'fix', 'correction'; used in HealthOrb for remediation.
 *   @example
 *   POST /api/regulatory { "type": "remediation", "id": "rem123" } // Create remediation in HealthOrb
 *
 * - 'course': An educational course.
 *   Classifications: Education standards (SCORM, IMS Global).
 *   Identifiers: lowercase: 'course', camelCase: 'courseResource', snake_case: 'course_resource', ALL_CAP: 'COURSE', cache key: 'resource:course:resourceId'.
 *   Model Identifier Format: 'course-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'class', 'program'; used in DataOrb for courses.
 *   @example
 *   POST /api/educational { "type": "course", "id": "crs123" } // Create course in DataOrb
 *
 * - 'lesson': An educational lesson.
 *   Classifications: Education standards (SCORM).
 *   Identifiers: lowercase: 'lesson', camelCase: 'lessonResource', snake_case: 'lesson_resource', ALL_CAP: 'LESSON', cache key: 'resource:lesson:resourceId'.
 *   Model Identifier Format: 'lesson-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'module', 'unit'; used in Trakfox for lessons.
 *   @example
 *   GET /api/educational?type=lesson&id=les123 // Fetch lesson in Trakfox
 *
 * - 'module': An educational module.
 *   Classifications: Education standards (SCORM).
 *   Identifiers: lowercase: 'module', camelCase: 'moduleResource', snake_case: 'module_resource', ALL_CAP: 'MODULE', cache key: 'resource:module:resourceId'.
 *   Model Identifier Format: 'module-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'unit', 'lesson'; used in DataOrb for modules.
 *   @example
 *   GET /api/educational?type=module&id=mod123 // Fetch module in DataOrb
 *
 * - 'assessment': An educational assessment.
 *   Classifications: Education standards (IMS Global).
 *   Identifiers: lowercase: 'assessment', camelCase: 'assessmentResource', snake_case: 'assessment_resource', ALL_CAP: 'ASSESSMENT', cache key: 'resource:assessment:resourceId'.
 *   Model Identifier Format: 'assessment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'test', 'exam'; used in Trakfox for assessments.
 *   @example
 *   POST /api/educational { "type": "assessment", "id": "ass123" } // Create assessment in Trakfox
 *
 * - 'grade': An educational grade.
 *   Classifications: Education standards.
 *   Identifiers: lowercase: 'grade', camelCase: 'gradeResource', snake_case: 'grade_resource', ALL_CAP: 'GRADE', cache key: 'resource:grade:resourceId'.
 *   Model Identifier Format: 'grade-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'score', 'mark'; used in DataOrb for grades.
 *   @example
 *   POST /api/educational { "type": "grade", "id": "grd123" } // Record grade in DataOrb
 *
 * - 'transcript': An educational transcript.
 *   Classifications: Education standards.
 *   Identifiers: lowercase: 'transcript', camelCase: 'transcriptResource', snake_case: 'transcript_resource', ALL_CAP: 'TRANSCRIPT', cache key: 'resource:transcript:resourceId'.
 *   Model Identifier Format: 'transcript-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'record', 'report'; used in Trakfox for transcripts.
 *   @example
 *   GET /api/educational?type=transcript&id=trans123 // Fetch transcript in Trakfox
 *
 * - 'enrollment': An educational enrollment.
 *   Classifications: Education standards (IMS Global).
 *   Identifiers: lowercase: 'enrollment', camelCase: 'enrollmentResource', snake_case: 'enrollment_resource', ALL_CAP: 'ENROLLMENT', cache key: 'resource:enrollment:resourceId'.
 *   Model Identifier Format: 'enrollment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'registration', 'signup'; used in DataOrb for enrollments.
 *   @example
 *   POST /api/educational { "type": "enrollment", "id": "enr123" } // Create enrollment in DataOrb
 *
 * - 'certification': An educational certification.
 *   Classifications: Education standards.
 *   Identifiers: lowercase: 'certification', camelCase: 'certificationResource', snake_case: 'certification_resource', ALL_CAP: 'CERTIFICATION', cache key: 'resource:certification:resourceId'.
 *   Model Identifier Format: 'certification-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'certificate', 'credential'; used in Trakfox for certifications.
 *   @example
 *   POST /api/educational { "type": "certification", "id": "cert123" } // Create certification in Trakfox
 *
 * - 'curriculum': An educational curriculum.
 *   Classifications: Education standards.
 *   Identifiers: lowercase: 'curriculum', camelCase: 'curriculumResource', snake_case: 'curriculum_resource', ALL_CAP: 'CURRICULUM', cache key: 'resource:curriculum:resourceId'.
 *   Model Identifier Format: 'curriculum-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'syllabus', 'program'; used in DataOrb for curricula.
 *   @example
 *   GET /api/educational?type=curriculum&id=curr123 // Fetch curriculum in DataOrb
 *
 * - 'attendance': An educational attendance record.
 *   Classifications: Education standards.
 *   Identifiers: lowercase: 'attendance', camelCase: 'attendanceResource', snake_case: 'attendance_resource', ALL_CAP: 'ATTENDANCE', cache key: 'resource:attendance:resourceId'.
 *   Model Identifier Format: 'attendance-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'presence', 'roll'; used in Trakfox for attendance tracking.
 *   @example
 *   POST /api/educational { "type": "attendance", "id": "att123" } // Record attendance in Trakfox
 *
 * - 'assignment': An educational assignment.
 *   Classifications: Education standards (LMS).
 *   Identifiers: lowercase: 'assignment', camelCase: 'assignmentResource', snake_case: 'assignment_resource', ALL_CAP: 'ASSIGNMENT', cache key: 'resource:assignment:resourceId'.
 *   Model Identifier Format: 'assignment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'task', 'homework'; used in DataOrb for assignments.
 *   @example
 *   POST /api/educational { "type": "assignment", "id": "assgn123" } // Create assignment in DataOrb
 *
 * - 'exam': An educational exam.
 *   Classifications: Education standards (IMS Global).
 *   Identifiers: lowercase: 'exam', camelCase: 'examResource', snake_case: 'exam_resource', ALL_CAP: 'EXAM', cache key: 'resource:exam:resourceId'.
 *   Model Identifier Format: 'exam-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'test', 'assessment'; used in Trakfox for exams.
 *   @example
 *   POST /api/educational { "type": "exam", "id": "exam123" } // Create exam in Trakfox
 *
 * - 'quiz': An educational quiz.
 *   Classifications: Education standards (LMS).
 *   Identifiers: lowercase: 'quiz', camelCase: 'quizResource', snake_case: 'quiz_resource', ALL_CAP: 'QUIZ', cache key: 'resource:quiz:resourceId'.
 *   Model Identifier Format: 'quiz-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'test', 'assessment'; used in DataOrb for quizzes.
 *   @example
 *   POST /api/educational { "type": "quiz", "id": "quiz123" } // Create quiz in DataOrb
 *
 * - 'lecture': An educational lecture.
 *   Classifications: Education standards.
 *   Identifiers: lowercase: 'lecture', camelCase: 'lectureResource', snake_case: 'lecture_resource', ALL_CAP: 'LECTURE', cache key: 'resource:lecture:resourceId'.
 *   Model Identifier Format: 'lecture-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'talk', 'session'; used in Trakfox for lectures.
 *   @example
 *   GET /api/educational?type=lecture&id=lec123 // Fetch lecture in Trakfox
 *
 * - 'seminar': An educational seminar.
 *   Classifications: Education standards.
 *   Identifiers: lowercase: 'seminar', camelCase: 'seminarResource', snake_case: 'seminar_resource', ALL_CAP: 'SEMINAR', cache key: 'resource:seminar:resourceId'.
 *   Model Identifier Format: 'seminar-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'workshop', 'class'; used in DataOrb for seminars.
 *   @example
 *   GET /api/educational?type=seminar&id=sem123 // Fetch seminar in DataOrb
 *
 * - 'case': A legal case.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'case', camelCase: 'caseResource', snake_case: 'case_resource', ALL_CAP: 'CASE', cache key: 'resource:case:resourceId'.
 *   Model Identifier Format: 'case-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'lawsuit', 'matter'; used in Trakfox for legal cases.
 *   @example
 *   GET /api/legal?type=case&id=case123 // Fetch case in Trakfox
 *
 * - 'contract': A legal contract.
 *   Classifications: Legal standards (ISO 27001).
 *   Identifiers: lowercase: 'contract', camelCase: 'contractResource', snake_case: 'contract_resource', ALL_CAP: 'CONTRACT', cache key: 'resource:contract:resourceId'.
 *   Model Identifier Format: 'contract-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'agreement', 'deal'; used in DnDHubs for contracts.
 *   @example
 *   POST /api/legal { "type": "contract", "id": "cont123" } // Create contract in DnDHubs
 *
 * - 'litigation': A litigation process.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'litigation', camelCase: 'litigationResource', snake_case: 'litigation_resource', ALL_CAP: 'LITIGATION', cache key: 'resource:litigation:resourceId'.
 *   Model Identifier Format: 'litigation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'lawsuit', 'dispute'; used in Trakfox for litigation tracking.
 *   @example
 *   GET /api/legal?type=litigation&id=lit123 // Fetch litigation in Trakfox
 *
 * - 'evidence': Legal evidence.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'evidence', camelCase: 'evidenceResource', snake_case: 'evidence_resource', ALL_CAP: 'EVIDENCE', cache key: 'resource:evidence:resourceId'.
 *   Model Identifier Format: 'evidence-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'proof', 'exhibit'; used in DnDHubs for evidence records.
 *   @example
 *   POST /api/legal { "type": "evidence", "id": "evid123" } // Record evidence in DnDHubs
 *
 * - 'filing': A legal filing.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'filing', camelCase: 'filingResource', snake_case: 'filing_resource', ALL_CAP: 'FILING', cache key: 'resource:filing:resourceId'.
 *   Model Identifier Format: 'filing-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'submission', 'document'; used in Trakfox for filings.
 *   @example
 *   POST /api/legal { "type": "filing", "id": "file123" } // Create filing in Trakfox
 *
 * - 'verdict': A legal verdict.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'verdict', camelCase: 'verdictResource', snake_case: 'verdict_resource', ALL_CAP: 'VERDICT', cache key: 'resource:verdict:resourceId'.
 *   Model Identifier Format: 'verdict-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'judgment', 'decision'; used in DnDHubs for verdicts.
 *   @example
 *   GET /api/legal?type=verdict&id=verd123 // Fetch verdict in DnDHubs
 *
 * - 'settlement': A legal settlement.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'settlement', camelCase: 'settlementResource', snake_case: 'settlement_resource', ALL_CAP: 'SETTLEMENT', cache key: 'resource:settlement:resourceId'.
 *   Model Identifier Format: 'settlement-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'agreement', 'resolution'; used in Trakfox for settlements.
 *   @example
 *   POST /api/legal { "type": "settlement", "id": "set123" } // Create settlement in Trakfox
 *
 * - 'clause': A legal clause.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'clause', camelCase: 'clauseResource', snake_case: 'clause_resource', ALL_CAP: 'CLAUSE', cache key: 'resource:clause:resourceId'.
 *   Model Identifier Format: 'clause-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'term', 'provision'; used in DnDHubs for contract clauses.
 *   @example
 *   GET /api/legal?type=clause&id=cl123 // Fetch clause in DnDHubs
 *
 * - 'statute': A legal statute.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'statute', camelCase: 'statuteResource', snake_case: 'statute_resource', ALL_CAP: 'STATUTE', cache key: 'resource:statute:resourceId'.
 *   Model Identifier Format: 'statute-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'law', 'regulation'; used in Trakfox for statutes.
 *   @example
 *   GET /api/legal?type=statute&id=stat123 // Fetch statute in Trakfox
 *
 * - 'precedent': A legal precedent.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'precedent', camelCase: 'precedentResource', snake_case: 'precedent_resource', ALL_CAP: 'PRECEDENT', cache key: 'resource:precedent:resourceId'.
 *   Model Identifier Format: 'precedent-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'case', 'ruling'; used in DnDHubs for precedents.
 *   @example
 *   GET /api/legal?type=precedent&id=prec123 // Fetch precedent in DnDHubs
 *
 * - 'agreement': A legal agreement.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'agreement', camelCase: 'agreementResource', snake_case: 'agreement_resource', ALL_CAP: 'AGREEMENT', cache key: 'resource:agreement:resourceId'.
 *   Model Identifier Format: 'agreement-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'contract', 'deal'; used in Trakfox for agreements.
 *   @example
 *   POST /api/legal { "type": "agreement", "id": "agr123" } // Create agreement in Trakfox
 *
 * - 'dispute': A legal dispute.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'dispute', camelCase: 'disputeResource', snake_case: 'dispute_resource', ALL_CAP: 'DISPUTE', cache key: 'resource:dispute:resourceId'.
 *   Model Identifier Format: 'dispute-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'conflict', 'litigation'; used in DnDHubs for disputes.
 *   @example
 *   POST /api/legal { "type": "dispute", "id": "disp123" } // Create dispute in DnDHubs
 *
 * - 'arbitration': A legal arbitration.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'arbitration', camelCase: 'arbitrationResource', snake_case: 'arbitration_resource', ALL_CAP: 'ARBITRATION', cache key: 'resource:arbitration:resourceId'.
 *   Model Identifier Format: 'arbitration-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'mediation', 'resolution'; used in Trakfox for arbitrations.
 *   @example
 *   POST /api/legal { "type": "arbitration", "id": "arb123" } // Create arbitration in Trakfox
 *
 * - 'judgment': A legal judgment.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'judgment', camelCase: 'judgmentResource', snake_case: 'judgment_resource', ALL_CAP: 'JUDGMENT', cache key: 'resource:judgment:resourceId'.
 *   Model Identifier Format: 'judgment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'verdict', 'ruling'; used in DnDHubs for judgments.
 *   @example
 *   GET /api/legal?type=judgment&id=jud123 // Fetch judgment in DnDHubs
 *
 * - 'appeal': A legal appeal.
 *   Classifications: Legal standards.
 *   Identifiers: lowercase: 'appeal', camelCase: 'appealResource', snake_case: 'appeal_resource', ALL_CAP: 'APPEAL', cache key: 'resource:appeal:resourceId'.
 *   Model Identifier Format: 'appeal-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'review', 'challenge'; used in Trakfox for appeals.
 *   @example
 *   POST /api/legal { "type": "appeal", "id": "app123" } // Create appeal in Trakfox
 *
 * - 'location': A geographic location.
 *   Classifications: Geospatial standards (ISO 19115, GeoJSON).
 *   Identifiers: lowercase: 'location', camelCase: 'locationResource', snake_case: 'location_resource', ALL_CAP: 'LOCATION', cache key: 'resource:location:resourceId'.
 *   Model Identifier Format: 'location-{id}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'place', 'site'; used in GEOCoLab for locations ($99 tier), Trakfox for user location tracking.
 *   @example
 *   GET /api/spatial?type=location&id=loc123 // Fetch location in GEOCoLab
 *
 * - 'property': A real estate property.
 *   Classifications: Real estate standards (RESO, MLS).
 *   Identifiers: lowercase: 'property', camelCase: 'propertyResource', snake_case: 'property_resource', ALL_CAP: 'PROPERTY', cache key: 'resource:property:resourceId'.
 *   Model Identifier Format: 'property-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'estate', 'land'; used in DnDHubs for property listings.
 *   @example
 *   GET /api/spatial?type=property&id=prop123 // Fetch property in DnDHubs
 *
 * - 'building': A building structure.
 *   Classifications: Geospatial standards (ISO 19115).
 *   Identifiers: lowercase: 'building', camelCase: 'buildingResource', snake_case: 'building_resource', ALL_CAP: 'BUILDING', cache key: 'resource:building:resourceId'.
 *   Model Identifier Format: 'building-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'structure', 'facility'; used in GEOCoLab for building data ($99 tier).
 *   @example
 *   GET /api/spatial?type=building&id=bld123 // Fetch building in GEOCoLab
 *
 * - 'floor': A floor within a building.
 *   Classifications: Geospatial standards (IndoorGML).
 *   Identifiers: lowercase: 'floor', camelCase: 'floorResource', snake_case: 'floor_resource', ALL_CAP: 'FLOOR', cache key: 'resource:floor:resourceId'.
 *   Model Identifier Format: 'floor-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'level', 'story'; used in Trakfox for facility management.
 *   @example
 *   GET /api/spatial?type=floor&id=flr123 // Fetch floor in Trakfox
 *
 * - 'unit': A unit within a building or property.
 *   Classifications: Real estate standards (RESO).
 *   Identifiers: lowercase: 'unit', camelCase: 'unitResource', snake_case: 'unit_resource', ALL_CAP: 'UNIT', cache key: 'resource:unit:resourceId'.
 *   Model Identifier Format: 'unit-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'apartment', 'suite'; used in DnDHubs for unit listings.
 *   @example
 *   GET /api/spatial?type=unit&id=unit123 // Fetch unit in DnDHubs
 *
 * - 'area': A defined geographic area.
 *   Classifications: Geospatial standards (ISO 19115).
 *   Identifiers: lowercase: 'area', camelCase: 'areaResource', snake_case: 'area_resource', ALL_CAP: 'AREA', cache key: 'resource:area:resourceId'.
 *   Model Identifier Format: 'area-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'zone', 'region'; used in GEOCoLab for area analysis ($2,497 tier).
 *   @example
 *   GET /api/spatial?type=area&id=area123 // Fetch area in GEOCoLab
 *
 * - 'zone': A geographic or functional zone.
 *   Classifications: Geospatial standards (GeoJSON).
 *   Identifiers: lowercase: 'zone', camelCase: 'zoneResource', snake_case: 'zone_resource', ALL_CAP: 'ZONE', cache key: 'resource:zone:resourceId'.
 *   Model Identifier Format: 'zone-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'area', 'sector'; used in Trakfox for zoning data.
 *   @example
 *   GET /api/spatial?type=zone&id=zone123 // Fetch zone in Trakfox
 *
 * - 'region': A geographic region.
 *   Classifications: Geospatial standards (ISO 19115).
 *   Identifiers: lowercase: 'region', camelCase: 'regionResource', snake_case: 'region_resource', ALL_CAP: 'REGION', cache key: 'resource:region:resourceId'.
 *   Model Identifier Format: 'region-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'area', 'territory'; used in HealthOrb for regional health data.
 *   @example
 *   GET /api/spatial?type=region&id=reg123 // Fetch region in HealthOrb
 *
 * - 'coordinate': A geographic coordinate.
 *   Classifications: Geospatial standards (GeoJSON).
 *   Identifiers: lowercase: 'coordinate', camelCase: 'coordinateResource', snake_case: 'coordinate_resource', ALL_CAP: 'COORDINATE', cache key: 'resource:coordinate:resourceId'.
 *   Model Identifier Format: 'coordinate-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'point', 'latlong'; used in GEOCoLab for coordinates ($99 tier).
 *   @example
 *   GET /api/spatial?type=coordinate&id=coord123 // Fetch coordinate in GEOCoLab
 *
 * - 'boundary': A geographic boundary.
 *   Classifications: Geospatial standards (ISO 19115).
 *   Identifiers: lowercase: 'boundary', camelCase: 'boundaryResource', snake_case: 'boundary_resource', ALL_CAP: 'BOUNDARY', cache key: 'resource:boundary:resourceId'.
 *   Model Identifier Format: 'boundary-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'perimeter', 'border'; used in Trakfox for boundary data.
 *   @example
 *   GET /api/spatial?type=boundary&id=bnd123 // Fetch boundary in Trakfox
 *
 * - 'site': A specific site or location.
 *   Classifications: Geospatial standards (GeoJSON).
 *   Identifiers: lowercase: 'site', camelCase: 'siteResource', snake_case: 'site_resource', ALL_CAP: 'SITE', cache key: 'resource:site:resourceId'.
 *   Model Identifier Format: 'site-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'location', 'place'; used in DnDHubs for site data.
 *   @example
 *   GET /api/spatial?type=site&id=site123 // Fetch site in DnDHubs
 *
 * - 'facility': A facility or infrastructure.
 *   Classifications: Geospatial standards (ISO 19115).
 *   Identifiers: lowercase: 'facility', camelCase: 'facilityResource', snake_case: 'facility_resource', ALL_CAP: 'FACILITY', cache key: 'resource:facility:resourceId'.
 *   Model Identifier Format: 'facility-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'building', 'plant'; used in HealthOrb for healthcare facilities.
 *   @example
 *   GET /api/spatial?type=facility&id=fac123 // Fetch facility in HealthOrb
 *
 * - 'room': A room within a facility.
 *   Classifications: Indoor mapping standards (IndoorGML).
 *   Identifiers: lowercase: 'room', camelCase: 'roomResource', snake_case: 'room_resource', ALL_CAP: 'ROOM', cache key: 'resource:room:resourceId'.
 *   Model Identifier Format: 'room-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'space', 'area'; used in Trakfox for room management.
 *   @example
 *   GET /api/spatial?type=room&id=room123 // Fetch room in Trakfox
 *
 * - 'space': A defined space.
 *   Classifications: Geospatial standards (GeoJSON).
 *   Identifiers: lowercase: 'space', camelCase: 'spaceResource', snake_case: 'space_resource', ALL_CAP: 'SPACE', cache key: 'resource:space:resourceId'.
 *   Model Identifier Format: 'space-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'area', 'room'; used in DnDHubs for space data.
 *   @example
 *   GET /api/spatial?type=space&id=space123 // Fetch space in DnDHubs
 *
 * - 'territory': A geographic territory.
 *   Classifications: Geospatial standards (ISO 19115).
 *   Identifiers: lowercase: 'territory', camelCase: 'territoryResource', snake_case: 'territory_resource', ALL_CAP: 'TERRITORY', cache key: 'resource:territory:resourceId'.
 *   Model Identifier Format: 'territory-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'region', 'zone'; used in GEOCoLab for territory analysis ($2,497 tier).
 *   @example
 *   GET /api/spatial?type=territory&id=terr123 // Fetch territory in GEOCoLab
 *
 * - 'event': A scheduled event.
 *   Classifications: Temporal standards (ISO 8601, iCalendar).
 *   Identifiers: lowercase: 'event', camelCase: 'eventResource', snake_case: 'event_resource', ALL_CAP: 'EVENT', cache key: 'resource:event:resourceId'.
 *   Model Identifier Format: 'event-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'activity', 'occasion'; used in Trakfox for event scheduling.
 *   @example
 *   POST /api/temporal { "type": "event", "id": "evt123" } // Create event in Trakfox
 *
 * - 'schedule': A schedule or timetable.
 *   Classifications: Temporal standards (ISO 8601).
 *   Identifiers: lowercase: 'schedule', camelCase: 'scheduleResource', snake_case: 'schedule_resource', ALL_CAP: 'SCHEDULE', cache key: 'resource:schedule:resourceId'.
 *   Model Identifier Format: 'schedule-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'timetable', 'plan'; used in HealthOrb for appointment schedules.
 *   @example
 *   GET /api/temporal?type=schedule&id=sch123 // Fetch schedule in HealthOrb
 *
 * - 'calendar': A calendar resource.
 *   Classifications: Temporal standards (iCalendar).
 *   Identifiers: lowercase: 'calendar', camelCase: 'calendarResource', snake_case: 'calendar_resource', ALL_CAP: 'CALENDAR', cache key: 'resource:calendar:resourceId'.
 *   Model Identifier Format: 'calendar-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'agenda', 'planner'; used in Trakfox for calendars.
 *   @example
 *   GET /api/temporal?type=calendar&id=cal123 // Fetch calendar in Trakfox
 *
 * - 'reservation': A reservation or booking.
 *   Classifications: Temporal standards (iCalendar).
 *   Identifiers: lowercase: 'reservation', camelCase: 'reservationResource', snake_case: 'reservation_resource', ALL_CAP: 'RESERVATION', cache key: 'resource:reservation:resourceId'.
 *   Model Identifier Format: 'reservation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'booking', 'slot'; used in DnDHubs for reservations.
 *   @example
 *   POST /api/temporal { "type": "reservation", "id": "res123" } // Create reservation in DnDHubs
 *
 * - 'booking': A booking resource.
 *   Classifications: Temporal standards (iCalendar).
 *   Identifiers: lowercase: 'booking', camelCase: 'bookingResource', snake_case: 'booking_resource', ALL_CAP: 'BOOKING', cache key: 'resource:booking:resourceId'.
 *   Model Identifier Format: 'booking-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reservation', 'appointment'; used in HealthOrb for bookings.
 *   @example
 *   POST /api/temporal { "type": "booking", "id": "book123" } // Create booking in HealthOrb
 *
 * - 'availability': Availability information.
 *   Classifications: Temporal standards (iCalendar).
 *   Identifiers: lowercase: 'availability', camelCase: 'availabilityResource', snake_case: 'availability_resource', ALL_CAP: 'AVAILABILITY', cache key: 'resource:availability:resourceId'.
 *   Model Identifier Format: 'availability-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'slot', 'window'; used in Trakfox for availability tracking.
 *   @example
 *   GET /api/temporal?type=availability&id=avail123 // Fetch availability in Trakfox
 *
 * - 'shift': A work shift.
 *   Classifications: Temporal standards.
 *   Identifiers: lowercase: 'shift', camelCase: 'shiftResource', snake_case: 'shift_resource', ALL_CAP: 'SHIFT', cache key: 'resource:shift:resourceId'.
 *   Model Identifier Format: 'shift-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rotation', 'duty'; used in HealthOrb for staff shifts.
 *   @example
 *   GET /api/temporal?type=shift&id=shift123 // Fetch shift in HealthOrb
 *
 * - 'period': A time period.
 *   Classifications: Temporal standards (ISO 8601).
 *   Identifiers: lowercase: 'period', camelCase: 'periodResource', snake_case: 'period_resource', ALL_CAP: 'PERIOD', cache key: 'resource:period:resourceId'.
 *   Model Identifier Format: 'period-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'duration', 'interval'; used in GEOCoLab for time periods ($99 tier).
 *   @example
 *   GET /api/temporal?type=period&id=per123 // Fetch period in GEOCoLab
 *
 * - 'timeline': A timeline of events.
 *   Classifications: Temporal standards (ISO 8601).
 *   Identifiers: lowercase: 'timeline', camelCase: 'timelineResource', snake_case: 'timeline_resource', ALL_CAP: 'TIMELINE', cache key: 'resource:timeline:resourceId'.
 *   Model Identifier Format: 'timeline-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'history', 'sequence'; used in Trakfox for timelines.
 *   @example
 *   GET /api/temporal?type=timeline&id=tl123 // Fetch timeline in Trakfox
 *
 * - 'deadline': A deadline or due date.
 *   Classifications: Temporal standards (ISO 8601).
 *   Identifiers: lowercase: 'deadline', camelCase: 'deadlineResource', snake_case: 'deadline_resource', ALL_CAP: 'DEADLINE', cache key: 'resource:deadline:resourceId'.
 *   Model Identifier Format: 'deadline-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'due', 'target'; used in DnDHubs for deadlines.
 *   @example
 *   POST /api/temporal { "type": "deadline", "id": "dl123" } // Create deadline in DnDHubs
 *
 * - 'recurrence': A recurring event or schedule.
 *   Classifications: Temporal standards (iCalendar).
 *   Identifiers: lowercase: 'recurrence', camelCase: 'recurrenceResource', snake_case: 'recurrence_resource', ALL_CAP: 'RECURRENCE', cache key: 'resource:recurrence:resourceId'.
 *   Model Identifier Format: 'recurrence-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'repeat', 'cycle'; used in HealthOrb for recurring appointments.
 *   @example
 *   POST /api/temporal { "type": "recurrence", "id": "rec123" } // Create recurrence in HealthOrb
 *
 * - 'holiday': A holiday schedule.
 *   Classifications: Temporal standards (iCalendar).
 *   Identifiers: lowercase: 'holiday', camelCase: 'holidayResource', snake_case: 'holiday_resource', ALL_CAP: 'HOLIDAY', cache key: 'resource:holiday:resourceId'.
 *   Model Identifier Format: 'holiday-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'vacation', 'break'; used in Trakfox for holiday schedules.
 *   @example
 *   GET /api/temporal?type=holiday&id=hol123 // Fetch holiday in Trakfox
 *
 * - 'blackout': A blackout period.
 *   Classifications: Temporal standards.
 *   Identifiers: lowercase: 'blackout', camelCase: 'blackoutResource', snake_case: 'blackout_resource', ALL_CAP: 'BLACKOUT', cache key: 'resource:blackout:resourceId'.
 *   Model Identifier Format: 'blackout-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'block', 'restriction'; used in DnDHubs for blackout periods.
 *   @example
 *   POST /api/temporal { "type": "blackout", "id": "blk123" } // Create blackout in DnDHubs
 *
 * - 'window': A time window.
 *   Classifications: Temporal standards (ISO 8601).
 *   Identifiers: lowercase: 'window', camelCase: 'windowResource', snake_case: 'window_resource', ALL_CAP: 'WINDOW', cache key: 'resource:window:resourceId'.
 *   Model Identifier Format: 'window-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'slot', 'period'; used in HealthOrb for scheduling windows.
 *   @example
 *   GET /api/temporal?type=window&id=win123 // Fetch window in HealthOrb
 *
 * - 'slot': A time slot.
 *   Classifications: Temporal standards (iCalendar).
 *   Identifiers: lowercase: 'slot', camelCase: 'slotResource', snake_case: 'slot_resource', ALL_CAP: 'SLOT', cache key: 'resource:slot:resourceId'.
 *   Model Identifier Format: 'slot-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'appointment', 'window'; used in Trakfox for time slots.
 *   @example
 *   POST /api/temporal { "type": "slot", "id": "slot123" } // Create slot in Trakfox
 *
 * - 'cache': A cache storage.
 *   Classifications: Storage standards (Redis, Memcached).
 *   Identifiers: lowercase: 'cache', camelCase: 'cacheResource', snake_case: 'cache_resource', ALL_CAP: 'CACHE', cache key: 'resource:cache:resourceId'.
 *   Model Identifier Format: 'cache-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'buffer', 'store'; used in Trakfox for caching.
 *   @example
 *   GET /api/storage?type=cache&id=cache123 // Fetch cache in Trakfox
 *
 * - 'blob': A binary large object.
 *   Classifications: Storage standards (S3, Blob Storage).
 *   Identifiers: lowercase: 'blob', camelCase: 'blobResource', snake_case: 'blob_resource', ALL_CAP: 'BLOB', cache key: 'resource:blob:resourceId'.
 *   Model Identifier Format: 'blob-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'file', 'object'; used in DnDHubs for blob storage.
 *   @example
 *   POST /api/storage { "type": "blob", "id": "blob123" } // Upload blob in DnDHubs
 *
 * - 'queue': A message queue.
 *   Classifications: Messaging standards (RabbitMQ, Kafka).
 *   Identifiers: lowercase: 'queue', camelCase: 'queueResource', snake_case: 'queue_resource', ALL_CAP: 'QUEUE', cache key: 'resource:queue:resourceId'.
 *   Model Identifier Format: 'queue-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'buffer', 'stream'; used in HealthOrb for message queues.
 *   @example
 *   POST /api/storage { "type": "queue", "id": "queue123" } // Create queue in HealthOrb
 *
 * - 'topic': A messaging topic.
 *   Classifications: Messaging standards (Kafka, Pub/Sub).
 *   Identifiers: lowercase: 'topic', camelCase: 'topicResource', snake_case: 'topic_resource', ALL_CAP: 'TOPIC', cache key: 'resource:topic:resourceId'.
 *   Model Identifier Format: 'topic-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'channel', 'subject'; used in Trakfox for messaging topics.
 *   @example
 *   POST /api/storage { "type": "topic", "id": "topic123" } // Create topic in Trakfox
 *
 * - 'stream': A data stream.
 *   Classifications: Streaming standards (Kafka, Kinesis).
 *   Identifiers: lowercase: 'stream', camelCase: 'streamResource', snake_case: 'stream_resource', ALL_CAP: 'STREAM', cache key: 'resource:stream:resourceId'.
 *   Model Identifier Format: 'stream-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'flow', 'pipe'; used in GEOCoLab for data streams ($2,497 tier).
 *   @example
 *   GET /api/storage?type=stream&id=stream123 // Fetch stream in GEOCoLab
 *
 * - 'bucket': A storage bucket.
 *   Classifications: Storage standards (S3, GCS).
 *   Identifiers: lowercase: 'bucket', camelCase: 'bucketResource', snake_case: 'bucket_resource', ALL_CAP: 'BUCKET', cache key: 'resource:bucket:resourceId'.
 *   Model Identifier Format: 'bucket-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'container', 'store'; used in DnDHubs for buckets.
 *   @example
 *   POST /api/storage { "type": "bucket", "id": "buck123" } // Create bucket in DnDHubs
 *
 * - 'archive': An archived storage.
 *   Classifications: Storage standards (S3 Glacier).
 *   Identifiers: lowercase: 'archive', camelCase: 'archiveResource', snake_case: 'archive_resource', ALL_CAP: 'ARCHIVE', cache key: 'resource:archive:resourceId'.
 *   Model Identifier Format: 'archive-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'backup', 'store'; used in Trakfox for archives.
 *   @example
 *   POST /api/storage { "type": "archive", "id": "arch123" } // Create archive in Trakfox
 *
 * - 'backup': A data backup.
 *   Classifications: Storage standards (backup systems).
 *   Identifiers: lowercase: 'backup', camelCase: 'backupResource', snake_case: 'backup_resource', ALL_CAP: 'BACKUP', cache key: 'resource:backup:resourceId'.
 *   Model Identifier Format: 'backup-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'snapshot', 'copy'; used in HealthOrb for backups.
 *   @example
 *   POST /api/storage { "type": "backup", "id": "back123" } // Create backup in HealthOrb
 *
 * - 'snapshot': A data snapshot.
 *   Classifications: Storage standards (database snapshots).
 *   Identifiers: lowercase: 'snapshot', camelCase: 'snapshotResource', snake_case: 'snapshot_resource', ALL_CAP: 'SNAPSHOT', cache key: 'resource:snapshot:resourceId'.
 *   Model Identifier Format: 'snapshot-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'backup', 'image'; used in DataOrb for snapshots.
 *   @example
 *   POST /api/storage { "type": "snapshot", "id": "snap123" } // Create snapshot in DataOrb
 *
 * - 'replica': A data replica.
 *   Classifications: Storage standards (replication).
 *   Identifiers: lowercase: 'replica', camelCase: 'replicaResource', snake_case: 'replica_resource', ALL_CAP: 'REPLICA', cache key: 'resource:replica:resourceId'.
 *   Model Identifier Format: 'replica-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'copy', 'mirror'; used in Trakfox for replicas.
 *   @example
 *   GET /api/storage?type=replica&id=rep123 // Fetch replica in Trakfox
 *
 * - 'warehouse': A data warehouse.
 *   Classifications: Storage standards (Snowflake, Redshift).
 *   Identifiers: lowercase: 'warehouse', camelCase: 'warehouseResource', snake_case: 'warehouse_resource', ALL_CAP: 'WAREHOUSE', cache key: 'resource:warehouse:resourceId'.
 *   Model Identifier Format: 'warehouse-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'dw', 'datastore'; used in GEOCoLab for data warehouses ($2,497 tier).
 *   @example
 *   GET /api/storage?type=warehouse&id=wh123 // Fetch warehouse in GEOCoLab
 *
 * - 'lake': A data lake.
 *   Classifications: Storage standards (Delta Lake).
 *   Identifiers: lowercase: 'lake', camelCase: 'lakeResource', snake_case: 'lake_resource', ALL_CAP: 'LAKE', cache key: 'resource:lake:resourceId'.
 *   Model Identifier Format: 'lake-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'datastore', 'repository'; used in DataOrb for data lakes.
 *   @example
 *   GET /api/storage?type=lake&id=lake123 // Fetch lake in DataOrb
 *
 * - 'mart': A data mart.
 *   Classifications: Storage standards (BI data marts).
 *   Identifiers: lowercase: 'mart', camelCase: 'martResource', snake_case: 'mart_resource', ALL_CAP: 'MART', cache key: 'resource:mart:resourceId'.
 *   Model Identifier Format: 'mart-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'store', 'subset'; used in Trakfox for data marts.
 *   @example
 *   GET /api/storage?type=mart&id=mart123 // Fetch mart in Trakfox
 *
 * - 'vault': A secure data vault.
 *   Classifications: Storage standards (secure storage).
 *   Identifiers: lowercase: 'vault', camelCase: 'vaultResource', snake_case: 'vault_resource', ALL_CAP: 'VAULT', cache key: 'resource:vault:resourceId'.
 *   Model Identifier Format: 'vault-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'safe', 'store'; used in HealthOrb for secure vaults.
 *   @example
 *   POST /api/storage { "type": "vault", "id": "vault123" } // Create vault in HealthOrb
 *
 * - 'repository': A data repository.
 *   Classifications: Storage standards (Git, artifact repos).
 *   Identifiers: lowercase: 'repository', camelCase: 'repositoryResource', snake_case: 'repository_resource', ALL_CAP: 'REPOSITORY', cache key: 'resource:repository:resourceId'.
 *   Model Identifier Format: 'repository-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'repo', 'store'; used in DnDHubs for repositories.
 *   @example
 *   GET /api/storage?type=repository&id=repo123 // Fetch repository in DnDHubs
 *
 * - 'aimodel': An AI model.
 *   Classifications: AI standards (ONNX, TensorFlow).
 *   Identifiers: lowercase: 'aimodel', camelCase: 'aiModelResource', snake_case: 'ai_model_resource', ALL_CAP: 'AIMODEL', cache key: 'resource:aimodel:resourceId'.
 *   Model Identifier Format: 'aimodel-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'model', 'mlmodel'; used in GEOCoLab for AI models ($2,497 tier).
 *   @example
 *   GET /api/ai?type=aimodel&id=model123 // Fetch AI model in GEOCoLab
 *
 * - 'training': An AI training process.
 *   Classifications: AI standards (ML pipelines).
 *   Identifiers: lowercase: 'training', camelCase: 'trainingResource', snake_case: 'training_resource', ALL_CAP: 'TRAINING', cache key: 'resource:training:resourceId'.
 *   Model Identifier Format: 'training-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'learning', 'fit'; used in DataOrb for training processes.
 *   @example
 *   POST /api/ai { "type": "training", "id": "train123" } // Start training in DataOrb
 *
 * - 'inference': An AI inference process.
 *   Classifications: AI standards (ML inference).
 *   Identifiers: lowercase: 'inference', camelCase: 'inferenceResource', snake_case: 'inference_resource', ALL_CAP: 'INFERENCE', cache key: 'resource:inference:resourceId'.
 *   Model Identifier Format: 'inference-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'prediction', 'scoring'; used in GEOCoLab for inference ($2,497 tier).
 *   @example
 *   POST /api/ai { "type": "inference", "id": "inf123" } // Run inference in GEOCoLab
 *
 * - 'experiment': An AI or research experiment.
 *   Classifications: AI standards, scientific method.
 *   Identifiers: lowercase: 'experiment', camelCase: 'experimentResource', snake_case: 'experiment_resource', ALL_CAP: 'EXPERIMENT', cache key: 'resource:experiment:resourceId'.
 *   Model Identifier Format: 'experiment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'test', 'trial'; used in DataOrb for experiments.
 *   @example
 *   POST /api/ai { "type": "experiment", "id": "exp123" } // Create experiment in DataOrb
 *
 * - 'feature': An AI feature or variable.
 *   Classifications: AI standards (feature engineering).
 *   Identifiers: lowercase: 'feature', camelCase: 'featureResource', snake_case: 'feature_resource', ALL_CAP: 'FEATURE', cache key: 'resource:feature:resourceId'.
 *   Model Identifier Format: 'feature-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'variable', 'attribute'; used in GEOCoLab for features ($2,497 tier).
 *   @example
 *   GET /api/ai?type=feature&id=feat123 // Fetch feature in GEOCoLab
 *
 * - 'prediction': An AI prediction.
 *   Classifications: AI standards (ML predictions).
 *   Identifiers: lowercase: 'prediction', camelCase: 'predictionResource', snake_case: 'prediction_resource', ALL_CAP: 'PREDICTION', cache key: 'resource:prediction:resourceId'.
 *   Model Identifier Format: 'prediction-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'forecast', 'output'; used in DataOrb for predictions.
 *   @example
 *   GET /api/ai?type=prediction&id=pred123 // Fetch prediction in DataOrb
 *
 * - 'evaluation': An AI model evaluation.
 *   Classifications: AI standards (ML evaluation).
 *   Identifiers: lowercase: 'evaluation', camelCase: 'evaluationResource', snake_case: 'evaluation_resource', ALL_CAP: 'EVALUATION', cache key: 'resource:evaluation:resourceId'.
 *   Model Identifier Format: 'evaluation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'assessment', 'validation'; used in GEOCoLab for evaluations ($2,497 tier).
 *   @example
 *   POST /api/ai { "type": "evaluation", "id": "eval123" } // Create evaluation in GEOCoLab
 *
 * - 'pipeline': An AI pipeline.
 *   Classifications: AI standards (ML pipelines).
 *   Identifiers: lowercase: 'pipeline', camelCase: 'pipelineResource', snake_case: 'pipeline_resource', ALL_CAP: 'PIPELINE', cache key: 'resource:pipeline:resourceId'.
 *   Model Identifier Format: 'pipeline-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'workflow', 'flow'; used in DataOrb for AI pipelines.
 *   @example
 *   POST /api/ai { "type": "pipeline", "id": "pipe123" } // Create pipeline in DataOrb
 *
 * - 'deployment': An AI model deployment.
 *   Classifications: AI standards (ML deployment).
 *   Identifiers: lowercase: 'deployment', camelCase: 'deploymentResource', snake_case: 'deployment_resource', ALL_CAP: 'DEPLOYMENT', cache key: 'resource:deployment:resourceId'.
 *   Model Identifier Format: 'deployment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'release', 'rollout'; used in GEOCoLab for model deployments ($2,497 tier).
 *   @example
 *   POST /api/ai { "type": "deployment", "id": "dep123" } // Deploy model in GEOCoLab
 *
 * - 'monitoring': An AI monitoring process.
 *   Classifications: AI standards (ML monitoring).
 *   Identifiers: lowercase: 'monitoring', camelCase: 'monitoringResource', snake_case: 'monitoring_resource', ALL_CAP: 'MONITORING', cache key: 'resource:monitoring:resourceId'.
 *   Model Identifier Format: 'monitoring-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'tracking', 'observing'; used in DataOrb for model monitoring.
 *   @example
 *   GET /api/ai?type=monitoring&id=mon123 // Fetch monitoring in DataOrb
 *
 * - 'dataset': An AI dataset.
 *   Classifications: AI standards (FAIR principles).
 *   Identifiers: lowercase: 'dataset', camelCase: 'datasetResource', snake_case: 'dataset_resource', ALL_CAP: 'DATASET', cache key: 'resource:dataset:resourceId'.
 *   Model Identifier Format: 'dataset-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'data', 'collection'; used in GEOCoLab for datasets ($2,497 tier).
 *   @example
 *   GET /api/ai?type=dataset&id=ds123 // Fetch dataset in GEOCoLab
 *
 * - 'annotation': An AI data annotation.
 *   Classifications: AI standards (data annotation).
 *   Identifiers: lowercase: 'annotation', camelCase: 'annotationResource', snake_case: 'annotation_resource', ALL_CAP: 'ANNOTATION', cache key: 'resource:annotation:resourceId'.
 *   Model Identifier Format: 'annotation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'label', 'tag'; used in DataOrb for annotations.
 *   @example
 *   POST /api/ai { "type": "annotation", "id": "ann123" } // Create annotation in DataOrb
 *
 * - 'embedding': An AI embedding.
 *   Classifications: AI standards (ML embeddings).
 *   Identifiers: lowercase: 'embedding', camelCase: 'embeddingResource', snake_case: 'embedding_resource', ALL_CAP: 'EMBEDDING', cache key: 'resource:embedding:resourceId'.
 *   Model Identifier Format: 'embedding-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'vector', 'representation'; used in GEOCoLab for embeddings ($2,497 tier).
 *   @example
 *   GET /api/ai?type=embedding&id=emb123 // Fetch embedding in GEOCoLab
 *
 * - 'vector': An AI vector.
 *   Classifications: AI standards (vector representations).
 *   Identifiers: lowercase: 'vector', camelCase: 'vectorResource', snake_case: 'vector_resource', ALL_CAP: 'VECTOR', cache key: 'resource:vector:resourceId'.
 *   Model Identifier Format: 'vector-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'embedding', 'array'; used in DataOrb for vectors.
 *   @example
 *   GET /api/ai?type=vector&id=vec123 // Fetch vector in DataOrb
 *
 * - 'cluster': An AI clustering result.
 *   Classifications: AI standards (clustering algorithms).
 *   Identifiers: lowercase: 'cluster', camelCase: 'clusterResource', snake_case: 'cluster_resource', ALL_CAP: 'CLUSTER', cache key: 'resource:cluster:resourceId'.
 *   Model Identifier Format: 'cluster-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'group', 'segment'; used in GEOCoLab for clustering ($2,497 tier).
 *   @example
 *   GET /api/ai?type=cluster&id=clust123 // Fetch cluster in GEOCoLab
 *
 * - 'research': A research project.
 *   Classifications: Research standards (ORCID, FAIR principles).
 *   Identifiers: lowercase: 'research', camelCase: 'researchResource', snake_case: 'research_resource', ALL_CAP: 'RESEARCH', cache key: 'resource:research:resourceId'.
 *   Model Identifier Format: 'research-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'study', 'project'; used in GEOCoLab for research projects ($99 tier).
 *   @example
 *   POST /api/research { "type": "research", "id": "res123" } // Create research in GEOCoLab
 *
 * - 'study': A research study.
 *   Classifications: Research standards (FAIR principles).
 *   Identifiers: lowercase: 'study', camelCase: 'studyResource', snake_case: 'study_resource', ALL_CAP: 'STUDY', cache key: 'resource:study:resourceId'.
 *   Model Identifier Format: 'study-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'research', 'investigation'; used in DataOrb for studies.
 *   @example
 *   GET /api/research?type=study&id=study123 // Fetch study in DataOrb
 *
 * - 'trial': A research trial.
 *   Classifications: Research standards (clinical trials).
 *   Identifiers: lowercase: 'trial', camelCase: 'trialResource', snake_case: 'trial_resource', ALL_CAP: 'TRIAL', cache key: 'resource:trial:resourceId'.
 *   Model Identifier Format: 'trial-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'experiment', 'test'; used in HealthOrb for clinical trials.
 *   @example
 *   POST /api/research { "type": "trial", "id": "trial123" } // Create trial in HealthOrb
 *
 * - 'protocol': A research protocol.
 *   Classifications: Research standards.
 *   Identifiers: lowercase: 'protocol', camelCase: 'protocolResource', snake_case: 'protocol_resource', ALL_CAP: 'PROTOCOL', cache key: 'resource:protocol:resourceId'.
 *   Model Identifier Format: 'protocol-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'plan', 'method'; used in GEOCoLab for protocols ($99 tier).
 *   @example
 *   GET /api/research?type=protocol&id=prot123 // Fetch protocol in GEOCoLab
 *
 * - 'hypothesis': A research hypothesis.
 *   Classifications: Research standards (scientific method).
 *   Identifiers: lowercase: 'hypothesis', camelCase: 'hypothesisResource', snake_case: 'hypothesis_resource', ALL_CAP: 'HYPOTHESIS', cache key: 'resource:hypothesis:resourceId'.
 *   Model Identifier Format: 'hypothesis-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'theory', 'assumption'; used in DataOrb for hypotheses.
 *   @example
 *   POST /api/research { "type": "hypothesis", "id": "hyp123" } // Create hypothesis in DataOrb
 *
 * - 'experiment': A research experiment.
 *   Classifications: Research standards (scientific method).
 *   Identifiers: lowercase: 'experiment', camelCase: 'experimentResource', snake_case: 'experiment_resource', ALL_CAP: 'EXPERIMENT', cache key: 'resource:experiment:resourceId'.
 *   Model Identifier Format: 'experiment-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'test', 'trial'; used in GEOCoLab for experiments ($99 tier).
 *   @example
 *   POST /api/research { "type": "experiment", "id": "exp123" } // Create experiment in GEOCoLab
 *
 * - 'observation': A research observation.
 *   Classifications: Research standards.
 *   Identifiers: lowercase: 'observation', camelCase: 'observationResource', snake_case: 'observation_resource', ALL_CAP: 'OBSERVATION', cache key: 'resource:observation:resourceId'.
 *   Model Identifier Format: 'observation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'finding', 'data'; used in DataOrb for observations.
 *   @example
 *   GET /api/research?type=observation&id=obs123 // Fetch observation in DataOrb
 *
 * - 'finding': A research finding.
 *   Classifications: Research standards (FAIR principles).
 *   Identifiers: lowercase: 'finding', camelCase: 'findingResource', snake_case: 'finding_resource', ALL_CAP: 'FINDING', cache key: 'resource:finding:resourceId'.
 *   Model Identifier Format: 'finding-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'result', 'outcome'; used in GEOCoLab for findings ($99 tier).
 *   @example
 *   GET /api/research?type=finding&id=find123 // Fetch finding in GEOCoLab
 *
 * - 'publication': A research publication.
 *   Classifications: Research standards (DOI, ORCID).
 *   Identifiers: lowercase: 'publication', camelCase: 'publicationResource', snake_case: 'publication_resource', ALL_CAP: 'PUBLICATION', cache key: 'resource:publication:resourceId'.
 *   Model Identifier Format: 'publication-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'paper', 'article'; used in DataOrb for publications.
 *   @example
 *   GET /api/research?type=publication&id=pub123 // Fetch publication in DataOrb
 *
 * - 'patent': A research patent.
 *   Classifications: Research standards (patent systems).
 *   Identifiers: lowercase: 'patent', camelCase: 'patentResource', snake_case: 'patent_resource', ALL_CAP: 'PATENT', cache key: 'resource:patent:resourceId'.
 *   Model Identifier Format: 'patent-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'invention', 'ip'; used in GEOCoLab for patents ($2,497 tier).
 *   @example
 *   POST /api/research { "type": "patent", "id": "pat123" } // Create patent in GEOCoLab
 *
 * - 'innovation': A research innovation.
 *   Classifications: Research standards.
 *   Identifiers: lowercase: 'innovation', camelCase: 'innovationResource', snake_case: 'innovation_resource', ALL_CAP: 'INNOVATION', cache key: 'resource:innovation:resourceId'.
 *   Model Identifier Format: 'innovation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'breakthrough', 'idea'; used in DataOrb for innovations.
 *   @example
 *   POST /api/research { "type": "innovation", "id": "inn123" } // Create innovation in DataOrb
 *
 * - 'prototype': A research prototype.
 *   Classifications: Research standards.
 *   Identifiers: lowercase: 'prototype', camelCase: 'prototypeResource', snake_case: 'prototype_resource', ALL_CAP: 'PROTOTYPE', cache key: 'resource:prototype:resourceId'.
 *   Model Identifier Format: 'prototype-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'model', 'demo'; used in GEOCoLab for prototypes ($2,497 tier).
 *   @example
 *   POST /api/research { "type": "prototype", "id": "proto123" } // Create prototype in GEOCoLab
 *
 * - 'design': A research design.
 *   Classifications: Research standards.
 *   Identifiers: lowercase: 'design', camelCase: 'designResource', snake_case: 'design_resource', ALL_CAP: 'DESIGN', cache key: 'resource:design:resourceId'.
 *   Model Identifier Format: 'design-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'plan', 'blueprint'; used in DataOrb for designs.
 *   @example
 *   POST /api/research { "type": "design", "id": "des123" } // Create design in DataOrb
 *
 * - 'specification': A research specification.
 *   Classifications: Research standards.
 *   Identifiers: lowercase: 'specification', camelCase: 'specificationResource', snake_case: 'specification_resource', ALL_CAP: 'SPECIFICATION', cache key: 'resource:specification:resourceId'.
 *   Model Identifier Format: 'specification-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'spec', 'requirement'; used in GEOCoLab for specifications ($2,497 tier).
 *   @example
 *   GET /api/research?type=specification&id=spec123 // Fetch specification in GEOCoLab
 *
 * - 'blueprint': A research blueprint.
 *   Classifications: Research standards.
 *   Identifiers: lowercase: 'blueprint', camelCase: 'blueprintResource', snake_case: 'blueprint_resource', ALL_CAP: 'BLUEPRINT', cache key: 'resource:blueprint:resourceId'.
 *   Model Identifier Format: 'blueprint-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'design', 'plan'; used in DataOrb for blueprints.
 *   @example
 *   POST /api/research { "type": "blueprint", "id": "blue123" } // Create blueprint in DataOrb
 *
 * - 'social': A social media resource.
 *   Classifications: Social media standards (Open Graph, Activity Streams).
 *   Identifiers: lowercase: 'social', camelCase: 'socialResource', snake_case: 'social_resource', ALL_CAP: 'SOCIAL', cache key: 'resource:social:resourceId'.
 *   Model Identifier Format: 'social-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'post', 'media'; used in Trakfox for social content.
 *   @example
 *   POST /api/social { "type": "social", "id": "soc123" } // Create social post in Trakfox
 *
 * - 'community': A community resource.
 *   Classifications: Social media standards (Activity Streams).
 *   Identifiers: lowercase: 'community', camelCase: 'communityResource', snake_case: 'community_resource', ALL_CAP: 'COMMUNITY', cache key: 'resource:community:resourceId'.
 *   Model Identifier Format: 'community-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'group', 'forum'; used in DnDHubs for communities.
 *   @example
 *   GET /api/social?type=community&id=comm123 // Fetch community in DnDHubs
 *
 * - 'forum': A discussion forum.
 *   Classifications: Social media standards (Discourse).
 *   Identifiers: lowercase: 'forum', camelCase: 'forumResource', snake_case: 'forum_resource', ALL_CAP: 'FORUM', cache key: 'resource:forum:resourceId'.
 *   Model Identifier Format: 'forum-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'board', 'discussion'; used in Trakfox for forums.
 *   @example
 *   GET /api/social?type=forum&id=forum123 // Fetch forum in Trakfox
 *
 * - 'discussion': A discussion thread.
 *   Classifications: Social media standards (Activity Streams).
 *   Identifiers: lowercase: 'discussion', camelCase: 'discussionResource', snake_case: 'discussion_resource', ALL_CAP: 'DISCUSSION', cache key: 'resource:discussion:resourceId'.
 *   Model Identifier Format: 'discussion-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'thread', 'conversation'; used in DnDHubs for discussions.
 *   @example
 *   POST /api/social { "type": "discussion", "id": "disc123" } // Create discussion in DnDHubs
 *
 * - 'poll': A social poll.
 *   Classifications: Social media standards.
 *   Identifiers: lowercase: 'poll', camelCase: 'pollResource', snake_case: 'poll_resource', ALL_CAP: 'POLL', cache key: 'resource:poll:resourceId'.
 *   Model Identifier Format: 'poll-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'survey', 'vote'; used in Trakfox for polls.
 *   @example
 *   POST /api/social { "type": "poll", "id": "poll123" } // Create poll in Trakfox
 *
 * - 'survey': A social survey.
 *   Classifications: Social media standards (Qualtrics).
 *   Identifiers: lowercase: 'survey', camelCase: 'surveyResource', snake_case: 'survey_resource', ALL_CAP: 'SURVEY', cache key: 'resource:survey:resourceId'.
 *   Model Identifier Format: 'survey-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'poll', 'questionnaire'; used in HealthOrb for surveys.
 *   @example
 *   POST /api/social { "type": "survey", "id": "surv123" } // Create survey in HealthOrb
 *
 * - 'review': A social review.
 *   Classifications: Social media standards (Yelp API).
 *   Identifiers: lowercase: 'review', camelCase: 'reviewResource', snake_case: 'review_resource', ALL_CAP: 'REVIEW', cache key: 'resource:review:resourceId'.
 *   Model Identifier Format: 'review-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'feedback', 'rating'; used in DnDHubs for reviews.
 *   @example
 *   POST /api/social { "type": "review", "id": "rev123" } // Create review in DnDHubs
 *
 * - 'rating': A social rating.
 *   Classifications: Social media standards (schema.org).
 *   Identifiers: lowercase: 'rating', camelCase: 'ratingResource', snake_case: 'rating_resource', ALL_CAP: 'RATING', cache key: 'resource:rating:resourceId'.
 *   Model Identifier Format: 'rating-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'score', 'review'; used in Trakfox for ratings.
 *   @example
 *   POST /api/social { "type": "rating", "id": "rate123" } // Create rating in Trakfox
 *
 * - 'recommendation': A social recommendation.
 *   Classifications: Social media standards.
 *   Identifiers: lowercase: 'recommendation', camelCase: 'recommendationResource', snake_case: 'recommendation_resource', ALL_CAP: 'RECOMMENDATION', cache key: 'resource:recommendation:resourceId'.
 *   Model Identifier Format: 'recommendation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'suggestion', 'endorsement'; used in DnDHubs for recommendations.
 *   @example
 *   POST /api/social { "type": "recommendation", "id": "rec123" } // Create recommendation in DnDHubs
 *
 * - 'endorsement': A social endorsement.
 *   Classifications: Social media standards (LinkedIn API).
 *   Identifiers: lowercase: 'endorsement', camelCase: 'endorsementResource', snake_case: 'endorsement_resource', ALL_CAP: 'ENDORSEMENT', cache key: 'resource:endorsement:resourceId'.
 *   Model Identifier Format: 'endorsement-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'support', 'recommendation'; used in Trakfox for endorsements.
 *   @example
 *   POST /api/social { "type": "endorsement", "id": "end123" } // Create endorsement in Trakfox
 *
 * - 'follow': A social follow action.
 *   Classifications: Social media standards (Twitter API).
 *   Identifiers: lowercase: 'follow', camelCase: 'followResource', snake_case: 'follow_resource', ALL_CAP: 'FOLLOW', cache key: 'resource:follow:resourceId'.
 *   Model Identifier Format: 'follow-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'subscribe', 'track'; used in DnDHubs for follows.
 *   @example
 *   POST /api/social { "type": "follow", "id": "fol123" } // Create follow in DnDHubs
 *
 * - 'like': A social like action.
 *   Classifications: Social media standards (Facebook API).
 *   Identifiers: lowercase: 'like', camelCase: 'likeResource', snake_case: 'like_resource', ALL_CAP: 'LIKE', cache key: 'resource:like:resourceId'.
 *   Model Identifier Format: 'like-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'favorite', 'upvote'; used in Trakfox for likes.
 *   @example
 *   POST /api/social { "type": "like", "id": "like123" } // Create like in Trakfox
 *
 * - 'share': A social share action.
 *   Classifications: Social media standards (Open Graph).
 *   Identifiers: lowercase: 'share', camelCase: 'shareResource', snake_case: 'share_resource', ALL_CAP: 'SHARE', cache key: 'resource:share:resourceId'.
 *   Model Identifier Format: 'share-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'post', 'distribute'; used in DnDHubs for shares.
 *   @example
 *   POST /api/social { "type": "share", "id": "share123" } // Create share in DnDHubs
 *
 * - 'mention': A social mention.
 *   Classifications: Social media standards (Twitter API).
 *   Identifiers: lowercase: 'mention', camelCase: 'mentionResource', snake_case: 'mention_resource', ALL_CAP: 'MENTION', cache key: 'resource:mention:resourceId'.
 *   Model Identifier Format: 'mention-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'tag', 'reference'; used in Trakfox for mentions.
 *   @example
 *   POST /api/social { "type": "mention", "id": "men123" } // Create mention in Trakfox
 *
 * - 'tag': A social tag.
 *   Classifications: Social media standards.
 *   Identifiers: lowercase: 'tag', camelCase: 'tagResource', snake_case: 'tag_resource', ALL_CAP: 'TAG', cache key: 'resource:tag:resourceId'.
 *   Model Identifier Format: 'tag-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'label', 'category'; used in DnDHubs for tags.
 *   @example
 *   POST /api/social { "type": "tag", "id": "tag123" } // Create tag in DnDHubs
 *
 * - 'broadcast': A media broadcast.
 *   Classifications: Media standards (MPEG, HLS).
 *   Identifiers: lowercase: 'broadcast', camelCase: 'broadcastResource', snake_case: 'broadcast_resource', ALL_CAP: 'BROADCAST', cache key: 'resource:broadcast:resourceId'.
 *   Model Identifier Format: 'broadcast-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'stream', 'transmission'; used in DataOrb for broadcasts.
 *   @example
 *   POST /api/media { "type": "broadcast", "id": "bcast123" } // Create broadcast in DataOrb
 *
 * - 'stream': A media stream.
 *   Classifications: Media standards (HLS, RTMP).
 *   Identifiers: lowercase: 'stream', camelCase: 'streamResource', snake_case: 'stream_resource', ALL_CAP: 'STREAM', cache key: 'resource:stream:resourceId'.
 *   Model Identifier Format: 'stream-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'live', 'feed'; used in Trakfox for streams.
 *   @example
 *   GET /api/media?type=stream&id=stream123 // Fetch stream in Trakfox
 *
 * - 'channel': A media channel.
 *   Classifications: Media standards (YouTube API).
 *   Identifiers: lowercase: 'channel', camelCase: 'channelResource', snake_case: 'channel_resource', ALL_CAP: 'CHANNEL', cache key: 'resource:channel:resourceId'.
 *   Model Identifier Format: 'channel-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'feed', 'station'; used in DnDHubs for channels.
 *   @example
 *   GET /api/media?type=channel&id=chan123 // Fetch channel in DnDHubs
 *
 * - 'program': A media program.
 *   Classifications: Media standards.
 *   Identifiers: lowercase: 'program', camelCase: 'programResource', snake_case: 'program_resource', ALL_CAP: 'PROGRAM', cache key: 'resource:program:resourceId'.
 *   Model Identifier Format: 'program-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'show', 'series'; used in DataOrb for programs.
 *   @example
 *   GET /api/media?type=program&id=prog123 // Fetch program in DataOrb
 *
 * - 'episode': A media episode.
 *   Classifications: Media standards.
 *   Identifiers: lowercase: 'episode', camelCase: 'episodeResource', snake_case: 'episode_resource', ALL_CAP: 'EPISODE', cache key: 'resource:episode:resourceId'.
 *   Model Identifier Format: 'episode-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'segment', 'part'; used in Trakfox for episodes.
 *   @example
 *   GET /api/media?type=episode&id=ep123 // Fetch episode in Trakfox
 *
 * - 'series': A media series.
 *   Classifications: Media standards.
 *   Identifiers: lowercase: 'series', camelCase: 'seriesResource', snake_case: 'series_resource', ALL_CAP: 'SERIES', cache key: 'resource:series:resourceId'.
 *   Model Identifier Format: 'series-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'show', 'season'; used in DnDHubs for series.
 *   @example
 *   GET /api/media?type=series&id=ser123 // Fetch series in DnDHubs
 *
 * - 'movie': A media movie.
 *   Classifications: Media standards (MPEG).
 *   Identifiers: lowercase: 'movie', camelCase: 'movieResource', snake_case: 'movie_resource', ALL_CAP: 'MOVIE', cache key: 'resource:movie:resourceId'.
 *   Model Identifier Format: 'movie-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'film', 'video'; used in DataOrb for movies.
 *   @example
 *   GET /api/media?type=movie&id=mov123 // Fetch movie in DataOrb
 *
 * - 'track': A media audio track.
 *   Classifications: Media standards (MP3, WAV).
 *   Identifiers: lowercase: 'track', camelCase: 'trackResource', snake_case: 'track_resource', ALL_CAP: 'TRACK', cache key: 'resource:track:resourceId'.
 *   Model Identifier Format: 'track-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'song', 'audio'; used in Trakfox for tracks.
 *   @example
 *   GET /api/media?type=track&id=track123 // Fetch track in Trakfox
 *
 * - 'album': A media album.
 *   Classifications: Media standards.
 *   Identifiers: lowercase: 'album', camelCase: 'albumResource', snake_case: 'album_resource', ALL_CAP: 'ALBUM', cache key: 'resource:album:resourceId'.
 *   Model Identifier Format: 'album-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'collection', 'record'; used in DnDHubs for albums.
 *   @example
 *   GET /api/media?type=album&id=alb123 // Fetch album in DnDHubs
 *
 * - 'playlist': A media playlist.
 *   Classifications: Media standards.
 *   Identifiers: lowercase: 'playlist', camelCase: 'playlistResource', snake_case: 'playlist_resource', ALL_CAP: 'PLAYLIST', cache key: 'resource:playlist:resourceId'.
 *   Model Identifier Format: 'playlist-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'list', 'queue'; used in DataOrb for playlists.
 *   @example
 *   POST /api/media { "type": "playlist", "id": "play123" } // Create playlist in DataOrb
 *
 * - 'podcast': A media podcast.
 *   Classifications: Media standards (RSS, podcasting).
 *   Identifiers: lowercase: 'podcast', camelCase: 'podcastResource', snake_case: 'podcast_resource', ALL_CAP: 'PODCAST', cache key: 'resource:podcast:resourceId'.
 *   Model Identifier Format: 'podcast-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'show', 'episode'; used in Trakfox for podcasts.
 *   @example
 *   GET /api/media?type=podcast&id=pod123 // Fetch podcast in Trakfox
 *
 * - 'webinar': A media webinar.
 *   Classifications: Media standards.
 *   Identifiers: lowercase: 'webinar', camelCase: 'webinarResource', snake_case: 'webinar_resource', ALL_CAP: 'WEBINAR', cache key: 'resource:webinar:resourceId'.
 *   Model Identifier Format: 'webinar-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'seminar', 'webcast'; used in DataOrb for webinars.
 *   @example
 *   POST /api/media { "type": "webinar", "id": "web123" } // Create webinar in DataOrb
 *
 * - 'livestream': A media livestream.
 *   Classifications: Media standards (HLS, RTMP).
 *   Identifiers: lowercase: 'livestream', camelCase: 'livestreamResource', snake_case: 'livestream_resource', ALL_CAP: 'LIVESTREAM', cache key: 'resource:livestream:resourceId'.
 *   Model Identifier Format: 'livestream-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'stream', 'live'; used in Trakfox for livestreams.
 *   @example
 *   GET /api/media?type=livestream&id=live123 // Fetch livestream in Trakfox
 *
 * - 'recording': A media recording.
 *   Classifications: Media standards.
 *   Identifiers: lowercase: 'recording', camelCase: 'recordingResource', snake_case: 'recording_resource', ALL_CAP: 'RECORDING', cache key: 'resource:recording:resourceId'.
 *   Model Identifier Format: 'recording-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'video', 'audio'; used in DnDHubs for recordings.
 *   @example
 *   GET /api/media?type=recording&id=rec123 // Fetch recording in DnDHubs
 *
 * - 'transcript': A media transcript.
 *   Classifications: Media standards.
 *   Identifiers: lowercase: 'transcript', camelCase: 'transcriptResource', snake_case: 'transcript_resource', ALL_CAP: 'TRANSCRIPT', cache key: 'resource:transcript:resourceId'.
 *   Model Identifier Format: 'transcript-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'text', 'caption'; used in DataOrb for transcripts.
 *   @example
 *   GET /api/media?type=transcript&id=trans123 // Fetch transcript in DataOrb
 *
 * - 'citizen': A government citizen record.
 *   Classifications: Government standards (e-Government).
 *   Identifiers: lowercase: 'citizen', camelCase: 'citizenResource', snake_case: 'citizen_resource', ALL_CAP: 'CITIZEN', cache key: 'resource:citizen:resourceId'.
 *   Model Identifier Format: 'citizen-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'resident', 'individual'; used in HealthOrb for citizen records.
 *   @example
 *   GET /api/government?type=citizen&id=cit123 // Fetch citizen in HealthOrb
 *
 * - 'benefit': A government benefit.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'benefit', camelCase: 'benefitResource', snake_case: 'benefit_resource', ALL_CAP: 'BENEFIT', cache key: 'resource:benefit:resourceId'.
 *   Model Identifier Format: 'benefit-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'aid', 'subsidy'; used in Trakfox for benefits.
 *   @example
 *   POST /api/government { "type": "benefit", "id": "ben123" } // Create benefit in Trakfox
 *
 * - 'grant': A government grant.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'grant', camelCase: 'grantResource', snake_case: 'grant_resource', ALL_CAP: 'GRANT', cache key: 'resource:grant:resourceId'.
 *   Model Identifier Format: 'grant-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'funding', 'award'; used in DnDHubs for grants.
 *   @example
 *   POST /api/government { "type": "grant", "id": "grnt123" } // Create grant in DnDHubs
 *
 * - 'election': A government election.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'election', camelCase: 'electionResource', snake_case: 'election_resource', ALL_CAP: 'ELECTION', cache key: 'resource:election:resourceId'.
 *   Model Identifier Format: 'election-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'vote', 'poll'; used in Trakfox for elections.
 *   @example
 *   GET /api/government?type=election&id=elec123 // Fetch election in Trakfox
 *
 * - 'census': A government census.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'census', camelCase: 'censusResource', snake_case: 'census_resource', ALL_CAP: 'CENSUS', cache key: 'resource:census:resourceId'.
 *   Model Identifier Format: 'census-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'survey', 'count'; used in HealthOrb for census data.
 *   @example
 *   GET /api/government?type=census&id=cen123 // Fetch census in HealthOrb
 *
 * - 'petition': A government petition.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'petition', camelCase: 'petitionResource', snake_case: 'petition_resource', ALL_CAP: 'PETITION', cache key: 'resource:petition:resourceId'.
 *   Model Identifier Format: 'petition-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'request', 'appeal'; used in Trakfox for petitions.
 *   @example
 *   POST /api/government { "type": "petition", "id": "pet123" } // Create petition in Trakfox
 *
 * - 'referendum': A government referendum.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'referendum', camelCase: 'referendumResource', snake_case: 'referendum_resource', ALL_CAP: 'REFERENDUM', cache key: 'resource:referendum:resourceId'.
 *   Model Identifier Format: 'referendum-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'vote', 'ballot'; used in DnDHubs for referendums.
 *   @example
 *   POST /api/government { "type": "referendum", "id": "ref123" } // Create referendum in DnDHubs
 *
 * - 'legislation': A government legislation.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'legislation', camelCase: 'legislationResource', snake_case: 'legislation_resource', ALL_CAP: 'LEGISLATION', cache key: 'resource:legislation:resourceId'.
 *   Model Identifier Format: 'legislation-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'law', 'bill'; used in Trakfox for legislation tracking.
 *   @example
 *   GET /api/government?type=legislation&id=leg123 // Fetch legislation in Trakfox
 *
 * - 'ordinance': A government ordinance.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'ordinance', camelCase: 'ordinanceResource', snake_case: 'ordinance_resource', ALL_CAP: 'ORDINANCE', cache key: 'resource:ordinance:resourceId'.
 *   Model Identifier Format: 'ordinance-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rule', 'regulation'; used in HealthOrb for ordinances.
 *   @example
 *   GET /api/government?type=ordinance&id=ord123 // Fetch ordinance in HealthOrb
 *
 * - 'mandate': A government mandate.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'mandate', camelCase: 'mandateResource', snake_case: 'mandate_resource', ALL_CAP: 'MANDATE', cache key: 'resource:mandate:resourceId'.
 *   Model Identifier Format: 'mandate-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'order', 'directive'; used in Trakfox for mandates.
 *   @example
 *   POST /api/government { "type": "mandate", "id": "man123" } // Create mandate in Trakfox
 *
 * - 'agency': A government agency.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'agency', camelCase: 'agencyResource', snake_case: 'agency_resource', ALL_CAP: 'AGENCY', cache key: 'resource:agency:resourceId'.
 *   Model Identifier Format: 'agency-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'department', 'bureau'; used in HealthOrb for agencies.
 *   @example
 *   GET /api/government?type=agency&id=ag123 // Fetch agency in HealthOrb
 *
 * - 'department': A government department.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'department', camelCase: 'departmentResource', snake_case: 'department_resource', ALL_CAP: 'DEPARTMENT', cache key: 'resource:department:resourceId'.
 *   Model Identifier Format: 'department-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'agency', 'division'; used in Trakfox for departments.
 *   @example
 *   GET /api/government?type=department&id=dep123 // Fetch department in Trakfox
 *
 * - 'bureau': A government bureau.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'bureau', camelCase: 'bureauResource', snake_case: 'bureau_resource', ALL_CAP: 'BUREAU', cache key: 'resource:bureau:resourceId'.
 *   Model Identifier Format: 'bureau-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'agency', 'office'; used in DnDHubs for bureaus.
 *   @example
 *   GET /api/government?type=bureau&id=bur123 // Fetch bureau in DnDHubs
 *
 * - 'commission': A government commission.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'commission', camelCase: 'commissionResource', snake_case: 'commission_resource', ALL_CAP: 'COMMISSION', cache key: 'resource:commission:resourceId'.
 *   Model Identifier Format: 'commission-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'board', 'council'; used in Trakfox for commissions.
 *   @example
 *   GET /api/government?type=commission&id=com123 // Fetch commission in Trakfox
 *
 * - 'authority': A government authority.
 *   Classifications: Government standards.
 *   Identifiers: lowercase: 'authority', camelCase: 'authorityResource', snake_case: 'authority_resource', ALL_CAP: 'AUTHORITY', cache key: 'resource:authority:resourceId'.
 *   Model Identifier Format: 'authority-{id}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'agency', 'body'; used in HealthOrb for authorities.
 *   @example
 *   GET /api/government?type=authority&id=auth123 // Fetch authority in HealthOrb
 */
export type ResourceTaxonomy = CoreResource | CustomResource;

/** User interface and interactive resources */
export type UIResourceTaxonomy = 
  | 'page' | 'component' | 'widget' | 'theme' | 'form'
  | 'layout' | 'navigation' | 'menu' | 'dialog' | 'modal'
  | 'panel' | 'toolbar' | 'sidebar' | 'header' | 'footer' | 'color';

/** Content and media resources */
export type ContentResourceTaxonomy = 
  | 'content' | 'article' | 'post' | 'document' | 'publication'
  | 'report' | 'media' | 'asset' | 'file' | 'attachment'
  | 'image' | 'video' | 'audio' | 'archive' | 'gallery';

/** E-commerce and commerce resources */
export type CommerceResourceTaxonomy = 
  | 'product' | 'deal' | 'offer' | 'invoice' | 'order'
  | 'cart' | 'payment' | 'refund' | 'discount' | 'promotion'
  | 'catalog' | 'inventory' | 'shipping' | 'fulfillment' | 'return';

/** Identity and access management resources */
export type IdentityResourceTaxonomy = 
  | 'user' | 'team' | 'role' | 'organization' | 'tenant'
  | 'credential' | 'identity' | 'permission' | 'session' | 'token'
  | 'profile' | 'account' | 'group' | 'delegation' | 'authorization';

/** Workflow and process management resources */
export type WorkflowResourceTaxonomy = 
  | 'workflow' | 'job' | 'task' | 'process' | 'pipeline'
  | 'stage' | 'step' | 'approval' | 'escalation' | 'automation'
  | 'trigger' | 'action' | 'condition' | 'transition' | 'milestone';

/** Communication and messaging resources */
export type CommunicationResourceTaxonomy = 
  | 'notification' | 'email' | 'message' | 'comment' | 'feedback'
  | 'announcement' | 'alert' | 'channel' | 'thread' | 'conversation'
  | 'ticket' | 'chat' | 'broadcast' | 'subscription' | 'digest';

/** Analytics and reporting resources */
export type AnalyticsResourceTaxonomy = 
  | 'analytics' | 'visualization' | 'dashboard' | 'metric' | 'report'
  | 'insight' | 'trend' | 'forecast' | 'aggregation' | 'segment'
  | 'kpi' | 'scorecard' | 'benchmark' | 'analysis' | 'statistics';

/** Data and information management resources */
export type DataResourceTaxonomy = 
  | 'data' | 'dataset' | 'record' | 'entity' | 'model'
  | 'schema' | 'index' | 'query' | 'view' | 'projection'
  | 'collection' | 'table' | 'field' | 'attribute' | 'relationship';

/** Integration and connectivity resources */
export type IntegrationResourceTaxonomy = 
  | 'integration' | 'connector' | 'webhook' | 'endpoint' | 'apispec'
  | 'mapping' | 'transformation' | 'sync' | 'migration' | 'adapter'
  | 'bridge' | 'gateway' | 'proxy' | 'router' | 'middleware';

/** Infrastructure and platform resources */
export type InfrastructureResourceTaxonomy = 
  | 'container' | 'function' | 'service' | 'cluster' | 'node'
  | 'deployment' | 'environment' | 'resource' | 'capacity' | 'scaling'
  | 'instance' | 'server' | 'network' | 'loadbalancer' | 'registry';

/** Financial and accounting resources */
export type FinancialResourceTaxonomy = 
  | 'transaction' | 'account' | 'ledger' | 'journal' | 'budget'
  | 'tax' | 'billing' | 'subscription' | 'statement' | 'reconciliation'
  | 'expense' | 'revenue' | 'asset' | 'liability' | 'equity';

/** Healthcare and clinical resources */
export type ClinicalResourceTaxonomy = 
  | 'patient' | 'practitioner' | 'appointment' | 'observation' | 'procedure'
  | 'medication' | 'diagnosis' | 'encounter' | 'careplan' | 'claim'
  | 'lab' | 'imaging' | 'prescription' | 'referral' | 'admission';

/** Operations and manufacturing resources */
export type OperationalResourceTaxonomy = 
  | 'equipment' | 'production' | 'quality' | 'maintenance' | 'inventory'
  | 'batch' | 'inspection' | 'workorder' | 'assembly' | 'defect'
  | 'material' | 'supplier' | 'procurement' | 'logistics' | 'delivery';

/** Regulatory and compliance resources */
export type RegulatoryResourceTaxonomy = 
  | 'policy' | 'regulation' | 'compliance' | 'audit' | 'permit'
  | 'license' | 'certificate' | 'standard' | 'requirement' | 'violation'
  | 'assessment' | 'control' | 'risk' | 'issue' | 'remediation';

/** Education and learning resources */
export type EducationalResourceTaxonomy = 
  | 'course' | 'lesson' | 'module' | 'assessment' | 'grade'
  | 'transcript' | 'enrollment' | 'certification' | 'curriculum' | 'attendance'
  | 'assignment' | 'exam' | 'quiz' | 'lecture' | 'seminar';

/** Legal and contracts resources */
export type LegalResourceTaxonomy = 
  | 'case' | 'contract' | 'litigation' | 'evidence' | 'filing'
  | 'verdict' | 'settlement' | 'clause' | 'statute' | 'precedent'
  | 'agreement' | 'dispute' | 'arbitration' | 'judgment' | 'appeal';

/** Spatial and geographic resources */
export type SpatialResourceTaxonomy = 
  | 'location' | 'property' | 'building' | 'floor' | 'unit'
  | 'area' | 'zone' | 'region' | 'coordinate' | 'boundary'
  | 'site' | 'facility' | 'room' | 'space' | 'territory';

/** Temporal and scheduling resources */
export type TemporalResourceTaxonomy = 
  | 'event' | 'schedule' | 'calendar' | 'reservation' | 'booking'
  | 'availability' | 'shift' | 'period' | 'timeline' | 'deadline'
  | 'recurrence' | 'holiday' | 'blackout' | 'window' | 'slot';

/** Storage and persistence resources */
export type StorageResourceTaxonomy = 
  | 'cache' | 'blob' | 'queue' | 'topic' | 'stream'
  | 'bucket' | 'archive' | 'backup' | 'snapshot' | 'replica'
  | 'warehouse' | 'lake' | 'mart' | 'vault' | 'repository';

/** AI and machine learning resources */
export type AIResourceTaxonomy = 
  | 'aimodel' | 'training' | 'inference' | 'experiment' | 'feature'
  | 'prediction' | 'evaluation' | 'pipeline' | 'deployment' | 'monitoring'
  | 'dataset' | 'annotation' | 'embedding' | 'vector' | 'cluster';

/** Research and development resources */
export type ResearchResourceTaxonomy = 
  | 'research' | 'study' | 'trial' | 'protocol' | 'hypothesis'
  | 'experiment' | 'observation' | 'finding' | 'publication' | 'patent'
  | 'innovation' | 'prototype' | 'design' | 'specification' | 'blueprint';

/** Social and community resources */
export type SocialResourceTaxonomy = 
  | 'social' | 'community' | 'forum' | 'discussion' | 'poll'
  | 'survey' | 'review' | 'rating' | 'recommendation' | 'endorsement'
  | 'follow' | 'like' | 'share' | 'mention' | 'tag';

/** Media and entertainment resources */
export type MediaResourceTaxonomy = 
  | 'broadcast' | 'stream' | 'channel' | 'program' | 'episode'
  | 'series' | 'movie' | 'track' | 'album' | 'playlist'
  | 'podcast' | 'webinar' | 'livestream' | 'recording' | 'transcript';

/** Government and public services resources */
export type GovernmentResourceTaxonomy = 
  | 'citizen' | 'benefit' | 'grant' | 'election' | 'census'
  | 'petition' | 'referendum' | 'legislation' | 'ordinance' | 'mandate'
  | 'agency' | 'department' | 'bureau' | 'commission' | 'authority';

export type CoreResource = 
  | UIResourceTaxonomy
  | ContentResourceTaxonomy
  | CommerceResourceTaxonomy
  | IdentityResourceTaxonomy
  | WorkflowResourceTaxonomy
  | CommunicationResourceTaxonomy
  | AnalyticsResourceTaxonomy
  | DataResourceTaxonomy
  | IntegrationResourceTaxonomy
  | InfrastructureResourceTaxonomy
  | FinancialResourceTaxonomy
  | ClinicalResourceTaxonomy
  | OperationalResourceTaxonomy
  | RegulatoryResourceTaxonomy
  | EducationalResourceTaxonomy
  | LegalResourceTaxonomy
  | SpatialResourceTaxonomy
  | TemporalResourceTaxonomy
  | StorageResourceTaxonomy
  | AIResourceTaxonomy
  | ResearchResourceTaxonomy
  | SocialResourceTaxonomy
  | MediaResourceTaxonomy
  | GovernmentResourceTaxonomy;

export type CustomResource = string & { __brand?: 'CustomResource' };