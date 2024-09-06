import { useCallback, useState } from 'react';

const TagFilterComponent = () => {
  const [tag, setTag] = useState('');

  const handleFilter = useCallback(() => {

  }, [])

  return (
    <>
      <input
        type="text"
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
          handleFilter()
        }}
        placeholder='Фильтр по метке'
      />
    </>
  )
}

export default TagFilterComponent;