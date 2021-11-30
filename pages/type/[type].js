import { useRouter } from 'next/router'
import Random from '../../comps/Random';

const borredtype = () => {
    const { query } = useRouter();
    let type = query.type

    console.log("type: " + type)

    return (
        <>
            <h1 className="big">{ type }</h1>
            <Random path={"?type=" + type} />
        </>
    );    
}
 
export default borredtype;