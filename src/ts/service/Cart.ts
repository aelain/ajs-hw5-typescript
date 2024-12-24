import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const itemFound = this._items.find(itemExisting => itemExisting.id === item.id);
        if (itemFound && itemFound.quantity && item.quantity) {
            itemFound.quantity += item.quantity;
        } else {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get totalCost(): number {
        const result: number = this._items.reduce((cost: number, item: Buyable) => {
            if (item.quantity) {
                return cost + item.price * item.quantity;
            }
            return cost + item.price;
        }, 0);
        return result;
    }

    getTotalCostWithDiscount(discount: number): number {
        const totalDiscount = this.totalCost * discount / 100;
        return this.totalCost - totalDiscount;
    }

    remove(id: number): void {
        const foundIndex = this._items.findIndex(item => item.id === id);

        if (foundIndex !== -1) {
            this._items.splice(foundIndex, 1);
        } else {
            console.log('Item not found');
        }
    }

    reduceQuantity(id: number): void {
        const foundItem = this._items.find((item) => item.id === id);

        if (foundItem && foundItem.quantity) {
            if (foundItem.quantity > 1) {
                foundItem.quantity--;
            } else {
                this.remove(id);
            }
        } else {
            console.log('Item not found');
        }
    }
}
