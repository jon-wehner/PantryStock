export interface Category {
  id: number,
  name: string
}
export interface Item {
  id: number,
  name: string,
  fridge: boolean,
  categoryId: number
  category?: Category
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

export interface ShoppingList {
  id: number,
  items: [Item],
  name: string,
  userId: number
}

export interface CartItem {
  userId: number,
  itemId: number,
  measurementId: number,
  inCart: boolean,
  item: Item
}

export interface Measurement {
  id: number,
  unit: string
}
