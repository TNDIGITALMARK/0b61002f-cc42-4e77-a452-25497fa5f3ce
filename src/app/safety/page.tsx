'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { disasterTypes, systemInfo } from '@/lib/mockData';

export default function SafetyPage() {
  const [expandedSection, setExpandedSection] = useState<string>('flood');

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-[hsl(214,25%,93%)]">
        {/* Page Header */}
        <div className="bg-white border-b">
          <div className="container-disaster py-6">
            <h1 className="text-[28px] font-bold mb-2">Safety Guide & System Information</h1>
            <p className="text-[14px] text-gray-600">
              Essential safety measures and how our AI system works to protect you
            </p>
          </div>
        </div>

        <div className="container-disaster py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - Safety Tips */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-card p-6 mb-6">
                <h2 className="text-[22px] font-bold mb-6">Disaster Safety Tips</h2>

                {/* Disaster Type Sections */}
                <div className="space-y-4">
                  {disasterTypes.map((disaster) => (
                    <div
                      key={disaster.id}
                      id={disaster.id}
                      className="border rounded-lg overflow-hidden"
                    >
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(disaster.id)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[hsl(207,39%,29%)] rounded-full flex items-center justify-center text-white text-[24px]">
                            {disaster.icon}
                          </div>
                          <div className="text-left">
                            <h3 className="text-[16px] font-bold">{disaster.name}</h3>
                            <p className="text-[12px] text-gray-600">{disaster.description}</p>
                          </div>
                        </div>
                        <div className="text-[20px] text-gray-400">
                          {expandedSection === disaster.id ? '−' : '+'}
                        </div>
                      </button>

                      {/* Section Content */}
                      {expandedSection === disaster.id && (
                        <div className="p-5 bg-white border-t">
                          <ul className="space-y-3">
                            {disaster.safetyTips.map((tip, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-[hsl(207,39%,29%)] text-white rounded-full flex items-center justify-center text-[12px] font-bold mt-0.5">
                                  {index + 1}
                                </span>
                                <p className="text-[14px] text-gray-700 leading-relaxed">
                                  {tip}
                                </p>
                              </li>
                            ))}
                          </ul>

                          {/* Visual Infographic */}
                          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <h4 className="text-[14px] font-bold mb-3 flex items-center gap-2">
                              <span>📊</span> Quick Reference Guide
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {disaster.safetyTips.slice(0, 3).map((tip, index) => (
                                <div key={index} className="bg-white p-3 rounded-lg text-center">
                                  <div className="text-[24px] mb-2">
                                    {disaster.id === 'flood' ? '🚨' : disaster.id === 'earthquake' ? '🏠' : '💨'}
                                  </div>
                                  <p className="text-[11px] font-semibold text-gray-700 line-clamp-2">
                                    {tip.split('.')[0]}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="text-[18px] font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span>🚨</span> Emergency Contacts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-[13px] text-gray-600 mb-1">National Emergency</div>
                    <a href="tel:112" className="text-[24px] font-bold text-red-600 hover:underline">
                      112
                    </a>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-[13px] text-gray-600 mb-1">Disaster Management</div>
                    <a href="tel:1078" className="text-[24px] font-bold text-red-600 hover:underline">
                      1078
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - How It Works */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* System Information */}
                <div className="bg-white rounded-lg shadow-card p-5">
                  <h3 className="text-[18px] font-bold mb-4">How the System Works</h3>
                  <p className="text-[13px] text-gray-700 mb-4">
                    Our AI-powered system transforms complex disaster data into actionable safety information.
                  </p>

                  <div className="space-y-4">
                    {systemInfo.methodology.map((step) => (
                      <div key={step.step} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-[hsl(207,39%,29%)] text-white rounded-full flex items-center justify-center text-[14px] font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-[13px] font-bold mb-1">{step.title}</h4>
                          <p className="text-[12px] text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Stats */}
                <div className="bg-gradient-to-br from-[hsl(207,39%,29%)] to-[hsl(207,33%,35%)] text-white rounded-lg shadow-card p-5">
                  <h3 className="text-[16px] font-bold mb-4">System Performance</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-[12px] text-white/80 mb-1">AI Confidence Score</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[32px] font-bold">{systemInfo.aiConfidence}</span>
                        <span className="text-[16px]">%</span>
                      </div>
                      <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full"
                          style={{ width: `${systemInfo.aiConfidence}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/20">
                      <div className="text-[12px] text-white/80 mb-2">Update Frequency</div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex justify-between">
                          <span>Active Alerts:</span>
                          <span className="font-semibold">{systemInfo.updateFrequency.activeAlerts}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stable Conditions:</span>
                          <span className="font-semibold">{systemInfo.updateFrequency.stableConditions}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Sources */}
                <div className="bg-white rounded-lg shadow-card p-5">
                  <h3 className="text-[16px] font-bold mb-3">Data Sources</h3>
                  <ul className="space-y-2">
                    {systemInfo.dataSources.map((source, index) => (
                      <li key={index} className="flex items-start gap-2 text-[12px]">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-gray-700">{source}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                  <h4 className="text-[14px] font-bold text-blue-900 mb-2">Stay Prepared</h4>
                  <p className="text-[12px] text-blue-800 mb-3">
                    Download the mobile app for push notifications and personalized alerts.
                  </p>
                  <button className="w-full py-2 bg-[hsl(207,39%,29%)] text-white text-[13px] font-semibold rounded-md hover:bg-[hsl(207,33%,25%)] transition-all shadow-button">
                    Download Mobile App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
