import { useNavigate, useParams } from 'react-router-dom';
import { MaterialEditorForm } from '../MaterialEditorForm/MaterialEditorForm';
import { Overlay, Modal } from './EditMaterialModal.styled';
import {
  useGetMaterialByIdQuery,
  useUpdateMaterialMutation,
} from 'redux/contactsSlice';

export const EditMaterialModal = () => {
  const { contactId } = useParams();
  const { data: contact } = useGetMaterialByIdQuery(contactId);
  const [updateMaterial] = useUpdateMaterialMutation();
  const navigate = useNavigate();
  const closeModal = () => navigate('/list');

  const handleUpdateMaterial = async fields => {
    try {
      await updateMaterial({ id: contactId, ...fields });
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
            onSubmit={handleUpdateMaterial}
          />
        )}

        <button type="button" onClick={closeModal}>
          Закрыть
        </button>
      </Modal>
    </Overlay>
  );
};
