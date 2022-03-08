import React from "react"
import { Login } from "../../component/page/Login"
import Register from "../../component/page/Register"

export default function ClientSSR(){
    return <Register />
}

export async function getServerSideProps() {
    return {
        props:{}
    }
}