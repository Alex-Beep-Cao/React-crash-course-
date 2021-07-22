const Delete = ({ ta, onDelete }) => {
  return (
    <div>
      <button onClick={() => onDelete(ta.id)}> delete</button>
    </div>
  );
};

export default Delete;
