// Mock data for AI Disaster Alert System
import { AlertData, StateRiskData, DisasterType } from './types';

export const mockAlerts: AlertData[] = [
  {
    id: '1',
    city: 'Mumbai',
    state: 'Maharashtra',
    rainfall: 45,
    riverLevel: 2.5,
    earthquakeMagnitude: 0,
    status: 'alert',
    timestamp: new Date().toISOString(),
    description: 'Heavy rainfall expected. River levels rising.'
  },
  {
    id: '2',
    city: 'Chennai',
    state: 'Tamil Nadu',
    rainfall: 78,
    riverLevel: 8.2,
    earthquakeMagnitude: 0,
    status: 'danger',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    description: 'FLOOD WARNING: River level 8.2m above normal.'
  },
  {
    id: '3',
    city: 'Delhi',
    state: 'Delhi',
    rainfall: 5,
    riverLevel: 0.5,
    earthquakeMagnitude: 0,
    status: 'safe',
    timestamp: new Date(Date.now() - 900000).toISOString(),
    description: 'Normal conditions. All clear.'
  },
  {
    id: '4',
    city: 'Kolkata',
    state: 'West Bengal',
    rainfall: 35,
    riverLevel: 3.8,
    earthquakeMagnitude: 0,
    status: 'alert',
    timestamp: new Date(Date.now() - 21600000).toISOString(),
    description: 'CYCLONE ALERT: Wind speed 65 km/h. Coastal areas on alert.'
  },
  {
    id: '5',
    city: 'Bangalore',
    state: 'Karnataka',
    rainfall: 2,
    riverLevel: 0.2,
    earthquakeMagnitude: 0,
    status: 'safe',
    timestamp: new Date().toISOString(),
    description: 'Clear skies. Temperature 34°C.'
  },
  {
    id: '6',
    city: 'Ahmedabad',
    state: 'Gujarat',
    rainfall: 42,
    riverLevel: 5.1,
    earthquakeMagnitude: 0,
    status: 'alert',
    timestamp: new Date(Date.now() - 21600000).toISOString(),
    description: 'CYCLONE RISK: Orange alert issued 6 hours ago.'
  },
  {
    id: '7',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    rainfall: 95,
    riverLevel: 12.5,
    earthquakeMagnitude: 0,
    status: 'danger',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    description: 'RED ALERT: Severe flood warning. Active since yesterday.'
  },
  {
    id: '8',
    city: 'Guwahati',
    state: 'Assam',
    rainfall: 1,
    riverLevel: 0.1,
    earthquakeMagnitude: 3.2,
    status: 'safe',
    timestamp: new Date(Date.now() - 900000).toISOString(),
    description: 'Earthquake monitoring. All clear. Updated 15 minutes ago.'
  },
  {
    id: '9',
    city: 'Jaipur',
    state: 'Rajasthan',
    rainfall: 0,
    riverLevel: -2.5,
    earthquakeMagnitude: 0,
    status: 'alert',
    timestamp: new Date().toISOString(),
    description: 'Drought conditions. Yellow watch status ongoing.'
  },
  {
    id: '10',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    rainfall: 8,
    riverLevel: 1.2,
    earthquakeMagnitude: 0,
    status: 'safe',
    timestamp: new Date().toISOString(),
    description: 'Normal weather conditions.'
  }
];

