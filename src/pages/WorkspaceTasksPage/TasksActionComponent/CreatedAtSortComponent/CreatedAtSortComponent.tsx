type SortSymbolType = 'ASC' | 'DESC';


const CreatedAtSortComponent = () => {
  const handleChangeSortType = (type: SortSymbolType) => {
    console.log(type);
  };

  return (
    <>
      <span>
        дата создания
      </span>
      <button onClick={() => handleChangeSortType('DESC')}>
        🔽
      </button>
      <button onClick={() => handleChangeSortType('ASC')}>
        🔼
      </button>
    </>
  );
};

export default CreatedAtSortComponent;