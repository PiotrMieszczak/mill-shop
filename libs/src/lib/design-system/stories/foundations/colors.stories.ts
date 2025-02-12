import { StoryFn, Meta } from '@storybook/angular';
import { colorUtilities } from './colorUtils';

export default {
  title: 'Design System/Colors',
} as Meta;

export const Colors: StoryFn = () => {
  const colorRows = colorUtilities
    .map(
      ({ cssVar, scssVar, textClass, borderClass }) => `
      <tr>
        <td style="padding: 8px;">
          <div class="color-swatch" style="background-color: var(${cssVar});"></div>
        </td>
        <td style="padding: 8px;">${cssVar}</td>
        <td style="padding: 8px;">${scssVar}</td>
        <td style="padding: 8px;">${textClass}</td>
        <td style="padding: 8px;">${borderClass}</td>
      </tr>
    `
    )
    .join('');

  return {
    template: `
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th style="padding: 8px; text-align: left;">Color</th>
            <th style="padding: 8px; text-align: left;">CSS Variable</th>
            <th style="padding: 8px; text-align: left;">SCSS Variable</th>
            <th style="padding: 8px; text-align: left;">Text Class</th>
            <th style="padding: 8px; text-align: left;">Border Class</th>
          </tr>
        </thead>
        <tbody>
          ${colorRows}
        </tbody>
      </table>
    `,
    styles: [
        `
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          font-family: Arial, sans-serif;
          margin: 25px 0;
          font-size: 0.9em;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .styled-table thead tr {
          background-color: #009879;
          color: #ffffff;
          text-align: left;
        }
        .styled-table th,
        .styled-table td {
          padding: 12px 15px;
          border: 1px solid #dddddd;
        }
        .styled-table tbody tr {
          border-bottom: 1px solid #dddddd;
        }
        .styled-table tbody tr:nth-of-type(even) {
          background-color: #f3f3f3;
        }
        .styled-table tbody tr:last-of-type {
          border-bottom: 2px solid #009879;
        }
        .styled-table tbody tr:hover {
          background-color: #f1f1f1;
        }
        .color-swatch {
          width: 50px;
          height: 50px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
      `,
    ],
  };
};
