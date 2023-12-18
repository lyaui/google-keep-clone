import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { PALETTE_COLORS } from '@/constants/paletteColors';
import { THEME, VIEW_MODE, SORT } from '@/constants/UI';

export interface ResError {
  success: false;
  message: string;
}

export type Params = Record<string, any>;

export type MemoImage = string;

export interface MemoLabel {
  _id: string;
  name: string;
}
export interface MemoLink {
  _id?: string;
  title: string;
  url: string;
  image?: string;
}

export interface MemoTask {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface DraftMemo {
  title: string;
  content: string;
  images: MemoImage[];
  isTaskList: boolean;
  isPinned: boolean;
  isArchived: boolean;
  links: MemoLink[];
  labels: MemoLabel[];
  tasks: MemoTask[];
  color: Color;
}
export interface Memo extends DraftMemo {
  _id: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
  isTaskList: boolean;
  isPinned: boolean;
  isArchived: boolean;
  __v: number;
}

export type TooltipContent = keyof typeof TOOLTIP_TEXT;

export type Color = keyof typeof PALETTE_COLORS;

export type Theme = keyof typeof THEME;

export type ViewMode = keyof typeof VIEW_MODE;

export type Sort = keyof typeof SORT;
