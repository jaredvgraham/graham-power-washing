"use client";
import React from "react";
import { clientData } from "@/../config";
import { Phone, Mail, MapPin, Facebook, House } from "lucide-react";
import { motion } from "framer-motion";
import GetAiQuote from "./AiQuote";

const contactDetails = [
  {
    icon: <Phone size={24} className="text-primary" />,
    label: "Phone",
    value: clientData.phone,
    href: `tel:${clientData.phone}`,
  },
  {
    icon: <Mail size={24} className="text-primary" />,
    label: "Email",
    value: clientData.email,
    href: `mailto:${clientData.email}`,
  },
  {
    icon: <MapPin size={24} className="text-primary" />,
    label: "Address",
    value: `${clientData.address.street}, ${clientData.address.city}, ${clientData.address.state}`,
  },
];

const socialLinks = [
  {
    href: clientData.social.facebook,
    icon: <Facebook size={24} />,
    ariaLabel: `Facebook Page for ${clientData.name}`,
  },
  {
    href: clientData.social.homeAdvisor,
    icon: <House size={24} />,
    ariaLabel: `HomeAdvisor Page for ${clientData.name}`,
  },
];

const Contact = () => {
  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help and answer any question you might have. We
            look forward to hearing from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200/80"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="mt-1">{detail.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {detail.label}
                    </h3>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    className="text-gray-500 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <GetAiQuote />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
