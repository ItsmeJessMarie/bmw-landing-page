const generateQuote = function () {
  const quotes = [
    {
      quote:
        'Eric: <i>"Mr. F... F... F... Feeny"</i> <br /> Mr. Feeny: <i>"I love the Feeny call."</i>',
    },
    {
      quote:
        'Cory: <i>"It\'s hard to imagine you as a boy. <br /> Did you parents call you Mr. Feeny?"</i>',
    },
    {
      quote:
        'Eric: <i>"I have a question that I\'m going to need a yes or no answer to. How many people get into Yale each year?"</i> <br /> Mr. Feeny: <i>"No."</i>',
    },
    {
      quote:
        'Topanga: <i>"You do your thing and I do my thing. You are you and I am I. And if, in the end, we end up together, it\'s beautiful."</i>',
    },
    {
      quote:
        'Mr. Feeny: <i>"But to me, a real hero is someone who does the right thing when the right thing isn\'t easy to do."</i>',
    },
    {
      quote:
        'Topanga: <i>"No matter how difficult life gets, the important thing is to live it with hope."</i>',
    },
    {
      quote:
        "Eric: <i>\"It's not the changes that matter, it's how you react to the changes.\"</i>",
    },
    {
      quote: 'Morgan: <i>"They just shot the neighbor!"</i>',
    },
    {
      quote: 'Eric: <i>"Life\'s tough, get a helmet."</i>',
    },
    {
      quote:
        'Shawn: <i>"Hey, when I got friends, I can get through anything."</i>',
    },
    {
      quote:
        'Eric: <i>"Cory, if stupidity was in the Olympics, you\'d win a Nobel prize."</i>',
    },
    {
      quote:
        'Cory: <i>"Mr. Turner, you should know by now. I\'m wrong about absolutely everything!"</i>',
    },
  ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
};

window.onload = function () {
  generateQuote();
  document.getElementById("btn-quote").addEventListener("click", generateQuote);
};
