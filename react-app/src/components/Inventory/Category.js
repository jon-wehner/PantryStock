import InventoryItem from './InventoryItem'

export default function Category({category, items}) {

  if(!items.length) return null
  return (
    <table className="pantryTable">
      <caption>
        {category.name}
      </caption>
      <thead>
        <tr>
          <th>Qty</th>
          <th>Item</th>
          <th>Expires</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => <InventoryItem key={el.id} row={el} />)}
      </tbody>
    </table>
  )
}
