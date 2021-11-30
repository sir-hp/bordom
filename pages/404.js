import Link from 'next/link';
import Head from 'next/head'
import { useEffect  } from 'react';
import { useRouter } from 'next/router';

const notFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, []);
    return (
        <>
        <Head>
            <title>Borredom | Oops</title>
        </Head>
        <div className="notFound">
            <h1>Ooopss...</h1>
            <h2>that page can not be found</h2>
            <p>go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
        </>
    );
}
 
export default notFound;