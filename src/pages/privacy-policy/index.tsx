import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faShield,
  faUserSecret,
  faDatabase,
  faFileShield,
  faServer,
  faBell,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 py-20 px-6 text-white">
         <div className="max-w-4xl mx-auto text-center">
                 <FontAwesomeIcon icon={faLock} className="text-white text-5xl mb-4" />
                  <h1 className="text-4xl font-extrabold mb-3">Privacy Policy</h1>
                  <p className="text-lg opacity-90">
                     Your privacy is our top priority. We ensure your personal data is handled with complete confidentiality and security.
                  </p>
                </div>
      </section>

      {/* PAGE SECTIONS */}
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-20">

        {/* 1. Data We Collect */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://img.freepik.com/free-vector/cloud-data-storage-concept-illustration_114360-6243.jpg"
            alt="Data Collection"
            className="rounded-2xl shadow-md"
          />

          <div>
            <div className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faDatabase} className="text-indigo-600 text-3xl" />
              <h2 className="text-3xl font-bold">1. Information We Collect</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We collect only the information required to process your repair request and provide a seamless service experience.
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>Your name and contact number</li>
              <li>Email address and communication history</li>
              <li>Device details & issues reported</li>
              <li>Location for pickup/drop services</li>
              <li>Payment & invoice records</li>
            </ul>
          </div>

        </section>

        {/* 2. How We Use Your Data */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faFileShield} className="text-indigo-600 text-3xl" />
              <h2 className="text-3xl font-bold">2. How We Use Your Information</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Your data allows us to offer fast, reliable, and accurate mobile repair services.
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>To verify your identity and book repair services</li>
              <li>To contact you regarding repair progress</li>
              <li>To share technician arrival details</li>
              <li>To generate invoices and maintain service history</li>
              <li>To improve platform experience through analytics</li>
            </ul>
          </div>

          <img
            src="https://img.freepik.com/free-vector/cyber-security-protection-concept_23-2148532220.jpg"
            alt="Use of Data"
            className="rounded-2xl shadow-md"
          />

        </section>

        {/* 3. Data Security */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://img.freepik.com/free-vector/secure-data-storage-concept-illustration_114360-5321.jpg"
            alt="Data Security"
            className="rounded-2xl shadow-md"
          />

          <div>
            <div className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faShield} className="text-indigo-600 text-3xl" />
              <h2 className="text-3xl font-bold">3. How We Protect Your Data</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Your data is encrypted and securely stored following industry-standard protocols.
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>SSL encrypted communication</li>
              <li>Role-based access for employees</li>
              <li>Regular security audits</li>
              <li>Protected server infrastructure</li>
              <li>Data never sold or shared with third parties</li>
            </ul>
          </div>

        </section>

        {/* 4. Cookies & Tracking */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faUserSecret} className="text-indigo-600 text-3xl" />
              <h2 className="text-3xl font-bold">4. Cookies & Tracking</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We use cookies to improve website performance, speed, and overall user experience.
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>Session cookies to remember your selections</li>
              <li>Analytics cookies to improve UI/UX</li>
              <li>No third-party ad tracking cookies used</li>
            </ul>
          </div>

          <img
            src="https://img.freepik.com/free-vector/server-room-concept-illustration_114360-1110.jpg"
            alt="Cookies Tracking"
            className="rounded-2xl shadow-md"
          />

        </section>

        {/* 5. Communication Policy */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://img.freepik.com/free-vector/notification-concept-illustration_114360-252.jpg"
            alt="Communication Policy"
            className="rounded-2xl shadow-md"
          />

          <div>
            <div className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faBell} className="text-indigo-600 text-3xl" />
              <h2 className="text-3xl font-bold">5. Communication & Alerts</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We send essential updates only, no spam. Communication includes:
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>Repair confirmation messages</li>
              <li>Technician arrival alerts</li>
              <li>Repair completion updates</li>
              <li>Warranty and invoice details</li>
            </ul>
          </div>

        </section>

        {/* 6. Consent */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faHandshake} className="text-indigo-600 text-3xl" />
              <h2 className="text-3xl font-bold">6. Your Consent</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              By using our website and booking services, you agree to our privacy practices.
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>You can request data deletion anytime.</li>
              <li>You can opt-out of promotional content.</li>
              <li>Your data is yours — fully protected.</li>
            </ul>
          </div>

          <img
            src="https://img.freepik.com/free-vector/handshake-business-illustration_23-2148876959.jpg"
            alt="User Consent"
            className="rounded-2xl shadow-md"
          />

        </section>

      </div>

    </div>
  );
}
