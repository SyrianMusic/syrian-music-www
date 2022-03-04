import { Node } from './Node';

export class Maqam extends Node {
  constructor({ name = 'Maqam', ...props } = {}) {
    super(props);
    this.name = name;
  }
}
