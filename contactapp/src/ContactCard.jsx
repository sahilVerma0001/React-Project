import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "./config/firebase";
import AddUpdate from "./AddUpdate";
import useDisclouse from "./useDisclouse";

export default function ContactCard({contact}) {
    const {isOpen, onOpen, onClose} = useDisclouse();

    const deleteContact = async (id) =>{
      try {
        await deleteDoc(doc(db, "contacts", id));
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <div key={contact.id} className="bg-yellow-100 justify-between items-center flex rounded-lg p-2">
              <div className="flex gap-2">
                <HiOutlineUserCircle className='text-orange-500 text-4xl' />
                <div className="">
                  <h1 className="font-medium">{contact.name}</h1>
                  <p className="text-sm">{contact.email}</p>
                </div>
              </div>
              <div className="flex text-3xl">
                <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
                <IoMdTrash onClick={() =>deleteContact(contact.id)} className='text-orange-500 cursor-pointer' />

              </div>
        </div>
        <AddUpdate contact={contact} isUpdate onClose={onClose} isOpen={isOpen}/>
      </>
    )
}