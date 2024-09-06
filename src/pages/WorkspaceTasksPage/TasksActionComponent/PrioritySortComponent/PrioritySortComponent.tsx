type SortSymbolType = 'ASC' | 'DESC';

const PrioritySortComponent = () => {
  const handleChangeSortType = (type: SortSymbolType) => {
    console.log(type);
  };

  return (
    <>
      <span>
        приоритет
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

export default PrioritySortComponent;