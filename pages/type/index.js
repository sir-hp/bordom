import Link from 'next/link'
import style from '../../styles/List.module.css'
import Head from 'next/head'

const Type = () => {
    return (
        <>
        <Head>
            <title>Borredom | Type</title>
        </Head>

        <h1>Type</h1>
        <ul className={style.types}>
            <li className={style.typeList}>
                <Link href="/type/busywork"><a className={style.text}>Busywork</a></Link>
            </li>
            <li className={style.typeList}>
                <Link href="/type/charity"><a className={style.text}>Charity</a></Link>
            </li>
            <li className={style.typeList}>
                <Link href="/type/education"><a className={style.text}>Education</a></Link>
            </li>
            <li className={style.typeList}>
                <Link href="/type/music"><a className={style.text}>Music</a></Link>
            </li>
            <li className={style.typeList}>
                <Link href="/type/social"><a className={style.text}>Social</a></Link>
            </li>
            <li className={style.typeList}>
                <Link href="/type/recreational"><a className={style.text}>Recreational</a></Link>
            </li>
            <li className={style.typeList}>
                <Link href="/type/relaxation"><a className={style.text}>Relaxation</a></Link>
            </li>
        </ul>        
        </>
    );
}
 
export default Type;