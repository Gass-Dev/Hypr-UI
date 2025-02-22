import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_example-440x248.jpg',
    title: 'Stream Title',
    subtitle: 'Streamer Name',
    viewers: 1234,
    tags: ['Gaming', 'FPS', 'Français'],
  },
} 