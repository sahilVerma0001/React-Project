import { AiOutlineClose } from "react-icons/ai";
import  {createPortal} from "react-dom";


export default function Modal({onClose, isOpen, children}){
    return createPortal(
        <>
            {isOpen && (
            
            <div className="grid place-items-center absolute backdrop-blur h-screen w-screen z-60 top-0">
                <div className="min-h-[200px] m-auto relative z-80  min-w-[80%] bg-white p-4">
                    <div className="flex justify-end" >
                    <AiOutlineClose onClick={onClose} className="text-2xl"/>
                    </div>
                    {children}
                </div>
            </div>
            
            )}
        </>, 
        document.getElementById("model-root")
    );
};