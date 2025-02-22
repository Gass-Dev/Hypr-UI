import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './search-bar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    // Ajoutez ici les props nécessaires pour SearchBar
  },
};