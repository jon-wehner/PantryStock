export interface Category {
  id: number,
  name: string
}

export interface User {
  id: number,
  email: string,
  username: string
}
export interface Item {
  id: number,
  name: string,
  fridge: boolean,
  categoryId: number
  category?: Category
}
export interface Measurement {
  id: number,
  unit: string
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

export interface NewInventoryItemInterface {
  itemId: number,
  measurementId: number,
  quantity: number,
  userId: number | null,
  expirationDate: string | null
  measurement?: Measurement,
  item?: Item
}

export interface ShoppingListItemInterface {
  id: number,
  quantity: number,
  inCart: boolean,
  shoppingListId: number,
  measurement: Measurement,
  item: Item
}

export interface ShoppingListItemData {
  id: number | null,
  measurementId: number,
  quantity: number,
  shoppingListId: string | undefined,
  itemId: number,
  method: string
}

export interface ShoppingListInterface {
  id: number,
  items: ShoppingListItemInterface[],
  name: string,
  userId: number
}

export interface CartItem {
  id: number,
  quantity: number,
  inCart: boolean,
  shoppingListId: number,
  userId: number,
  measurementId: number
  itemId: number
  measurement?: Measurement,
  item?: Item
}
