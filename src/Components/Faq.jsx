import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const datas = [
    {
      title: "Can education flashcards be used for all age groups?",
      description:
        'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.',
    },
    {
      title: "How do education flashcards work?",
      description:
        "Can education flashcards be used for test preparation?",
    },
    {
      title: "Pending task",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
  ];

  return (
    <div className="mb-14">
      <h1
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="bg-gradient-to-r font-semibold from-indigo-700 to-indigo-500 text-3xl mb-6"
      >
        FAQ
      </h1>
      <div>
        {datas.map((data, idx) => (
          <div key={idx} className="mb-4">
            <div className={`max-w-[750px] rounded-lg border border-indigo-600 p-4 transition-all duration-300 ease-in-out ${isOpen === idx ? 'bg-gray-100' : ''}`}>
              <div onClick={() => handleToggle(idx)} className="flex cursor-pointer items-center justify-between">
                <h2 className="text-lg font-semibold">{data.title}</h2>
                <button
                  className={`p-2 rounded-full text-black focus:outline-none`}
                >
                  {isOpen === idx ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>
              {isOpen === idx && (
                <div className="mt-2 text-gray-600">{data.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
