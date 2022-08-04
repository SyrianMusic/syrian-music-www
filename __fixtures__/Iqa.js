import { Node } from './Node';

export class Iqa extends Node {
  constructor({ name = 'Iqa', ...props } = {}) {
    super(props);
    this.name = name;
  }
}
