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
    <div id="faqs" className="flex items-center justify-center border-b border-[#ffffff2d] px-32 py-12 text-white bxl:px-20 xl:px-14 ham:flex-col ham:gap-16 xs:px-8 ">
      <div className="flex w-2/5 flex-col gap-4 ham:w-[70%] xs:w-full">
        <div className="flex flex-col gap-4">
          <h3 className="relative flex flex-col font-clashbold text-[32px] leading-tight ham:text-center ham:text-[28px] sm:text-[20px] ">
            <span className="">Frequently Asked</span>{" "}
            <span className="text-[#D434FE]">Questions</span>
          </h3>
          <p className="font-montserrat text-sm  ham:text-center ham:leading-relaxed">
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
      <div className="flex w-1/2 justify-end ham:flex ham:w-full ham:justify-center ">
        <img src={manthinking} alt="" className="w-[35rem] blend:w-[24rem]" />
      </div>
    </div>
  );
}
