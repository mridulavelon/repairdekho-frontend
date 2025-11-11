import Metaseo from "@/components/Metaseo";

export default function Privacyandpolicy() {
    return (
      <>
       <Metaseo
         title={"Privacy Policy"}
         description={"This Privacy Policy describes how Repair Dekho collects, uses, and discloses your information when you use our website https://repairdekho.in/ and our mobile repair services."}
         keywords={"Privacy Policy"}
         metadataBase={""}
         urlslug={""}
        />
         <section className="privacy-sec bg-white relative min-h-screen">
        <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: 'url("https://www.airinfotech.in/img/privacy_policy.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto relative z-10 flex items-center justify-center h-full px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white bg-opacity-75 px-4 py-2 rounded-md text-center">
              Privacy Policy
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy describes how Repair Dekho collects, uses, and discloses your information when you use our website https://repairdekho.in/ and our mobile repair services.
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              <strong>Personal Information:</strong> When you request a repair, book an appointment, or contact us, we may collect certain personally identifiable information ("Personal Information") such as:
              <ul className="list-disc ml-6 mt-2">
                <li>Name</li>
                <li>Contact information (phone number, email address)</li>
                <li>Billing information (if applicable)</li>
                <li>Device information (make, model, serial number)</li>
                <li>Description of the repair issue</li>
              </ul>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Non-Personal Information:</strong> We may also collect non-personal information that does not directly identify you. This may include:
              <ul className="list-disc ml-6 mt-2">
                <li>Usage data (browsing activity, pages visited)</li>
                <li>Device information (IP address, operating system)</li>
                <li>Diagnostic data related to your device repair</li>
              </ul>
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Use of Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various purposes, including:
              <ul className="list-disc ml-6 mt-2">
                <li>To provide and improve our Services</li>
                <li>To process your repair requests and appointments</li>
                <li>To communicate with you about your repairs and Services</li>
                <li>To diagnose and troubleshoot issues with your device</li>
                <li>To personalize your experience on the Website</li>
                <li>To send you marketing and promotional materials (with your consent)</li>
                <li>To improve our data security and fraud prevention measures</li>
              </ul>
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Sharing of Information</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with third-party service providers who help us operate the Website and provide the Services. These service providers are contractually obligated to keep your information confidential and use it only for the purposes we have specified.
            </p>
            <p className="text-gray-700 mb-4">
              We will not share your Personal Information with any other third party without your consent, except as required by law or to protect the rights, property, or safety of ourselves or others.
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We will retain your Personal Information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Security</h2>
            <p className="text-gray-700 mb-4">
              We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage method is 100% secure. Therefore, we cannot guarantee absolute security.
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Your Choices</h2>
            <p className="text-gray-700 mb-4">
              You have certain choices regarding your information:
              <ul className="list-disc ml-6 mt-2">
                <li>You can opt out of receiving marketing communications from us by following the unsubscribe instructions in those communications.</li>
                <li>You can request to access, update, or delete your Personal Information by contacting us (see below).</li>
              </ul>
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our Services are not directed to children under the age of 13. We do not knowingly collect Personal Information from children under 13. If you are a parent or guardian and you believe your child has provided us with Personal Information, please contact us.
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Changes to this Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Website.
            </p>
  
            <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
              <br />
              By email: [Your Email Address]
              <br />
              By phone: [Your Phone Number]
            </p>
          </div>
        </div>
      </section>
      </>
    )
}
  