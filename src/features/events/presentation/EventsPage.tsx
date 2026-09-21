import { useState } from 'react';
import { PageHeader } from '../../../shared/components/PageHeader';
import { mockEvents } from '../../ads/mocks/mockEvents';

export function EventsPage() {
  const [filter, setFilter] = useState('ALL');

  const filteredEvents =
    filter === 'ALL'
      ? mockEvents
      : mockEvents.filter((evt) => evt.type === filter);

  const getEventBadgeClass = (type: string) => {
    switch (type.toUpperCase()) {
      case 'REQUESTED':
        return 'badge-event requested';
      case 'LOADED':
        return 'badge-event loaded';
      case 'IMPRESSION':
        return 'badge-event impression';
      case 'CLICKED':
        return 'badge-event clicked';
      case 'FAILED':
        return 'badge-event failed';
      default:
        return 'badge-event';
    }
  };

  return (
    <div className="events-page">
      <div className="events-header-actions">
        <PageHeader
          eyebrow="EVENTS"
          title="Events"
          description="Real-time ad events log."
        />
        <div className="events-filter-wrapper">
          <select
            className="events-select-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="ALL">All Events</option>
            <option value="REQUESTED">Requested</option>
            <option value="LOADED">Loaded</option>
            <option value="IMPRESSION">Impression</option>
            <option value="CLICKED">Clicked</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Provider</th>
              <th>Placement</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((evt) => (
              <tr key={evt.id}>
                <td className="time-cell">{evt.timestamp}</td>
                <td>
                  <span className={getEventBadgeClass(evt.type)}>
                    ● {evt.type.charAt(0) + evt.type.slice(1).toLowerCase()}
                  </span>
                </td>
                <td className="provider-cell">{evt.providerId}</td>
                <td className="placement-cell">{evt.placementId}</td>
                <td className="details-cell">{evt.details || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}