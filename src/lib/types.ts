// Types for AI Disaster Alert System

export type AlertStatus = 'safe' | 'alert' | 'danger';

export interface AlertData {
  id: string;
  city: string;
  state: string;
  rainfall: number; // mm/hr
  riverLevel: number; // meters above normal
  earthquakeMagnitude: number;
  status: AlertStatus;
  timestamp: string;
  description: string;
}

export interface StateRiskData {
  state: string;
  stateCode: string;
  status: AlertStatus;
  population: number;
  alerts: AlertData[];
}

export interface DisasterType {
  id: string;
  name: string;
  icon: string;
  description: string;
  safetyTips: string[];
}
