import React from "react";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-4">&copy; 2024 LetterLoop. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
