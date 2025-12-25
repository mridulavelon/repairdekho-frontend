import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faFileSignature,
  faMobileScreenButton,
  faGear,
  faHandshake,
  faCircleCheck,
  faTruckFast,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

export default function TermsConditions() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">

      {/* HERO SECTION */}
        <section className="relative bg-gradient-to-r from-sky-500 to-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FontAwesomeIcon icon={faShieldHalved} className="text-white text-5xl mb-4" />
          <h1 className="text-4xl font-extrabold mb-3">Terms & Conditions</h1>
          <p className="text-lg opacity-90">
            Please read our terms carefully before availing any mobile repair or servicing.
          </p>
        </div>
      </section>


      {/* CONTENT */}
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-20">

        {/* 1 */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://img.freepik.com/free-vector/online-contract-concept-illustration_114360-7892.jpg"
            alt="Service Agreement"
            className="rounded-2xl shadow-sm"
          />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faFileSignature} className="text-blue-600 text-3xl" />
              <h2 className="text-3xl font-bold">1. Service Agreement</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              When you book a repair with <span className="font-semibold">repairDekho</span>, 
              an agreement is formed allowing our certified technicians to inspect and attempt repairs
              on your device. Once a technician begins the repair, cancellation may not be possible.
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
              <li>Inspection is mandatory before any repair work.</li>
              <li>We will inform you of the estimated time & cost beforehand.</li>
              <li>No hidden charges—everything is fully transparent.</li>
            </ul>
          </div>
        </section>

        {/* 2 */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faMobileScreenButton} className="text-blue-600 text-3xl" />
              <h2 className="text-3xl font-bold">2. Device Inspection & Diagnosis</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Our technicians perform a multi-point diagnostic to check the real issue. 
              If we discover extra issues, you will be informed before we continue.
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
              <li>No repair is carried out without customer approval.</li>
              <li>Diagnosis for liquid-damaged phones may take longer.</li>
              <li>We will share photos/videos of internal issues if needed.</li>
            </ul>
          </div>

          <img
            src="https://img.freepik.com/free-vector/cellphone-repair-concept-illustration_114360-5457.jpg"
            alt="Inspection"
            className="rounded-2xl shadow-sm"
          />
        </section>

        {/* 3 */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://t3.ftcdn.net/jpg/05/20/54/94/360_F_520549426_ME9BP9oPEEcezQhukVX3EdxLW5rjYFhA.jpg"
            alt="Parts Warranty"
            className="rounded-2xl shadow-sm"
          />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faGear} className="text-blue-600 text-3xl" />
              <h2 className="text-3xl font-bold">3. Spare Parts & Warranty</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              All parts used are premium-quality or OEM-grade. Warranty varies by part and will be
              mentioned on your invoice.
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
              <li>Screen replacements usually come with 3–6 months warranty.</li>
              <li>Battery replacements come with 3 months warranty.</li>
              <li>Water-damage repairs may not carry warranty.</li>
              <li>Warranty void if device is opened by a third-party later.</li>
            </ul>
          </div>
        </section>

        {/* 4 */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faHandshake} className="text-blue-600 text-3xl" />
              <h2 className="text-3xl font-bold">4. Customer Responsibilities</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Customers are expected to back up their data before repair. 
              Although rare, data loss may occur during motherboard repair.
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
              <li>Remove SIM & memory card before handing over the phone.</li>
              <li>Share the correct device passcode for testing after repair.</li>
              <li>Be available for confirmation calls during the process.</li>
            </ul>
          </div>

          <img
            src="https://img.freepik.com/free-vector/security-concept-illustration_114360-497.jpg"
            alt="User Responsibility"
            className="rounded-2xl shadow-sm"
          />
        </section>

        {/* 5 */}
        <section className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://img.freepik.com/free-vector/delivery-service-concept-illustration_114360-7725.jpg"
            alt="Payment Policy"
            className="rounded-2xl shadow-sm"
          />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600 text-3xl" />
              <h2 className="text-3xl font-bold">5. Payment & Refund Policy</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Payment must be completed after the repair is done. Refunds apply only if no repair is possible.
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
              <li>No advance payment needed for most services.</li>
              <li>Full refund if issue is not resolved at all.</li>
              <li>No refund for diagnosis charges (if applicable).</li>
              <li>UPI / Card / Net-banking — all modes accepted.</li>
            </ul>
          </div>
        </section>

      </div>

    </div>
  );
}
