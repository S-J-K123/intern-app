import React from "react";
import Translation from "../Translation";


const FAQ = ({ faq, index, toggleFAQ }) => {
  
  return <div 
  className={"faq " + (faq.open ? "open" : '')}
  key={index}
  onClick={() => toggleFAQ(index)}
  
  >
<div className="faq-question">
    {faq.question}
</div>
<div className="faq-answer">
    {faq.answer}
</div>
<Translation/>
  </div>;
 
};

export default FAQ;
