import router from "next/router";
import styles from '../styles/Home.module.css'
function loginPage(){
    router.push('/login')
}

function welcome() {
    return <><h1>You are In!</h1>
    <button onClick={loginPage}>LogOut</button></>
}
export default welcome;