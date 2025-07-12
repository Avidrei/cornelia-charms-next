
import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="flex justify-center ">
    <div className="flex flex-col w-[90%] xl:w-[80%]">
      <button
        onClick={onClick}
        className={`flex items-center gap-4 px-5 xl:px-7 text-left transition-colors duration-300 py-6 xl:py-9 justify-start 
          ${isOpen ? "bg-cornelia-softpink text-white rounded-t-2xl" : "bg-cornelia-darkpink text-cornelia-softwhite rounded-2xl"}
          hover:bg-cornelia-softpink focus:outline-none`}
      >
        <span className="font-extrabold text-md xl:text-2xl">{isOpen ? "-" : "+"}</span>
        <span className="font-semibold text-[0.92rem] xl:text-[1.65rem] poppins">{title}</span>
      </button>

      {isOpen && (
        <div className="py-8 -mt-3 text-justify text-cornelia-softwhite font-semibold shadow-lg text-md xl:text-[1.35rem] px-7 bg-cornelia-softpink poppins rounded-b-2xl">
          {content}
        </div>
      )}
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is Cornelia Charms ?",
      content:
        "CorneliaCharms is a jewelry brand offering fun, stylish, and meaningful accessories inspired by Filipino culture.",
    },
    {
      title: "Do you ship nationwide ?",
      content:
        "Yes! We ship all over the Philippines with affordable delivery options.",
    },
    {
      title: "Who is the owner of Cornelia Charms ?",
      content:
        "The owner of Cornelia Charms is Jenn Andrei Palad, a passionate jewelry designer and entrepreneur.",
    },
    {
      title: "How do I place an order?",
      content:
        "You can order through our shopee or tiktok shop. Simply browse our collection, add items to your cart, and proceed to checkout.",
    },
  ];

  return (
    <div className="z-10 w-full px-4 py-5 mb-10 space-y-4 rounded-xl">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
