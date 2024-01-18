import React from "react";

const PricingPlan = ({
  title,
  price,
  description,
  features,
  isHighlighted,
}) => {
  const buttonClasses = isHighlighted
    ? "inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white sm:text-base md:text-lg"
    : "inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white sm:text-base md:text-lg";

  return (
    <div
      className={`relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 ${
        isHighlighted
          ? "bg-white border-4 border-blue-600"
          : "border border-solid"
      } rounded-lg sm:p-6 md:px-8 md:py-16 lg:ml-3 sm:my-0 md:my-8 md:p-8`}
    >
      <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
        {title}
      </h3>
      <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
        <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
          ${price}
        </p>
        <p
          className="box-border m-0 border-solid"
          style={{ borderImage: "initial" }}
        >
          / month
        </p>
      </div>
      <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
        {description}
      </p>
      <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
        {features.map((feature, index) => (
          <li
            key={index}
            className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
          >
            <svg
              className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={buttonClasses}>Select Plan</button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      price: "5",
      description: "Ideal for casual browsing",
      features: ["Automated Reporting", "Faster Processing", "Physical Check"],
      isHighlighted: false,
    },
    {
      title: "Basic",
      price: "15",
      description: "Ideal for shopaholics interested in eco fashion",
      features: [
        "Everything in Starter",
        "Curated listing",
        "Spending Reports",
        "Premium Support",
      ],
      isHighlighted: true,
    },
    {
      title: "Plus",
      price: "25",
      description:
        "Ideal for larger and enterprise companies or periodic sellers",
      features: [
        "Everything in Basic",
        "Unlimited help",
        "Advanced Analytics",
        "Company/Seller Evaluations",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
      <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
          <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
            Pricing to fit the needs of any person.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
