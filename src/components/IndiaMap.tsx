'use client';

import { useState } from 'react';
import { StateRiskData } from '@/lib/types';

interface IndiaMapProps {
  stateData: StateRiskData[];
}

export default function IndiaMap({ stateData }: IndiaMapProps) {
  const [hoveredState, setHoveredState] = useState<StateRiskData | null>(null);
  const [selectedState, setSelectedState] = useState<StateRiskData | null>(null);

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

  const handleStateClick = (state: StateRiskData) => {
    setSelectedState(state);
  };

  return (
    <div className="relative w-full">
      {/* Map Container */}
      <div className="relative bg-white rounded-lg p-6 shadow-card">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* SVG Map */}
          <div className="flex-1 min-h-[500px] relative">
            <svg
              viewBox="0 0 800 900"
              className="w-full h-full"
              onMouseLeave={() => setHoveredState(null)}
            >
              {/* Simplified India Map - State Regions */}

              {/* Kashmir/J&K - Top */}
              <path
                d="M 250 50 L 300 40 L 350 60 L 360 100 L 340 120 L 300 110 L 270 90 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'JK')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'JK') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'JK')!)}
              />

              {/* Punjab/Haryana - North */}
              <path
                d="M 280 120 L 320 110 L 340 140 L 330 170 L 290 165 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'PB')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'PB') || null)}
              />

              {/* Delhi */}
              <path
                d="M 310 160 L 325 155 L 330 170 L 320 175 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'DL')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'DL') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'DL')!)}
              />

              {/* Rajasthan - West */}
              <path
                d="M 180 180 L 280 170 L 290 250 L 270 320 L 200 340 L 170 280 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'RJ')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'RJ') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'RJ')!)}
              />

              {/* Gujarat */}
              <path
                d="M 120 320 L 200 340 L 220 400 L 200 450 L 140 430 L 110 380 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'GJ')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'GJ') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'GJ')!)}
              />

              {/* Madhya Pradesh - Central */}
              <path
                d="M 280 320 L 380 310 L 420 360 L 410 420 L 350 440 L 270 420 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'MP')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'MP') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'MP')!)}
              />

              {/* Maharashtra */}
              <path
                d="M 220 450 L 320 440 L 350 500 L 320 560 L 240 540 L 210 500 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'MH')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'MH') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'MH')!)}
              />

              {/* Karnataka */}
              <path
                d="M 240 560 L 320 570 L 330 650 L 280 680 L 230 650 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'KA')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'KA') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'KA')!)}
              />

              {/* Kerala */}
              <path
                d="M 220 690 L 270 680 L 280 750 L 250 780 L 220 760 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'KL')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'KL') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'KL')!)}
              />

              {/* Tamil Nadu */}
              <path
                d="M 280 680 L 360 690 L 370 760 L 340 800 L 280 780 L 280 750 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'TN')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'TN') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'TN')!)}
              />

              {/* West Bengal */}
              <path
                d="M 480 380 L 520 390 L 530 450 L 510 480 L 470 460 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'WB')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'WB') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'WB')!)}
              />

              {/* Assam - Northeast */}
              <path
                d="M 530 320 L 600 310 L 620 340 L 600 380 L 540 370 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'AS')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'AS') || null)}
                onClick={() => handleStateClick(stateData.find(s => s.stateCode === 'AS')!)}
              />

              {/* Odisha */}
              <path
                d="M 420 420 L 480 430 L 490 500 L 450 530 L 400 510 Z"
                fill={getStatusColor(stateData.find(s => s.stateCode === 'OR')?.status || 'safe')}
                stroke="#fff"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80 transition-all"
                onMouseEnter={() => setHoveredState(stateData.find(s => s.stateCode === 'OR') || null)}
              />
            </svg>

            {/* Hover Popup */}
            {hoveredState && (
              <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-card border-l-4 min-w-[200px]"
                style={{ borderLeftColor: getStatusColor(hoveredState.status) }}>
                <h4 className="font-bold text-[14px] mb-1">{hoveredState.state}</h4>
                <p className="text-[12px] text-gray-600 mb-2">
                  Status:{' '}
                  <span className="font-semibold uppercase">
                    {hoveredState.status}
                  </span>
                </p>
                <p className="text-[11px] text-gray-500">
                  {hoveredState.alerts.length} active alert(s)
                </p>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="lg:w-64">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-[14px] mb-4">Risk Levels</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#E74C3C' }}></div>
                  <div>
                    <div className="text-[13px] font-semibold">DANGER</div>
                    <div className="text-[11px] text-gray-600">Immediate action required</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#F4A460' }}></div>
                  <div>
                    <div className="text-[13px] font-semibold">ALERT</div>
                    <div className="text-[11px] text-gray-600">Stay vigilant</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#88B985' }}></div>
                  <div>
                    <div className="text-[13px] font-semibold">SAFE</div>
                    <div className="text-[11px] text-gray-600">Normal conditions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected State Details */}
      {selectedState && (
        <div className="mt-6 bg-white rounded-lg p-6 shadow-card">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[18px] font-bold">{selectedState.state} - Detailed Information</h3>
            <button
              onClick={() => setSelectedState(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedState.alerts.map((alert) => (
              <div key={alert.id} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getStatusColor(alert.status) }}
                  ></div>
                  <h4 className="font-semibold text-[14px]">{alert.city}</h4>
                </div>
                <p className="text-[12px] text-gray-600 mb-2">{alert.description}</p>
                <div className="text-[11px] text-gray-500">
                  Updated: {new Date(alert.timestamp).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
