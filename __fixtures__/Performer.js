import { Collection } from './Collection';
import { Image } from './Asset';
import { Node } from './Node';

export class Performer extends Node {
  constructor({
    name = 'First Last',
    roles = ['Role1', 'Role2'],
    image = new Image({ width: 346, height: 326 }),
    biography = {},
    ...props
  } = {}) {
    super(props);
    this.name = name;
    this.roles = roles;
    this.image = image;
    this.biography = biography;
  }
}

export class PerformerCollection extends Collection {
  constructor({ performers = [new Performer()] } = {}) {
    super({ items: performers });
  }
}
