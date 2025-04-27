import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import {db} from "./config/firebase"
import { collection ,getDocs, onSnapshot } from 'firebase/firestore';
import ContactCard from './ContactCard';
import Modal from './Modal';
import AddUpdate from './AddUpdate';
import useDisclouse from './useDisclouse';
import NotFoundPage from './NotFoundPage';

function App() {
  
  const [contacts, setContacts] = useState([]);
  const {isOpen, onOpen, onClose} = useDisclouse();
  useEffect(()=> {
    const getContacts = async () =>{
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) =>{
          const contactsLists = snapshot.docs.map((doc) => {
            return {
              id:doc.id,
              ...doc.data(),
            }
          });
          setContacts(contactsLists);
          return contactsLists;
        });        
      } catch (error) {
        console.log(error);
      }
    }

    getContacts();
  },[]);

  const filterContact = (e) =>{
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) =>{
        const contactsLists = snapshot.docs.map((doc) => {
          return {
            id:doc.id,
            ...doc.data(),
          }
        });

        const filteredContacts = contactsLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase())
        );


        setContacts(filteredContacts);
        return filteredContacts;
    });
  }


  return (
    <>

      <div className='mx-auto max-w-[370px]'>
        <Navbar/>
        <div className='flex gap-2'>
        <div className='flex relative items-center flex-grow'>
          <FiSearch className='ml-1 absolute text-3xl text-white'/>
          <input type="text" onChange={filterContact} placeholder='Search Contact' className='h-10 flex-grow rounded-md border-white border bg-transparent text-white pl-9' />
        </div>
        <AiFillPlusCircle onClick={onOpen} className='text-5xl cursor-pointer text-white' />
        </div>
        <div className='mt-4 gap-4 flex flex-col'>
        {
          contacts.length <= 0 ? <NotFoundPage/> : contacts.map((contact) =>(
            <ContactCard key={contact.id} contact={contact}/>
          ))
        }
        </div>
      </div>
      <AddUpdate isOpen={isOpen} onClose={onClose}/>

    </>
  )
}

export default App
