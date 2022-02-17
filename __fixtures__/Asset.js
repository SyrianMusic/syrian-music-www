import { Node } from './Node';

export class Asset extends Node {
  constructor({
    width = 200,
    height = 200,
    url = 'https://via.placeholder.com/200',
    ...props
  } = {}) {
    super(props);
    this.width = width;
    this.height = height;
    this.url = url;
  }
}
