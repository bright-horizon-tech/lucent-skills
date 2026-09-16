import type { Mode } from '../types';

interface WorldBadgeProps {
  mode: Mode;
}

export default function WorldBadge({ mode }: WorldBadgeProps) {
  return (
    <div className="world-badge" id="worldBadge">
      <i />
      <span id="worldBadgeText">
        {mode === 'agency' ? 'Agency World' : 'Brand World'}
      </span>
    </div>
  );
}
