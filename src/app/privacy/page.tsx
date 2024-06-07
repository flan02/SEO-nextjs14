import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { // * This will override the one in robots.ts
    index: false,
    follow: true
  }
}

export default function PrivacyPolicy() {
  return (
    <div className="space-y-3" style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 className="text-xl font-bold">Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleString()}</p>

      <p>
        Welcome to our Privacy Policy page! When you use our web site services,
        you trust us with your information. This Privacy Policy is meant to help
        you understand what data we collect, why we collect it, and what we do
        with it. This is important; we hope you will take time to read it
        carefully. Remember, you can find controls to manage your information
        and protect your privacy and security. We’ve tried to keep it as simple
        as possible.
      </p>

      <h2 className="font-bold">Information We Collect</h2>
      <p>
        Our website collects data to operate effectively and provide you the
        best experiences with our services. You provide some of this data
        directly, such as when you create an account. We get some of it by
        recording how you interact with our services, for example, using
        technologies like cookies, and receiving error reports or usage data
        from software running on your device.
      </p>

      <h2 className="font-bold">How We Use Information</h2>
      <p>
        Our website uses the data we collect for three basic purposes: to
        operate our business and provide (including improving and personalizing)
        the services we offer, to send communications, including promotional
        communications, and to display advertising. In carrying out these
        purposes, we combine data we collect from different contexts or obtain
        from third parties to give you a more seamless, consistent, and
        personalized experience.
      </p>

      <h2 className="font-bold">Reasons We Share Personal Data</h2>
      <p>
        We share your personal data with your consent or as necessary to
        complete any transaction or provide any service you have requested or
        authorized. We also share data with vendors working on our behalf;
        when required by law or to respond to legal process; to protect our
        customers; to protect lives; to maintain the security of our services;
        and to protect the rights or property of our website.
      </p>

      <h2 className="font-bold">Accessing and Controlling Your Personal Data</h2>
      <p>
        You can also make choices about our collection and use of your data.
        You can control your personal data that we have obtained, and exercise
        your data protection rights, by contacting us. How you can access or
        control your personal data will depend on which services you use. For
        example, you can:
      </p>
      <ul>
        <li>
          Control the use of your data for interest-based advertising from our
          website by visiting the opt-out page.
        </li>
        <li>
          Access and clear some of your data through your account settings.
        </li>
      </ul>

      <h2 className="font-bold">Cookies and Similar Technologies</h2>
      <p>
        Our website uses cookies (small text files placed on your device) and
        similar technologies to provide our services and help collect data. For
        example, cookies allow us to store your preferences and settings; enable
        you to sign-in; provide interest-based advertising; combat fraud; and
        analyze how our services are performing. We also use web beacons to help
        deliver cookies and gather usage and performance data. Our website may
        include web beacons and cookies from third-party service providers.
      </p>

      <h2 className="font-bold">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, you can contact me
        using the information below:
      </p>
      <p>Email: chanivetdan@hotmail.com</p>
      <p>Github: https://www.github.com/flan02</p>
    </div>
  );
}