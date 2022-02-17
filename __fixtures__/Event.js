import { Asset } from './Asset';
import { Collection } from './Collection';
import { Node } from './Node';
import { RichText } from './RichText';

export class Event extends Node {
  constructor({
    name = 'Event name',
    startDate = new Date(Date.now()).toISOString(),
    image = new Asset(),
    summary = new RichText(),
    ...props
  } = {}) {
    super(props);
    this.name = name;
    this.startDate = startDate;
    this.image = image;
    this.summary = summary;
  }
}

export class EventCollection extends Collection {
  constructor(
    { events } = {
      events: [new Event()],
    },
  ) {
    super({ items: events });
  }
}
