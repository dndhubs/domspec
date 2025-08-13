/**
 * Union type representing IDEPlatformTaxonomy in the Trakfox ecosystem.
 * Defines standardized IDE platform names for development environments, supporting terminal detection and UI customization in Trakfox, HealthOrb, and DnDHubs.
 * Aligns with terminal detection standards and environment-specific configurations.
 *
 * - 'vscode': Visual Studio Code, a popular source-code editor with rich extension support.
 *   Classifications: Semantic IDE (vscode); supports truecolor, Unicode, hyperlinks.
 *   Identifiers: lowercase: 'vscode', camelCase: 'vscodeIDE', snake_case: 'vscode_ide', ALL_CAP: 'VSCODE', cache key: 'ide:vscode:platform'.
 *   Model Identifier Format: 'vscode-{resourceType}-{timestamp}' (e.g., 'vscode-terminal-20250807').
 *   Variations and Use Cases: Used for terminal detection in Trakfox CLI; in HealthOrb for developer dashboards; in DnDHubs for plugin integrations.
 *   Example Usage: Detecting VSCode in terminal configuration (e.g., `process.env.TERM_PROGRAM === 'vscode'`).
 *   @example 'vscode'
 *
 * - 'jetbrains': JetBrains IDE family (generic identifier for IntelliJ-based IDEs).
 *   Classifications: Semantic IDE (jetbrains); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'jetbrains', camelCase: 'jetbrainsIDE', snake_case: 'jetbrains_ide', ALL_CAP: 'JETBRAINS', cache key: 'ide:jetbrains:platform'.
 *   Model Identifier Format: 'jetbrains-{resourceType}-{timestamp}' (e.g., 'jetbrains-config-20250807').
 *   Variations and Use Cases: Used for JetBrains IDE detection in Trakfox; in HealthOrb for developer tools; in DnDHubs for IDE-specific themes.
 *   Example Usage: Detecting JetBrains environment (e.g., `process.env.INTELLIJ_ENVIRONMENT_READER`).
 *   @example 'jetbrains'
 *
 * - 'sublime': Sublime Text, a lightweight and customizable text editor.
 *   Classifications: Semantic IDE (sublime); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'sublime', camelCase: 'sublimeIDE', snake_case: 'sublime_ide', ALL_CAP: 'SUBLIME', cache key: 'ide:sublime:platform'.
 *   Model Identifier Format: 'sublime-{resourceType}-{timestamp}' (e.g., 'sublime-config-20250807').
 *   Variations and Use Cases: Used for Sublime Text detection in Trakfox CLI; in HealthOrb for lightweight editing; in DnDHubs for quick scripts.
 *   Example Usage: Detecting Sublime Text (e.g., `process.env.TERMINUS_SUBLIME`).
 *   @example 'sublime'
 *
 * - 'vim': Vim, a highly configurable text editor for efficient editing.
 *   Classifications: Semantic IDE (vim); supports 256 colors, Unicode.
 *   Identifiers: lowercase: 'vim', camelCase: 'vimIDE', snake_case: 'vim_ide', ALL_CAP: 'VIM', cache key: 'ide:vim:platform'.
 *   Model Identifier Format: 'vim-{resourceType}-{timestamp}' (e.g., 'vim-terminal-20250807').
 *   Variations and Use Cases: Used for Vim detection in Trakfox CLI; in HealthOrb for terminal-based editing; in DnDHubs for script automation.
 *   Example Usage: Detecting Vim environment (e.g., `process.env.VIM`).
 *   @example 'vim'
 *
 * - 'emacs': Emacs, an extensible, customizable text editor.
 *   Classifications: Semantic IDE (emacs); supports 256 colors, Unicode.
 *   Identifiers: lowercase: 'emacs', camelCase: 'emacsIDE', snake_case: 'emacs_ide', ALL_CAP: 'EMACS', cache key: 'ide:emacs:platform'.
 *   Model Identifier Format: 'emacs-{resourceType}-{timestamp}' (e.g., 'emacs-config-20250807').
 *   Variations and Use Cases: Used for Emacs detection in Trakfox CLI; in HealthOrb for custom workflows; in DnDHubs for advanced scripting.
 *   Example Usage: Detecting Emacs environment (e.g., `process.env.INSIDE_EMACS`).
 *   @example 'emacs'
 *
 * - 'intellij': IntelliJ IDEA, a powerful IDE for Java and other languages.
 *   Classifications: Semantic IDE (intellij); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'intellij', camelCase: 'intellijIDE', snake_case: 'intellij_ide', ALL_CAP: 'INTELLIJ', cache key: 'ide:intellij:platform'.
 *   Model Identifier Format: 'intellij-{resourceType}-{timestamp}' (e.g., 'intellij-config-20250807').
 *   Variations and Use Cases: Used for IntelliJ detection in Trakfox; in HealthOrb for Java-based tools; in DnDHubs for backend development.
 *   Example Usage: Detecting IntelliJ environment (e.g., `process.env.INTELLIJ_ENVIRONMENT_READER`).
 *   @example 'intellij'
 *
 * - 'pycharm': PyCharm, a Python-specific IDE from JetBrains.
 *   Classifications: Semantic IDE (pycharm); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'pycharm', camelCase: 'pycharmIDE', snake_case: 'pycharm_ide', ALL_CAP: 'PYCHARM', cache key: 'ide:pycharm:platform'.
 *   Model Identifier Format: 'pycharm-{resourceType}-{timestamp}' (e.g., 'pycharm-config-20250807').
 *   Variations and Use Cases: Used for PyCharm detection in Trakfox; in HealthOrb for Python analytics; in DnDHubs for Python-based plugins.
 *   Example Usage: Detecting PyCharm environment (e.g., `process.env.INTELLIJ_ENVIRONMENT_READER`).
 *   @example 'pycharm'
 *
 * - 'webstorm': WebStorm, a JavaScript/TypeScript IDE from JetBrains.
 *   Classifications: Semantic IDE (webstorm); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'webstorm', camelCase: 'webstormIDE', snake_case: 'webstorm_ide', ALL_CAP: 'WEBSTORM', cache key: 'ide:webstorm:platform'.
 *   Model Identifier Format: 'webstorm-{resourceType}-{timestamp}' (e.g., 'webstorm-config-20250807').
 *   Variations and Use Cases: Used for WebStorm detection in Trakfox; in HealthOrb for web-based dashboards; in DnDHubs for frontend development.
 *   Example Usage: Detecting WebStorm environment (e.g., `process.env.INTELLIJ_ENVIRONMENT_READER`).
 *   @example 'webstorm'
 *
 * - 'clion': CLion, a C/C++ IDE from JetBrains.
 *   Classifications: Semantic IDE (clion); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'clion', camelCase: 'clionIDE', snake_case: 'clion_ide', ALL_CAP: 'CLION', cache key: 'ide:clion:platform'.
 *   Model Identifier Format: 'clion-{resourceType}-{timestamp}' (e.g., 'clion-config-20250807').
 *   Variations and Use Cases: Used for CLion detection in Trakfox; in HealthOrb for native integrations; in DnDHubs for low-level plugins.
 *   Example Usage: Detecting CLion environment (e.g., `process.env.INTELLIJ_ENVIRONMENT_READER`).
 *   @example 'clion'
 *
 * - 'phpstorm': PhpStorm, a PHP IDE from JetBrains.
 *   Classifications: Semantic IDE (phpstorm); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'phpstorm', camelCase: 'phpstormIDE', snake_case: 'phpstorm_ide', ALL_CAP: 'PHPSTORM', cache key: 'ide:phpstorm:platform'.
 *   Model Identifier Format: 'phpstorm-{resourceType}-{timestamp}' (e.g., 'phpstorm-config-20250807').
 *   Variations and Use Cases: Used for PhpStorm detection in Trakfox; in HealthOrb for PHP-based backends; in DnDHubs for PHP integrations.
 *   Example Usage: Detecting PhpStorm environment (e.g., `process.env.INTELLIJ_ENVIRONMENT_READER`).
 *   @example 'phpstorm'
 *
 * - 'rider': Rider, a .NET IDE from JetBrains.
 *   Classifications: Semantic IDE (rider); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'rider', camelCase: 'riderIDE', snake_case: 'rider_ide', ALL_CAP: 'RIDER', cache key: 'ide:rider:platform'.
 *   Model Identifier Format: 'rider-{resourceType}-{timestamp}' (e.g., 'rider-config-20250807').
 *   Variations and Use Cases: Used for Rider detection in Trakfox; in HealthOrb for .NET integrations; in DnDHubs for C# plugins.
 *   Example Usage: Detecting Rider environment (e.g., `process.env.INTELLIJ_ENVIRONMENT_READER`).
 *   @example 'rider'
 *
 * - 'androidStudio': Android Studio, an IDE for Android development.
 *   Classifications: Semantic IDE (androidstudio); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'androidstudio', camelCase: 'androidStudioIDE', snake_case: 'android_studio_ide', ALL_CAP: 'ANDROID_STUDIO', cache key: 'ide:androidstudio:platform'.
 *   Model Identifier Format: 'androidstudio-{resourceType}-{timestamp}' (e.g., 'androidstudio-config-20250807').
 *   Variations and Use Cases: Used for Android Studio detection in Trakfox; in HealthOrb for mobile health apps; in DnDHubs for mobile integrations.
 *   Example Usage: Detecting Android Studio environment (e.g., `process.env.INTELLIJ_ENVIRONMENT_READER`).
 *   @example 'androidstudio'
 *
 * - 'xcode': Xcode, Apple’s IDE for macOS and iOS development.
 *   Classifications: Semantic IDE (xcode); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'xcode', camelCase: 'xcodeIDE', snake_case: 'xcode_ide', ALL_CAP: 'XCODE', cache key: 'ide:xcode:platform'.
 *   Model Identifier Format: 'xcode-{resourceType}-{timestamp}' (e.g., 'xcode-config-20250807').
 *   Variations and Use Cases: Used for Xcode detection in Trakfox; in HealthOrb for iOS health apps; in DnDHubs for Apple ecosystem integrations.
 *   Example Usage: Detecting Xcode environment (e.g., `process.env.TERM_PROGRAM === 'Apple_Terminal'`).
 *   @example 'xcode'
 *
 * - 'eclipse': Eclipse, an open-source IDE for Java and other languages.
 *   Classifications: Semantic IDE (eclipse); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'eclipse', camelCase: 'eclipseIDE', snake_case: 'eclipse_ide', ALL_CAP: 'ECLIPSE', cache key: 'ide:eclipse:platform'.
 *   Model Identifier Format: 'eclipse-{resourceType}-{timestamp}' (e.g., 'eclipse-config-20250807').
 *   Variations and Use Cases: Used for Eclipse detection in Trakfox; in HealthOrb for Java-based tools; in DnDHubs for enterprise integrations.
 *   Example Usage: Detecting Eclipse environment (e.g., `process.env.ECLIPSE_ENV`).
 *   @example 'eclipse'
 *
 * - 'netbeans': NetBeans, an open-source IDE for Java and other languages.
 *   Classifications: Semantic IDE (netbeans); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'netbeans', camelCase: 'netbeansIDE', snake_case: 'netbeans_ide', ALL_CAP: 'NETBEANS', cache key: 'ide:netbeans:platform'.
 *   Model Identifier Format: 'netbeans-{resourceType}-{timestamp}' (e.g., 'netbeans-config-20250807').
 *   Variations and Use Cases: Used for NetBeans detection in Trakfox; in HealthOrb for Java-based analytics; in DnDHubs for legacy integrations.
 *   Example Usage: Detecting NetBeans environment (e.g., `process.env.NETBEANS_ENV`).
 *   @example 'netbeans'
 *
 * - 'visualStudio': Visual Studio, Microsoft’s IDE for multiple languages.
 *   Classifications: Semantic IDE (visualstudio); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'visualstudio', camelCase: 'visualStudioIDE', snake_case: 'visual_studio_ide', ALL_CAP: 'VISUAL_STUDIO', cache key: 'ide:visualstudio:platform'.
 *   Model Identifier Format: 'visualstudio-{resourceType}-{timestamp}' (e.g., 'visualstudio-config-20250807').
 *   Variations and Use Cases: Used for Visual Studio detection in Trakfox; in HealthOrb for Windows-based tools; in DnDHubs for .NET integrations.
 *   Example Usage: Detecting Visual Studio environment (e.g., `process.env.VS_ENV`).
 *   @example 'visualstudio'
 *
 * - 'idle': IDLE, Python’s integrated development and learning environment.
 *   Classifications: Semantic IDE (idle); supports basic colors, Unicode.
 *   Identifiers: lowercase: 'idle', camelCase: 'idleIDE', snake_case: 'idle_ide', ALL_CAP: 'IDLE', cache key: 'ide:idle:platform'.
 *   Model Identifier Format: 'idle-{resourceType}-{timestamp}' (e.g., 'idle-config-20250807').
 *   Variations and Use Cases: Used for IDLE detection in Trakfox; in HealthOrb for Python learning tools; in DnDHubs for Python scripting.
 *   Example Usage: Detecting IDLE environment (e.g., `process.env.PYTHON_IDLE`).
 *   @example 'idle'
 *
 * - 'jupyter': Jupyter Notebook, an interactive web-based IDE for data science.
 *   Classifications: Semantic IDE (jupyter); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'jupyter', camelCase: 'jupyterIDE', snake_case: 'jupyter_ide', ALL_CAP: 'JUPYTER', cache key: 'ide:jupyter:platform'.
 *   Model Identifier Format: 'jupyter-{resourceType}-{timestamp}' (e.g., 'jupyter-config-20250807').
 *   Variations and Use Cases: Used for Jupyter detection in Trakfox; in HealthOrb for data analysis; in DnDHubs for data-driven plugins.
 *   Example Usage: Detecting Jupyter environment (e.g., `process.env.JUPYTER_ENV`).
 *   @example 'jupyter'
 *
 * - 'atom': Atom, a hackable text editor by GitHub.
 *   Classifications: Semantic IDE (atom); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'atom', camelCase: 'atomIDE', snake_case: 'atom_ide', ALL_CAP: 'ATOM', cache key: 'ide:atom:platform'.
 *   Model Identifier Format: 'atom-{resourceType}-{timestamp}' (e.g., 'atom-config-20250807').
 *   Variations and Use Cases: Used for Atom detection in Trakfox; in HealthOrb for lightweight editing; in DnDHubs for plugin development.
 *   Example Usage: Detecting Atom environment (e.g., `process.env.ATOM_ENV`).
 *   @example 'atom'
 *
 * - 'notepad++': Notepad++, a lightweight text editor for Windows.
 *   Classifications: Semantic IDE (notepad++); supports basic colors, Unicode.
 *   Identifiers: lowercase: 'notepad++', camelCase: 'notepadPlusPlusIDE', snake_case: 'notepad_plus_plus_ide', ALL_CAP: 'NOTEPAD_PLUS_PLUS', cache key: 'ide:notepadplusplus:platform'.
 *   Model Identifier Format: 'notepadplusplus-{resourceType}-{timestamp}' (e.g., 'notepadplusplus-config-20250807').
 *   Variations and Use Cases: Used for Notepad++ detection in Trakfox; in HealthOrb for quick edits; in DnDHubs for script editing.
 *   Example Usage: Detecting Notepad++ environment (e.g., `process.env.NOTEPAD_PLUS_PLUS_ENV`).
 *   @example 'notepad++'
 *
 * - 'nano': Nano, a simple terminal-based text editor.
 *   Classifications: Semantic IDE (nano); supports basic colors, Unicode.
 *   Identifiers: lowercase: 'nano', camelCase: 'nanoIDE', snake_case: 'nano_ide', ALL_CAP: 'NANO', cache key: 'ide:nano:platform'.
 *   Model Identifier Format: 'nano-{resourceType}-{timestamp}' (e.g., 'nano-config-20250807').
 *   Variations and Use Cases: Used for Nano detection in Trakfox CLI; in HealthOrb for terminal edits; in DnDHubs for quick script fixes.
 *   Example Usage: Detecting Nano environment (e.g., `process.env.NANO_ENV`).
 *   @example 'nano'
 *
 * - 'helix': Helix, a modern terminal-based text editor with modal editing.
 *   Classifications: Semantic IDE (helix); supports truecolor, Unicode.
 *   Identifiers: lowercase: 'helix', camelCase: 'helixIDE', snake_case: 'helix_ide', ALL_CAP: 'HELIX', cache key: 'ide:helix:platform'.
 *   Model Identifier Format: 'helix-{resourceType}-{timestamp}' (e.g., 'helix-config-20250807').
 *   Variations and Use Cases: Used for Helix detection in Trakfox CLI; in HealthOrb for modern terminal editing; in DnDHubs for efficient script editing.
 *   Example Usage: Detecting Helix environment (e.g., `process.env.HELIX_ENV`).
 *   @example 'helix'
 */
export type IDEPlatformTaxonomy = 'vscode' | 'jetbrains' | 'sublime' | 'vim' | 'emacs' | 'intellij' | 'pycharm' | 'webstorm' | 'clion' | 'phpstorm' | 'rider' | 'androidStudio' | 'xcode' | 'eclipse' | 'netbeans' | 'visualStudio' | 'idle' | 'jupyter' | 'atom' | 'notepad++' | 'nano' | 'helix';