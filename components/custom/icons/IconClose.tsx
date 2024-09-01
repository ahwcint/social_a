import React from 'react';
import { addIcon, Icon } from '@iconify/react';
import theme from '@/lib/hooks/useTheme';

export function IconClose() {
  addIcon('icon', {
    body: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 9C22 9.55228 21.5523 10 21 10H19.75C16.8264 10 14.25 7.8689 14.25 5V4C14.25 3.44772 14.6977 3 15.25 3C15.8023 3 16.25 3.44772 16.25 4V5C16.25 6.54938 17.703 8 19.75 8H21C21.5523 8 22 8.44772 22 9Z" fill="currentColor"></path> <path d="M7.75 20C7.75 20.5523 8.19772 21 8.75 21C9.30228 21 9.75 20.5523 9.75 20V19C9.75 16.1311 7.17358 14 4.25 14H3C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H4.25C6.29698 16 7.75 17.4506 7.75 19V20Z" fill="currentColor"></path> <path d="M14.25 20C14.25 20.5523 14.6977 21 15.25 21C15.8023 21 16.25 20.5523 16.25 20V19C16.25 17.4506 17.703 16 19.75 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14H19.75C16.8264 14 14.25 16.1311 14.25 19V20Z" fill="currentColor"></path> <path d="M4.25 10C7.17358 10 9.75 7.8689 9.75 5V4C9.75 3.44772 9.30228 3 8.75 3C8.19772 3 7.75 3.44772 7.75 4V5C7.75 6.54938 6.29698 8 4.25 8H3C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10H4.25Z" fill="currentColor"></path> </g></svg>`,
  });
  return (
    <Icon
      icon={'icon'}
      width={'16px'}
      height={'16px'}
      stroke={'#000000'}
      style={{ color: theme.colors.primary.DEFAULT }}
    />
  );
}
