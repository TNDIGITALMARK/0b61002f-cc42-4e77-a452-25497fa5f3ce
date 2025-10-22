'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlertCard from '@/components/AlertCard';
import { mockAlerts } from '@/lib/mockData';
import { AlertStatus } from '@/lib/types';

export default function AlertsPage() {
  const [filter, setFilter] = useState<AlertStatus | 'all'>('all');
  const [sortBy, setSortBy] = useState<'city' | 'status' | 'time'>('time');

  // Filter alerts
  const filteredAlerts = mockAlerts.filter(alert =>
    filter === 'all' ? true : alert.status === filter
  );

  // Sort alerts
  const sortedAlerts = [...filteredAlerts].sort((a, b) => {
    if (sortBy === 'city') {
      return a.city.localeCompare(b.city);
    }
    if (sortBy === 'status') {
      const statusOrder = { danger: 0, alert: 1, safe: 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    }
    // Sort by time (newest first)
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  // Summary statistics
  const stats = {
    total: mockAlerts.length,
    danger: mockAlerts.filter(a => a.status === 'danger').length,
    alert: mockAlerts.filter(a => a.status === 'alert').length,
    safe: mockAlerts.filter(a => a.status === 'safe').length
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-[hsl(214,25%,93%)]">
        {/* Page Header */}
        <div className="bg-white border-b">
          <div className="container-disaster py-6">
            <h1 className="text-[28px] font-bold mb-2">Alert Dashboard</h1>
            <p className="text-[14px] text-gray-600">
              Real-time monitoring of disaster alerts across India
            </p>
          </div>
        </div>

        <div className="container-disaster py-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-5 shadow-card">
              <div className="text-[13px] text-gray-600 mb-1">Total Alerts</div>
              <div className="text-[32px] font-bold">{stats.total}</div>
              <div className="text-[11px] text-gray-500">All regions</div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-card border-l-4 border-red-500">
              <div className="text-[13px] text-gray-600 mb-1">Danger</div>
              <div className="text-[32px] font-bold text-red-600">{stats.danger}</div>
              <div className="text-[11px] text-gray-500">Immediate action required</div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-card border-l-4 border-orange-400">
              <div className="text-[13px] text-gray-600 mb-1">Alert</div>
              <div className="text-[32px] font-bold text-orange-600">{stats.alert}</div>
              <div className="text-[11px] text-gray-500">Stay vigilant</div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-card border-l-4 border-green-500">
              <div className="text-[13px] text-gray-600 mb-1">Safe</div>
              <div className="text-[32px] font-bold text-green-600">{stats.safe}</div>
              <div className="text-[11px] text-gray-500">Normal conditions</div>
            </div>
          </div>

          {/* Filters and Controls */}
          <div className="bg-white rounded-lg p-5 shadow-card mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold">Filter:</span>
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 text-[12px] font-medium rounded-md transition-all ${
                    filter === 'all'
                      ? 'bg-[hsl(207,39%,29%)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({stats.total})
                </button>
                <button
                  onClick={() => setFilter('danger')}
                  className={`px-3 py-1.5 text-[12px] font-medium rounded-md transition-all ${
                    filter === 'danger'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Danger ({stats.danger})
                </button>
                <button
                  onClick={() => setFilter('alert')}
                  className={`px-3 py-1.5 text-[12px] font-medium rounded-md transition-all ${
                    filter === 'alert'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Alert ({stats.alert})
                </button>
                <button
                  onClick={() => setFilter('safe')}
                  className={`px-3 py-1.5 text-[12px] font-medium rounded-md transition-all ${
                    filter === 'safe'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Safe ({stats.safe})
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 text-[12px] font-medium rounded-md border border-gray-300 bg-white"
                >
                  <option value="time">Latest First</option>
                  <option value="city">City (A-Z)</option>
                  <option value="status">Status (Priority)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Alert Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>

          {/* Data Table View */}
          <div className="mt-8 bg-white rounded-lg shadow-card overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h3 className="text-[16px] font-bold">Detailed Alert Data</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">City</th>
                    <th className="px-4 py-3 text-left font-semibold">State</th>
                    <th className="px-4 py-3 text-center font-semibold">Rainfall<br/>(mm/hr)</th>
                    <th className="px-4 py-3 text-center font-semibold">River Level<br/>(m)</th>
                    <th className="px-4 py-3 text-center font-semibold">Earthquake<br/>Magnitude</th>
                    <th className="px-4 py-3 text-center font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedAlerts.map((alert, index) => (
                    <tr
                      key={alert.id}
                      className={`border-b ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      } hover:bg-blue-50 transition-colors`}
                    >
                      <td className="px-4 py-3 font-medium">{alert.city}</td>
                      <td className="px-4 py-3 text-gray-600">{alert.state}</td>
                      <td className="px-4 py-3 text-center">
                        {alert.rainfall > 0 ? (
                          <span className="font-semibold text-blue-600">{alert.rainfall}</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {alert.riverLevel !== 0 ? (
                          <span className={`font-semibold ${
                            alert.riverLevel > 5 ? 'text-red-600' :
                            alert.riverLevel > 2 ? 'text-orange-600' :
                            'text-gray-600'
                          }`}>
                            {alert.riverLevel > 0 ? '+' : ''}{alert.riverLevel}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {alert.earthquakeMagnitude > 0 ? (
                          <span className="font-semibold text-orange-600">
                            {alert.earthquakeMagnitude}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase ${
                            alert.status === 'danger'
                              ? 'bg-red-100 text-red-700'
                              : alert.status === 'alert'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {alert.status === 'danger' ? '⚠ ' : alert.status === 'alert' ? '⚠ ' : '✓ '}
                          {alert.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
