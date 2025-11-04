import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D263B] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* 1️⃣ Invo+ Estate Column */}
        <div>
          <h2 className="text-white font-semibold mb-4 text-lg">
            Invo+ Estate
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/price-trends">Price Trends</Link>
            </li>
            <li>
              <Link href="/post-property">Post your Property</Link>
            </li>
            <li>
              <Link href="/investments">Real Estate Investments</Link>
            </li>
            <li>
              <Link href="/builders">Builders in India</Link>
            </li>
            <li>
              <Link href="/area-converter">Area Converter</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/rent-receipt">Rent Receipt</Link>
            </li>
            <li>
              <Link href="/customer-service">Customer Service</Link>
            </li>
            <li>
              <Link href="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>

        {/* 2️⃣ Company Column */}
        <div>
          <h2 className="text-white font-semibold mb-4 text-lg">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <Link href="/careers">Careers with us</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/request-info">Request Info</Link>
            </li>
            <li>
              <Link href="/feedback">Feedback</Link>
            </li>
            <li>
              <Link href="/report-problem">Report a problem</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/summons">Summons/Notices</Link>
            </li>
            <li>
              <Link href="/safety-guide">Safety Guide</Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Our Partners Column */}
        <div>
          <h2 className="text-white font-semibold mb-4 text-lg">
            Our Partners
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="https://www.naukri.com" target="_blank">
                Naukri.com – Jobs in India
              </Link>
            </li>
            <li>
              <Link href="https://www.naukrigulf.com" target="_blank">
                Naukrigulf.com – Jobs in Middle East
              </Link>
            </li>
            <li>
              <Link href="https://www.jeevansathi.com" target="_blank">
                Jeevansathi.com – Matrimonials
              </Link>
            </li>
            <li>
              <Link href="https://www.brijj.com" target="_blank">
                Brijj.com – Professional Networking
              </Link>
            </li>
            <li>
              <Link href="https://www.shiksha.com" target="_blank">
                Shiksha.com – Education Career Info
              </Link>
            </li>
            <li>
              <Link href="https://www.policybazaar.com" target="_blank">
                Policybazaar.com – Insurance India
              </Link>
            </li>
            <li>
              <Link href="https://www.paisabazaar.com" target="_blank">
                PaisaBazaar.com
              </Link>
            </li>
            <li>
              <Link href="https://www.ambitionbox.com" target="_blank">
                AmbitionBox.com
              </Link>
            </li>
            <li>
              <Link href="https://www.firstnaukri.com" target="_blank">
                FirstNaukri.com – Campus Hiring
              </Link>
            </li>
            <li>
              <Link href="https://www.jobhai.com" target="_blank">
                Jobhai.com – Find Jobs Near You
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Invo+ Estate. All rights reserved.
      </div>
    </footer>
  );
}
