import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[hsl(207,39%,29%)] text-white/80 py-8 mt-16">
      <div className="container-disaster">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Side */}
          <div className="flex items-center gap-6 text-[13px]">
            <span>
              Contact Us:{' '}
              <a
                href="mailto:info@disasteralert.org"
                className="text-white hover:underline"
              >
                info@disasteralert.org
              </a>
            </span>
            <span className="hidden md:inline">|</span>
            <Link href="/safety" className="hover:underline">
              Terms of Service
            </Link>
          </div>

          {/* Right Side */}
          <div className="text-[13px]">
            © 2024 AI Disaster Alert System
          </div>
        </div>

        {/* System Status */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <div className="flex items-center justify-center gap-2 text-[12px]">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>System Online - Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
