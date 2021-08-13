import React, {useEffect, useState} from 'react';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import useProductos from '../hooks/useProductos';
import DetallesProducto from '../components/layout/DetallesProducto';

export default function Buscar() {

  const router = useRouter();
  const {queary: {q}} = router;

  // Todos los productos 
  const {productos} = useProductos('creado');
  const [resultado, setResultado] = useState([])

  useEffect(() => {
    const busqueda = q.toLowerCase();
    const filtro = productos.filter(producto => {
      return(
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.descripcion.toLowerCase().includes(busqueda)
      )
    });
    setResultado(filtro)
  }, [q, productos]);

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <div className="bg-white">
              {resultado.map(producto =>(
                <DetallesProducto
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
