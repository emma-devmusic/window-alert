# Window Alert

Aplicación para Windows, para alertar algún evento en particular, como un recordatorio.

## Tecnologías

- **Electron.js** - Framework para aplicaciones de escritorio
- **React.js** - Librería de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **TailwindCSS** - Framework de CSS utilitario
- **ESLint** - Linter de código con buenas prácticas
- **Prettier** - Formateador de código (tabWidth=4)

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Desarrollo

### Iniciar el servidor de desarrollo (renderer)
```bash
npm run dev
```

### Iniciar la aplicación Electron
```bash
npm start
```

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo de webpack para el proceso renderer
- `npm start` - Compila el proceso main y ejecuta la aplicación Electron
- `npm run build` - Compila tanto el proceso main como el renderer para producción
- `npm run lint` - Ejecuta ESLint en el código fuente
- `npm run lint:fix` - Ejecuta ESLint y corrige automáticamente los problemas
- `npm run format` - Formatea el código con Prettier
- `npm run format:check` - Verifica el formato del código
- `npm run package` - Crea el ejecutable .exe para Windows

## Estructura del proyecto

```
window-alert/
├── src/
│   ├── main/           # Proceso principal de Electron
│   │   └── main.ts
│   └── renderer/       # Proceso de renderizado (React)
│       ├── App.tsx
│       ├── index.tsx
│       └── styles.css
├── public/             # Archivos públicos
│   └── index.html
├── dist/               # Archivos compilados
├── build/              # Ejecutables y paquetes generados
└── ...                 # Archivos de configuración
```

## Build para Windows

Para crear el archivo ejecutable (.exe) para Windows:

```bash
npm run package
```

**Nota**: En sistemas Linux, se requiere Wine instalado para crear el instalador NSIS. Sin embargo, el ejecutable `Window Alert.exe` se genera correctamente en `build/win-unpacked/`.

En Windows, el comando creará automáticamente el instalador en la carpeta `build/`.

## Configuración de ESLint y Prettier

- **ESLint**: Configurado con reglas recomendadas para TypeScript, React y buenas prácticas
- **Prettier**: Configurado con `tabWidth=4` y otras opciones de formato consistentes
- Ambas herramientas están integradas para trabajar juntas sin conflictos

## Licencia

ISC

