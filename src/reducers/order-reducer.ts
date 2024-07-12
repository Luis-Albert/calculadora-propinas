import { MenuItem } from "../types"


export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { item: MenuItem } }