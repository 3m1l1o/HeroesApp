import { useFetch } from "../Hooks/useFetch"

export const MultipleCustomHook = () => {

  const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/2');

useFetch();
  return (
    <>
    <h1>Informacion del Pokemon</h1>
    <hr />
    {/*<pre>{ JSON.stringify( data, null, 2 )}</pre>*/}
    <h1>{ data?.name }</h1>
    
    { isLoading && <p>cargando...</p> }
    
    <h2>{ data?.name }</h2>

    </>
  )
}