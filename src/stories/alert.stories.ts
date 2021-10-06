// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FyAlertComponent } from 'src/app/shared/components/fy-alert/fy-alert.component';

export default {
  title: 'Core/Alert',
  component: FyAlertComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [FyAlertComponent],
      imports: [IonicModule.forRoot(), MatIconModule],
    }),
  ],
} as Meta;

const Template: Story<FyAlertComponent> = (args: FyAlertComponent) => ({
  component: FyAlertComponent,
  props: args,
  template: `<app-fy-alert [message]=message [type]=type></app-fy-alert>`,
});

export const Default = Template.bind({});
Default.args = {
  message: 'xyz',
  type: 'warning',
};
