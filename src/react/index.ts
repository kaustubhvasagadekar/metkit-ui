import { createComponent } from '@lit/react';
import React from 'react';
import { MyButton } from '../components/my-button/my-button';
import { MyInput } from '../components/my-input/my-input';
import { MyCard } from '../components/my-card/my-card';
import { MyBadge } from '../components/my-badge/my-badge';
import { MyTooltip } from '../components/my-tooltip/my-tooltip';
import { MyIcon } from '../components/my-icon/my-icon';
import { MyModal } from '../components/my-modal/my-modal';

export const MkButton = createComponent({
  tagName: 'mk-button',
  elementClass: MyButton,
  react: React,
});

export const MkInput = createComponent({
  tagName: 'mk-input',
  elementClass: MyInput,
  react: React,
});

export const MkCard = createComponent({
  tagName: 'mk-card',
  elementClass: MyCard,
  react: React,
});

export const MkBadge = createComponent({
  tagName: 'mk-badge',
  elementClass: MyBadge,
  react: React,
});

export const MkTooltip = createComponent({
  tagName: 'mk-tooltip',
  elementClass: MyTooltip,
  react: React,
});

export const MkIcon = createComponent({
  tagName: 'mk-icon',
  elementClass: MyIcon,
  react: React,
});

export const MkModal = createComponent({
  tagName: 'mk-modal',
  elementClass: MyModal,
  react: React,
});
