import React from 'react';

export function handleExternalLinkClick(
  event: React.MouseEvent<HTMLElement>,
  confirmMessage: string,
) {
  const element = event.currentTarget as HTMLElement;
  const href = element.getAttribute('href') || '';

  if (!/^https?:\/\//i.test(href)) {
    return;
  }

  if (!window.confirm(confirmMessage)) {
    event.preventDefault();
    event.stopPropagation();
  }
}
