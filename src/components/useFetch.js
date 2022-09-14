import { useState } from "react"
export const getData =async(web) =>{
    const  [url,useState] = useState(web)

    const resp= await fetch(url) //consume la api
    const {data} = await resp.json()
    const gifs = data.map( img =>{
        return{
            data:null,
            isLoading:true,
            hasError:null
        }
    })
}