/**
 * Union type representing ColorName in the Trakfox ecosystem.
 * Defines standardized color names used across the DOMSpec configuration, UI components, and error severities.
 * Includes colors from the Trakfox palette and error severities from ErrorColorSemanticTaxonomy.
 * Aligns with Material Design and ANSI standards, supporting Trakfox, HealthOrb, and DnDHubs use cases.
 *
 * - 'amber': A warm, golden-yellow color used for highlights or warnings.
 *   Classifications: Material Design (Amber), ANSI 33 (Yellow).
 *   Identifiers: lowercase: 'amber', camelCase: 'amberColor', snake_case: 'amber_color', ALL_CAP: 'AMBER', cache key: 'color:amber:ui'.
 *   Model Identifier Format: 'amber-{resourceType}-{timestamp}' (e.g., 'amber-button-20250807').
 *   Variations and Use Cases: Used in UI for buttons, alerts, or badges; in HealthOrb for warning indicators; in DnDHubs for product highlights.
 *   Example Usage: Styling a warning button in Trakfox forms (e.g., <button style="background-color: #ffc107">).
 *
 * - 'blue': A cool, calming color used for primary actions or informational elements.
 *   Classifications: Material Design (Blue), ANSI 34 (Blue).
 *   Identifiers: lowercase: 'blue', camelCase: 'blueColor', snake_case: 'blue_color', ALL_CAP: 'BLUE', cache key: 'color:blue:ui'.
 *   Model Identifier Format: 'blue-{resourceType}-{timestamp}' (e.g., 'blue-link-20250807').
 *   Variations and Use Cases: Used for links, primary buttons, or navigation; in HealthOrb for data visualization; in DnDHubs for category labels.
 *   Example Usage: Styling a primary button in Trakfox UI (e.g., <button style="background-color: #2196f3">).
 *
 * - 'blueGrey': A muted blue-grey color for subtle backgrounds or secondary elements.
 *   Classifications: Material Design (Blue Grey), ANSI 38;2;120;144;156.
 *   Identifiers: lowercase: 'bluegrey', camelCase: 'blueGreyColor', snake_case: 'blue_grey_color', ALL_CAP: 'BLUE_GREY', cache key: 'color:bluegrey:ui'.
 *   Model Identifier Format: 'bluegrey-{resourceType}-{timestamp}' (e.g., 'bluegrey-panel-20250807').
 *   Variations and Use Cases: Used for card backgrounds or secondary text; in HealthOrb for chart backgrounds; in DnDHubs for neutral UI elements.
 *   Example Usage: Styling a card background in Trakfox (e.g., <div style="background-color: #607d8b">).
 *
 * - 'brown': A rich, earthy color for natural or grounded UI elements.
 *   Classifications: Material Design (Brown), ANSI 38;2;141;110;99.
 *   Identifiers: lowercase: 'brown', camelCase: 'brownColor', snake_case: 'brown_color', ALL_CAP: 'BROWN', cache key: 'color:brown:ui'.
 *   Model Identifier Format: 'brown-{resourceType}-{timestamp}' (e.g., 'brown-footer-20250807').
 *   Variations and Use Cases: Used for footers or earthy themes; in HealthOrb for organic data visuals; in DnDHubs for rustic product categories.
 *   Example Usage: Styling a footer in Trakfox (e.g., <footer style="background-color: #795548">).
 *
 * - 'cyan': A vibrant, teal-like color for dynamic or tech-focused elements.
 *   Classifications: Material Design (Cyan), ANSI 36 (Cyan).
 *   Identifiers: lowercase: 'cyan', camelCase: 'cyanColor', snake_case: 'cyan_color', ALL_CAP: 'CYAN', cache key: 'color:cyan:ui'.
 *   Model Identifier Format: 'cyan-{resourceType}-{timestamp}' (e.g., 'cyan-progress-20250807').
 *   Variations and Use Cases: Used for progress bars or tech indicators; in HealthOrb for medical tech visuals; in DnDHubs for futuristic themes.
 *   Example Usage: Styling a progress bar in Trakfox (e.g., <progress style="background-color: #00bcd4">).
 *
 * - 'deepOrange': A bold, warm orange for attention-grabbing elements.
 *   Classifications: Material Design (Deep Orange), ANSI 38;2;255;112;67.
 *   Identifiers: lowercase: 'deeporange', camelCase: 'deepOrangeColor', snake_case: 'deep_orange_color', ALL_CAP: 'DEEP_ORANGE', cache key: 'color:deeporange:ui'.
 *   Model Identifier Format: 'deeporange-{resourceType}-{timestamp}' (e.g., 'deeporange-alert-20250807').
 *   Variations and Use Cases: Used for alerts or call-to-action buttons; in HealthOrb for critical notifications; in DnDHubs for urgent promotions.
 *   Example Usage: Styling an alert button in Trakfox (e.g., <button style="background-color: #ff5722">).
 *
 * - 'deepPurple': A rich, regal purple for premium or creative elements.
 *   Classifications: Material Design (Deep Purple), ANSI 38;2;126;87;194.
 *   Identifiers: lowercase: 'deeppurple', camelCase: 'deepPurpleColor', snake_case: 'deep_purple_color', ALL_CAP: 'DEEP_PURPLE', cache key: 'color:deeppurple:ui'.
 *   Model Identifier Format: 'deeppurple-{resourceType}-{timestamp}' (e.g., 'deeppurple-header-20250807').
 *   Variations and Use Cases: Used for headers or premium features; in HealthOrb for specialty visuals; in DnDHubs for luxury product branding.
 *   Example Usage: Styling a header in Trakfox (e.g., <header style="background-color: #673ab7">).
 *
 * - 'domsDark': A custom dark theme color for Trakfox-specific branding.
 *   Classifications: Trakfox Custom, ANSI 38;2;70;78;91.
 *   Identifiers: lowercase: 'domsdark', camelCase: 'domsDarkColor', snake_case: 'doms_dark_color', ALL_CAP: 'DOMS_DARK', cache key: 'color:domsdark:ui'.
 *   Model Identifier Format: 'domsdark-{resourceType}-{timestamp}' (e.g., 'domsdark-sidebar-20250807').
 *   Variations and Use Cases: Used for dark mode UI or branding; in HealthOrb for low-light interfaces; in DnDHubs for modern aesthetics.
 *   Example Usage: Styling a sidebar in Trakfox dark mode (e.g., <aside style="background-color: #252f3e">).
 *
 * - 'green': A fresh, natural green for growth or success indicators.
 *   Classifications: Material Design (Green), ANSI 32 (Green).
 *   Identifiers: lowercase: 'green', camelCase: 'greenColor', snake_case: 'green_color', ALL_CAP: 'GREEN', cache key: 'color:green:ui'.
 *   Model Identifier Format: 'green-{resourceType}-{timestamp}' (e.g., 'green-success-20250807').
 *   Variations and Use Cases: Used for success messages or eco-friendly themes; in HealthOrb for positive health indicators; in DnDHubs for sustainable products.
 *   Example Usage: Styling a success message in Trakfox (e.g., <div style="background-color: #4caf50">).
 *
 * - 'grey': A neutral grey for backgrounds or secondary elements.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'grey', camelCase: 'greyColor', snake_case: 'grey_color', ALL_CAP: 'GREY', cache key: 'color:grey:ui'.
 *   Model Identifier Format: 'grey-{resourceType}-{timestamp}' (e.g., 'grey-background-20250807').
 *   Variations and Use Cases: Used for neutral backgrounds or dividers; in HealthOrb for neutral UI; in DnDHubs for minimalist designs.
 *   Example Usage: Styling a background in Trakfox (e.g., <div style="background-color: #9e9e9e">).
 *
 * - 'indigo': A deep, sophisticated blue for professional or tech elements.
 *   Classifications: Material Design (Indigo), ANSI 38;2;92;107;192.
 *   Identifiers: lowercase: 'indigo', camelCase: 'indigoColor', snake_case: 'indigo_color', ALL_CAP: 'INDIGO', cache key: 'color:indigo:ui'.
 *   Model Identifier Format: 'indigo-{resourceType}-{timestamp}' (e.g., 'indigo-nav-20250807').
 *   Variations and Use Cases: Used for navigation or professional themes; in HealthOrb for data dashboards; in DnDHubs for tech product branding.
 *   Example Usage: Styling a nav bar in Trakfox (e.g., <nav style="background-color: #3f51b5">).
 *
 * - 'lightBlue': A soft, approachable blue for light UI elements.
 *   Classifications: Material Design (Light Blue), ANSI 38;2;41;182;246.
 *   Identifiers: lowercase: 'lightblue', camelCase: 'lightBlueColor', snake_case: 'light_blue_color', ALL_CAP: 'LIGHT_BLUE', cache key: 'color:lightblue:ui'.
 *   Model Identifier Format: 'lightblue-{resourceType}-{timestamp}' (e.g., 'lightblue-button-20250807').
 *   Variations and Use Cases: Used for secondary buttons or light themes; in HealthOrb for patient-friendly UI; in DnDHubs for approachable branding.
 *   Example Usage: Styling a secondary button in Trakfox (e.g., <button style="background-color: #03a9f4">).
 *
 * - 'lightGreen': A bright, vibrant green for fresh or eco-conscious elements.
 *   Classifications: Material Design (Light Green), ANSI 38;2;156;204;101.
 *   Identifiers: lowercase: 'lightgreen', camelCase: 'lightGreenColor', snake_case: 'light_green_color', ALL_CAP: 'LIGHT_GREEN', cache key: 'color:lightgreen:ui'.
 *   Model Identifier Format: 'lightgreen-{resourceType}-{timestamp}' (e.g., 'lightgreen-icon-20250807').
 *   Variations and Use Cases: Used for icons or eco-friendly indicators; in HealthOrb for wellness visuals; in DnDHubs for green product categories.
 *   Example Usage: Styling an icon in Trakfox (e.g., <i style="color: #8bc34a">).
 *
 * - 'lime': A zesty, bright green-yellow for energetic or playful elements.
 *   Classifications: Material Design (Lime), ANSI 38;2;212;225;87.
 *   Identifiers: lowercase: 'lime', camelCase: 'limeColor', snake_case: 'lime_color', ALL_CAP: 'LIME', cache key: 'color:lime:ui'.
 *   Model Identifier Format: 'lime-{resourceType}-{timestamp}' (e.g., 'lime-highlight-20250807').
 *   Variations and Use Cases: Used for highlights or playful UI; in HealthOrb for engaging visuals; in DnDHubs for vibrant product displays.
 *   Example Usage: Styling a highlighted text in Trakfox (e.g., <span style="background-color: #cddc39">).
 *
 * - 'orange': A warm, energetic orange for action-oriented elements.
 *   Classifications: Material Design (Orange), ANSI 38;2;255;165;0.
 *   Identifiers: lowercase: 'orange', camelCase: 'orangeColor', snake_case: 'orange_color', ALL_CAP: 'ORANGE', cache key: 'color:orange:ui'.
 *   Model Identifier Format: 'orange-{resourceType}-{timestamp}' (e.g., 'orange-cta-20250807').
 *   Variations and Use Cases: Used for call-to-action buttons or promotions; in HealthOrb for attention-grabbing alerts; in DnDHubs for sale banners.
 *   Example Usage: Styling a CTA button in Trakfox (e.g., <button style="background-color: #ff9800">).
 *
 * - 'pink': A bold, playful pink for creative or standout elements.
 *   Classifications: Material Design (Pink), ANSI 38;2;236;64;122.
 *   Identifiers: lowercase: 'pink', camelCase: 'pinkColor', snake_case: 'pink_color', ALL_CAP: 'PINK', cache key: 'color:pink:ui'.
 *   Model Identifier Format: 'pink-{resourceType}-{timestamp}' (e.g., 'pink-badge-20250807').
 *   Variations and Use Cases: Used for badges or creative UI; in HealthOrb for patient engagement; in DnDHubs for trendy product highlights.
 *   Example Usage: Styling a badge in Trakfox (e.g., <span style="background-color: #e91e63">).
 *
 * - 'primary': A custom primary color for Trakfox branding.
 *   Classifications: Trakfox Custom, ANSI 38;2;77;82;167.
 *   Identifiers: lowercase: 'primary', camelCase: 'primaryColor', snake_case: 'primary_color', ALL_CAP: 'PRIMARY', cache key: 'color:primary:ui'.
 *   Model Identifier Format: 'primary-{resourceType}-{timestamp}' (e.g., 'primary-button-20250807').
 *   Variations and Use Cases: Used for primary UI elements or branding; in HealthOrb for core interfaces; in DnDHubs for main navigation.
 *   Example Usage: Styling a primary button in Trakfox (e.g., <button style="background-color: #141A46">).
 *
 * - 'purple': A vibrant, creative purple for artistic or premium elements.
 *   Classifications: Material Design (Purple), ANSI 35 (Magenta).
 *   Identifiers: lowercase: 'purple', camelCase: 'purpleColor', snake_case: 'purple_color', ALL_CAP: 'PURPLE', cache key: 'color:purple:ui'.
 *   Model Identifier Format: 'purple-{resourceType}-{timestamp}' (e.g., 'purple-header-20250807').
 *   Variations and Use Cases: Used for headers or creative themes; in HealthOrb for specialty visuals; in DnDHubs for premium branding.
 *   Example Usage: Styling a header in Trakfox (e.g., <header style="background-color: #9c27b0">).
 *
 * - 'red': A bold, urgent red for errors or critical elements.
 *   Classifications: Material Design (Red), ANSI 31 (Red).
 *   Identifiers: lowercase: 'red', camelCase: 'redColor', snake_case: 'red_color', ALL_CAP: 'RED', cache key: 'color:red:ui'.
 *   Model Identifier Format: 'red-{resourceType}-{timestamp}' (e.g., 'red-error-20250807').
 *   Variations and Use Cases: Used for error messages or alerts; in HealthOrb for critical health alerts; in DnDHubs for warning labels.
 *   Example Usage: Styling an error message in Trakfox (e.g., <div style="background-color: #f44336">).
 *
 * - 'yellow': A bright, cheerful yellow for highlights or warnings.
 *   Classifications: Material Design (Yellow), ANSI 33 (Yellow).
 *   Identifiers: lowercase: 'yellow', camelCase: 'yellowColor', snake_case: 'yellow_color', ALL_CAP: 'YELLOW', cache key: 'color:yellow:ui'.
 *   Model Identifier Format: 'yellow-{resourceType}-{timestamp}' (e.g., 'yellow-highlight-20250807').
 *   Variations and Use Cases: Used for text highlights or warnings; in HealthOrb for caution indicators; in DnDHubs for attention-grabbing banners.
 *   Example Usage: Styling highlighted text in Trakfox (e.g., <span style="background-color: #ffeb3b">).
 *
 * - 'skyBlue': A light, airy blue for refreshing or modern elements.
 *   Classifications: Trakfox Custom, ANSI 38;5;81.
 *   Identifiers: lowercase: 'skyblue', camelCase: 'skyBlueColor', snake_case: 'sky_blue_color', ALL_CAP: 'SKY_BLUE', cache key: 'color:skyblue:ui'.
 *   Model Identifier Format: 'skyblue-{resourceType}-{timestamp}' (e.g., 'skyblue-panel-20250807').
 *   Variations and Use Cases: Used for panels or modern UI; in HealthOrb for calming visuals; in DnDHubs for fresh aesthetics.
 *   Example Usage: Styling a panel in Trakfox (e.g., <div style="background-color: #22d3ee">).
 *
 * - 'teal': A balanced blue-green for modern or health-related elements.
 *   Classifications: Material Design (Teal), ANSI 38;5;44.
 *   Identifiers: lowercase: 'teal', camelCase: 'tealColor', snake_case: 'teal_color', ALL_CAP: 'TEAL', cache key: 'color:teal:ui'.
 *   Model Identifier Format: 'teal-{resourceType}-{timestamp}' (e.g., 'teal-icon-20250807').
 *   Variations and Use Cases: Used for icons or health themes; in HealthOrb for medical interfaces; in DnDHubs for modern product categories.
 *   Example Usage: Styling an icon in Trakfox (e.g., <i style="color: #009688">).
 *
 * - 'black': A pure black for high-contrast or minimalistic elements.
 *   Classifications: Material Design (Black), ANSI 30 (Black).
 *   Identifiers: lowercase: 'black', camelCase: 'blackColor', snake_case: 'black_color', ALL_CAP: 'BLACK', cache key: 'color:black:ui'.
 *   Model Identifier Format: 'black-{resourceType}-{timestamp}' (e.g., 'black-background-20250807').
 *   Variations and Use Cases: Used for text or backgrounds; in HealthOrb for high-contrast UI; in DnDHubs for sleek designs.
 *   Example Usage: Styling text in Trakfox (e.g., <p style="color: #000000">).
 *
 * - 'white': A pure white for clean or high-contrast elements.
 *   Classifications: Material Design (White), ANSI 37 (White).
 *   Identifiers: lowercase: 'white', camelCase: 'whiteColor', snake_case: 'white_color', ALL_CAP: 'WHITE', cache key: 'color:white:ui'.
 *   Model Identifier Format: 'white-{resourceType}-{timestamp}' (e.g., 'white-background-20250807').
 *   Variations and Use Cases: Used for backgrounds or text; in HealthOrb for clean UI; in DnDHubs for minimalist designs.
 *   Example Usage: Styling a background in Trakfox (e.g., <div style="background-color: #ffffff">).
 *
 * - 'magenta': A vibrant pink-purple for bold or creative elements.
 *   Classifications: Material Design (Magenta), ANSI 35 (Magenta).
 *   Identifiers: lowercase: 'magenta', camelCase: 'magentaColor', snake_case: 'magenta_color', ALL_CAP: 'MAGENTA', cache key: 'color:magenta:ui'.
 *   Model Identifier Format: 'magenta-{resourceType}-{timestamp}' (e.g., 'magenta-badge-20250807').
 *   Variations and Use Cases: Used for badges or creative UI; in HealthOrb for patient engagement; in DnDHubs for trendy branding.
 *   Example Usage: Styling a badge in Trakfox (e.g., <span style="background-color: #9c27b0">).
 *
 * - 'brightBlack': A lighter black for high-contrast minimalistic elements.
 *   Classifications: ANSI 90 (Bright Black).
 *   Identifiers: lowercase: 'brightblack', camelCase: 'brightBlackColor', snake_case: 'bright_black_color', ALL_CAP: 'BRIGHT_BLACK', cache key: 'color:brightblack:ui'.
 *   Model Identifier Format: 'brightblack-{resourceType}-{timestamp}' (e.g., 'brightblack-text-20250807').
 *   Variations and Use Cases: Used for text or subtle contrasts; in HealthOrb for readable UI; in DnDHubs for modern text styling.
 *   Example Usage: Styling text in Trakfox (e.g., <p style="color: #404040">).
 *
 * - 'brightRed': A vivid red for high-impact alerts or errors.
 *   Classifications: ANSI 91 (Bright Red).
 *   Identifiers: lowercase: 'brightred', camelCase: 'brightRedColor', snake_case: 'bright_red_color', ALL_CAP: 'BRIGHT_RED', cache key: 'color:brightred:ui'.
 *   Model Identifier Format: 'brightred-{resourceType}-{timestamp}' (e.g., 'brightred-alert-20250807').
 *   Variations and Use Cases: Used for urgent alerts or errors; in HealthOrb for critical notifications; in DnDHubs for warning labels.
 *   Example Usage: Styling an alert in Trakfox (e.g., <div style="background-color: #d32f2f">).
 *
 * - 'brightGreen': A vivid green for success or vibrant indicators.
 *   Classifications: ANSI 92 (Bright Green).
 *   Identifiers: lowercase: 'brightgreen', camelCase: 'brightGreenColor', snake_case: 'bright_green_color', ALL_CAP: 'BRIGHT_GREEN', cache key: 'color:brightgreen:ui'.
 *   Model Identifier Format: 'brightgreen-{resourceType}-{timestamp}' (e.g., 'brightgreen-success-20250807').
 *   Variations and Use Cases: Used for success messages or vibrant UI; in HealthOrb for positive indicators; in DnDHubs for eco-friendly branding.
 *   Example Usage: Styling a success message in Trakfox (e.g., <div style="background-color: #4caf50">).
 *
 * - 'brightYellow': A vivid yellow for high-visibility highlights.
 *   Classifications: ANSI 93 (Bright Yellow).
 *   Identifiers: lowercase: 'brightyellow', camelCase: 'brightYellowColor', snake_case: 'bright_yellow_color', ALL_CAP: 'BRIGHT_YELLOW', cache key: 'color:brightyellow:ui'.
 *   Model Identifier Format: 'brightyellow-{resourceType}-{timestamp}' (e.g., 'brightyellow-highlight-20250807').
 *   Variations and Use Cases: Used for highlights or warnings; in HealthOrb for caution indicators; in DnDHubs for attention-grabbing banners.
 *   Example Usage: Styling highlighted text in Trakfox (e.g., <span style="background-color: #ffeb3b">).
 *
 * - 'brightBlue': A vivid blue for dynamic or primary elements.
 *   Classifications: ANSI 94 (Bright Blue).
 *   Identifiers: lowercase: 'brightblue', camelCase: 'brightBlueColor', snake_case: 'bright_blue_color', ALL_CAP: 'BRIGHT_BLUE', cache key: 'color:brightblue:ui'.
 *   Model Identifier Format: 'brightblue-{resourceType}-{timestamp}' (e.g., 'brightblue-button-20250807').
 *   Variations and Use Cases: Used for primary buttons or dynamic UI; in HealthOrb for data visuals; in DnDHubs for tech branding.
 *   Example Usage: Styling a button in Trakfox (e.g., <button style="background-color: #2196f3">).
 *
 * - 'brightMagenta': A vivid pink-purple for bold or creative elements.
 *   Classifications: ANSI 95 (Bright Magenta).
 *   Identifiers: lowercase: 'brightmagenta', camelCase: 'brightMagentaColor', snake_case: 'bright_magenta_color', ALL_CAP: 'BRIGHT_MAGENTA', cache key: 'color:brightmagenta:ui'.
 *   Model Identifier Format: 'brightmagenta-{resourceType}-{timestamp}' (e.g., 'brightmagenta-badge-20250807').
 *   Variations and Use Cases: Used for badges or creative UI; in HealthOrb for patient engagement; in DnDHubs for trendy branding.
 *   Example Usage: Styling a badge in Trakfox (e.g., <span style="background-color: #9c27b0">).
 *
 * - 'brightCyan': A vivid cyan for dynamic or tech-focused elements.
 *   Classifications: ANSI 96 (Bright Cyan).
 *   Identifiers: lowercase: 'brightcyan', camelCase: 'brightCyanColor', snake_case: 'bright_cyan_color', ALL_CAP: 'BRIGHT_CYAN', cache key: 'color:brightcyan:ui'.
 *   Model Identifier Format: 'brightcyan-{resourceType}-{timestamp}' (e.g., 'brightcyan-progress-20250807').
 *   Variations and Use Cases: Used for progress bars or tech UI; in HealthOrb for medical tech visuals; in DnDHubs for futuristic themes.
 *   Example Usage: Styling a progress bar in Trakfox (e.g., <progress style="background-color: #00bcd4">).
 *
 * - 'brightWhite': A vivid white for high-contrast or clean elements.
 *   Classifications: ANSI 97 (Bright White).
 *   Identifiers: lowercase: 'brightwhite', camelCase: 'brightWhiteColor', snake_case: 'bright_white_color', ALL_CAP: 'BRIGHT_WHITE', cache key: 'color:brightwhite:ui'.
 *   Model Identifier Format: 'brightwhite-{resourceType}-{timestamp}' (e.g., 'brightwhite-background-20250807').
 *   Variations and Use Cases: Used for backgrounds or text; in HealthOrb for clean UI; in DnDHubs for minimalist designs.
 *   Example Usage: Styling a background in Trakfox (e.g., <div style="background-color: #ffffff">).
 *
 * - 'bgBlack': A background black for high-contrast or minimalistic UI.
 *   Classifications: ANSI 48;2;0;0;0 (Background Black).
 *   Identifiers: lowercase: 'bgblack', camelCase: 'bgBlackColor', snake_case: 'bg_black_color', ALL_CAP: 'BG_BLACK', cache key: 'color:bgblack:ui'.
 *   Model Identifier Format: 'bgblack-{resourceType}-{timestamp}' (e.g., 'bgblack-background-20250807').
 *   Variations and Use Cases: Used for dark backgrounds; in HealthOrb for high-contrast UI; in DnDHubs for sleek designs.
 *   Example Usage: Styling a background in Trakfox (e.g., <div style="background-color: #000000">).
 *
 * - 'bgRed': A background red for urgent or high-impact backgrounds.
 *   Classifications: ANSI 48;2;255;0;0 (Background Red).
 *   Identifiers: lowercase: 'bgred', camelCase: 'bgRedColor', snake_case: 'bg_red_color', ALL_CAP: 'BG_RED', cache key: 'color:bgred:ui'.
 *   Model Identifier Format: 'bgred-{resourceType}-{timestamp}' (e.g., 'bgred-alert-20250807').
 *   Variations and Use Cases: Used for alert backgrounds; in HealthOrb for critical notifications; in DnDHubs for warning sections.
 *   Example Usage: Styling an alert background in Trakfox (e.g., <div style="background-color: #d32f2f">).
 *
 * - 'bgGreen': A background green for success or vibrant backgrounds.
 *   Classifications: ANSI 48;2;0;255;0 (Background Green).
 *   Identifiers: lowercase: 'bggreen', camelCase: 'bgGreenColor', snake_case: 'bg_green_color', ALL_CAP: 'BG_GREEN', cache key: 'color:bggreen:ui'.
 *   Model Identifier Format: 'bggreen-{resourceType}-{timestamp}' (e.g., 'bggreen-success-20250807').
 *   Variations and Use Cases: Used for success backgrounds; in HealthOrb for positive indicators; in DnDHubs for eco-friendly sections.
 *   Example Usage: Styling a success background in Trakfox (e.g., <div style="background-color: #4caf50">).
 *
 * - 'bgYellow': A background yellow for high-visibility or warning backgrounds.
 *   Classifications: ANSI 48;2;255;255;0 (Background Yellow).
 *   Identifiers: lowercase: 'bgyellow', camelCase: 'bgYellowColor', snake_case: 'bg_yellow_color', ALL_CAP: 'BG_YELLOW', cache key: 'color:bgyellow:ui'.
 *   Model Identifier Format: 'bgyellow-{resourceType}-{timestamp}' (e.g., 'bgyellow-highlight-20250807').
 *   Variations and Use Cases: Used for warning backgrounds; in HealthOrb for caution indicators; in DnDHubs for attention-grabbing sections.
 *   Example Usage: Styling a highlighted background in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'bgBlue': A background blue for primary or calming backgrounds.
 *   Classifications: ANSI 48;2;0;0;255 (Background Blue).
 *   Identifiers: lowercase: 'bgblue', camelCase: 'bgBlueColor', snake_case: 'bg_blue_color', ALL_CAP: 'BG_BLUE', cache key: 'color:bgblue:ui'.
 *   Model Identifier Format: 'bgblue-{resourceType}-{timestamp}' (e.g., 'bgblue-nav-20250807').
 *   Variations and Use Cases: Used for navigation backgrounds; in HealthOrb for data dashboards; in DnDHubs for tech sections.
 *   Example Usage: Styling a nav background in Trakfox (e.g., <nav style="background-color: #2196f3">).
 *
 * - 'bgMagenta': A background magenta for bold or creative backgrounds.
 *   Classifications: ANSI 48;2;255;0;255 (Background Magenta).
 *   Identifiers: lowercase: 'bgmagenta', camelCase: 'bgMagentaColor', snake_case: 'bg_magenta_color', ALL_CAP: 'BG_MAGENTA', cache key: 'color:bgmagenta:ui'.
 *   Model Identifier Format: 'bgmagenta-{resourceType}-{timestamp}' (e.g., 'bgmagenta-section-20250807').
 *   Variations and Use Cases: Used for creative backgrounds; in HealthOrb for patient engagement; in DnDHubs for trendy sections.
 *   Example Usage: Styling a section background in Trakfox (e.g., <section style="background-color: #9c27b0">).
 *
 * - 'bgCyan': A background cyan for dynamic or tech-focused backgrounds.
 *   Classifications: ANSI 48;2;0;255;255 (Background Cyan).
 *   Identifiers: lowercase: 'bgcyan', camelCase: 'bgCyanColor', snake_case: 'bg_cyan_color', ALL_CAP: 'BG_CYAN', cache key: 'color:bgcyan:ui'.
 *   Model Identifier Format: 'bgcyan-{resourceType}-{timestamp}' (e.g., 'bgcyan-progress-20250807').
 *   Variations and Use Cases: Used for tech backgrounds; in HealthOrb for medical tech visuals; in DnDHubs for futuristic sections.
 *   Example Usage: Styling a progress background in Trakfox (e.g., <div style="background-color: #00bcd4">).
 *
 * - 'bgWhite': A background white for clean or high-contrast backgrounds.
 *   Classifications: ANSI 48;2;255;255;255 (Background White).
 *   Identifiers: lowercase: 'bgwhite', camelCase: 'bgWhiteColor', snake_case: 'bg_white_color', ALL_CAP: 'BG_WHITE', cache key: 'color:bgwhite:ui'.
 *   Model Identifier Format: 'bgwhite-{resourceType}-{timestamp}' (e.g., 'bgwhite-background-20250807').
 *   Variations and Use Cases: Used for clean backgrounds; in HealthOrb for minimal UI; in DnDHubs for minimalist designs.
 *   Example Usage: Styling a background in Trakfox (e.g., <div style="background-color: #ffffff">).
 *
 * - 'bgGrey': A background grey for neutral or subtle backgrounds.
 *   Classifications: ANSI 48;2;128;128;128 (Background Grey).
 *   Identifiers: lowercase: 'bggrey', camelCase: 'bgGreyColor', snake_case: 'bg_grey_color', ALL_CAP: 'BG_GREY', cache key: 'color:bggrey:ui'.
 *   Model Identifier Format: 'bggrey-{resourceType}-{timestamp}' (e.g., 'bggrey-panel-20250807').
 *   Variations and Use Cases: Used for neutral backgrounds; in HealthOrb for subtle UI; in DnDHubs for minimalist designs.
 *   Example Usage: Styling a panel background in Trakfox (e.g., <div style="background-color: #616161">).
 *
 * - 'bgOrange': A background orange for action-oriented or vibrant backgrounds.
 *   Classifications: ANSI 48;2;255;165;0 (Background Orange).
 *   Identifiers: lowercase: 'bgorange', camelCase: 'bgOrangeColor', snake_case: 'bg_orange_color', ALL_CAP: 'BG_ORANGE', cache key: 'color:bgorange:ui'.
 *   Model Identifier Format: 'bgorange-{resourceType}-{timestamp}' (e.g., 'bgorange-cta-20250807').
 *   Variations and Use Cases: Used for call-to-action backgrounds; in HealthOrb for attention-grabbing alerts; in DnDHubs for sale sections.
 *   Example Usage: Styling a CTA background in Trakfox (e.g., <div style="background-color: #ff9800">).
 *
 * - 'bgBlackBright': A bright background black for high-contrast minimalistic UI.
 *   Classifications: ANSI 100 (Background Bright Black).
 *   Identifiers: lowercase: 'bgblackbright', camelCase: 'bgBlackBrightColor', snake_case: 'bg_black_bright_color', ALL_CAP: 'BG_BLACK_BRIGHT', cache key: 'color:bgblackbright:ui'.
 *   Model Identifier Format: 'bgblackbright-{resourceType}-{timestamp}' (e.g., 'bgblackbright-background-20250807').
 *   Variations and Use Cases: Used for dark backgrounds with contrast; in HealthOrb for readable UI; in DnDHubs for modern designs.
 *   Example Usage: Styling a background in Trakfox (e.g., <div style="background-color: #404040">).
 *
 * - 'bgRedBright': A bright background red for urgent or high-impact backgrounds.
 *   Classifications: ANSI 101 (Background Bright Red).
 *   Identifiers: lowercase: 'bgredbright', camelCase: 'bgRedBrightColor', snake_case: 'bg_red_bright_color', ALL_CAP: 'BG_RED_BRIGHT', cache key: 'color:bgredbright:ui'.
 *   Model Identifier Format: 'bgredbright-{resourceType}-{timestamp}' (e.g., 'bgredbright-alert-20250807').
 *   Variations and Use Cases: Used for alert backgrounds; in HealthOrb for critical notifications; in DnDHubs for warning sections.
 *   Example Usage: Styling an alert background in Trakfox (e.g., <div style="background-color: #d32f2f">).
 *
 * - 'bgGreenBright': A bright background green for success or vibrant backgrounds.
 *   Classifications: ANSI 102 (Background Bright Green).
 *   Identifiers: lowercase: 'bggreenbright', camelCase: 'bgGreenBrightColor', snake_case: 'bg_green_bright_color', ALL_CAP: 'BG_GREEN_BRIGHT', cache key: 'color:bggreenbright:ui'.
 *   Model Identifier Format: 'bggreenbright-{resourceType}-{timestamp}' (e.g., 'bggreenbright-success-20250807').
 *   Variations and Use Cases: Used for success backgrounds; in HealthOrb for positive indicators; in DnDHubs for eco-friendly sections.
 *   Example Usage: Styling a success background in Trakfox (e.g., <div style="background-color: #4caf50">).
 *
 * - 'bgYellowBright': A bright background yellow for high-visibility or warning backgrounds.
 *   Classifications: ANSI 103 (Background Bright Yellow).
 *   Identifiers: lowercase: 'bgyellowbright', camelCase: 'bgYellowBrightColor', snake_case: 'bg_yellow_bright_color', ALL_CAP: 'BG_YELLOW_BRIGHT', cache key: 'color:bgyellowbright:ui'.
 *   Model Identifier Format: 'bgyellowbright-{resourceType}-{timestamp}' (e.g., 'bgyellowbright-highlight-20250807').
 *   Variations and Use Cases: Used for warning backgrounds; in HealthOrb for caution indicators; in DnDHubs for attention-grabbing sections.
 *   Example Usage: Styling a highlighted background in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'bgBlueBright': A bright background blue for primary or calming backgrounds.
 *   Classifications: ANSI 104 (Background Bright Blue).
 *   Identifiers: lowercase: 'bgbluebright', camelCase: 'bgBlueBrightColor', snake_case: 'bg_blue_bright_color', ALL_CAP: 'BG_BLUE_BRIGHT', cache key: 'color:bgbluebright:ui'.
 *   Model Identifier Format: 'bgbluebright-{resourceType}-{timestamp}' (e.g., 'bgbluebright-nav-20250807').
 *   Variations and Use Cases: Used for navigation backgrounds; in HealthOrb for data dashboards; in DnDHubs for tech sections.
 *   Example Usage: Styling a nav background in Trakfox (e.g., <nav style="background-color: #2196f3">).
 *
 * - 'bgMagentaBright': A bright background magenta for bold or creative backgrounds.
 *   Classifications: ANSI 105 (Background Bright Magenta).
 *   Identifiers: lowercase: 'bgmagentabright', camelCase: 'bgMagentaBrightColor', snake_case: 'bg_magenta_bright_color', ALL_CAP: 'BG_MAGENTA_BRIGHT', cache key: 'color:bgmagentabright:ui'.
 *   Model Identifier Format: 'bgmagentabright-{resourceType}-{timestamp}' (e.g., 'bgmagentabright-section-20250807').
 *   Variations and Use Cases: Used for creative backgrounds; in HealthOrb for patient engagement; in DnDHubs for trendy sections.
 *   Example Usage: Styling a section background in Trakfox (e.g., <section style="background-color: #9c27b0">).
 *
 * - 'bgCyanBright': A bright background cyan for dynamic or tech-focused backgrounds.
 *   Classifications: ANSI 106 (Background Bright Cyan).
 *   Identifiers: lowercase: 'bgcyanbright', camelCase: 'bgCyanBrightColor', snake_case: 'bg_cyan_bright_color', ALL_CAP: 'BG_CYAN_BRIGHT', cache key: 'color:bgcyanbright:ui'.
 *   Model Identifier Format: 'bgcyanbright-{resourceType}-{timestamp}' (e.g., 'bgcyanbright-progress-20250807').
 *   Variations and Use Cases: Used for tech backgrounds; in HealthOrb for medical tech visuals; in DnDHubs for futuristic sections.
 *   Example Usage: Styling a progress background in Trakfox (e.g., <div style="background-color: #00bcd4">).
 *
 * - 'bgWhiteBright': A bright background white for clean or high-contrast backgrounds.
 *   Classifications: ANSI 107 (Background Bright White).
 *   Identifiers: lowercase: 'bgwhitebright', camelCase: 'bgWhiteBrightColor', snake_case: 'bg_white_bright_color', ALL_CAP: 'BG_WHITE_BRIGHT', cache key: 'color:bgwhitebright:ui'.
 *   Model Identifier Format: 'bgwhitebright-{resourceType}-{timestamp}' (e.g., 'bgwhitebright-background-20250807').
 *   Variations and Use Cases: Used for clean backgrounds; in HealthOrb for minimal UI; in DnDHubs for minimalist designs.
 *   Example Usage: Styling a background in Trakfox (e.g., <div style="background-color: #ffffff">).
 *
 * - 'darkRed': A deeper red for richer error states or backgrounds.
 *   Classifications: Material Design (Red-700), ANSI 31 (Red).
 *   Identifiers: lowercase: 'darkred', camelCase: 'darkRedColor', snake_case: 'dark_red_color', ALL_CAP: 'DARK_RED', cache key: 'color:darkred:ui'.
 *   Model Identifier Format: 'darkred-{resourceType}-{timestamp}' (e.g., 'darkred-error-20250807').
 *   Variations and Use Cases: Used for error messages or dark-themed alerts; in HealthOrb for critical notifications; in DnDHubs for warning labels.
 *   Example Usage: Styling an error message in Trakfox (e.g., <div style="background-color: #d32f2f">).
 *
 * - 'lightRed': A softer red for subtle alerts or highlights.
 *   Classifications: Material Design (Red-200), ANSI 31 (Red).
 *   Identifiers: lowercase: 'lightred', camelCase: 'lightRedColor', snake_case: 'light_red_color', ALL_CAP: 'LIGHT_RED', cache key: 'color:lightred:ui'.
 *   Model Identifier Format: 'lightred-{resourceType}-{timestamp}' (e.g., 'lightred-highlight-20250807').
 *   Variations and Use Cases: Used for subtle alerts or highlights; in HealthOrb for non-critical notifications; in DnDHubs for soft warning labels.
 *   Example Usage: Styling a highlighted text in Trakfox (e.g., <span style="background-color: #ef9a9a">).
 *
 * - 'navyBlue': A darker blue for professional or navigation elements.
 *   Classifications: Material Design (Blue-900), ANSI 34 (Blue).
 *   Identifiers: lowercase: 'navyblue', camelCase: 'navyBlueColor', snake_case: 'navy_blue_color', ALL_CAP: 'NAVY_BLUE', cache key: 'color:navyblue:ui'.
 *   Model Identifier Format: 'navyblue-{resourceType}-{timestamp}' (e.g., 'navyblue-nav-20250807').
 *   Variations and Use Cases: Used for navigation bars or professional themes; in HealthOrb for data dashboards; in DnDHubs for tech branding.
 *   Example Usage: Styling a nav bar in Trakfox (e.g., <nav style="background-color: #0d47a1">).
 *
 * - 'royalBlue': A vibrant blue for dynamic or premium UI components.
 *   Classifications: Material Design (Blue-A400), ANSI 34 (Blue).
 *   Identifiers: lowercase: 'royalblue', camelCase: 'royalBlueColor', snake_case: 'royal_blue_color', ALL_CAP: 'ROYAL_BLUE', cache key: 'color:royalblue:ui'.
 *   Model Identifier Format: 'royalblue-{resourceType}-{timestamp}' (e.g., 'royalblue-button-20250807').
 *   Variations and Use Cases: Used for premium buttons or dynamic UI; in HealthOrb for specialty visuals; in DnDHubs for luxury branding.
 *   Example Usage: Styling a premium button in Trakfox (e.g., <button style="background-color: #2979ff">).
 *
 * - 'neonRed': A highly saturated red for gaming or media applications.
 *   Classifications: Material Design (Red-A400), ANSI 31 (Red).
 *   Identifiers: lowercase: 'neonred', camelCase: 'neonRedColor', snake_case: 'neon_red_color', ALL_CAP: 'NEON_RED', cache key: 'color:neonred:ui'.
 *   Model Identifier Format: 'neonred-{resourceType}-{timestamp}' (e.g., 'neonred-highlight-20250807').
 *   Variations and Use Cases: Used for vibrant highlights in gaming UIs; in HealthOrb for engaging visuals; in DnDHubs for trendy product displays.
 *   Example Usage: Styling a highlight in Trakfox gaming UI (e.g., <span style="background-color: #ff1744">).
 *
 * - 'electricBlue': A bright, electric blue for immersive UI designs.
 *   Classifications: Material Design (Blue-A700), ANSI 34 (Blue).
 *   Identifiers: lowercase: 'electricblue', camelCase: 'electricBlueColor', snake_case: 'electric_blue_color', ALL_CAP: 'ELECTRIC_BLUE', cache key: 'color:electricblue:ui'.
 *   Model Identifier Format: 'electricblue-{resourceType}-{timestamp}' (e.g., 'electricblue-button-20250807').
 *   Variations and Use Cases: Used for dynamic buttons in gaming UIs; in HealthOrb for tech visuals; in DnDHubs for futuristic branding.
 *   Example Usage: Styling a button in Trakfox gaming UI (e.g., <button style="background-color: #2962ff">).
 *
 * - 'primary': A semantic alias for blue to denote primary actions.
 *   Classifications: Material Design (Blue), ANSI 34 (Blue).
 *   Identifiers: lowercase: 'primaryblue', camelCase: 'primaryBlueColor', snake_case: 'primary_blue_color', ALL_CAP: 'PRIMARY_BLUE', cache key: 'color:primaryblue:ui'.
 *   Model Identifier Format: 'primaryblue-{resourceType}-{timestamp}' (e.g., 'primaryblue-button-20250807').
 *   Variations and Use Cases: Used for primary buttons or navigation; in HealthOrb for core interfaces; in DnDHubs for main navigation.
 *   Example Usage: Styling a primary button in Trakfox (e.g., <button style="background-color: #2196f3">).
 *
 * - 'secondary': A custom secondary color for Trakfox branding.
 *   Classifications: Trakfox Custom, ANSI 38;5;215.
 *   Identifiers: lowercase: 'secondary', camelCase: 'secondaryColor', snake_case: 'secondary_color', ALL_CAP: 'SECONDARY', cache key: 'color:secondary:ui'.
 *   Model Identifier Format: 'secondary-{resourceType}-{timestamp}' (e.g., 'secondary-button-20250807').
 *   Variations and Use Cases: Used for secondary UI elements or branding; in HealthOrb for supporting interfaces; in DnDHubs for secondary navigation.
 *   Example Usage: Styling a secondary button in Trakfox (e.g., <button style="background-color: #EC8B5E">).
 *
 * - 'accent': Highlight color for emphasis.
 *   Classifications: Semantic color (accent).
 *   Identifiers: lowercase: 'accent', camelCase: 'accentColor', snake_case: 'accent_color', ALL_CAP: 'ACCENT', cache key: 'color:accent:portalId'.
 *   Model Identifier Format: 'accent-{shade}-{hex}'.
 *   Variations and Use Cases: For badges in GEOCoLab dashboards.
 *   Example Usage: Styling a badge in Trakfox (e.g., <span style="background-color: #FFB74D">).
 *
 * - 'neutral': Base gray-scale for backgrounds/text.
 *   Classifications: Semantic color (neutral).
 *   Identifiers: lowercase: 'neutral', camelCase: 'neutralColor', snake_case: 'neutral_color', ALL_CAP: 'NEUTRAL', cache key: 'color:neutral:portalId'.
 *   Model Identifier Format: 'neutral-{shade}-{hex}'.
 *   Variations and Use Cases: Synonyms: 'gray'; for cards in Trakfox.
 *   Example Usage: Styling a card in Trakfox (e.g., <div style="background-color: #E0E0E0">).
 *
 * - 'success': Positive feedback color (green).
 *   Classifications: Semantic color (success); WCAG for states.
 *   Identifiers: lowercase: 'success', camelCase: 'successColor', snake_case: 'success_color', ALL_CAP: 'SUCCESS', cache key: 'color:success:portalId'.
 *   Model Identifier Format: 'success-{shade}-{hex}'.
 *   Variations and Use Cases: For toasts in HealthOrb confirmations.
 *   Example Usage: Styling a toast in Trakfox (e.g., <div style="background-color: #81C784">).
 * 
 * - 'fraud': Indicates fraudulent activity, mapped to brightRed for high visibility.
 *   Classifications: Material Design (Red-A200), ANSI 91 (Bright Red).
 *   Identifiers: lowercase: 'fraud', camelCase: 'fraudColor', snake_case: 'fraud_color', ALL_CAP: 'FRAUD', cache key: 'color:fraud:ui'.
 *   Model Identifier Format: 'fraud-{resourceType}-{timestamp}' (e.g., 'fraud-alert-20250807').
 *   Variations and Use Cases: Used for fraud alerts in UI; in HealthOrb for security warnings; in DnDHubs for transaction flags.
 *   Example Usage: Styling a fraud alert in Trakfox (e.g., <div style="background-color: #ff5252">).
 *
 * - 'hacking': Indicates security breaches, mapped to brightRed for urgency.
 *   Classifications: Material Design (Red-A200), ANSI 91 (Bright Red).
 *   Identifiers: lowercase: 'hacking', camelCase: 'hackingColor', snake_case: 'hacking_color', ALL_CAP: 'HACKING', cache key: 'color:hacking:ui'.
 *   Model Identifier Format: 'hacking-{resourceType}-{timestamp}' (e.g., 'hacking-alert-20250807').
 *   Variations and Use Cases: Used for security breach notifications; in HealthOrb for data breach alerts; in DnDHubs for platform security.
 *   Example Usage: Styling a hacking alert in Trakfox (e.g., <div style="background-color: #ff4133">).
 *
 * - 'brutal': Indicates severe or high-impact errors, mapped to neonRed for emphasis.
 *   Classifications: Material Design (Red-A400), ANSI 31 (Red).
 *   Identifiers: lowercase: 'brutal', camelCase: 'brutalColor', snake_case: 'brutal_color', ALL_CAP: 'BRUTAL', cache key: 'color:brutal:ui'.
 *   Model Identifier Format: 'brutal-{resourceType}-{timestamp}' (e.g., 'brutal-error-20250807').
 *   Variations and Use Cases: Used for critical errors in gaming UIs; in HealthOrb for life-threatening alerts; in DnDHubs for urgent issues.
 *   Example Usage: Styling a critical error in Trakfox (e.g., <div style="background-color: #ff1744">).
 *
 * - 'critical': Indicates critical errors, mapped to errorRed for urgency.
 *   Classifications: Material Design (Red), ANSI 31 (Red).
 *   Identifiers: lowercase: 'critical', camelCase: 'criticalColor', snake_case: 'critical_color', ALL_CAP: 'CRITICAL', cache key: 'color:critical:ui'.
 *   Model Identifier Format: 'critical-{resourceType}-{timestamp}' (e.g., 'critical-alert-20250807').
 *   Variations and Use Cases: Used for critical system alerts; in HealthOrb for medical emergencies; in DnDHubs for payment failures.
 *   Example Usage: Styling a critical alert in Trakfox (e.g., <div style="background-color: #f44336">).
 *
 * - 'error': Indicates general errors, mapped to red for clarity.
 *   Classifications: Material Design (Red), ANSI 31 (Red).
 *   Identifiers: lowercase: 'error', camelCase: 'errorColor', snake_case: 'error_color', ALL_CAP: 'ERROR', cache key: 'color:error:ui'.
 *   Model Identifier Format: 'error-{resourceType}-{timestamp}' (e.g., 'error-message-20250807').
 *   Variations and Use Cases: Used for error messages; in HealthOrb for form validation errors; in DnDHubs for order issues.
 *   Example Usage: Styling an error message in Trakfox (e.g., <div style="background-color: #d32f2f">).
 *
 * - 'warn': Indicates warnings, mapped to yellow for caution.
 *   Classifications: Material Design (Yellow), ANSI 33 (Yellow).
 *   Identifiers: lowercase: 'warn', camelCase: 'warnColor', snake_case: 'warn_color', ALL_CAP: 'WARN', cache key: 'color:warn:ui'.
 *   Model Identifier Format: 'warn-{resourceType}-{timestamp}' (e.g., 'warn-alert-20250807').
 *   Variations and Use Cases: Used for warning messages; in HealthOrb for non-critical alerts; in DnDHubs for stock warnings.
 *   Example Usage: Styling a warning in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'info': Indicates informational messages, mapped to lightBlue for neutrality.
 *   Classifications: Material Design (Light Blue), ANSI 38;2;41;182;246.
 *   Identifiers: lowercase: 'info', camelCase: 'infoColor', snake_case: 'info_color', ALL_CAP: 'INFO', cache key: 'color:info:ui'.
 *   Model Identifier Format: 'info-{resourceType}-{timestamp}' (e.g., 'info-message-20250807').
 *   Variations and Use Cases: Used for informational UI elements; in HealthOrb for patient info; in DnDHubs for product details.
 *   Example Usage: Styling an info message in Trakfox (e.g., <div style="background-color: #03a9f4">).
 *
 * - 'debug': Indicates debug-level logs, mapped to grey for low priority.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'debug', camelCase: 'debugColor', snake_case: 'debug_color', ALL_CAP: 'DEBUG', cache key: 'color:debug:ui'.
 *   Model Identifier Format: 'debug-{resourceType}-{timestamp}' (e.g., 'debug-log-20250807').
 *   Variations and Use Cases: Used for debug logs in consoles; in HealthOrb for diagnostic tools; in DnDHubs for developer tools.
 *   Example Usage: Styling a debug log in Trakfox console (e.g., <span style="color: #9e9e9e">).
 *
 * - 'notice': Indicates notices, mapped to skyBlue for calm notifications.
 *   Classifications: Trakfox Custom, ANSI 38;5;81.
 *   Identifiers: lowercase: 'notice', camelCase: 'noticeColor', snake_case: 'notice_color', ALL_CAP: 'NOTICE', cache key: 'color:notice:ui'.
 *   Model Identifier Format: 'notice-{resourceType}-{timestamp}' (e.g., 'notice-message-20250807').
 *   Variations and Use Cases: Used for non-urgent notices; in HealthOrb for informational updates; in DnDHubs for community updates.
 *   Example Usage: Styling a notice in Trakfox (e.g., <div style="background-color: #22d3ee">).
 *
 * - 'fatal': Indicates system-halting errors, mapped to red for high urgency.
 *   Classifications: Material Design (Red), ANSI 31 (Red).
 *   Identifiers: lowercase: 'fatal', camelCase: 'fatalColor', snake_case: 'fatal_color', ALL_CAP: 'FATAL', cache key: 'color:fatal:ui'.
 *   Model Identifier Format: 'fatal-{resourceType}-{timestamp}' (e.g., 'fatal-error-20250807').
 *   Variations and Use Cases: Used for fatal system errors; in HealthOrb for critical failures; in DnDHubs for transaction halts.
 *   Example Usage: Styling a fatal error in Trakfox (e.g., <div style="background-color: #f44336">).
 *
 * - 'trace': Indicates trace-level logs, mapped to grey for low priority.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'trace', camelCase: 'traceColor', snake_case: 'trace_color', ALL_CAP: 'TRACE', cache key: 'color:trace:ui'.
 *   Model Identifier Format: 'trace-{resourceType}-{timestamp}' (e.g., 'trace-log-20250807').
 *   Variations and Use Cases: Used for trace logs in consoles; in HealthOrb for diagnostic tracing; in DnDHubs for debugging.
 *   Example Usage: Styling a trace log in Trakfox console (e.g., <span style="color: #9e9e9e">).
 *
 * - 'expired': Indicates expired states, mapped to grey for neutrality.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'expired', camelCase: 'expiredColor', snake_case: 'expired_color', ALL_CAP: 'EXPIRED', cache key: 'color:expired:ui'.
 *   Model Identifier Format: 'expired-{resourceType}-{timestamp}' (e.g., 'expired-session-20250807').
 *   Variations and Use Cases: Used for expired sessions or tokens; in HealthOrb for expired prescriptions; in DnDHubs for expired offers.
 *   Example Usage: Styling an expired notice in Trakfox (e.g., <div style="background-color: #9e9e9e">).
 *
 * - 'update': Indicates update notifications, mapped to cyan for dynamic updates.
 *   Classifications: Material Design (Cyan), ANSI 36 (Cyan).
 *   Identifiers: lowercase: 'update', camelCase: 'updateColor', snake_case: 'update_color', ALL_CAP: 'UPDATE', cache key: 'color:update:ui'.
 *   Model Identifier Format: 'update-{resourceType}-{timestamp}' (e.g., 'update-notice-20250807').
 *   Variations and Use Cases: Used for update notifications; in HealthOrb for system updates; in DnDHubs for product updates.
 *   Example Usage: Styling an update notice in Trakfox (e.g., <div style="background-color: #00bcd4">).
 *
 * - 'alert': Indicates general alerts, mapped to brightYellow for visibility.
 *   Classifications: Material Design (Yellow), ANSI 93 (Bright Yellow).
 *   Identifiers: lowercase: 'alert', camelCase: 'alertColor', snake_case: 'alert_color', ALL_CAP: 'ALERT', cache key: 'color:alert:ui'.
 *   Model Identifier Format: 'alert-{resourceType}-{timestamp}' (e.g., 'alert-message-20250807').
 *   Variations and Use Cases: Used for general alerts; in HealthOrb for patient alerts; in DnDHubs for promotion alerts.
 *   Example Usage: Styling an alert in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'deprecation': Indicates deprecated features, mapped to yellow for caution.
 *   Classifications: Material Design (Yellow), ANSI 33 (Yellow).
 *   Identifiers: lowercase: 'deprecation', camelCase: 'deprecationColor', snake_case: 'deprecation_color', ALL_CAP: 'DEPRECATION', cache key: 'color:deprecation:ui'.
 *   Model Identifier Format: 'deprecation-{resourceType}-{timestamp}' (e.g., 'deprecation-notice-20250807').
 *   Variations and Use Cases: Used for deprecation warnings; in HealthOrb for legacy system alerts; in DnDHubs for outdated features.
 *   Example Usage: Styling a deprecation notice in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'low': Indicates low-severity issues, mapped to lightGreen for minimal urgency.
 *   Classifications: Material Design (Light Green), ANSI 38;2;156;204;101.
 *   Identifiers: lowercase: 'low', camelCase: 'lowColor', snake_case: 'low_color', ALL_CAP: 'LOW', cache key: 'color:low:ui'.
 *   Model Identifier Format: 'low-{resourceType}-{timestamp}' (e.g., 'low-issue-20250807').
 *   Variations and Use Cases: Used for low-priority issues; in HealthOrb for minor alerts; in DnDHubs for non-urgent notifications.
 *   Example Usage: Styling a low-priority issue in Trakfox (e.g., <div style="background-color: #8bc34a">).
 *
 * - 'medium': Indicates medium-severity issues, mapped to yellow for caution.
 *   Classifications: Material Design (Yellow), ANSI 33 (Yellow).
 *   Identifiers: lowercase: 'medium', camelCase: 'mediumColor', snake_case: 'medium_color', ALL_CAP: 'MEDIUM', cache key: 'color:medium:ui'.
 *   Model Identifier Format: 'medium-{resourceType}-{timestamp}' (e.g., 'medium-issue-20250807').
 *   Variations and Use Cases: Used for medium-priority issues; in HealthOrb for moderate alerts; in DnDHubs for stock warnings.
 *   Example Usage: Styling a medium-priority issue in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'high': Indicates high-severity issues, mapped to neonRed for emphasis.
 *   Classifications: Material Design (Red-A400), ANSI 31 (Red).
 *   Identifiers: lowercase: 'high', camelCase: 'highColor', snake_case: 'high_color', ALL_CAP: 'HIGH', cache key: 'color:high:ui'.
 *   Model Identifier Format: 'high-{resourceType}-{timestamp}' (e.g., 'high-issue-20250807').
 *   Variations and Use Cases: Used for high-priority issues; in HealthOrb for urgent alerts; in DnDHubs for critical promotions.
 *   Example Usage: Styling a high-priority issue in Trakfox (e.g., <div style="background-color: #ff1744">).
 *
 * - 'experimental': Indicates experimental features, mapped to purple for innovation.
 *   Classifications: Material Design (Purple), ANSI 35 (Magenta).
 *   Identifiers: lowercase: 'experimental', camelCase: 'experimentalColor', snake_case: 'experimental_color', ALL_CAP: 'EXPERIMENTAL', cache key: 'color:experimental:ui'.
 *   Model Identifier Format: 'experimental-{resourceType}-{timestamp}' (e.g., 'experimental-feature-20250807').
 *   Variations and Use Cases: Used for experimental UI elements; in HealthOrb for beta features; in DnDHubs for new product trials.
 *   Example Usage: Styling an experimental feature in Trakfox (e.g., <div style="background-color: #9c27b0">).
 *
 * - 'compliance': Indicates compliance-related issues, mapped to teal for regulatory context.
 *   Classifications: Material Design (Teal), ANSI 38;5;44.
 *   Identifiers: lowercase: 'compliance', camelCase: 'complianceColor', snake_case: 'compliance_color', ALL_CAP: 'COMPLIANCE', cache key: 'color:compliance:ui'.
 *   Model Identifier Format: 'compliance-{resourceType}-{timestamp}' (e.g., 'compliance-report-20250807').
 *   Variations and Use Cases: Used for compliance alerts; in HealthOrb for regulatory reports; in DnDHubs for policy adherence.
 *   Example Usage: Styling a compliance report in Trakfox (e.g., <div style="background-color: #009688">).
 *
 * - 'maintenance': Indicates maintenance tasks, mapped to grey for neutrality.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'maintenance', camelCase: 'maintenanceColor', snake_case: 'maintenance_color', ALL_CAP: 'MAINTENANCE', cache key: 'color:maintenance:ui'.
 *   Model Identifier Format: 'maintenance-{resourceType}-{timestamp}' (e.g., 'maintenance-task-20250807').
 *   Variations and Use Cases: Used for maintenance notifications; in HealthOrb for system upkeep; in DnDHubs for platform maintenance.
 *   Example Usage: Styling a maintenance notice in Trakfox (e.g., <div style="background-color: #9e9e9e">).
 *
 * - 'verbose': Indicates verbose notifications, mapped to grey for low priority.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'verbose', camelCase: 'verboseColor', snake_case: 'verbose_color', ALL_CAP: 'VERBOSE', cache key: 'color:verbose:ui'.
 *   Model Identifier Format: 'verbose-{resourceType}-{timestamp}' (e.g., 'verbose-notice-20250807').
 *   Variations and Use Cases: Used for verbose notifications in UI; in HealthOrb for detailed status updates; in DnDHubs for extended user feedback.
 *   Example Usage: Styling a verbose notice in Trakfox (e.g., <div style="background-color: #9e9e9e">).
 *
 * - 'audit': Indicates audit-related notifications, mapped to teal for regulatory context.
 *   Classifications: Material Design (Teal), ANSI 38;5;44.
 *   Identifiers: lowercase: 'audit', camelCase: 'auditColor', snake_case: 'audit_color', ALL_CAP: 'AUDIT', cache key: 'color:audit:ui'.
 *   Model Identifier Format: 'audit-{resourceType}-{timestamp}' (e.g., 'audit-report-20250807').
 *   Variations and Use Cases: Used for audit notifications; in HealthOrb for compliance tracking; in DnDHubs for transaction audits.
 *   Example Usage: Styling an audit notification in Trakfox (e.g., <div style="background-color: #009688">).
 *
 * - 'silly': Indicates low-priority or humorous notifications, mapped to pink for playfulness.
 *   Classifications: Material Design (Pink), ANSI 38;2;236;64;122.
 *   Identifiers: lowercase: 'silly', camelCase: 'sillyColor', snake_case: 'silly_color', ALL_CAP: 'SILLY', cache key: 'color:silly:ui'.
 *   Model Identifier Format: 'silly-{resourceType}-{timestamp}' (e.g., 'silly-notice-20250807').
 *   Variations and Use Cases: Used for humorous notifications; in HealthOrb for light-hearted alerts; in DnDHubs for playful user feedback.
 *   Example Usage: Styling a silly notification in Trakfox (e.g., <div style="background-color: #e91e63">).
 *
 * - 'performance': Indicates performance-related notifications, mapped to cyan for dynamic updates.
 *   Classifications: Material Design (Cyan), ANSI 36 (Cyan).
 *   Identifiers: lowercase: 'performance', camelCase: 'performanceColor', snake_case: 'performance_color', ALL_CAP: 'PERFORMANCE', cache key: 'color:performance:ui'.
 *   Model Identifier Format: 'performance-{resourceType}-{timestamp}' (e.g., 'performance-notice-20250807').
 *   Variations and Use Cases: Used for performance notifications; in HealthOrb for system performance alerts; in DnDHubs for platform analytics.
 *   Example Usage: Styling a performance notification in Trakfox (e.g., <div style="background-color: #00bcd4">).
 *
 * - 'security': Indicates security-related notifications, mapped to brightRed for urgency.
 *   Classifications: Material Design (Red-A200), ANSI 91 (Bright Red).
 *   Identifiers: lowercase: 'security', camelCase: 'securityColor', snake_case: 'security_color', ALL_CAP: 'SECURITY', cache key: 'color:security:ui'.
 *   Model Identifier Format: 'security-{resourceType}-{timestamp}' (e.g., 'security-alert-20250807').
 *   Variations and Use Cases: Used for security notifications; in HealthOrb for data breach alerts; in DnDHubs for platform security.
 *   Example Usage: Styling a security alert in Trakfox (e.g., <div style="background-color: #ff5252">).
 *
 * - 'metric': Indicates metric-related notifications, mapped to lightBlue for informational context.
 *   Classifications: Material Design (Light Blue), ANSI 38;2;41;182;246.
 *   Identifiers: lowercase: 'metric', camelCase: 'metricColor', snake_case: 'metric_color', ALL_CAP: 'METRIC', cache key: 'color:metric:ui'.
 *   Model Identifier Format: 'metric-{resourceType}-{timestamp}' (e.g., 'metric-notice-20250807').
 *   Variations and Use Cases: Used for metric notifications; in HealthOrb for health metrics; in DnDHubs for sales metrics.
 *   Example Usage: Styling a metric notification in Trakfox (e.g., <div style="background-color: #03a9f4">).
 *
 * - 'event': Indicates event-related notifications, mapped to skyBlue for neutrality.
 *   Classifications: Trakfox Custom, ANSI 38;5;81.
 *   Identifiers: lowercase: 'event', camelCase: 'eventColor', snake_case: 'event_color', ALL_CAP: 'EVENT', cache key: 'color:event:ui'.
 *   Model Identifier Format: 'event-{resourceType}-{timestamp}' (e.g., 'event-notice-20250807').
 *   Variations and Use Cases: Used for event notifications; in HealthOrb for patient events; in DnDHubs for user interactions.
 *   Example Usage: Styling an event notification in Trakfox (e.g., <div style="background-color: #22d3ee">).
 *
 * - 'system': Indicates system-related notifications, mapped to grey for neutrality.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'system', camelCase: 'systemColor', snake_case: 'system_color', ALL_CAP: 'SYSTEM', cache key: 'color:system:ui'.
 *   Model Identifier Format: 'system-{resourceType}-{timestamp}' (e.g., 'system-notice-20250807').
 *   Variations and Use Cases: Used for system notifications; in HealthOrb for system diagnostics; in DnDHubs for platform monitoring.
 *   Example Usage: Styling a system notification in Trakfox (e.g., <div style="background-color: #9e9e9e">).
 */
