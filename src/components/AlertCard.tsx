import { AlertData } from '@/lib/types';

interface AlertCardProps {
  alert: AlertData;
  compact?: boolean;
}

export default function AlertCard({ alert, compact = false }: AlertCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return '#88B985';
      case 'alert':
        return '#F4A460';
      case 'danger':
        return '#E74C3C';
      default:
        return '#88B985';
    }
  };

  const getStatusIcon = (status: string) => {
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
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hr ago`;
    return `${diffDays} days ago`;
  };

  if (compact) {
    return (
      <div
        className="bg-white rounded-lg p-4 border-l-4 shadow-card"
        style={{ borderLeftColor: getStatusColor(alert.status) }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
            style={{ backgroundColor: getStatusColor(alert.status) }}
          >
            {getStatusIcon(alert.status)}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-[13px] uppercase mb-1">
              {alert.status === 'danger' ? 'FLOOD WARNING' :
               alert.status === 'alert' ? 'CYCLONE ALERT' :
               'NORMAL CONDITIONS'}
            </h4>
            <p className="text-[12px] text-gray-700 mb-2 line-clamp-2">
              {alert.description}
            </p>
            <p className="text-[11px] text-gray-500">
              {alert.city} - {formatTimestamp(alert.timestamp)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-lg p-5 border-l-4 shadow-card hover:shadow-md transition-shadow"
      style={{ borderLeftColor: getStatusColor(alert.status) }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[16px] font-bold"
            style={{ backgroundColor: getStatusColor(alert.status) }}
          >
            {getStatusIcon(alert.status)}
          </div>
          <div>
            <h4 className="font-bold text-[14px]">{alert.city}</h4>
            <p className="text-[11px] text-gray-500">{alert.state}</p>
          </div>
        </div>
        <span
          className="text-[11px] font-bold uppercase px-2 py-1 rounded"
          style={{
            backgroundColor: getStatusColor(alert.status) + '20',
            color: getStatusColor(alert.status)
          }}
        >
          {alert.status}
        </span>
      </div>

      <p className="text-[12px] text-gray-700 mb-3">
        {alert.description}
      </p>

      <div className="grid grid-cols-2 gap-2 mb-3 text-[11px]">
        {alert.rainfall > 0 && (
          <div className="bg-blue-50 px-2 py-1 rounded">
            <span className="text-gray-600">Rainfall:</span>{' '}
            <span className="font-semibold">{alert.rainfall} mm/hr</span>
          </div>
        )}
        {alert.riverLevel !== 0 && (
          <div className="bg-blue-50 px-2 py-1 rounded">
            <span className="text-gray-600">River:</span>{' '}
            <span className="font-semibold">{alert.riverLevel > 0 ? '+' : ''}{alert.riverLevel}m</span>
          </div>
        )}
        {alert.earthquakeMagnitude > 0 && (
          <div className="bg-orange-50 px-2 py-1 rounded">
            <span className="text-gray-600">Earthquake:</span>{' '}
            <span className="font-semibold">{alert.earthquakeMagnitude}</span>
          </div>
        )}
      </div>

      <div className="text-[11px] text-gray-500 pt-2 border-t">
        Updated: {formatTimestamp(alert.timestamp)}
      </div>
    </div>
  );
}
