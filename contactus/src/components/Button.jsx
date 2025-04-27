import './Button.css'
export default function Button({isoutline, text, icon}){
    return (
        <button className= {isoutline? 'outline_btn' : 'primary_btn'}>
            {icon ? <img src='public\images\message.png' alt='message-logo'></img>:<img src='public\images\phone.png' alt='phone-logo'></img>}
            {text} 
        </button>
    )
}