export type ColorNameTaxonomy = CoreColorNameTaxonomy | CustomColorName;
export type CoreColorNameTaxonomy = 'amber' | 'blue' | 'blueGrey' | 'brown' | 'cyan' | 'deepOrange' | 'deepPurple' | 'domsDark' | 'green' | 'grey' | 'indigo' | 'lightBlue' | 'lightGreen' | 'lime' | 'orange' | 'pink' | 'primary' | 'purple' | 'red' | 'yellow' | 'secondary' | 'skyBlue' | 'teal' | 'black' | 'white' | 'magenta' | 'brightBlack' | 'brightRed' | 'brightGreen' | 'brightYellow' | 'brightBlue' | 'brightMagenta' | 'brightCyan' | 'brightWhite' | 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgGrey' | 'bgOrange' | 'bgBlackBright' | 'bgRedBright' | 'bgGreenBright' | 'bgYellowBright' | 'bgBlueBright' | 'bgMagentaBright' | 'bgCyanBright' | 'bgWhiteBright' | 'darkRed' | 'lightRed' | 'navyBlue' | 'royalBlue' | 'neonRed' | 'electricBlue' | 'primary' | "secondary" | "accent" | "neutral" | "success" | 'fraud' | 'hacking' | 'brutal' | 'critical' | 'error' | 'warn' | 'info' | 'debug' | 'notice' | 'fatal' | 'trace' | 'expired' | 'update' | 'alert' | 'deprecation' | 'low' | 'medium' | 'high' | 'experimental' | 'compliance' | 'maintenance' | 'verbose' | 'audit' | 'silly' | 'performance' | 'security' | 'metric' | 'event' | 'system';
export type CustomColorName = string & { __name?: 'CustomColorName' };