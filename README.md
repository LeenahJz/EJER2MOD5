# [EJERCICIO PRACTICO 2, MODULO 5]


Este ejercicio se llevó haciendo uso de las herramientas de seguridad, para proteger la web del hospital.

## [GITHUB: https://github.com/LeenahJz/EJER2MOD5.git]

## To install before execution: 
-npm install msw@latest
-npm install crypto-js 
-npm install dompurify     
-npm install json-server  

## Estructura

├─ node_modules
├─ public
│   └── mockServiceWorker.js  
├─ src
├── api/                           # API-related utilities
│   ├── api.js                     # Functions for making API requests
│   └── encryption.js                     # Functions for encrypt and decrypts passwords 
│
├── auth/                          # Authentication-related files
│   ├── AuthContext.jsx            # Context for managing authentication state
│   └── PrivateRoute.jsx           # Component for protecting routes
│
├── components/                    # Reusable UI components
│   ├── AppointmentForm.jsx        # Form for scheduling appointments
│   ├── DoctorCard.jsx             # Cards for displaying doctors
│   ├── ServiceList.jsx            # List of services
│   ├── Homepage.jsx               # Homepage component
│   └── common/                    # Common reusable components (e.g., buttons, modals)
│       └── ErrorMessage.jsx       # Component for displaying error messages
│
├── pages/                         # Page components (views)
│   ├── AdminDashboard.jsx         # Admin dashboard page
│   ├── DoctorDashboard.jsx        # Doctor dashboard page
│   ├── UserDashboard.jsx          # User dashboard page
│   └── Login.jsx                  # Login page
│
├── App.jsx                        # Main application component (routes and layout)
├── main.jsx                       # Entry point for the app
└── index.css                      # Global styles

## Cumple con los requisitos de: 
1. Protección de Rutas con React Router DOM 
- Implementa seguridad en las rutas del sistema del hospital, asegurando que solo los
usuarios autenticados puedan acceder a ciertas secciones (como la gestión del equipo
médico o los registros de pacientes).
- Utiliza React Router DOM para gestionar las rutas protegidas.
- Asegúrate de que las rutas públicas (como la página principal) sean accesibles
sin autenticación.

2. Implementación de Autenticación de Usuarios y Roles
- Integra un sistema básico de autenticación de usuarios que permita el login en la
aplicación del hospital.
- Los usuarios deben autenticarse para acceder a secciones protegidas.
- Implementa roles (por ejemplo, doctor y administrador) para que ciertos
usuarios solo tengan acceso a áreas específicas según su rol.

3. Consumo de APIs Protegido con API Key y JWT 
- Asegura el consumo de APIs utilizando una API Key y JWT. Los datos sensibles (como
la información de pacientes o citas) deben ser accesibles solo si el usuario ha iniciado
sesión y tiene un JWT válido.
- Implementa la verificación del token JWT en las solicitudes a la API.
- Muestra un mensaje de error si el token no es válido o ha expirado, y redirige al
usuario a la página de inicio de sesión.

4. Prevención de Vulnerabilidades Comunes 
- Implementa medidas de seguridad en la web del hospital para prevenir ataques
comunes como:
- Clickjacking: Protege la aplicación para que no pueda ser incrustada en iframes
no autorizados.
- XSS (Cross-Site Scripting): Escapa o limpia cualquier entrada del usuario que
pueda inyectar código malicioso.
- SQL Injection: Asegúrate de que las solicitudes a la API estén protegidas contra
inyecciones de SQL.
- Ataque DoS: Implementa mecanismos para mitigar posibles ataques de
denegación de servicio.

5. Encriptación de Datos en el Front-End
- Utiliza técnicas de encriptación de datos para proteger la información sensible en el
front-end, como las contraseñas de los usuarios o los datos personales de los
pacientes.
- Asegúrate de que los datos se encripten antes de ser enviados a la API.
