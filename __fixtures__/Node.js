import { v4 as uuidv4 } from 'uuid';

class Sys {
  constructor({ id = null } = {}) {
    this.id = id || uuidv4();
  }
}

export class Node {
  constructor({ id } = {}) {
    this.sys = new Sys({ id });
  }
}
