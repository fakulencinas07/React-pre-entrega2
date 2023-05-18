import React from 'react'

const Item = ( {producto} ) => {
  return (
    <div className='producto'>
        <img src={producto.imagen} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <a className='ver-mas'href={`/item/${producto.id}`}>Ver detalles</a>
        </div>
    </div>
  )
}

export default Item