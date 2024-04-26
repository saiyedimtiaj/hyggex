import React from "react";
import { useState } from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

const Faq = () => {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const datas = [
        { title: 'Connected Devices', color: 'green', description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'},
        { title: 'Apps Permissions', color: 'sky', description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'},
        { title: 'Pending task', color: 'purple', description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'},
    ];

  return (
    <div className="mb-14">
      <h1
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="bg-gradient-to-r font-semibold from-indigo-700 to-indigo-500 text-3xl"
      >
        FAQ
      </h1>
      <div className="mt-6">
        {datas.map((data, idx) => (
          <div key={idx} className="mb-4">
            <div
              className={`flex items-center max-w-[650px] justify-between p-4 rounded-lg border border-indigo-600`}
            >
              <div>
               <div className="flex items-center justify-between">
               <h2 className="text-lg font-semibold">{data.title}</h2>
               </div>
                {isOpen === idx && <p className="mt-2 text-gray-600">{data.description}</p>}
              </div>
              <button
                className={`ml-4 p-2 rounded-full bg-${data.color}-400 text-black focus:outline-none`}
                onClick={() => handleToggle(idx)}
              >
                {isOpen === idx ? <FaChevronUp  size={20} /> : <FaChevronDown size={20} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
