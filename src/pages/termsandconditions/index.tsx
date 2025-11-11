import Metaseo from "@/components/Metaseo";

export default function Termsandconditions() {
    return (
      <>
        <Metaseo
         title={"Terms and Conditions"}
         description={"Welcome to our Terms and Conditions. These terms govern your use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use the website if you do not accept all of the terms and conditions stated on this page."}
         keywords={"Terms and Conditions"}
         metadataBase={""}
         urlslug={""}
        />
          <section className="terms-sec bg-white relative min-h-screen">
        <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: 'url("https://admin.netlawman.com/uploads/article/original/term-condition.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white bg-opacity-75 px-4 py-2 rounded-md text-center">
            Terms and Conditions
          </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to our Terms and Conditions. These terms govern your use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use the website if you do not accept all of the terms and conditions stated on this page.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              Other than the content you own, under these Terms, we own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Restrictions</h2>
            <p className="text-gray-700 mb-4">
              You are specifically restricted from all of the following:
              <ul className="list-disc ml-6 mt-2">
                <li>Publishing any Website material in any other media.</li>
                <li>Selling, sublicensing, and/or otherwise commercializing any Website material.</li>
                <li>Publicly performing and/or showing any Website material.</li>
                <li>Using this Website in any way that is or may be damaging to this Website.</li>
                <li>Using this Website in any way that impacts user access to this Website.</li>
                <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
                <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website.</li>
                <li>Using this Website to engage in any advertising or marketing.</li>
              </ul>
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall we, nor any of our officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. We, including our officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You hereby indemnify to the fullest extent us from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Variation of Terms</h2>
            <p className="text-gray-700 mb-4">
              We are permitted to revise these Terms at any time as we see fit, and by using this Website you are expected to review these Terms on a regular basis.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Assignment</h2>
            <p className="text-gray-700 mb-4">
              We are allowed to assign, transfer, and subcontract our rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Entire Agreement</h2>
            <p className="text-gray-700 mb-4">
              These Terms constitute the entire agreement between us and you in relation to your use of this Website and supersede all prior agreements and understandings.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded-md">Governing Law & Jurisdiction</h2>
            <p className="text-gray-700 mb-4">
              These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
            </p>
          </div>
        </div>
      </section>
      </>
    )
}
  