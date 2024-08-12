/* Uso básico de JSX */
/* Nombre de componenten siempre inicia con mayus y el contenido debe estar dentro de un elemento raiz */
/* El elemento raiz puede ser un div o devolver un array con return [HTML CODE]*/
const App1 = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a+b);

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b} {/*Las llaves hacen que los valores se evaluen y se puedan insertar en HTML*/}
      </p>
    </div>
  )
}

/* Componentes múltiples */
const Hello1 = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App2 = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello1 /> {/* Variable JS utilizada como componente HTML */}
      <Hello1 />
      <Hello1 />
    </div>
  )
}

/* Props - Datos a componentes */
const HelloN = (props) => {
  return(
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const Hello = (props) => {
  console.log(props);
  return(
    <div>
      <p> {/* Si es un valor calculado o producto de un metodo usar {} */}
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

/* Es posible devolver el componente usando fragments <></> elemento vacio */
const App3 = () => {
  const name = 'Peter';
  const age = 10;
  return(
    <>
      <h1>Greetings</h1>
      <HelloN name='George' />{/* Pasando parametro para creacion de componente */}
      <HelloN name='Daisy' />
      <Hello name='Maya' age={26+10}/>
      <Hello name={name} age={age}/>
    </>
  )
}

/* Las cosas a renderizar (que se envian al DOM), deben ser valores primitivos, los objetos dan error */
const App = () => {
  const friends = [
    {name: 'Peter', age: 4},
    {name: 'Maya', age: 10},
  ];

  return (
    <>
      <p>Hello {friends[0].name}, you are {friends[0].age} years old</p>
      <p>Hello {friends[1].name}, you are {friends[1].age} years old</p>
    </>
  )
}

export default App
