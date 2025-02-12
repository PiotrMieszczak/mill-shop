import { StoryFn, Meta } from '@storybook/angular';
import { colorUtilities } from './colorUtils';

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
        styles: [
          `
            .palette {
              font-family: Arial, sans-serif;
              background: var(--system-default);
              color: var(--system-negative);
              padding: 32px;
            }
    
            h1 {
              font-size: 24px;
              margin-bottom: 16px;
             color: var(--system-negative);
            }
    
            h2 {
              font-size: 20px;
              margin-bottom: 8px;
          color: var(--system-negative);
            }
    
            .color-row {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
              gap: 24px;
              margin-bottom: 32px;
              align-items: start;
            }
    
            .color-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
    
            .color-box {
              width: 120px;
              height: 80px;
             border: 1px solid var(--system-negative);
            }
    
            .color-details {
                display: flex;
                flex-direction: column;
                align-items: self-start;
                gap: 6px
          
            }
    
            .color-label {
              font-weight: bold;
              display: block;
              margin-top: 4px;
               font-size: 16px;
                 color: var(--system-negative);
            }
    
            .color-value,
            .color-class {
              font-size: 12px;
              color: var(--neutral-3);
              display: block;
            }
          `,
        ],
      };
};
