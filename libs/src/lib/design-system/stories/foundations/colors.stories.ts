import { StoryFn, Meta } from '@storybook/angular';
import { colorUtilities } from './colorUtils';
import './colors.stories.scss';

export default {
  title: 'Design System/Colors',
} as Meta;

export const Colors: StoryFn = () => {
    const colorSections = [
        { title: 'Primary Colors', filter: 'primary' },
        { title: 'Secondary Colors', filter: 'secondary' },
        { title: 'Neutral Colors', filter: 'neutral' },
        { title: 'Status Colors', filter: 'status' },
        { title: 'System Colors', filter: 'system' },
      ];
    
      const sectionsHtml = colorSections
        .map(({ title, filter }) => {
          const filteredColors = colorUtilities.filter((color) => color.category === filter);
    
          if (!filteredColors.length) return '';
    
          const colorBoxes = filteredColors
            .map(
              ({ cssVar, scssVar, textClass, borderClass }) => `
                <div class="color-item">
                  <div class="color-box" style="background-color: var(${cssVar})"></div>
                  <div class="color-details">
                    <span class="color-label">${cssVar.replace('--', '')}</span>
                    <span class="color-value">${cssVar}</span>
                    <span class="color-value">${scssVar}</span>
                    <span class="color-class">${textClass}</span>
                    <span class="color-class">${borderClass}</span>
                  </div>
                </div>
              `
            )
            .join('');
    
          return `
            <section>
              <h2>${title}</h2>
              <div class="color-row">${colorBoxes}</div>
            </section>
          `;
        })
        .join('');
    
      return {
        template: `
          <div class="palette">
            <h1>Color Palette</h1>
            ${sectionsHtml}
          </div>
        `,
      };
};
