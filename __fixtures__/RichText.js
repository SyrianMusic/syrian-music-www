import { Node } from './Node';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nunc id cursus metus aliquam eleifend mi in. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Tristique sollicitudin nibh sit amet commodo nulla. Hac habitasse platea dictumst quisque sagittis purus sit amet. Duis at consectetur lorem donec. Integer eget aliquet nibh praesent tristique magna sit amet purus. Nisi lacus sed viverra tellus in hac habitasse. Volutpat commodo sed egestas egestas. Magna fermentum iaculis eu non diam. Amet consectetur adipiscing elit duis tristique. Pretium viverra suspendisse potenti nullam ac. Pharetra massa massa ultricies mi quis hendrerit dolor. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Maecenas volutpat blandit aliquam etiam. Turpis in eu mi bibendum neque egestas. Dolor sit amet consectetur adipiscing elit. Augue eget arcu dictum varius.';

const sentences = text.split('. ');

export class RichText extends Node {
  constructor({ ...props } = {}) {
    super(props);
    // TODO: Divide into fixtures
    this.json = {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: `Default: ${sentences[0]}.`,
              marks: [],
              data: {},
            },
            {
              nodeType: 'hyperlink',
              data: {
                uri: 'https://syrianmusic.org',
              },
              content: [
                {
                  nodeType: 'text',
                  value: ` Link: ${sentences[4]}.`,
                  marks: [],
                  data: {},
                },
              ],
            },
            {
              nodeType: 'text',
              value: ` Italic: ${sentences[1]}.`,
              marks: [{ type: 'italic' }],
              data: {},
            },
            {
              nodeType: 'text',
              value: ` Bold: ${sentences[2]}.`,
              marks: [{ type: 'bold' }],
              data: {},
            },
            {
              nodeType: 'text',
              value: ` Underline: ${sentences[3]}.`,
              marks: [{ type: 'underline' }],
              data: {},
            },
          ],
        },
      ],
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
