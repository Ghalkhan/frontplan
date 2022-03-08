import React from "react"
import { Login } from "../../component/page/Login"
 
export default function ClientSSR(){
    return <Login login=""/>
}

export async function getServerSideProps() {
    return {
        props:{}
    }
}