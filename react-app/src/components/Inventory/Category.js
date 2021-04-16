import InventoryItem from './InventoryItem'

export default function Category({category, items}) {

  if(!items.length) return null
  return (
    <div>
      <span>
        {category.name}
      </span>
      <ul>
        {items.map(el => <InventoryItem key={el.id} row={el} />)}
      </ul>
    </div>
  )
}
