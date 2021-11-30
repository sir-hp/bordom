import Random from "../comps/Random";
import Head from 'next/head'




const randome = () => {
    return (
        <>
        <Head>
            <title>Borredom | Random</title>
        </Head>
        <div>
            <h1>Random</h1>
            <Random path=""/>
        </div>
        </>
    );
}
 
export default randome;