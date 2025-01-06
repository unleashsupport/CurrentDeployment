import { Mail, Phone, Globe } from 'lucide-react';
import SchedulingContainer from '../scheduling/SchedulingContainer';
import SocialLinks from './SocialLinks';
import ContactForm from '../contact/ContactForm';

const CompanyInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#111]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            
            {/* Contact Form */}
            <div className="bg-[#111] p-8 rounded-2xl border border-green-500/20 mb-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <ContactForm />
            </div>

            <p className="text-gray-400 mb-8">
              Join the growing number of businesses leveraging our AI solutions to drive growth and efficiency. Let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>inquiries@unleashsupport.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+1 (914) 341-2067</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Globe className="w-5 h-5" />
                <span>www.unleashsupport.com</span>
              </div>
              <SocialLinks />
            </div>
          </div>

          {/* Scheduling Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Schedule a Call</h3>
            <SchedulingContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;