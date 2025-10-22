import { AlertStatus } from './types';

/**
 * Get the color for a given alert status
 * Colors match the design reference exactly
 */
export function getStatusColor(status: AlertStatus): string {
  switch (status) {
    case 'safe':
      return '#88B985'; // Safe green
    case 'alert':
      return '#F4A460'; // Alert orange
    case 'danger':
      return '#E74C3C'; // Danger red
    default:
      return '#88B985';
  }
}

/**
 * Get the icon for a given alert status
 */
export function getStatusIcon(status: AlertStatus): string {
  switch (status) {
    case 'safe':
      return '✓';
    case 'alert':
      return '⚠';
    case 'danger':
      return '⚠';
    default:
      return '✓';
  }
}

/**
 * Format timestamp to relative time
 */
export function formatRelativeTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hr ago`;
  return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
}

/**
 * Get alert type label based on status
 */
export function getAlertTypeLabel(status: AlertStatus): string {
  switch (status) {
    case 'danger':
      return 'FLOOD WARNING';
    case 'alert':
      return 'CYCLONE ALERT';
    case 'safe':
      return 'NORMAL CONDITIONS';
    default:
      return 'STATUS UPDATE';
  }
}
