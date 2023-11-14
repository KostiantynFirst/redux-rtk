import { useNavigate, useParams } from 'react-router-dom';
import { MaterialEditorForm } from '../MaterialEditorForm/MaterialEditorForm';
import { Overlay, Modal } from './EditMaterialModal.styled';
import {
    useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactsSlice';

export const EditMaterialModal = () => {
  const { contactId } = useParams();
  const { data: contact } = useGetContactByIdQuery(contactId);
  const [updateContact] = useUpdateContactMutation();
  const navigate = useNavigate();
  const closeModal = () => navigate('/list');

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id: contactId, ...fields });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Modal>
        {contact && (
          <MaterialEditorForm
            initialValues={{ title: contact.name, link: contact.phone }}
            btnText="Сохранить изменения"
            onSubmit={handleUpdateContact}
          />
        )}

        <button type="button" onClick={closeModal}>
          Закрыть
        </button>
      </Modal>
    </Overlay>
  );
};
