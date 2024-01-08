import React from 'react';
import '../hojas-de-estilo/Testimonio.css'; /*importamos la hoja de estilo para que el estilo se aplique al componente*/

//este es un componente de react que es dinámico, se crea una sola vez, esto crea un rectángulo grande con un contenedor más pequeño, que tiene una foto y párrafos

//para que un componente se muestre en la aplicación esta debe crear o renderizar ese componente para mostrarlo, esto se hace en el archivo app.js importándolo.

function Testimonio(props) { /*props significa propiedades, si queremos que el componente reciba propiedades entonces se deben definir aquí, entre paréntesis, es similar a los argumentos y parámetros de javascript*/

  return ( //aquí se define cuál será la estructura inicial
    <div className='contenedor-testimonio'> {/*este será el contenedor principal, el rectangulo blanco que se ve grande, no se puede usar class, sino que className*/}
      <img //luego tenemos una imagen, notar que no hay etiqueta de cierre
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        /*los dos puntitos significan que debe subir un nivel y luego bajar otro buscando la carpeta imagenes*/
        alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>{/**es un contenedor dentro del contenedor principal que contiene el texto del testimonio */}
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

/*Los props.algo se inventan y se escriben entre llaves porque son código de javascript*/
/**alguien debe enviarle props, en este caso el componente que lo renderiza, o sea app.js */






export default Testimonio; //exportamos el componente Testimonio

/*existen las exportaciones nombradas y por defecto (export default):

Por defecto o default, indica que es lo único que se va a exportar de este archivo.
Nombrada, indica que en otro archivo uno tendría que elegir qué componentes quiere exportar y cuáles no para ser utilizados.*/