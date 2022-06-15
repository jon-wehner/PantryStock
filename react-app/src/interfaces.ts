export interface Item {
  id: number,
  name: string,
  fridge: boolean,
  categoryId: number
}
export interface InventoryItemInterface {
  id: number,
  quantity: number,
  expirationDate: string,
  measurement: {
    id: number,
    unit: string
  },
  item: Item
}
