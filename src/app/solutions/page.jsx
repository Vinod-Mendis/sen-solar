/** @format */

import SolutionTypeCard from "../components/SolutionTypeCard";

export default function page() {
  const cardContent = [
    {
      title: "A Home That Always Shines",
      category: "Home Solar Solutions:",
      image: "/images/house1.png",
      side: "left",
      features: [
        {
          subtitle: "Cost Savings:",
          description:
            "Reduce electricity costs and minimize reliance on the grid.",
        },
        {
          subtitle: "Increase Property Value:",
          description: "Boost your home's value with a solar upgrade.",
        },
        {
          subtitle: "Green Power with Enhanced Safety:",
          description:
            "Enjoy clean energy that meets the highest  safety standards for you and your property.",
        },
        {
          subtitle: "Smart Energy Management:",
          description:
            "Monitor and control your energy generation and  usage effortlessly.",
        },
        {
          subtitle: "Uninterrupted Power:",
          description:
            "Say goodbye to blackouts and enjoy every moment  without worry.",
        },
      ],
    },
    {
      title: "Unlock the Potential of Your Roof",
      category: "Business Solar Solutions:",
      image: "/images/house2.png",
      side: "right",
      features: [
        {
          subtitle: "Utilize Roof Space:",
          description:
            "Turn your rooftop into a powerhouse, generating clean  energy efficiently.",
        },
        {
          subtitle: "Boost Earnings:",
          description:
            "Increase your income by exporting excess energy back to the  grid.",
        },
        {
          subtitle: "Green Power with Enhanced Safety:",
          description:
            "Benefit from renewable energy that meets  the highest safety standards for your business.",
        },
        {
          subtitle: "Smart Energy Management:",
          description:
            "Seamlessly monitor and control your energy  production and consumption.",
        },
      ],
    },
    {
      title: "Harness Large-Scale Solar Power",
      category: "Utility Plant Solar Solutions:",
      image: "/images/house3.png",
      side: "left",
      features: [
        {
          subtitle: "Maximize Land Use:",
          description:
            "Transform vast land areas into solar farms, generating clean,  renewable energy on a large scale.",
        },
        {
          subtitle: "High Energy Output:",
          description:
            "Increase energy production with advanced solar  technologies tailored for utility-scale needs.",
        },
        {
          subtitle: "Green Power with Enhanced Safety:",
          description:
            "Operate with industry-leading safety  standards, ensuring secure and reliable energy generation.",
        },
        {
          subtitle: "Advanced Energy Management:",
          description:
            "Gain precise control and monitoring of large scale energy production for optimized performance.",
        },
      ],
    },
  ];

  const benfits = [
    {
      subtitle: "Smart Financial Returns",
      description:
        "Invest in solar and enjoy attractive returns with consistent  energy cost savings.",
    },
    {
      subtitle: "Energy Independence:",
      description:
        "Reduce reliance on traditional power sources and stabilize your  energy costs for the long term.",
    },
    {
      subtitle: "Tax Incentives & Rebates:",
      description:
        "Take advantage of government incentives that make solar  investments even more profitable.",
    },
    {
      subtitle: "Sustainable Impact:",
      description:
        "Contribute to a greener planet by investing in renewable energy,  reducing carbon footprint, and promoting sustainability.",
    },
    {
      subtitle: "Reliable & Low-Maintenance:",
      description:
        "Solar systems offer high reliability with minimal  maintenance, ensuring hassle-free, long-term benefits.",
    },
  ];
  return (
    <div className="pt-52 gap-24 flex flex-col w-full max-w-7xl mx-auto">
      {cardContent.map((card, index) => (
        <SolutionTypeCard
          key={index}
          variant={card.side}
          title={card.title}
          category={card.category}
          image={card.image}
          featuresArray={card.features}
        />
      ))}
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl font-semibold max-w-[60rem]">
          Solar Investment Opportunities and Benefits:
        </h1>
        <ul className="pl-6 flex flex-col gap-6">
          {benfits.map((benfit, index) => (
            <li className="list-disc leading-tight text-xl" key={index}>
              <span className="font-semibold mr-2">{benfit.subtitle}</span>
              {benfit.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
