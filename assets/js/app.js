"use strict";

const pageOrder = ["passwords", "mfa", "phishing", "links", "footprint", "permissions", "cloud", "ai", "networks", "response"];

const files = {
  home: "index.html",
  passwords: "strong-passwords.html",
  mfa: "multifactor-authentication.html",
  phishing: "phishing-smishing.html",
  links: "malicious-links.html",
  footprint: "digital-footprint.html",
  permissions: "data-permissions.html",
  cloud: "secure-cloud.html",
  ai: "generative-ai.html",
  networks: "devices-networks.html",
  response: "incident-response.html",
  credits: "credits.html"
};

const ui = {
  es: {
    subtitle: "Seguridad digital para la vida universitaria",
    menu: "Contenido",
    close: "Cerrar menú",
    modules: "Módulos",
    home: "Inicio",
    credits: "Créditos y referencias",
    start: "Comenzar aprendizaje",
    explore: "Explorar los módulos",
    module: "Módulo",
    screen: "Pantalla",
    of: "de",
    objective: "Objetivo de aprendizaje",
    essentials: "Ideas esenciales",
    activity: "Actividad interactiva",
    check: "Comprobar respuesta",
    retry: "Reintentar",
    previous: "Anterior",
    next: "Siguiente",
    source: "Fuente institucional",
    correct: "¡Muy bien! La respuesta aplica las prácticas recomendadas.",
    incorrect: "Todavía hay una opción por revisar. Consulta las ideas esenciales e inténtalo nuevamente.",
    reveal: "Selecciona una tarjeta para descubrir la recomendación.",
    moveUp: "Mover hacia arriba",
    moveDown: "Mover hacia abajo",
    footer: "Recurso educativo desarrollado para Aplicaciones Multimedia - UNAD",
    rights: "Contenido educativo con fuentes verificables"
  },
  en: {
    subtitle: "Digital security for university life",
    menu: "Contents",
    close: "Close menu",
    modules: "Modules",
    home: "Home",
    credits: "Credits and references",
    start: "Start learning",
    explore: "Explore the modules",
    module: "Module",
    screen: "Screen",
    of: "of",
    objective: "Learning objective",
    essentials: "Essential ideas",
    activity: "Interactive activity",
    check: "Check answer",
    retry: "Try again",
    previous: "Previous",
    next: "Next",
    source: "Institutional source",
    correct: "Great job! Your answer applies the recommended practices.",
    incorrect: "One choice still needs review. Read the essential ideas and try again.",
    reveal: "Select a card to discover the recommendation.",
    moveUp: "Move up",
    moveDown: "Move down",
    footer: "Educational resource developed for Multimedia Applications - UNAD",
    rights: "Educational content supported by verified sources"
  }
};

const modules = [
  {
    number: 1,
    title: { es: "Identidad digital", en: "Digital Identity" },
    description: { es: "Protege tus cuentas con credenciales resistentes y autenticación adicional.", en: "Protect your accounts with resilient credentials and additional authentication." },
    image: "assets/images/digital-identity.webp",
    pages: ["passwords", "mfa"]
  },
  {
    number: 2,
    title: { es: "Ingeniería social", en: "Social Engineering" },
    description: { es: "Reconoce mensajes, enlaces y archivos diseñados para engañarte.", en: "Recognize messages, links, and files designed to deceive you." },
    image: "assets/images/social-engineering.webp",
    pages: ["phishing", "links"]
  },
  {
    number: 3,
    title: { es: "Protección de la privacidad", en: "Privacy Protection" },
    description: { es: "Reduce tu exposición y controla el acceso a tus datos personales.", en: "Reduce your exposure and control access to your personal data." },
    image: "assets/images/privacy.webp",
    pages: ["footprint", "permissions"]
  },
  {
    number: 4,
    title: { es: "Nube e inteligencia artificial", en: "Cloud and Artificial Intelligence" },
    description: { es: "Comparte información con criterio y utiliza la IA de manera responsable.", en: "Share information carefully and use AI responsibly." },
    image: "assets/images/cloud-ai.webp",
    pages: ["cloud", "ai"]
  },
  {
    number: 5,
    title: { es: "Uso seguro y respuesta", en: "Safe Use and Response" },
    description: { es: "Protege tus dispositivos y actúa correctamente cuando algo sale mal.", en: "Protect your devices and respond correctly when something goes wrong." },
    image: "assets/images/devices-response.webp",
    pages: ["networks", "response"]
  }
];

