
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-16 border-t border-gray-200">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-lg font-bold">
                WarmText
              </span>
              <span className="text-gray-600">Transformer</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Transform AI-generated text into natural, engaging content
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <h4 className="font-medium mb-2">Resources</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Company</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>© 2025 WarmText – The Free AI Humanizer Tool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
