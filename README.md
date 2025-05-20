# Gif Search App 🎬✨

Aplicación web construida con **React** y **Vite** que permite buscar y mostrar GIFs animados mediante la API pública de [Giphy](https://developers.giphy.com/). Una experiencia rápida, sencilla y responsive para descubrir tus GIFs favoritos.

---

## 🚀 Características

- Búsqueda dinámica de GIFs por categoría o palabra clave.
- Consumo de la API de Giphy con llamadas asíncronas usando `fetch`.
- Hooks personalizados (`useFetchGifs`) para gestión limpia de estados y datos.
- Renderizado eficiente con componentes reutilizables (`GifGrid`, `GifItem`).
- Interfaz ligera y rápida gracias a Vite.
- Diseño responsive y minimalista, ideal para cualquier dispositivo.

---

## 🛠️ Tecnologías utilizadas

- **React 18+** – Biblioteca para construir la UI.
- **Vite** – Herramienta moderna para bundling y desarrollo rápido.
- **Giphy API** – API pública para obtener GIFs animados.
- **ESLint** – Linter para mantener código limpio y consistente.
- **JavaScript (ES6+)** – Lenguaje principal del proyecto.

---

## 🔧 Instalación y ejecución local

1. Clona el repositorio:

   git clone https://github.com/tu-usuario/gif-search-app.git
   cd gif-search-app

2. Instala las dependencias:

   npm install

3. Inicia la aplicación en modo desarrollo:

   npm run dev

## Estructura del proyecto

```plaintext
src/
├── components/
│   ├── AddCategory.jsx       # Componente para agregar nuevas categorías
│   ├── GifGrid.jsx           # Muestra la grilla de GIFs por categoría
│   ├── GifItem.jsx           # Componente para mostrar cada GIF individual
│   └── index.js              # Reexporta todos los componentes
├── hooks/
│   └── useFetchGifs.js       # Hook personalizado para obtener GIFs desde la API
├── helpers/
│   └── getGifs.js            # Función para llamar a la API de Giphy
└── App.jsx                   # Componente principal
```
