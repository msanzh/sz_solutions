const services = [
    {
        title: "Sitio Web - Presencia Online",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-web-empresas-600x353.jpg">
        </img>`,
    },
    {
        title: "Comercio Electrónico",
        description: "Sunt, ipsam, necessitatibus sint fugit officia laboriosam minima ab ullam at magni et. Quaerat, sint!",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-ecommerce-600x353.jpg">
        </img>`,
    },
    {
        title: "Gestión de Redes Sociales",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-socialmedia-600x353.jpg">
        </img>`,
    },
    {
        title: "Gestión de Clientes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-gestion-clientes-600x353.jpg">
        </img>`,
    },
    {
        title: "Gestión de Procesos",
        description: "Sunt, ipsam, necessitatibus sint fugit officia laboriosam minima ab ullam at magni et. Quaerat, sint!",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-gestion-procesos-600x353.jpg">
        </img>`,
    },
    {
        title: "Oficina Virtual",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-oficina-virtual-600x353.jpg">
        </img>`,
    },
    {
        title: "Factura Electrónica",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-factura-electronica-600x353.jpg">
        </img>`,
    },
    {
        title: "Comunicaciones Seguras",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-conexiones-seguras-600x353.jpg">
        </img>`,
    },
    {
        title: "Ciberseguridad",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-ciberseguridad-600x353.jpg">
        </img>`,
    },
    {
        title: "Businness Intelligence",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-businessintelligence-600x353.jpg">
        </img>`,
    },
    {
        title: "SEO - Presencia Avanzada",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-seoavanzado-600x353.jpg">
        </img>`,
    },
    {
        title: "Marketplace",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
        image: `<img src="/images/svc-marketplace-600x353.jpg">
        </img>`,
    },
];

export { services };