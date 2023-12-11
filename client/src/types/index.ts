import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { PALETTE_COLORS } from '@/constants/paletteColors';

export interface MemoLabel {
  id: string;
  name: string;
}
export interface MemoLink {
  _id: string;
  title: string;
  url: string;
  image?: string;
}

export type TooltipContent = keyof typeof TOOLTIP_TEXT;

export type Color = keyof typeof PALETTE_COLORS;
