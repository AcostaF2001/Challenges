import { useEffect, useState } from "react"
import { getGifs } from "./getGifs"

//import { getGifs} from "../helpers/getGifs"


export const GifGrid = ({category}) => {

    const[sal,set] = useState('')

    useEffect( () => {
        console.log(category)
    }, []) //imprime solo cada que se agrega un componente


    const xgifs = async()=>{
        var g= await getGifs(category)
        console.log(g)
        set(JSON.stringify(g))
    }

    return (
        <>
        <h3> { category }  </h3>
        <p> Hello World</p>
        <button onClick={xgifs()}>Click me bitch</button>
        <p>{sal}</p>
        </>

    )
    
}