import { Node } from './Node';

export class Asset extends Node {
  constructor({ width, height, url, ...props } = {}) {
    super(props);
    this.width = width;
    this.height = height;
    this.url = url;
  }
}

export class Image extends Asset {
  constructor({ height = 200, width = 200, ...props } = {}) {
    const url = props.url || `https://via.placeholder.com/${width}x${height}`;
    super({ height, width, url, ...props });
  }
}

export class PDF extends Asset {
  constructor({ url = '', ...props } = {}) {
    super({ url, ...props });
  }
}
