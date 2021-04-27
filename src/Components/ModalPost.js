import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Selectuser from '../Components/SelectUser'
import { useForm } from 'react-hook-form'

function ModalPost({ toggle, isOpen, save, changeUser }) {

    const { register, handleSubmit, match, errors } = useForm();

    return <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>
            <h6>Add Posts</h6>
        </ModalHeader>
        <ModalBody>
            <form id={"post-form"} onSubmit={handleSubmit(save)}>
                <input placeholder="Title" className={"form-control  my-2"} type="text" name={'title'} ref={register} />
                <Selectuser onChange={changeUser} name={'user'} />
                <textarea className="form-control my-2" name={'body'} ref={register}></textarea>
            </form>
        </ModalBody>
        <ModalFooter>
            <button form={'post-form'} className="btn btn-outline-primary" type={'submit'}>Save</button>
            <button className="btn btn-outline-primary" type={'button'} onClick={toggle}>Cancel</button>
        </ModalFooter>
    </Modal>
}

export default ModalPost