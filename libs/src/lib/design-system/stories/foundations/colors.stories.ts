import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
// import '../../lib/design-system/foundations/colors';

export default {
  title: 'Foundations/Colors',
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;


export const Colors: StoryFn  = () => ({
  template: `
    <div class="color-box primary"></div>
    <div class="color-box secondary"></div>
    <div class="color-box neutral"></div>
  `,
  styles: [`
    .color-box {
      width: 100px;
      height: 100px;
      display: inline-block;
      margin: 8px;
    }
    .primary { background-color: var(--primary-5); }
    .secondary { background-color: var(--secondary-5); }
    .neutral { background-color: var(--neutral-5); }
  `]
});
