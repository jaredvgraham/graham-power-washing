"use client";
import React from "react";
import { clientData } from "@/../config";
import { Phone, Mail, MapPin, Facebook, House } from "lucide-react";
import { motion } from "framer-motion";
import GetAiQuote from "./AiQuote";

const contactDetails = [
  {
    icon: <Phone size={24} className="text-blue-600" />,
    label: "Phone",
    value: clientData.phone,
    href: `tel:${clientData.phone}`,
  },
  {
    icon: <Mail size={24} className="text-blue-600" />,
    label: "Email",
    value: clientData.email,
    href: `mailto:${clientData.email}`,
  },
  {
    icon: <MapPin size={24} className="text-blue-600" />,
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
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Contact Graham
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Get a <span className="text-red-600">Fast Free</span>{" "}
            <span className="text-blue-600">Quote</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Tell us what needs cleaning and the best way to reach you. We&apos;ll
            follow up with clear next steps and no pressure.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="order-2 lg:order-1 lg:w-1/3 bg-white p-8 rounded-3xl shadow-sm border border-slate-200"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="mt-1">{detail.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">
                      {detail.label}
                    </h3>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-slate-600 hover:text-blue-700 transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-slate-600">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="font-semibold text-lg text-slate-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    className="text-slate-500 hover:text-blue-700 transition-colors"
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
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="order-1 lg:order-2 lg:w-2/3"
          >
            <GetAiQuote />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
