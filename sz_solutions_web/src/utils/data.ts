const services = [
    {
        title: "Sitio Web - Presencia Online",
        description: "Diseñamos tu web de forma clara y atractiva para que muestres la mejor imagen de tu negocio en Internet",
        text: "Nuestros servicios de diseño web de portales tienen alta demanda por parte de grandes empresas e instituciones, así como autónomos y pymes. Nuestro departamento de diseño web lo conforma un gran equipo de trabajo altamente cualificado y al tanto de las últimas tecnologías y tendencias de diseño.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-web-empresas-600x353.jpg">
        </img>`,
        path: "/srv-web-presencia-online",
    },
    {
        title: "Comercio Electrónico",
        description: "Diseñamos tu ecommerce de forma clara y atractiva para que muestres tu mejor imagen adaptándose a tu negocio de bienes o servicios",
        text: "Entre las innumerables ventajas de poseer una tienda online está la de ofrecer productos las 24 horas a todo el mundo sin necesidad de tener su establecimiento abierto. De esta forma los costes se reducen drásticamente ya que no será necesario una gran inversión inicial en inmovilizado.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-ecommerce-600x353.jpg">
        </img>`,
        path: "/srv-comercio-electronico",
    },
    {
        title: "Gestión de Redes Sociales",
        description: "Diseñamos tu Plan de Social Media, monitorizamos y optimizamos tus redes sociales y realizamos una gestión de publicaciones semanales",
        text: "Creamos el perfil de tu empresa en al menos una red social, con el objetivo de compartir tu contenido y promociones de una forma sencilla, mediante una estrategia de social media, para establecer un canal de comunicación directo con tus clientes y optimizar el rendimiento.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-socialmedia-600x353.jpg">
        </img>`,
        path: "/srv-gestion-redes-sociales",
    },
    {
        title: "Gestión de Clientes",
        description: "Digitalizamos y optimizamos la gestión de las relaciones comerciales con tus clientes con nuestra solución",
        text: "Serás capaz de almacenar y consultar los datos de cada uno de tus clientes, dar de alta nuevos Leads de forma manual o mediante una importación por fichero, gestionar todas las oportunidades de negocio que conlleven el envío al cliente potencial crear acciones y tareas comerciales, etc.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-gestion-clientes-600x353.jpg">
        </img>`,
        path: "/srv-gestion-clientes",
    },
    {
        title: "Gestión de Procesos",
        description: "Digitalizamos y/o automatizamos los procesos de tu negocio relacionados con los aspectos operativos o productivos",
        text: "Tendrás digitalizados y/o automatizados procesos como la contabilidad, finanzas, facturación, proyectos, inventario, gestión de los recursos humanos, gestión de flotas. Todo ello con una solución que dispondrá de APIs, actualizaciones con nuevas versiones y escalable.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-gestion-procesos-600x353.jpg">
        </img>`,
        path: "/srv-gestion-procesos",
    },
    {
        title: "Oficina Virtual",
        description: "Implantamos soluciones interactivas y funcionales que permitan la colaboración más eficiente entre tus trabajadores",
        text: "Tendrás asistencia en el proceso creativo de ideación o gestión de equipos para la gestión colaborativa de proyectos, compartir recursos, personalización de flujos de trabajo, etc. Dispondrás de un servicio para almacenar y compartir archivos, así como podrás organizar un calendario con las tareas previstas.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-oficina-virtual-600x353.jpg">
        </img>`,
        path: "/srv-oficina-virtual",
    },
    {
        title: "Factura Electrónica",
        description: "Con esta solución podrás tener digitalizado el flujo de emisión de las facturas de bienes y/o servicios a tus clientes",
        text: "Tendrás la posibilidad emitir y enviar un número ilimitado de facturas personalizables, directamente por correo electrónico, realizar copias de seguridad con posibilidad de una periodicidad y disponer de APIs o Web Services, asegurando el cumplimiento de la normativa aplicable.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-factura-electronica-600x353.jpg">
        </img>`,
        path: "/srv-factura-electronica",
    },
    {
        title: "Comunicaciones Seguras",
        description: "Dispondrás de protocolos de seguridad en las conexiones entre los dispositivos de tus empleados y la empresa para prevenir ataques",
        text: "Con esta solución dispondrás de una conexión segura y cifrada, con cifrado de extremo a extremo, mantener un registro de los dispositivos que se han conectado a tu red privada y permitir la conexión exclusivamente a los dispositivos autorizados por ti, pudiendo hacer uso desde dispositivos móviles.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-conexiones-seguras-600x353.jpg">
        </img>`,
        path: "/srv-comunicaciones-seguras",
    },
    {
        title: "Ciberseguridad",
        description: "Proporcionamos seguridad básica y avanzada para todo tipo de dispositivo de los empleados de la empresa",
        text: "Tendrás a tu disposición una herramienta que analice tus dispositivos, su memoria interna y los dispositivos de almacenamiento externos, así como detecte y evite el malware espía, analizar el correo electrónico con detección de malware y filtro de correo no deseado, para un control total.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-ciberseguridad-600x353.jpg">
        </img>`,
        path: "/srv-ciberseguridad",
    },
    {
        title: "Businness Intelligence",
        description: "Posibilitamos la explotación de datos de tu empresa para la mejora del proceso de toma de decisiones",
        text: "Tendrás acceso a otras bases de datos y a la realización de comparaciones con los datos expuestos, dispondrás de capacidad de almacenamiento, contarás con paneles de datos personalizados con datos relevantes y distintas formas de visualización y podrás exportar datos a imágenes o a documentos de Excel, creando sinergias y compatibilidades.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-businessintelligence-600x353.jpg">
        </img>`,
        path: "/srv-businness-intelligence",
    },
    {
        title: "SEO - Presencia Avanzada",
        description: "Mejoramos tu posicionamiento en Internet, aumentando tu alcance de potenciales clientes e incrementando el tráfico",
        text: "A tavés de esta solución, realizaremos la gestión, búsqueda y análisis de palabras clave con el fin de desarrollar estrategias útiles para que los buscadores clasifiquen el contenido y ayuden a los usuarios a encontrar resultados relevantes para sus consultas, realizando posicionamiento on-page e informes mensuales.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-seoavanzado-600x353.jpg">
        </img>`,
        path: "/srv-seo-presencia-avanzada",
    },
    {
        title: "Marketplace",
        description: "Dirigimos tus referencias y productos para incrementar tu nivel de ventas, optimizando los recursos existentes",
        text: "A tavés de esta solución, incluiremos la apertura de cuenta y alta de tu perfil en una plataforma de Marketplace y en un país, realizando una investigación de mercado focalizada en las características de tus competidores para mejorar tu toma de decisiones y ayudarte a alcanzar una posición competitiva.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-marketplace-600x353.jpg">
        </img>`,
        path: "/srv-marketplace",
    },
];

export { services };