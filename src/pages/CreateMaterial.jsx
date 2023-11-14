import toast from 'react-hot-toast';
import { MaterialEditorForm } from 'components/MaterialEditorForm/MaterialEditorForm';
import { BackLink } from 'components/BackLink/BackLink';
import { useAddContactMutation } from 'redux/contactsSlice';

export const CreateMaterialPage = () => {
  const [addContact] = useAddContactMutation();

  const handleAddContact = async values => {
    try {
      await addContact(values);
      toast.success('Контакт добавлен');
    } catch (error) {
      toast.error('Ошибка при добавлении контакта');
      console.log(error);
    }
  };

  return (
    <>
      <BackLink href="/list" label="К списку контактов" />
      <MaterialEditorForm
        btnText="Добавить контакт"
        onSubmit={handleAddContact}
      />
    </>
  );
};
