import { useState } from "react";
import FAQ from "./component/FAQ";
import Header from "./component/Header";




function App() {
const[faqs, setFaqs] = useState([
  {
    question: "How to make the payment",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis at adipisci obcaecat",
    open: true
  },
  {
    question: "How to contact",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis at adipisci obcaecat",
    open: false
  },
  {
    question: "What are our services",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis at adipisci obcaecat",
    open: false
  },
  
]);

const toggleFAQ = index => {
  setFaqs(faqs.map((faq, i) => {
    if (i === index) {
      faq.open = !faq.open
    } else {
      faq.open = false
    }

    return faq
  }))
}















  return (
    <div className="App">
<section>
<nav>
<h2 className="logo">LOGO</h2>
<ul>
  <li><a href="#">About</a></li>
  <li><a href="#">Pricing</a></li>
  <li><a href="#">Contact</a></li>
</ul>
</nav>
</section>

<section className="main">
  <h1>
    Heading
  </h1>
  <p className="text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Dignissimos ratione at quae culpa vero quibusdam,
     dolorum voluptates error corrupti expedita ex delectus?
     Eos quo repellendus sequi quis deleniti quas fugit?
  </p>
</section>

<Header/>
<div className="faqs">
  {faqs.map((faq, i) => (
    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
  ))}
</div>
    </div>
  );
}

export default App;
