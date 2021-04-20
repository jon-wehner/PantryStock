import ShoppingListItem from './ShoppingListItem'

export default function ShoppingListCategory({category, items}) {
  if (!items.length) return null
  return (
    <table className="table-styled">
      <caption>
        {category.name}
      </caption>
      <thead>
        <tr>
          <th>
            Qty
          </th>
          <th>Item</th>
          <th>Add to Cart</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => <ShoppingListItem key={el.id} row={el} />)}
      </tbody>
    </table>
  )
}
