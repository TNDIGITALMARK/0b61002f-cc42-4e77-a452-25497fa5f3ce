import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndiaMap from '@/components/IndiaMap';
import AlertCard from '@/components/AlertCard';
import { stateRiskData, mockAlerts } from '@/lib/mockData';
import Link from 'next/link';

export default function Home() {
  // Get top priority alerts (danger and alert statuses)
  const priorityAlerts = mockAlerts
    .filter(a => a.status === 'danger' || a.status === 'alert')
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[hsl(207,39%,29%)] to-[hsl(207,33%,35%)] text-white py-12">
          <div className="container-disaster text-center">
            <h1 className="text-[32px] font-bold mb-4 text-white">
              Real-Time Disaster Monitoring Across India
            </h1>
            <p className="text-[16px] text-white/90 max-w-2xl mx-auto">
              AI-powered early warning system providing instant access to location-specific
              disaster risk assessments with clear visual indicators and safety guidance.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-disaster py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Section - Takes 2 columns */}
            <div className="lg:col-span-2">
              <IndiaMap stateData={stateRiskData} />
            </div>

            {/* Real-Time Alerts Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg p-5 shadow-card mb-6">
                  <h2 className="text-[18px] font-bold mb-4 flex items-center gap-2">
                    <span className="text-red-500">🔴</span>
                    REAL-TIME ALERTS
                  </h2>
                  <div className="space-y-4">
                    {priorityAlerts.map((alert) => (
                      <AlertCard key={alert.id} alert={alert} compact />
                    ))}
                  </div>
                  <Link
                    href="/alerts"
                    className="mt-4 block w-full text-center py-2 bg-[hsl(207,33%,35%)] text-white text-[13px] font-semibold rounded-md hover:bg-[hsl(207,33%,30%)] transition-all"
                  >
                    View All Alerts
                  </Link>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg p-5 shadow-card">
                  <h3 className="text-[16px] font-bold mb-4">Safety Tips</h3>
                  <div className="space-y-3">
                    <Link
                      href="/safety#flood"
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[hsl(207,39%,29%)] rounded-full flex items-center justify-center text-white text-[18px]">
                        🌊
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold">Flood Safety</div>
                        <div className="text-[11px] text-gray-600">Emergency Kit Preparation</div>
                      </div>
                    </Link>
                    <Link
                      href="/safety#cyclone"
                      className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[hsl(207,39%,29%)] rounded-full flex items-center justify-center text-white text-[18px]">
                        🌀
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold">Cyclone Preparation</div>
                        <div className="text-[11px] text-gray-600">Stay Informed & Secure</div>
                      </div>
                    </Link>
                    <Link
                      href="/safety#earthquake"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[hsl(207,39%,29%)] rounded-full flex items-center justify-center text-white text-[18px]">
                        🏚️
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold">Earthquake Response</div>
                        <div className="text-[11px] text-gray-600">Drop, Cover & Hold</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-card">
            <h2 className="text-[22px] font-bold mb-6 text-center">How the System Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-[32px] mx-auto mb-4">
                  📡
                </div>
                <h3 className="text-[16px] font-bold mb-2">AI + Data Collection</h3>
                <p className="text-[13px] text-gray-600">
                  Real-time data from meteorological stations, seismic sensors, and satellite imagery
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-[32px] mx-auto mb-4">
                  🤖
                </div>
                <h3 className="text-[16px] font-bold mb-2">Risk Prediction</h3>
                <p className="text-[13px] text-gray-600">
                  Machine learning models analyze patterns and calculate risk scores with 87% accuracy
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-[32px] mx-auto mb-4">
                  🚨
                </div>
                <h3 className="text-[16px] font-bold mb-3">Alert Display</h3>
                <p className="text-[13px] text-gray-600">
                  Color-coded visual alerts with immediate safety guidance delivered every 15 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}