import { StoryFn, Meta } from '@storybook/angular';
import { spacingUtilities } from './space.utils';
import './space.stories.scss';

export default {
  title: 'Foundation/Spacing',
} as Meta;


export const Spacing: StoryFn = () => {
  const spacingRows = spacingUtilities
    .map(({ cssVar, scssVar, className, property, px, rem }) => `
      <tr>
        <td class="spacing-cell"><code>${cssVar}</code></td>
        <td class="spacing-cell"><code>${scssVar}</code></td>
        <td class="spacing-cell">${px}</td>
        <td class="spacing-cell">${rem}</td>
        <td class="spacing-cell">${className}</td>
        <td class="spacing-cell">${property}</td>
       <td class="spacing-cell">
          <div class="spacing-box" style="width: ${px}; height: ${px};"></div>
        </td>
      </tr>
    `)
    .join('');

  return {
    template: `
      <div class="spacing-palette">
        <h1>Spacing System</h1>
        <table class="spacing-table">
          <thead>
            <tr>
              <th>CSS Variable</th>
              <th>SCSS Variable</th>
              <th>Size px</th>
              <th>Size rem</th>
              <th>Class</th>
              <th>Property</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            ${spacingRows}
          </tbody>
        </table>
      </div>
    `,
  };
};