export const stateRiskData: StateRiskData[] = [
  {
    state: 'Maharashtra',
    stateCode: 'MH',
    status: 'alert',
    population: 112374333,
    alerts: mockAlerts.filter(a => a.state === 'Maharashtra')
  },
  {
    state: 'Tamil Nadu',
    stateCode: 'TN',
    status: 'danger',
    population: 72147030,
    alerts: mockAlerts.filter(a => a.state === 'Tamil Nadu')
  },
  {
    state: 'Delhi',
    stateCode: 'DL',
    status: 'safe',
    population: 16787941,
    alerts: mockAlerts.filter(a => a.state === 'Delhi')
  },
  {
    state: 'West Bengal',
    stateCode: 'WB',
    status: 'alert',
    population: 91276115,
    alerts: mockAlerts.filter(a => a.state === 'West Bengal')
  },
  {
    state: 'Karnataka',
    stateCode: 'KA',
    status: 'safe',
    population: 61095297,
    alerts: mockAlerts.filter(a => a.state === 'Karnataka')
  },
  {
    state: 'Gujarat',
    stateCode: 'GJ',
    status: 'alert',
    population: 60439692,
    alerts: mockAlerts.filter(a => a.state === 'Gujarat')
  },
  {
    state: 'Kerala',
    stateCode: 'KL',
    status: 'danger',
    population: 33406061,
    alerts: mockAlerts.filter(a => a.state === 'Kerala')
  },
  {
    state: 'Assam',
    stateCode: 'AS',
    status: 'safe',
    population: 31205576,
    alerts: mockAlerts.filter(a => a.state === 'Assam')
  },
  {
    state: 'Rajasthan',
    stateCode: 'RJ',
    status: 'alert',
    population: 68548437,
    alerts: mockAlerts.filter(a => a.state === 'Rajasthan')
  },
  {
    state: 'Madhya Pradesh',
    stateCode: 'MP',
    status: 'safe',
    population: 72626809,
    alerts: mockAlerts.filter(a => a.state === 'Madhya Pradesh')
  }
];

export const disasterTypes: DisasterType[] = [
  {
    id: 'flood',
    name: 'Flood Safety',
    icon: '🌊',
    description: 'Essential safety measures for flood situations',
    safetyTips: [
      'Keep emergency kit ready with food, water, medicines, and first aid supplies',
      'Identify evacuation routes and higher ground locations in advance',
      'Monitor water levels and weather alerts continuously',
      'Never attempt to walk or drive through flood waters',
      'Move to upper floors if trapped, signal for help from windows',
      'Turn off electrical and gas connections before evacuating',
      'Store important documents in waterproof containers'
    ]
  },
  {
    id: 'earthquake',
    name: 'Earthquake Response',
    icon: '🏚️',
    description: 'Critical actions during and after earthquakes',
    safetyTips: [
      'DROP, COVER, and HOLD ON - get under sturdy furniture immediately',
      'Stay away from windows, mirrors, and heavy objects that could fall',
      'If outdoors, move to open areas away from buildings and power lines',
      'Do not use elevators during or after an earthquake',
      'After shaking stops, check for injuries and provide first aid',
      'Inspect your home for structural damage before re-entering',
      'Be prepared for aftershocks and have an evacuation plan ready',
      'Keep emergency supplies including water, food, and flashlight accessible'
    ]
  },
  {
    id: 'cyclone',
    name: 'Cyclone Preparation',
    icon: '🌀',
    description: 'How to prepare and respond to cyclones',
    safetyTips: [
      'Secure loose objects outdoors - bring in or tie down furniture, equipment',
      'Stock adequate water, non-perishable food, batteries, and candles',
      'Stay indoors in the safest room, away from windows and doors',
      'Keep mobile phones charged and portable chargers ready',
      'Follow official warnings and evacuation orders immediately',
      'Do not go outside during the eye of the cyclone - more winds will follow',
      'After the cyclone, avoid flood waters and downed power lines',
      'Report damage to authorities and check on neighbors'
    ]
  }
];

export const systemInfo = {
  aiConfidence: 87,
  dataSources: [
    'India Meteorological Department (IMD)',
    'National Seismic Network',
    'Satellite Imagery (INSAT-3D)',
    'River Gauge Stations',
    'Weather Radar Network'
  ],
  updateFrequency: {
    activeAlerts: '15 minutes',
    stableConditions: '1 hour'
  },
  methodology: [
    {
      step: 1,
      title: 'Data Collection',
      description: 'Real-time data streams from meteorological stations, seismic sensors, and satellite imagery'
    },
    {
      step: 2,
      title: 'AI Analysis',
      description: 'Machine learning models analyze patterns, predict trends, and assess risk levels'
    },
    {
      step: 3,
      title: 'Risk Assessment',
      description: 'Algorithms calculate composite risk scores based on multiple disaster indicators'
    },
    {
      step: 4,
      title: 'Alert Generation',
      description: 'Automated system generates color-coded alerts and distributes to affected regions'
    },
    {
      step: 5,
      title: 'Continuous Monitoring',
      description: 'System updates predictions every 15 minutes and refines accuracy based on new data'
    }
  ]
};
