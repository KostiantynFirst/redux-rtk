import { useNavigate } from 'react-router-dom';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const Contact = ({ item }) => {
  const navigate = useNavigate();
  const [deleteMaterial, { isLoading }] = useDeleteContactMutation();

  return (
    <div>
      <p>
        <b>Название:</b> {item.title}
      </p>
      <p>
        <b>Ссылка:</b> {item.link}
      </p>
      <button
        type="button"
        onClick={() => deleteMaterial(item.id)}
        disabled={isLoading}
      >
        Удалить
      </button>
      <button type="button" onClick={() => navigate(`/list/edit/${item.id}`)}>
        Редактировать
      </button>
    </div>
  );
};
