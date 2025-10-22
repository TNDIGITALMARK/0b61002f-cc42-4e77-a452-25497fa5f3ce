# AI Disaster Alert System

A comprehensive emergency preparedness platform providing real-time disaster risk monitoring across India through intelligent data visualization and predictive analytics.

## Features

### 🗺️ Interactive Risk Map
- Real-time color-coded visualization of India
- Clickable state regions with detailed information
- Hover popups showing current alert status
- Legend explaining risk levels (Safe, Alert, Danger)

### 📊 Comprehensive Alert Dashboard
- Real-time alert monitoring system
- Sortable and filterable data tables
- Detailed metrics for rainfall, river levels, and seismic activity
- Summary statistics and status indicators

### 🛡️ Integrated Safety Guide
- Expandable sections for different disaster types:
  - Flood Safety
  - Earthquake Response
  - Cyclone Preparation
- Step-by-step safety instructions
- Quick reference infographics
- Emergency contact information

### 🤖 AI System Information
- 87% prediction accuracy
- Updates every 15 minutes for active alerts
- Real-time data from multiple sources:
  - India Meteorological Department (IMD)
  - National Seismic Network
  - Satellite Imagery (INSAT-3D)
  - River Gauge Stations

## Design System

### Color Palette
- Navy Header: `#2C4A63`
- Safe Green: `#88B985`
- Alert Orange: `#F4A460`
- Danger Red: `#E74C3C`
- Background: `#E8EEF3`

### Typography
- Primary Font: Inter
- Font Weights: 400, 500, 600, 700

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page with interactive map
│   ├── alerts/
│   │   └── page.tsx       # Alert dashboard
│   ├── safety/
│   │   └── page.tsx       # Safety guide & system info
│   └── globals.css        # Global styles and design system
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with system status
│   ├── IndiaMap.tsx       # Interactive map component
│   └── AlertCard.tsx      # Alert display component
└── lib/
    ├── types.ts           # TypeScript type definitions
    ├── mockData.ts        # Mock alert and state data
    └── helpers.ts         # Utility functions
```

## Key Components

### IndiaMap Component
Interactive SVG-based map of India with:
- Color-coded state regions based on risk level
- Hover effects with popup information
- Click to view detailed state alerts
- Responsive design for mobile and desktop

### AlertCard Component
Reusable alert display with:
- Color-coded left border
- Status icons and badges
- Detailed metrics (rainfall, river level, earthquake)
- Relative timestamp formatting
- Compact and full view modes

### Header Component
Sticky navigation with:
- Logo and system title
- Active state indicators
- Primary CTA button
- Mobile responsive menu

## Mock Data

The system includes realistic mock data for:
- 10 cities across India
- Real-time alert statuses
- Weather and seismic data
- Historical timestamps
- State-level aggregations

## Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-optimized interactions
- Adaptive layouts for different screen sizes

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

© 2024 AI Disaster Alert System. All rights reserved.
