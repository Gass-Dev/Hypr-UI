import type { Meta, StoryObj } from '@storybook/react';
import { CardDetail } from './card-detail';

const meta: Meta<typeof CardDetail> = {
  title: 'Components/CardDetail',
  component: CardDetail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardDetail>;

export const Default: Story = {
  args: {
    // Ajoutez ici les props nécessaires pour CardDetail
  },
};