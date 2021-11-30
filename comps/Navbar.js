import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul className="flex">
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/random"><a>Random</a></Link>
                </li>
                <li>
                    <Link href="/type"><a>Type</a></Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;