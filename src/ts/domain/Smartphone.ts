import Buyable from './Buyable';

export default class Smartphone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly display: number,
    readonly storageCapacity: number,
    readonly ram: number,
    readonly camera: number,
    readonly battery: number,
    readonly price: number,
    public quantity: number,
  ) { }
}
