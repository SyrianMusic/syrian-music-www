import { Asset } from './Asset';
import { Collection } from './Collection';
import { Node } from './Node';
import { RichText } from './RichText';

export class Event extends Node {
  constructor({
    name = 'Event name',
    startDate = new Date(Date.now()).toISOString(),
    location = 'Location',
    image = new Asset(),
    summary = new RichText(),
    url = '#',
    ...props
  } = {}) {
    super(props);
    this.name = name;
    this.startDate = startDate;
    this.location = location;
    this.image = image;
    this.summary = summary;
    this.url = url;
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
