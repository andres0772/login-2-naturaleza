# Página de Inicio de Sesión y Registro 🔑

¡Bienvenido! Este es el código de una página de aterrizaje con un formulario de inicio de sesión y registro. Está construida con HTML, CSS y JavaScript puro, y utiliza la librería Boxicons para los iconos.

El diseño presenta una transición animada que permite al usuario cambiar fácilmente entre el formulario para iniciar sesión y el de registro.

## ✨ Características

*   **Interfaz Limpia:** Un diseño enfocado en la experiencia de usuario para el registro.
*   **Transición Animada:** Una animación suave en CSS que alterna entre los formularios.
*   **Iconos de Boxicons:** Integración de iconos vectoriales para mejorar la interfaz.
*   **Fácil de Adaptar:** El código es sencillo y permite una personalización básica.

## 🛠️ Tecnologías Utilizadas

*   **HTML:** Para la estructura de la página.
*   **CSS:** Para todos los estilos, animaciones y el diseño visual.
*   **JavaScript:** Para la lógica que permite cambiar entre el formulario de "Login" y el de "Registro".
*   **Boxicons:** Para los iconos utilizados en los campos del formulario y redes sociales.

## 🚀 Cómo Empezar

Para ver el proyecto en acción, simplemente clona o descarga los archivos y abre `index.html` en tu navegador web preferido. No requiere instalación ni dependencias.

## 🎨 Personalización

Puedes modificar fácilmente el proyecto para que se ajuste a tu propia marca.

### Cambiar la Imagen de Fondo

La imagen de fondo se usa en dos lugares: una versión desenfocada para toda la página y la versión nítida para el contenedor del formulario.

1.  Abre el archivo `style.css`.
2.  Busca los selectores `.background` y `.container`.
3.  Reemplaza `'prueba.jpg'` con la ruta a tu propia imagen.

```css
/* Ejemplo */

.background {
    background: url('tu-imagen.jpg') no-repeat;
    /* ... */
}

.container {
    background: url('tu-imagen.jpg') no-repeat;
    /* ... */
}
```

### Cambiar Colores

Los colores están definidos directamente en las reglas de CSS. Para cambiarlos, debes buscar el elemento que quieres modificar.

**Ejemplo: Cambiar el color principal de los botones**

1.  En `style.css`, busca el selector `.btn`.
2.  Modifica el valor hexadecimal del `background`.

```css
/* Antes */
.btn {
    background: #c4103d;
    /* ... */
}

/* Después (ejemplo con un tono azul) */
.btn {
    background: #3498db;
    /* ... */
}
```

**Ejemplo: Cambiar el color del texto y los iconos**

El color principal del texto es `#e4e4e4`. Puedes hacer una búsqueda global en `style.css` y reemplazarlo por el color que prefieras.

## 📄 Licencia

Este proyecto es de código abierto y puedes usarlo libremente.
