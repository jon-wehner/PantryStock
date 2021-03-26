export default function InventoryItem({row}) {
  return (
    <li className="pantryListItem">
      <p>
        ({row.quantity})
        {` ${row.measurement.unit}${row.quantity > 1 ? 's of ' : ' of '}`}
        {row.item.name}
      </p>
    </li>
  )
}
