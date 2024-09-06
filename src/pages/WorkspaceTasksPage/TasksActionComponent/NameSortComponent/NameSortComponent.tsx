type SortSymbolType = 'ASC' | 'DESC';


const NameSortComponent = () => {
  const handleChangeSortType = (type: SortSymbolType) => {
    console.log(type);
  };

  return (
    <>
      <span>
        название
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

export default NameSortComponent;