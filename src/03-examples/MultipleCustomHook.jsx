import { useFetch } from "../Hooks"

export const MultipleCustomHook = () => {

  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/ditto`); //hasError

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