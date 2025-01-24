/** @format */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordianComponent() {
  const accordionItems = [
    {
      title: "What payment methods do you accept?",
      content: "We accept Visa, MasterCard, PayPal, and Apple Pay.",
    },
    {
      title: "Can I cancel my order?",
      content:
        "Orders can be canceled within 24 hours of placing them. However, if the order has already been shipped, cancellation may not be possible. In such cases, you will need to process a return once the item is delivered. Please contact our support team immediately if you wish to cancel your order, and they will guide you through the process.",
    },
    {
      title: "Do you offer gift cards?",
      content: "Yes, we offer gift cards in various denominations.",
    },
    {
      title: "Is there a warranty for products?",
      content:
        "All products come with a one-year limited warranty, which covers any manufacturing defects. To claim the warranty, you will need to provide proof of purchase and a detailed description of the issue. Please note that the warranty does not cover damage caused by misuse, accidents, or unauthorized modifications. For more information, refer to the warranty policy on our website or contact our support team.",
    },
    {
      title: "How can I track my order?",
      content:
        "You can track your order using the tracking link sent to your email.",
    },
    {
      title: "Do you offer discounts for bulk purchases?",
      content: "Yes, discounts are available for orders of 10 or more items.",
    },
    {
      title: "Can I change my shipping address after ordering?",
      content:
        "Yes, you can update your address within 12 hours of placing the order.",
    },
    {
      title: "Are there any membership benefits?",
      content:
        "Members get exclusive discounts, early access to sales, and more.",
    },
    {
      title: "Do you provide installation services?",
      content:
        "Yes, we offer professional installation services for select products.",
    },
  ];

  // Split items into two arrays for left and right columns
  const leftColumnItems = accordionItems.filter((_, i) => i % 2 === 0);
  const rightColumnItems = accordionItems.filter((_, i) => i % 2 === 1);
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {leftColumnItems.map((item, index) => (
              <AccordionItem key={index} value={`item-left-${index}`}>
                <div className="relative">
                  <AccordionTrigger className="group">
                    {item.title}
                  </AccordionTrigger>
                </div>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="space-y-4">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {rightColumnItems.map((item, index) => (
              <AccordionItem key={index} value={`item-right-${index}`}>
                <div className="relative">
                  <AccordionTrigger className="group">
                    {item.title}
                  </AccordionTrigger>
                </div>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
