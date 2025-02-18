import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

import { useEffect, useState } from "react";
import { faqs } from "../../assets/data/faqs";

const Accordions = () => {
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(false);

  useEffect(() => {
    setFaqData(faqs);
  }, []);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {faqData.map((faq, index) => (
        <div key={index} className=" border rounded-lg mb-6">
          <div
            className="flex justify-between items-center cursor-pointer p-3"
            onClick={() => toggleFaq(index)}
          >
            <h3 className="text-headingColor text-xl font-medium">
              {faq.question}
            </h3>
            <span className="text-xl font-medium">
              {openIndex === index ? (
                <MdKeyboardDoubleArrowUp />
              ) : (
                <MdKeyboardDoubleArrowDown />
              )}
            </span>
          </div>
          {openIndex === index && (
            <div className="p-3">
              <p className="text-textColor">{faq.content}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordions;
