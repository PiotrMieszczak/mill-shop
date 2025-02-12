
import { moduleMetadata, type Meta} from '@storybook/angular';
import {ButtonComponent} from '../../../components/button/button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'error'],
      },
      description: 'The button type variant',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The button size variant',
    },
  },
} as Meta<ButtonComponent>;

export const Primary = () => ({
  component: ButtonComponent,
  props: {
    type: 'primary',
    style: 'primary'
  },
});

// const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
//     component: ButtonComponent,
//     props: args,
//   });
  
//   export const Primary = Template.bind({});
//   Primary.args = {
//     type: 'primary',

//   };
  
//   export const Secondary = Template.bind({});
//   Secondary.args = {
//     type: 'secondary',
//     size: 'small',
//   };
  
//   export const Success = Template.bind({});
//   Secondary.args = {
//     type: 'success',
//     size: 'small',
//   };

//   export const Error = Template.bind({});
//   Secondary.args = {
//     type: 'error',
//     size: 'small',
//   };

  
//   export const Small = Template.bind({});
//   Small.args = {
//     size: 'small',
//     type: 'primary',
//   };

//   export const Medium = Template.bind({});
//   Small.args = {
//     size: 'medium',
//     type: 'primary',
//   };

//   export const Large = Template.bind({});
//   Large.args = {
//     size: 'large',
//     type: 'primary',

//   };