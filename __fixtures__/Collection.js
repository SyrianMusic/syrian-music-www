import { Node } from './Node';

export class Collection extends Node {
  constructor({ items = [], ...props } = {}) {
    super(props);
    this.items = items;
  }

  get total() {
    return this.items.length;
  }
}
