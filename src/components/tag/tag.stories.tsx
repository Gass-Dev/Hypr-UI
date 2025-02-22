import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    // Ajoutez ici les props nécessaires pour Tag
  },
};