const lessons = {
  passwords: {
    module: 1,
    title: { es: "Contraseñas seguras", en: "Strong Passwords" },
    summary: { es: "Una contraseña larga, única y administrada correctamente disminuye el riesgo de que una filtración comprometa varias cuentas.", en: "A long, unique, and properly managed password reduces the risk that one breach will compromise several accounts." },
    image: "assets/images/digital-identity.webp",
    alt: { es: "Estudiante protegida por un escudo digital mientras utiliza un computador", en: "Student protected by a digital shield while using a computer" },
    objective: { es: "Reconocer las características de una credencial resistente y aplicar prácticas seguras para almacenarla.", en: "Recognize the characteristics of a resilient credential and apply safe storage practices." },
    concepts: [
      { title: { es: "Longitud y singularidad", en: "Length and uniqueness" }, body: { es: "Prioriza contraseñas o frases de paso largas. Cada cuenta debe tener una diferente para evitar que una filtración abra la puerta a otros servicios.", en: "Prioritize long passwords or passphrases. Every account needs a different one so that one breach cannot unlock other services." } },
      { title: { es: "Gestor de contraseñas", en: "Password manager" }, body: { es: "Un gestor confiable puede generar y guardar credenciales únicas. Solo necesitas proteger muy bien su contraseña maestra y activar MFA.", en: "A trusted manager can generate and store unique credentials. Protect its master password carefully and enable MFA." } }
    ],
    tips: {
      es: ["Utiliza 15 o más caracteres cuando el servicio lo permita.", "Evita datos personales, patrones y contraseñas reutilizadas.", "Cambia una contraseña inmediatamente si sospechas que fue comprometida."],
      en: ["Use 15 or more characters when the service allows it.", "Avoid personal data, patterns, and reused passwords.", "Change a password immediately if you suspect compromise."]
    },
    source: { name: "NIST SP 800-63B-4", url: "https://csrc.nist.gov/pubs/sp/800/63/b/4/final" },
    activity: {
      type: "multi",
      prompt: { es: "Selecciona todas las prácticas que fortalecen una contraseña.", en: "Select every practice that strengthens password security." },
      options: [
        { label: { es: "Crear una frase larga y única", en: "Create a long, unique passphrase" }, correct: true },
        { label: { es: "Reutilizarla en el correo y las redes sociales", en: "Reuse it for email and social media" }, correct: false },
        { label: { es: "Guardarla en un gestor confiable", en: "Store it in a trusted password manager" }, correct: true },
        { label: { es: "Compartirla por mensajería cuando alguien la solicite", en: "Share it by message when someone asks" }, correct: false }
      ]
    }
  },
  mfa: {
    module: 1,
    title: { es: "Autenticación multifactor", en: "Multi-Factor Authentication" },
    summary: { es: "MFA exige más de una prueba de identidad y dificulta el acceso de un atacante incluso cuando conoce la contraseña.", en: "MFA requires more than one identity proof and makes access harder for an attacker even when the password is known." },
    image: "assets/images/digital-identity.webp",
    alt: { es: "Escudo digital con contraseña, huella y verificación adicional", en: "Digital shield with password, fingerprint, and additional verification" },
    objective: { es: "Comprender por qué MFA protege las cuentas y distinguir los métodos más resistentes al phishing.", en: "Understand how MFA protects accounts and distinguish methods that better resist phishing." },
    concepts: [
      { title: { es: "Factores diferentes", en: "Different factors" }, body: { es: "MFA combina algo que sabes, algo que tienes o algo que eres. Dos pasos basados únicamente en conocimiento no ofrecen la misma protección.", en: "MFA combines something you know, something you have, or something you are. Two knowledge-only steps do not provide the same protection." } },
      { title: { es: "Métodos resistentes al phishing", en: "Phishing-resistant methods" }, body: { es: "Llaves de seguridad y passkeys verifican el servicio legítimo. Los códigos por SMS ayudan, pero son menos resistentes frente a ciertos ataques.", en: "Security keys and passkeys verify the legitimate service. SMS codes help, but they are less resistant to some attacks." } }
    ],
    tips: { es: ["Activa MFA primero en correo, banca y cuentas académicas.", "Nunca apruebes una solicitud que no hayas iniciado.", "Guarda los códigos de recuperación en un lugar protegido."], en: ["Enable MFA first for email, banking, and academic accounts.", "Never approve a request you did not initiate.", "Keep recovery codes in a protected place."] },
    source: { name: "CISA - Require Multifactor Authentication", url: "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication" },
    activity: {
      type: "quiz",
      prompt: { es: "¿Cuál opción ofrece mejor resistencia frente al phishing?", en: "Which option offers better resistance to phishing?" },
      options: [
        { label: { es: "Pregunta secreta", en: "Security question" }, correct: false },
        { label: { es: "Código enviado por correo", en: "Code sent by email" }, correct: false },
        { label: { es: "Passkey o llave de seguridad", en: "Passkey or security key" }, correct: true },
        { label: { es: "Una segunda contraseña", en: "A second password" }, correct: false }
      ]
    }
  },
  phishing: {
    module: 2,
    title: { es: "Phishing y smishing", en: "Phishing and Smishing" },
    summary: { es: "Los atacantes imitan instituciones y explotan la urgencia para lograr que la víctima entregue datos, dinero o acceso.", en: "Attackers imitate institutions and exploit urgency to make victims surrender data, money, or access." },
    image: "assets/images/social-engineering.webp",
    alt: { es: "Estudiante analizando un correo sospechoso y señales de advertencia", en: "Student examining a suspicious email and warning signs" },
    objective: { es: "Identificar señales comunes de phishing por correo y smishing mediante mensajes de texto.", en: "Identify common signs of email phishing and text-message smishing." },
    concepts: [
      { title: { es: "Señales de alerta", en: "Warning signs" }, body: { es: "Desconfía de la presión por actuar, las solicitudes de credenciales, los remitentes extraños, los errores y las ofertas demasiado buenas para ser ciertas.", en: "Question pressure to act, credential requests, unusual senders, errors, and offers that seem too good to be true." } },
      { title: { es: "Verificación independiente", en: "Independent verification" }, body: { es: "No respondas ni utilices los datos del mensaje sospechoso. Contacta a la entidad desde su aplicación, sitio oficial o número conocido.", en: "Do not reply or use contact details in a suspicious message. Reach the organization through its official app, website, or a known number." } }
    ],
    tips: { es: ["Detente antes de hacer clic.", "Revisa el dominio completo del remitente.", "Reporta el mensaje mediante los canales institucionales."], en: ["Pause before clicking.", "Review the sender's complete domain.", "Report the message through institutional channels."] },
    source: { name: "CISA - Secure Our World", url: "https://www.cisa.gov/secure-our-world" },
    activity: {
      type: "multi",
      prompt: { es: "Recibes: “Tu cuenta universitaria será cerrada en 30 minutos. Ingresa ahora en un enlace acortado”. ¿Qué señales son sospechosas?", en: "You receive: “Your university account will close in 30 minutes. Sign in now through a shortened link.” Which signs are suspicious?" },
      options: [
        { label: { es: "Presión y urgencia", en: "Pressure and urgency" }, correct: true },
        { label: { es: "Enlace acortado inesperado", en: "Unexpected shortened link" }, correct: true },
        { label: { es: "Uso de un saludo", en: "Use of a greeting" }, correct: false },
        { label: { es: "Solicitud de iniciar sesión desde el mensaje", en: "Request to sign in from the message" }, correct: true }
      ]
    }
  },
  links: {
    module: 2,
    title: { es: "Enlaces y archivos maliciosos", en: "Malicious Links and Files" },
    summary: { es: "Un enlace puede ocultar un dominio falso y un archivo puede ejecutar código dañino aunque parezca una factura, tarea o formulario.", en: "A link can hide a fake domain, and a file can run harmful code even when it looks like an invoice, assignment, or form." },
    image: "assets/images/social-engineering.webp",
    alt: { es: "Correo digital con enlace, archivo y símbolo de alerta", en: "Digital email with link, attachment, and warning symbol" },
    objective: { es: "Aplicar una verificación básica antes de abrir enlaces, descargar archivos o habilitar contenido.", en: "Apply a basic verification process before opening links, downloading files, or enabling content." },
    concepts: [
      { title: { es: "Comprueba el destino", en: "Check the destination" }, body: { es: "Observa el dominio real, no solo el texto visible. Busca cambios mínimos de letras, subdominios engañosos y direcciones acortadas inesperadas.", en: "Inspect the real domain, not only the visible text. Look for small spelling changes, misleading subdomains, and unexpected shortened addresses." } },
      { title: { es: "Controla las descargas", en: "Control downloads" }, body: { es: "Descarga programas y documentos desde servicios conocidos. No habilites macros ni ignores alertas del navegador o del antivirus.", en: "Download software and documents from known services. Do not enable macros or dismiss browser and antivirus warnings." } }
    ],
    tips: { es: ["En computador, pasa el cursor sobre el enlace antes de abrirlo.", "En móvil, mantén presionado para revisar la dirección.", "Si tienes dudas, entra manualmente al sitio oficial."], en: ["On a computer, hover over a link before opening it.", "On mobile, press and hold to inspect the address.", "When unsure, enter the official site manually."] },
    source: { name: "CISA - Phishing guidance", url: "https://www.cisa.gov/sites/default/files/2024-02/Update%20to%20Phishing%20General%20Security%20Postcard_01.01.2024.pdf" },
    activity: {
      type: "quiz",
      prompt: { es: "¿Cuál es la acción más segura ante un enlace inesperado que dice pertenecer a tu banco?", en: "What is the safest action when an unexpected link claims to come from your bank?" },
      options: [
        { label: { es: "Abrirlo si tiene el logotipo correcto", en: "Open it if the logo looks correct" }, correct: false },
        { label: { es: "Responder al remitente para confirmar", en: "Reply to the sender to confirm" }, correct: false },
        { label: { es: "Abrir directamente la aplicación o escribir el sitio oficial", en: "Open the official app or type the official website" }, correct: true },
        { label: { es: "Reenviarlo a un compañero para que lo pruebe", en: "Forward it to a classmate to test it" }, correct: false }
      ]
    }
  },
  footprint: {
    module: 3,
    title: { es: "Huella digital", en: "Digital Footprint" },
    summary: { es: "Publicaciones, búsquedas, registros, ubicaciones y metadatos pueden formar un historial relacionado con tu identidad.", en: "Posts, searches, registrations, locations, and metadata can form a history connected to your identity." },
    image: "assets/images/privacy.webp",
    alt: { es: "Estudiante ajustando privacidad, ubicación y seguimiento en un teléfono", en: "Student adjusting privacy, location, and tracking on a phone" },
    objective: { es: "Reconocer cómo se forma la huella digital y adoptar medidas para reducir información innecesaria.", en: "Recognize how a digital footprint forms and take steps to reduce unnecessary information." },
    concepts: [
      { title: { es: "Huella activa y pasiva", en: "Active and passive footprint" }, body: { es: "La huella activa incluye lo que publicas voluntariamente. La pasiva puede producirse mediante rastreadores, identificadores, ubicaciones y registros técnicos.", en: "Your active footprint includes what you publish intentionally. Your passive footprint may come from trackers, identifiers, location, and technical logs." } },
      { title: { es: "Minimización", en: "Minimization" }, body: { es: "Compartir menos datos reduce la exposición. Revisa publicaciones antiguas, configuraciones de privacidad y cuentas que ya no utilizas.", en: "Sharing less data reduces exposure. Review old posts, privacy settings, and accounts you no longer use." } }
    ],
    tips: { es: ["Busca periódicamente tu nombre y usuarios públicos.", "Desactiva ubicación y seguimiento cuando no sean necesarios.", "Revisa fotografías antes de publicar metadatos o información de terceros."], en: ["Periodically search for your name and public usernames.", "Disable location and tracking when they are unnecessary.", "Review photos before publishing metadata or information about others."] },
    source: { name: "CISA - Limit Your Digital Footprint", url: "https://www.cisa.gov/resources-tools/training/limit-your-digital-footprint" },
    activity: {
      type: "reveal",
      prompt: { es: "Abre las tarjetas y relaciona cada rastro con una acción de protección.", en: "Open the cards and connect each trace with a protective action." },
      cards: [
        { front: { es: "Ubicación en fotografías", en: "Photo location" }, back: { es: "Desactiva la geolocalización o elimina los metadatos antes de publicar.", en: "Disable geolocation or remove metadata before posting." } },
        { front: { es: "Cuenta que ya no utilizas", en: "Unused account" }, back: { es: "Descarga lo necesario y elimina la cuenta siguiendo el procedimiento oficial.", en: "Download what you need and delete the account through the official process." } },
        { front: { es: "Perfil público", en: "Public profile" }, back: { es: "Limita la información visible y revisa quién puede encontrar o contactar tu perfil.", en: "Limit visible information and review who can find or contact your profile." } }
      ]
    }
  },
  permissions: {
    module: 3,
    title: { es: "Datos personales y permisos", en: "Personal Data and Permissions" },
    summary: { es: "Los permisos determinan qué datos y sensores puede utilizar una aplicación. Conceder solo lo necesario reduce el riesgo.", en: "Permissions determine which data and sensors an app can use. Granting only what is necessary reduces risk." },
    image: "assets/images/privacy.webp",
    alt: { es: "Controles de permisos de cámara, ubicación y micrófono alrededor de un teléfono", en: "Camera, location, and microphone permission controls around a phone" },
    objective: { es: "Aplicar el principio de mínimo privilegio al revisar permisos de aplicaciones y sitios web.", en: "Apply least privilege when reviewing permissions for apps and websites." },
    concepts: [
      { title: { es: "Acceso proporcional", en: "Proportional access" }, body: { es: "Un permiso debe relacionarse con una función clara. Una aplicación de linterna no necesita contactos ni ubicación para encender la luz.", en: "A permission should support a clear function. A flashlight app does not need contacts or location to turn on the light." } },
      { title: { es: "Revisión periódica", en: "Periodic review" }, body: { es: "Los permisos pueden acumularse. Revisa cámara, micrófono, ubicación, contactos y archivos; utiliza opciones como “solo mientras se usa”.", en: "Permissions can accumulate. Review camera, microphone, location, contacts, and files; use options such as “only while using.”" } }
    ],
    tips: { es: ["Niega permisos que no tengan una finalidad clara.", "Elimina aplicaciones innecesarias.", "Revisa también los permisos concedidos al navegador."], en: ["Deny permissions without a clear purpose.", "Remove unnecessary apps.", "Review permissions granted to your browser as well."] },
    source: { name: "CISA - Manage Application Permissions", url: "https://www.cisa.gov/resources-tools/training/manage-application-permissions-privacy-and-security" },
    activity: {
      type: "classify",
      prompt: { es: "Decide si conviene permitir o bloquear cada solicitud.", en: "Decide whether to allow or block each request." },
      choices: { yes: { es: "Permitir", en: "Allow" }, no: { es: "Bloquear", en: "Block" } },
      items: [
        { label: { es: "Aplicación de mapas: ubicación mientras está en uso", en: "Maps app: location while in use" }, expected: "yes" },
        { label: { es: "Aplicación de linterna: acceso a contactos", en: "Flashlight app: access to contacts" }, expected: "no" },
        { label: { es: "Videollamada: micrófono durante la llamada", en: "Video call: microphone during the call" }, expected: "yes" },
        { label: { es: "Juego sin funciones sociales: lista completa de contactos", en: "Game without social features: full contact list" }, expected: "no" }
      ]
    }
  },
  cloud: {
    module: 4,
    title: { es: "Uso seguro de la nube", en: "Secure Cloud Sharing" },
    summary: { es: "La seguridad de un archivo en la nube depende de la cuenta, los permisos, el enlace compartido y la revisión posterior del acceso.", en: "A cloud file's security depends on the account, permissions, shared link, and later access review." },
    image: "assets/images/cloud-ai.webp",
    alt: { es: "Estudiante administrando archivos protegidos y permisos en una nube digital", en: "Student managing protected files and permissions in a digital cloud" },
    objective: { es: "Seleccionar configuraciones de acceso que limiten la exposición de documentos académicos y personales.", en: "Select access settings that limit exposure of academic and personal documents." },
    concepts: [
      { title: { es: "Privado por defecto", en: "Private by default" }, body: { es: "Comparte con personas identificadas y asigna lectura o edición según la necesidad. Evita enlaces públicos para información sensible.", en: "Share with identified people and assign viewing or editing according to need. Avoid public links for sensitive information." } },
      { title: { es: "Control durante todo el ciclo", en: "Lifecycle control" }, body: { es: "Revisa quién tiene acceso, define vencimiento cuando sea posible y retira permisos cuando termina la actividad académica.", en: "Review who has access, set expiration when possible, and remove permissions when the academic activity ends." } }
    ],
    tips: { es: ["Utiliza servicios autorizados por la institución.", "Activa MFA en la cuenta de almacenamiento.", "No mezcles archivos públicos y confidenciales en la misma carpeta compartida."], en: ["Use services approved by your institution.", "Enable MFA for the storage account.", "Do not mix public and confidential files in the same shared folder."] },
    source: { name: "NIST SP 800-210", url: "https://csrc.nist.gov/pubs/sp/800/210/final" },
    activity: {
      type: "quiz",
      prompt: { es: "Debes compartir un borrador de investigación con dos compañeros. ¿Cuál configuración es más segura?", en: "You must share a research draft with two classmates. Which setting is safer?" },
      options: [
        { label: { es: "Enlace público sin vencimiento", en: "Public link without expiration" }, correct: false },
        { label: { es: "Acceso para usuarios específicos, con permisos necesarios", en: "Access for specific users with only required permissions" }, correct: true },
        { label: { es: "Publicarlo temporalmente en una red social", en: "Post it temporarily on social media" }, correct: false },
        { label: { es: "Compartir la contraseña de tu cuenta", en: "Share your account password" }, correct: false }
      ]
    }
  },
  ai: {
    module: 4,
    title: { es: "Datos sensibles e IA generativa", en: "Sensitive Data and Generative AI" },
    summary: { es: "Una instrucción enviada a un servicio de IA puede contener información personal, institucional o confidencial que no debería salir de su contexto autorizado.", en: "A prompt sent to an AI service may contain personal, institutional, or confidential information that should not leave its authorized context." },
    image: "assets/images/cloud-ai.webp",
    alt: { es: "Estudiante eligiendo qué datos compartir con una nube y un asistente de inteligencia artificial", en: "Student choosing which data to share with a cloud and an artificial intelligence assistant" },
    objective: { es: "Clasificar la información antes de utilizar una herramienta de IA y reducir los riesgos de privacidad y confidencialidad.", en: "Classify information before using an AI tool and reduce privacy and confidentiality risks." },
    concepts: [
      { title: { es: "Clasifica antes de copiar", en: "Classify before copying" }, body: { es: "No ingreses contraseñas, documentos de identidad, expedientes, datos de terceros, investigaciones reservadas ni información institucional restringida.", en: "Do not enter passwords, identity documents, records, third-party data, restricted research, or confidential institutional information." } },
      { title: { es: "Minimiza y verifica", en: "Minimize and verify" }, body: { es: "Utiliza ejemplos ficticios o datos anonimizados. Revisa los resultados porque una respuesta convincente también puede ser incorrecta o incompleta.", en: "Use fictional examples or anonymized data. Review outputs because a convincing answer may still be wrong or incomplete." } }
    ],
    tips: { es: ["Consulta las políticas de tu universidad.", "Elimina nombres, códigos y detalles identificables.", "No utilices una respuesta de IA como única fuente académica."], en: ["Check your university policies.", "Remove names, codes, and identifying details.", "Do not use an AI response as your only academic source."] },
    source: { name: "NIST AI 600-1 - Generative AI Profile", url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" },
    activity: {
      type: "classify",
      prompt: { es: "Clasifica cada elemento antes de escribirlo en una IA pública.", en: "Classify each item before entering it into a public AI service." },
      choices: { yes: { es: "Puede usarse", en: "May be used" }, no: { es: "No debe compartirse", en: "Do not share" } },
      items: [
        { label: { es: "Ejemplo ficticio sin datos identificables", en: "Fictional example without identifiable data" }, expected: "yes" },
        { label: { es: "Contraseña del correo institucional", en: "Institutional email password" }, expected: "no" },
        { label: { es: "Borrador público sin información reservada", en: "Public draft without restricted information" }, expected: "yes" },
        { label: { es: "Historia clínica de una persona", en: "A person's medical record" }, expected: "no" }
      ]
    }
  },
  networks: {
    module: 5,
    title: { es: "Dispositivos y redes públicas", en: "Devices and Public Networks" },
    summary: { es: "Las actualizaciones, el bloqueo del dispositivo y las conexiones cifradas son controles básicos para estudiar o trabajar fuera de casa.", en: "Updates, device locking, and encrypted connections are basic controls when studying or working away from home." },
    image: "assets/images/devices-response.webp",
    alt: { es: "Estudiante protegiendo un computador y un teléfono conectados a una red inalámbrica", en: "Student protecting a computer and phone connected to a wireless network" },
    objective: { es: "Configurar prácticas seguras para dispositivos móviles, navegadores y redes Wi-Fi compartidas.", en: "Configure safe practices for mobile devices, browsers, and shared Wi-Fi networks." },
    concepts: [
      { title: { es: "Dispositivo preparado", en: "Prepared device" }, body: { es: "Mantén sistema, navegador y aplicaciones actualizados. Utiliza bloqueo de pantalla, cifrado y copias de seguridad.", en: "Keep the operating system, browser, and apps updated. Use screen locking, encryption, and backups." } },
      { title: { es: "Conexión consciente", en: "Connection awareness" }, body: { es: "Confirma el nombre de la red y revisa que el sitio utilice HTTPS. Desactiva la conexión automática y evita compartir archivos en redes desconocidas.", en: "Confirm the network name and verify that websites use HTTPS. Disable automatic connection and avoid file sharing on unknown networks." } }
    ],
    tips: { es: ["Prefiere datos móviles para operaciones especialmente sensibles.", "No ignores advertencias de certificados.", "Cierra sesión al terminar y olvida redes que no volverás a utilizar."], en: ["Prefer mobile data for especially sensitive operations.", "Do not ignore certificate warnings.", "Sign out when finished and forget networks you will not use again."] },
    source: { name: "FTC - Are Public Wi-Fi Networks Safe?", url: "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know" },
    activity: {
      type: "multi",
      prompt: { es: "Selecciona las acciones recomendadas antes de utilizar una red pública.", en: "Select the recommended actions before using public Wi-Fi." },
      options: [
        { label: { es: "Confirmar el nombre de la red", en: "Confirm the network name" }, correct: true },
        { label: { es: "Desactivar las actualizaciones de seguridad", en: "Disable security updates" }, correct: false },
        { label: { es: "Comprobar HTTPS y las alertas del navegador", en: "Check HTTPS and browser warnings" }, correct: true },
        { label: { es: "Desactivar la conexión automática", en: "Disable automatic connection" }, correct: true }
      ]
    }
  },
  response: {
    module: 5,
    title: { es: "Reporte, respaldo y recuperación", en: "Reporting, Backups, and Recovery" },
    summary: { es: "Responder con orden reduce el impacto de un incidente y conserva información útil para la recuperación y el análisis.", en: "Responding in an orderly way reduces an incident's impact and preserves useful information for recovery and analysis." },
    image: "assets/images/devices-response.webp",
    alt: { es: "Escudo, respaldo, alerta y ciclo de recuperación alrededor de dispositivos", en: "Shield, backup, alert, and recovery cycle around devices" },
    objective: { es: "Organizar las primeras acciones ante una cuenta o dispositivo posiblemente comprometido.", en: "Organize the first actions when an account or device may be compromised." },
    concepts: [
      { title: { es: "Contén y reporta", en: "Contain and report" }, body: { es: "Desconecta el equipo de la red cuando sea apropiado, no sigas ingresando credenciales y reporta por el canal institucional. Conserva mensajes, horas y capturas útiles.", en: "Disconnect the device from the network when appropriate, stop entering credentials, and report through the institutional channel. Preserve useful messages, times, and screenshots." } },
      { title: { es: "Recupera con una fuente confiable", en: "Recover from a trusted source" }, body: { es: "Desde un dispositivo limpio, cambia credenciales, cierra sesiones, activa MFA y revisa la actividad. Restaura copias únicamente después de controlar la causa.", en: "From a clean device, change credentials, close sessions, enable MFA, and review activity. Restore backups only after controlling the cause." } }
    ],
    tips: { es: ["Conoce de antemano el canal de soporte de tu universidad.", "Mantén copias separadas y prueba su restauración.", "No borres evidencias antes de recibir orientación."], en: ["Know your university's support channel in advance.", "Keep separate backups and test restoration.", "Do not delete evidence before receiving guidance."] },
    source: { name: "CISA - StopRansomware Guide", url: "https://www.cisa.gov/stopransomware/ransomware-guide" },
    activity: {
      type: "order",
      prompt: { es: "Ordena una respuesta básica ante el robo de una cuenta, desde la primera acción hasta la recuperación.", en: "Order a basic response to account theft, from the first action through recovery." },
      items: [
        { rank: 3, label: { es: "Revisar actividad y recuperar información segura", en: "Review activity and recover safe information" } },
        { rank: 1, label: { es: "Reportar y contener el acceso desde un dispositivo seguro", en: "Report and contain access from a safe device" } },
        { rank: 2, label: { es: "Cambiar credenciales, cerrar sesiones y activar MFA", en: "Change credentials, close sessions, and enable MFA" } },
        { rank: 4, label: { es: "Documentar lo ocurrido y aplicar mejoras", en: "Document what happened and apply improvements" } }
      ]
    }
  }
};

const references = [
  { type: "institution", es: "Cybersecurity and Infrastructure Security Agency. (s. f.). Secure Our World.", en: "Cybersecurity and Infrastructure Security Agency. (n.d.). Secure Our World.", url: "https://www.cisa.gov/secure-our-world" },
  { type: "institution", es: "Cybersecurity and Infrastructure Security Agency. (s. f.). Manage application permissions for privacy and security.", en: "Cybersecurity and Infrastructure Security Agency. (n.d.). Manage application permissions for privacy and security.", url: "https://www.cisa.gov/resources-tools/training/manage-application-permissions-privacy-and-security" },
  { type: "institution", es: "Cybersecurity and Infrastructure Security Agency. (s. f.). Limit your digital footprint.", en: "Cybersecurity and Infrastructure Security Agency. (n.d.). Limit your digital footprint.", url: "https://www.cisa.gov/resources-tools/training/limit-your-digital-footprint" },
  { type: "institution", es: "Federal Trade Commission. (2026). Are public Wi-Fi networks safe? What you need to know.", en: "Federal Trade Commission. (2026). Are public Wi-Fi networks safe? What you need to know.", url: "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know" },
  { type: "publication", es: "National Institute of Standards and Technology. (2025). Digital identity guidelines: Authentication and authenticator management (NIST SP 800-63B-4).", en: "National Institute of Standards and Technology. (2025). Digital identity guidelines: Authentication and authenticator management (NIST SP 800-63B-4).", url: "https://doi.org/10.6028/NIST.SP.800-63B-4" },
  { type: "publication", es: "National Institute of Standards and Technology. (2020). General access control guidance for cloud systems (NIST SP 800-210).", en: "National Institute of Standards and Technology. (2020). General access control guidance for cloud systems (NIST SP 800-210).", url: "https://doi.org/10.6028/NIST.SP.800-210" },
  { type: "publication", es: "Autio, C., Schwartz, R., Dunietz, J., Jain, S., Stanley, M., Tabassi, E., Hall, P., & Roberts, K. (2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1).", en: "Autio, C., Schwartz, R., Dunietz, J., Jain, S., Stanley, M., Tabassi, E., Hall, P., & Roberts, K. (2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1).", url: "https://doi.org/10.6028/NIST.AI.600-1" },
  { type: "colombia", es: "Superintendencia de Industria y Comercio. (2024). Circular Externa 002 de 2024: Lineamientos sobre el tratamiento de datos personales en sistemas de inteligencia artificial.", en: "Superintendencia de Industria y Comercio. (2024). External Circular 002 of 2024: Guidelines on personal data processing in artificial intelligence systems.", url: "https://sedeelectronica.sic.gov.co/transparencia/normativa/circular-externa-2-de-2024-de-la-superintendencia-de-industria-y-comercio-lineamientos-sobre-el-tratamiento-de-datos" }
];

let lang = getStoredLanguage();
const currentPage = document.body.dataset.page || "home";

function getStoredLanguage() {
  try { return localStorage.getItem("cyberwise-language") || "es"; }
  catch { return "es"; }
}

function setLanguage(nextLang) {
  lang = nextLang;
  try { localStorage.setItem("cyberwise-language", lang); } catch {}
  render();
}

function t(value) { return value?.[lang] ?? value?.es ?? ""; }

function moduleForPage(page) { return modules.find((module) => module.pages.includes(page)); }

function allNavLinks() {
  return modules.flatMap((module) => module.pages.map((page) => ({ page, module })));
}

function headerMarkup() {
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="${files.home}" aria-label="CyberWise Campus - ${ui[lang].home}">
          <span class="brand-mark" aria-hidden="true">C</span>
          <span class="brand-copy"><strong>CyberWise Campus</strong><small>${ui[lang].subtitle}</small></span>
        </a>
        <div class="header-actions">
          <div class="lang-switch" aria-label="Language / Idioma">
            <button class="lang-button" type="button" data-lang="es" aria-pressed="${lang === "es"}">ES</button>
            <button class="lang-button" type="button" data-lang="en" aria-pressed="${lang === "en"}">EN</button>
          </div>
          <button class="menu-button" id="menu-open" type="button" aria-expanded="false" aria-controls="course-drawer" aria-label="${ui[lang].menu}">☰</button>
        </div>
      </div>
    </header>`;
}

function drawerMarkup() {
  const nav = allNavLinks().map(({ page, module }) => `
    <a href="${files[page]}" ${currentPage === page ? 'aria-current="page"' : ""}>
      <span class="module-number">${ui[lang].module} ${module.number}</span><br>${t(lessons[page].title)}
    </a>`).join("");
  return `
    <div class="overlay" id="drawer-overlay"></div>
    <aside class="drawer" id="course-drawer" aria-label="${ui[lang].modules}">
      <div class="drawer-head"><h2>${ui[lang].modules}</h2><button class="menu-button" id="menu-close" type="button" aria-label="${ui[lang].close}">×</button></div>
      <nav class="drawer-nav">
        <a href="${files.home}" ${currentPage === "home" ? 'aria-current="page"' : ""}>${ui[lang].home}</a>
        ${nav}
        <a href="${files.credits}" ${currentPage === "credits" ? 'aria-current="page"' : ""}>${ui[lang].credits}</a>
      </nav>
    </aside>`;
}

function footerMarkup() {
  return `<footer class="site-footer"><div class="footer-inner"><span>${ui[lang].footer}</span><a href="${files.credits}">${ui[lang].rights}</a></div></footer>`;
}

function homeMarkup() {
  const cards = modules.map((module) => `
    <article class="module-card">
      <span class="module-number">${ui[lang].module} ${module.number}</span>
      <h3>${t(module.title)}</h3>
      <p>${t(module.description)}</p>
      <div class="module-links">
        ${module.pages.map((page, index) => `<a href="${files[page]}">${index + 1}. ${t(lessons[page].title)}</a>`).join("")}
      </div>
    </article>`).join("");
  return `
    <main id="main-content" class="site-shell">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${lang === "es" ? "Aprende. Decide. Protégete." : "Learn. Decide. Protect yourself."}</p>
          <h1 class="gradient-text">CyberWise Campus</h1>
          <p class="lead">${lang === "es" ? "Diez experiencias breves para reconocer riesgos digitales y tomar decisiones más seguras en la vida universitaria." : "Ten short experiences to recognize digital risks and make safer decisions in university life."}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${files.passwords}">${ui[lang].start}</a>
            <a class="button button-secondary" href="#modules">${ui[lang].explore}</a>
          </div>
        </div>
        <div class="hero-visual">
          <img src="assets/images/digital-identity.webp" alt="${lang === "es" ? "Estudiante universitaria protegida por un escudo digital" : "University student protected by a digital shield"}" width="1400" height="788" fetchpriority="high">
          <div class="visual-note"><strong>5 × 2</strong><br>${lang === "es" ? "Cinco módulos y diez actividades prácticas." : "Five modules and ten practical activities."}</div>
        </div>
      </section>
      <section class="section" id="modules">
        <div class="section-heading"><p class="eyebrow">${ui[lang].modules}</p><h2>${lang === "es" ? "Una ruta para cuidar tu identidad, tus datos y tus dispositivos" : "A path to protect your identity, data, and devices"}</h2></div>
        <div class="module-grid">${cards}</div>
      </section>
    </main>`;
}

function activityMarkup(activity) {
  if (activity.type === "quiz" || activity.type === "multi") {
    const inputType = activity.type === "quiz" ? "radio" : "checkbox";
    return `<div class="activity-options">${activity.options.map((option, index) => `
      <label class="option-row"><input type="${inputType}" name="activity-option" value="${index}"><span>${t(option.label)}</span></label>`).join("")}</div>
      <div class="activity-controls"><button class="button button-primary" type="button" data-action="check-options">${ui[lang].check}</button><button class="button button-secondary" type="button" data-action="reset-activity">${ui[lang].retry}</button></div>
      <div class="feedback" role="status" aria-live="polite"></div>`;
  }
  if (activity.type === "reveal") {
    return `<p>${ui[lang].reveal}</p><div class="reveal-grid">${activity.cards.map((card) => `<button class="reveal-card" type="button"><strong>${t(card.front)}</strong><span data-front="${t(card.front)}" data-back="${t(card.back)}">${lang === "es" ? "Mostrar recomendación" : "Show recommendation"}</span></button>`).join("")}</div>`;
  }
  if (activity.type === "classify") {
    return `<div class="classify-grid">${activity.items.map((item, index) => `<article class="choice-card" data-expected="${item.expected}" data-index="${index}"><p>${t(item.label)}</p><div class="choice-actions"><button class="button button-secondary" type="button" data-choice="yes">${t(activity.choices.yes)}</button><button class="button button-secondary" type="button" data-choice="no">${t(activity.choices.no)}</button></div></article>`).join("")}</div><div class="feedback" role="status" aria-live="polite"></div>`;
  }
  if (activity.type === "order") {
    return `<ol class="order-list">${activity.items.map((item) => `<li class="order-item" data-rank="${item.rank}"><span>${t(item.label)}</span><span class="order-buttons"><button type="button" data-move="up" aria-label="${ui[lang].moveUp}">↑</button><button type="button" data-move="down" aria-label="${ui[lang].moveDown}">↓</button></span></li>`).join("")}</ol><div class="activity-controls"><button class="button button-primary" type="button" data-action="check-order">${ui[lang].check}</button><button class="button button-secondary" type="button" data-action="reset-activity">${ui[lang].retry}</button></div><div class="feedback" role="status" aria-live="polite"></div>`;
  }
  return "";
}

function lessonMarkup(page) {
  const lesson = lessons[page];
  const module = moduleForPage(page);
  const position = pageOrder.indexOf(page) + 1;
  const previous = position === 1 ? "home" : pageOrder[position - 2];
  const next = position === pageOrder.length ? "credits" : pageOrder[position];
  return `
    <main id="main-content" class="site-shell">
      <div class="progress-wrap" aria-label="${ui[lang].screen} ${position} ${ui[lang].of} 10">
        <div class="progress-meta"><span>${ui[lang].module} ${module.number}: ${t(module.title)}</span><span>${ui[lang].screen} ${position} ${ui[lang].of} 10</span></div>
        <div class="progress-track"><div class="progress-bar" style="width:${position * 10}%"></div></div>
      </div>
      <section class="hero lesson-hero">
        <div class="hero-copy"><p class="eyebrow">${ui[lang].module} ${module.number} · ${t(module.title)}</p><h1 class="gradient-text">${t(lesson.title)}</h1><p class="lead">${t(lesson.summary)}</p></div>
        <div class="hero-visual"><img src="${lesson.image}" alt="${t(lesson.alt)}" width="1400" height="788"></div>
      </section>
      <section class="section lesson-grid">
        <article class="panel objective-panel"><p class="eyebrow">${ui[lang].objective}</p><h2>${lang === "es" ? "Al finalizar podrás…" : "By the end, you will be able to…"}</h2><p>${t(lesson.objective)}</p></article>
        <div class="concept-stack">
          ${lesson.concepts.map((concept) => `<article class="panel concept-card"><h3>${t(concept.title)}</h3><p>${t(concept.body)}</p></article>`).join("")}
          <article class="panel"><h3>${ui[lang].essentials}</h3><ul class="key-list">${lesson.tips[lang].map((tip) => `<li>${tip}</li>`).join("")}</ul></article>
        </div>
      </section>
      <section class="activity" data-activity-type="${lesson.activity.type}">
        <div class="activity-header"><p class="eyebrow">${ui[lang].activity}</p><h2>${t(lesson.activity.prompt)}</h2></div>
        ${activityMarkup(lesson.activity)}
      </section>
      <p class="source-note">${ui[lang].source}: <a href="${lesson.source.url}" target="_blank" rel="noopener noreferrer">${lesson.source.name}</a></p>
      <nav class="pager" aria-label="${lang === "es" ? "Navegación entre lecciones" : "Lesson navigation"}">
        <a href="${files[previous]}"><small>${ui[lang].previous}</small><strong>${previous === "home" ? ui[lang].home : t(lessons[previous].title)}</strong></a>
        <a href="${files[next]}"><small>${ui[lang].next}</small><strong>${next === "credits" ? ui[lang].credits : t(lessons[next].title)}</strong></a>
      </nav>
    </main>`;
}

function creditsMarkup() {
  return `
    <main id="main-content" class="site-shell">
      <section class="hero lesson-hero">
        <div class="hero-copy"><p class="eyebrow">${lang === "es" ? "Transparencia académica" : "Academic transparency"}</p><h1 class="gradient-text">${ui[lang].credits}</h1><p class="lead">${lang === "es" ? "Las recomendaciones fueron sintetizadas y verificadas a partir de fuentes institucionales. Las ilustraciones fueron creadas específicamente para este proyecto con asistencia de inteligencia artificial y revisadas por el autor." : "Recommendations were synthesized and verified from institutional sources. Illustrations were created specifically for this project with artificial-intelligence assistance and reviewed by the author."}</p></div>
        <div class="hero-visual"><img src="assets/images/cloud-ai.webp" alt="${lang === "es" ? "Archivos digitales protegidos en la nube" : "Digital files protected in the cloud"}" width="1400" height="700"></div>
      </section>
      <section class="section">
        <div class="section-heading"><p class="eyebrow">APA 7</p><h2>${lang === "es" ? "Referencias consultadas" : "References"}</h2><p>${lang === "es" ? "Selecciona cada enlace para consultar la fuente original." : "Select each link to consult the original source."}</p></div>
        <div class="credits-list">${references.map((reference) => `<article class="credit-item"><p>${reference[lang]} <a href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.url}</a></p></article>`).join("")}</div>
      </section>
      <section class="section">
        <details><summary>${lang === "es" ? "Créditos de las ilustraciones" : "Illustration credits"}</summary><p>${lang === "es" ? "OpenAI. (2026). Serie de cinco ilustraciones educativas sobre identidad digital, ingeniería social, privacidad, nube e IA, y respuesta a incidentes [Imágenes generadas mediante inteligencia artificial]. Generadas para CyberWise Campus y revisadas antes de su publicación." : "OpenAI. (2026). Series of five educational illustrations on digital identity, social engineering, privacy, cloud and AI, and incident response [Artificial intelligence-generated images]. Generated for CyberWise Campus and reviewed before publication."}</p></details>
        <details><summary>${lang === "es" ? "Nota de autoría y verificación" : "Authorship and verification note"}</summary><p>${lang === "es" ? "La selección temática, organización pedagógica, revisión de fuentes, adaptación bilingüe, diseño e integración de la aplicación corresponden al desarrollo del estudiante. Las herramientas de IA se utilizaron como apoyo técnico y visual; el contenido fue contrastado con las fuentes enlazadas." : "The topic selection, learning structure, source review, bilingual adaptation, design, and application integration are part of the student's development. AI tools supported technical and visual work; the content was checked against the linked sources."}</p></details>
      </section>
      <nav class="pager"><a href="${files.response}"><small>${ui[lang].previous}</small><strong>${t(lessons.response.title)}</strong></a><a href="${files.home}"><small>${ui[lang].next}</small><strong>${ui[lang].home}</strong></a></nav>
    </main>`;
}

function render() {
  document.documentElement.lang = lang;
  document.title = currentPage === "home" ? "CyberWise Campus" : currentPage === "credits" ? `${ui[lang].credits} | CyberWise Campus` : `${t(lessons[currentPage].title)} | CyberWise Campus`;
  const content = currentPage === "home" ? homeMarkup() : currentPage === "credits" ? creditsMarkup() : lessonMarkup(currentPage);
  document.getElementById("app").innerHTML = `${headerMarkup()}${drawerMarkup()}${content}${footerMarkup()}`;
  bindUI();
}

function bindUI() {
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  const drawer = document.getElementById("course-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const openButton = document.getElementById("menu-open");
  const closeButton = document.getElementById("menu-close");
  const closeDrawer = () => { drawer.classList.remove("open"); overlay.classList.remove("show"); openButton.setAttribute("aria-expanded", "false"); };
  openButton.addEventListener("click", () => { drawer.classList.add("open"); overlay.classList.add("show"); openButton.setAttribute("aria-expanded", "true"); closeButton.focus(); });
  closeButton.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
  bindActivity();
}

function showFeedback(container, success) {
  const feedback = container.querySelector(".feedback");
  if (!feedback) return;
  feedback.textContent = success ? ui[lang].correct : ui[lang].incorrect;
  feedback.className = `feedback show ${success ? "success" : "error"}`;
}

function bindActivity() {
  const container = document.querySelector(".activity");
  if (!container || currentPage === "home" || currentPage === "credits") return;
  const lesson = lessons[currentPage];
  const activity = lesson.activity;

  container.querySelectorAll('[data-action="check-options"]').forEach((button) => button.addEventListener("click", () => {
    const inputs = [...container.querySelectorAll('input[name="activity-option"]')];
    const success = inputs.every((input, index) => input.checked === Boolean(activity.options[index].correct));
    showFeedback(container, success);
  }));

  container.querySelectorAll(".reveal-card").forEach((card) => card.addEventListener("click", () => {
    const text = card.querySelector("span");
    const open = card.classList.toggle("is-open");
    text.textContent = open ? text.dataset.back : (lang === "es" ? "Mostrar recomendación" : "Show recommendation");
  }));

  container.querySelectorAll(".choice-card button").forEach((button) => button.addEventListener("click", () => {
    const card = button.closest(".choice-card");
    const correct = button.dataset.choice === card.dataset.expected;
    card.classList.remove("correct", "incorrect");
    card.classList.add(correct ? "correct" : "incorrect");
    card.dataset.answered = correct ? "correct" : "incorrect";
    const cards = [...container.querySelectorAll(".choice-card")];
    if (cards.every((item) => item.dataset.answered)) showFeedback(container, cards.every((item) => item.dataset.answered === "correct"));
  }));

  container.querySelectorAll("[data-move]").forEach((button) => button.addEventListener("click", () => {
    const item = button.closest(".order-item");
    if (button.dataset.move === "up" && item.previousElementSibling) item.parentElement.insertBefore(item, item.previousElementSibling);
    if (button.dataset.move === "down" && item.nextElementSibling) item.parentElement.insertBefore(item.nextElementSibling, item);
  }));

  container.querySelectorAll('[data-action="check-order"]').forEach((button) => button.addEventListener("click", () => {
    const ranks = [...container.querySelectorAll(".order-item")].map((item) => Number(item.dataset.rank));
    showFeedback(container, ranks.every((rank, index) => rank === index + 1));
  }));

  container.querySelectorAll('[data-action="reset-activity"]').forEach((button) => button.addEventListener("click", () => render()));
}

render();

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.getElementById("course-drawer")?.classList.remove("open");
  document.getElementById("drawer-overlay")?.classList.remove("show");
  document.getElementById("menu-open")?.setAttribute("aria-expanded", "false");
});
