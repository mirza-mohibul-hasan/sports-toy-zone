import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title} - SPORTS TOY ZONE`;
    },[title])
}
export default useTitle;