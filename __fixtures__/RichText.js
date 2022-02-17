import { Node } from './Node';

export class RichText extends Node {
  constructor({ ...props } = {}) {
    super(props);
    this.json = {
      data: {},
      content: [],
      nodeType: 'document',
    };
    this.links = {
      entries: {
        inline: [],
        hyperlink: [],
        block: [],
      },
      assets: {
        hyperlink: [],
        block: [],
      },
    };
  }
}
