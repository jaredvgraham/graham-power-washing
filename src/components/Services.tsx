import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Soft Washing for Siding",
      description:
        "Our professional soft washing services are perfect for cleaning siding without causing damage. This gentle cleaning method effectively removes algae, mold, and mildew, extending the life of your home’s exterior.",
      icon: "🏠",
    },
    {
      id: 2,
      title: "Driveway Pressure Washing",
      description:
        "Revitalize your driveway with our high-pressure washing services. We remove oil stains, dirt, and grime, restoring your driveway to its original condition and enhancing your property’s curb appeal.",
      icon: "🚗",
    },
    {
      id: 3,
      title: "Deck and Patio Cleaning",
      description:
        "Our deck and patio cleaning services remove dirt, algae, and mildew, making your outdoor spaces look brand new. We use safe and effective methods to protect your wood and stone surfaces.",
      icon: "🪵",
    },
    {
      id: 4,
      title: "Gutter Cleaning and Maintenance",
      description:
        "Prevent water damage with our gutter cleaning services. We clear out leaves, debris, and build-up to ensure your gutters function properly, protecting your home’s foundation and landscaping.",
      icon: "🌧️",
    },
    {
      id: 5,
      title: "Fence Pressure Washing",
      description:
        "Restore the appearance of your fence with our fence pressure washing services. We remove dirt, mold, and discoloration, making your fence look new and extending its lifespan.",
      icon: "🚧",
    },
    {
      id: 6,
      title: "Concrete Cleaning",
      description:
        "Our concrete cleaning services effectively remove stains, dirt, and grime from all concrete surfaces, including driveways, walkways, and patios, ensuring a clean and safe environment.",
      icon: "🏢",
    },
    {
      id: 7,
      title: "Commercial Power Washing",
      description:
        "Keep your commercial property looking professional with our commercial power washing services. We clean storefronts, parking lots, and building exteriors, enhancing your business’s appearance.",
      icon: "🏬",
    },
    {
      id: 8,
      title: "Pool Apron Cleaning",
      description:
        "Our pool apron cleaning services remove dirt, algae, and mildew from the areas surrounding your pool, providing a clean and safe environment for your family and guests to enjoy.",
      icon: "🏊",
    },
    {
      id: 9,
      title: "Graffiti Removal",
      description:
        "Our graffiti removal services quickly and effectively eliminate unwanted graffiti from any surface, restoring the original appearance and maintaining your property’s image.",
      icon: "🎨",
    },
    {
      id: 10,
      title: "Window Cleaning",
      description:
        "Enhance the clarity and brightness of your home or business with our professional window cleaning services. We remove dirt, grime, and streaks for a spotless finish.",
      icon: "🪟",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Power Washing Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
