const productos = [
    {
      nombre: 'Blush patrick ta',
      descripcion: 'Rubor suave con acabado natural para mejillas radiantes.',
      precio: 1000,
      imagen: 'BLUSH.jpeg'
    },
    {
      nombre: 'Corrector Too Faced',
      descripcion: 'Cubre imperfecciones con textura ligera y acabado uniforme.',
      precio: 700,
      imagen: 'CORRECTOR.jpeg'
    },
    {
      nombre: 'Gloss Dior',
      descripcion: 'Brillo labial hidratante con efecto cristal.',
      precio: 1000,
      imagen: 'GLOSS.jpg'
    }
  ];
  
  const catalogo = document.getElementById('catalogo');
  
  function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';
  
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
  
    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;
  
    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;
  
    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;
  
    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar 💄';
  
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);
  
    return card;
  }
  
  function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
  
  window.onload = renderizarCatalogo;
  
