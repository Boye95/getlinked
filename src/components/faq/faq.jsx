import FAQItem from "./FAQItem";

import manthinking from "../../assets/webps/manthinking.png";

const faqitems = [
  {
    id: 1,
    question: "How long does it take to ship my order?",
    answer:
      "Orders are usually shipped within 1-2 business days after placing the order.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor isu iyan eba dodo orobo lepa funfun dudu yinmiu ase ifne dhsjf  hfhhdsfcf.",
  },
  {
    id: 3,
    question: "What shipping options do you have?",
    answer:
      "Lorem ipsum dolor isu iyan eba dodo orobo lepa funfun dudu yinmiu ase ifne dhsjf  hfhhdsfcf.",
  },
  {
    id: 4,
    question: "How do I make changes to an existing order?",
    answer:
      "Lorem ipsum dolor isu iyan eba dodo orobo lepa funfun dudu yinmiu ase ifne dhsjf  hfhhdsfcf.",
  },
  {
    id: 5,
    question: "When will my order arrive?",
    answer:
      "Lorem ipsum dolor isu iyan eba dodo orobo lepa funfun dudu yinmiu ase ifne dhsjf  hfhhdsfcf.",
  },
];

export default function Faq() {
  return (
    <div className="flex items-center justify-center text-white py-12 px-32 border-b border-[#ffffff2d]">
      <div className="w-2/5 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="flex flex-col relative font-clashbold text-[32px] leading-tight">
            <span className="">Frequently Asked</span>{" "}
            <span className="text-[#D434FE]">Questions</span>
          </h3>
          <p className="font-montserrat text-[14px]">
            <span className="">
              We got answers to the questions that you might want to ask about
            </span>{" "}
            <span className="font-bold">getlinked Hackathon 1.0</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {faqitems.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={manthinking} alt="" className="w-[35rem]" />
      </div>
    </div>
  );
}
