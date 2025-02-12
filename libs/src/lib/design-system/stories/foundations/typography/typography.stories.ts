import { Meta, StoryFn } from '@storybook/angular';
import { typographyUtilities } from './typography.utils';
import './typography.stories.scss';

export default {
  title: 'Foundation/Typography',
} as Meta;

export const Typography: StoryFn = () => ({
  // The template uses Angular bindings.
  template: `
    <div class="typography-palette" [ngClass]="view">
      <h1>Typography System</h1>
      <div class="typography-tabs">
        <button 
          class="tab-button" 
          [class.active]="view==='mobile'" 
          (click)="view='mobile'">
          Mobile
        </button>
        <button 
          class="tab-button" 
          [class.active]="view==='desktop'" 
          (click)="view='desktop'">
          Desktop
        </button>
      </div>
      <table class="typography-table">
        <thead>
          <tr>
            <th>Sample</th>
            <th>Type</th>
            <th *ngIf="view==='mobile'">Class</th>
            <th *ngIf="view==='desktop'">Class</th>
            <th *ngIf="view==='mobile'">Mobile Font Size</th>
            <th *ngIf="view==='desktop'">Font Size</th>
            <th *ngIf="view==='mobile'">Line Height</th>
            <th *ngIf="view==='desktop'">Line Height</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let util of typographyUtilities">
            <td class="typography-cell">
              <div *ngIf="view==='mobile'" 
                   class="typography-sample" 
                   [ngStyle]="{'font-size': util.mobileFontSize, 'line-height': util.mobileLineHeight}">
                {{ util.type }}
              </div>
              <div *ngIf="view==='desktop'" 
                   class="typography-sample" 
                   [ngStyle]="{'font-size': util.desktopFontSize, 'line-height': util.desktopLineHeight}">
                {{ util.type }}
              </div>
            </td>
            <td class="typography-cell"><code>{{ util.type }}</code></td>
            <td class="typography-cell" *ngIf="view==='mobile'">
              <code>{{ util.mobileClassName }}</code>
            </td>
            <td class="typography-cell" *ngIf="view==='desktop'">
              <code>{{ util.desktopClassName }}</code>
            </td>
            <td class="typography-cell" *ngIf="view==='mobile'">{{ util.mobileFontSize }}</td>
            <td class="typography-cell" *ngIf="view==='desktop'">{{ util.desktopFontSize }}</td>
            <td class="typography-cell" *ngIf="view==='mobile'">{{ util.mobileLineHeight }}</td>
            <td class="typography-cell" *ngIf="view==='desktop'">{{ util.desktopLineHeight }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  props: {
    // Initialize the view property to 'mobile'
    view: 'mobile',
    typographyUtilities,
  },
});
