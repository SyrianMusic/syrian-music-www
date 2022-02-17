class Sys {
  constructor({ id = 'id' } = {}) {
    this.id = id;
  }
}

export class Node {
  constructor({ id } = {}) {
    this.sys = new Sys({ id });
  }
}
