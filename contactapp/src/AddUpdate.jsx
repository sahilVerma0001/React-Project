import { ErrorMessage, Field, Form, Formik} from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import * as Yup from "yup";

export default function AddUpdate({isOpen, onClose, isUpdate, contact}) {

    const contactSchemaValidation = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid Email").required("Email is required"),
    });

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, contact);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }
    const UpdateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id)
            await updateDoc(contactRef, contact);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik
                    validationSchema={contactSchemaValidation}
                    initialValues={ 
                        isUpdate ?
                        {
                            name: contact.name,
                            email: contact.email,
                        }:
                        {
                            name: "",
                            email: "",
                        }
                    }
                    onSubmit={(values) =>{
                        console.log(values);
                        isUpdate ? 
                        UpdateContact(values, contact.id):
                        addContact(values);
                    }}
                >
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" id="name" className="border h-10" />
                            <div className="text-red-500">
                                <ErrorMessage name="name"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field name="email" id="email" className="border h-10"/>
                            <div className="text-red-500">
                                <ErrorMessage name="email"/>
                            </div>
                        </div>
                        <button type="submit" className="bg-orange-500 px-3 py-1.5 border self-end">{isUpdate ? "Update" : "Add"} Contact</button>
                    </Form>
                </Formik>
            </Modal>
        </>
    )
}