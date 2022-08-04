import { Node } from './Node';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nunc id cursus metus aliquam eleifend mi in. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Tristique sollicitudin nibh sit amet commodo nulla. Hac habitasse platea dictumst quisque sagittis purus sit amet. Duis at consectetur lorem donec. Integer eget aliquet nibh praesent tristique magna sit amet purus. Nisi lacus sed viverra tellus in hac habitasse. Volutpat commodo sed egestas egestas. Magna fermentum iaculis eu non diam. Amet consectetur adipiscing elit duis tristique. Pretium viverra suspendisse potenti nullam ac. Pharetra massa massa ultricies mi quis hendrerit dolor. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Maecenas volutpat blandit aliquam etiam. Turpis in eu mi bibendum neque egestas. Dolor sit amet consectetur adipiscing elit. Augue eget arcu dictum varius.';

const sentences = text.split('. ');

class RichTextNode {
  constructor({ content = {}, data = {}, type } = {}) {
    this.content = content;
    this.data = data;
    this.nodeType = type;
  }
}

class Document extends RichTextNode {
  constructor(props) {
    super({ ...props, type: 'document' });
  }
}

export class Paragraph extends RichTextNode {
  constructor(props) {
    super({ ...props, type: 'paragraph' });
  }
}

export class Hyperlink extends RichTextNode {
  constructor({ data = {}, ...props } = {}) {
    const { uri = 'https://syrianmusic.org' } = data;
    super({ data: { ...data, uri }, ...props, type: 'hyperlink' });
  }
}

export class Text {
  constructor({ data = {}, marks = [], value = sentences[0] } = {}) {
    this.nodeType = 'text';
    this.data = data;
    this.marks = marks;
    this.value = value;
  }
}

const defaultContent = [
  new Paragraph({
    content: [
      new Text({
        value: `Default: ${sentences[0]}. `,
      }),
      new Hyperlink({
        content: [new Text({ value: `Link: ${sentences[4]}.` })],
      }),
      new Text({
        value: ` Italic: ${sentences[1]}.`,
        marks: [{ type: 'italic' }],
      }),
      new Text({
        value: ` Bold: ${sentences[2]}. `,
        marks: [{ type: 'bold' }],
      }),
      new Text({
        value: `Underline: ${sentences[3]}.`,
        marks: [{ type: 'underline' }],
      }),
    ],
  }),
];

export class RichText extends Node {
  constructor({ content = defaultContent, ...props } = {}) {
    super(props);
    this.json = new Document({ content });
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
