import './Navigation.css'
export default function Navigation(){
    return ( 
        <nav className='container'>
            <div className="logo">
                <img src="public\images\dosomelogo.png" alt="do something code logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}