import { day1, day2, day3, day4, day5, day6 } from "../assets";

const epochs = [
  {
    number: "01",
    type: "CHAPTER",
    title: "ATTENTION IS ALL YOU NEED",
    content:
      "Before machines can understand, they must learn to learn. This session takes you through the evolution of AI, from the basics of machine learning and gradient descent to the rise of neural networks like CNNs and RNNs. You'll then unravel how attention mechanisms and transformers reshaped deep learning, powering models like GPT and Gemini. A complete journey from perception to intelligence.",
    date: "06th September",
    image: day2,
  },
  {
    number: "02",
    type: "CHAPTER",
    title: "AND THEN IT SPOKE",
    content:
      "It listened. It learned. Now it speaks. Explore the inner workings of LLMs like GPT and Gemini, from tokenization, embeddings, pretraining, fine tuning, inference, and more. You'll uncover how these models convert data into understanding, and prompts into dialogue. Finally, bring it all to life by building your first AI agent, diving into environments, tool use, memory, and how LLMs move from language to action.",
    date: "13rd September",
    image: day3,
  },
  {
    number: "03",
    type: "CHAPTER",
    title: "ORDERS FROM THE THRONE",
    content:
      "This is where agents stop reacting and start leading. You’ll build AI systems that reason in steps, take parallel actions, handle failures, and loop until goals are met. Then, scale up to agents that delegate, manage sub agents, and make decisions in dynamic environments. From memory to multi agent coordination, you’ll design AI that doesn’t just act,you’ll design agents that not only act, but orchestrate, endure, and lead.",
    date: "20th September",
    image: day5,
  },
  {
    number: "04",
    type: "CHAPTER",
    title: "WHATEVER IT TAKES",
    content:
      "Every idea. Every line of code. Every agent. It all leads to this. On the final day, you’ll build and demo a complete AI agent system, equipped with tools, memory, and workflows. This is where theory becomes practice, as you take on real world problem statements through hands on, multi agent projects. Compete in this mini hackathon to win prizes, and close the journey by exploring the future of Agentic AI and the frameworks shaping it. Until next time... Design and Code.",
    date: "27th September",
    image: day6,
  },
];

const joinning = [
  {
    title: "EARLY BIRD",
    content:
      "A discounted rate for those who register early and secure their spot in the cohort before anyone else.",
    price: "1899",
    link: "https://forms.gle/XBs9NoYjiM8etoW28",
  },
  {
    title: "PAST ATTENDEE",
    content:
      "Available to previous DeCo workshop participants. Enter your workshop ID, sent to your registered email to unlock this discount.",
    price: "1899",
    link: "https://forms.gle/FQh7CA6XyTckvcKE7",
  },
  {
    title: "STUDENT",
    content:
      "For students currently pursuing their education and looking to gain hands on experience with real world AI. Upload a valid college or school ID.",
    price: "1999",
    link: "https://forms.gle/oXLL46e6YMXDC9J8A",
  },
  {
    title: "GENERAL",
    content:
      "Ideal for those already in the industr whether in tech, design, or research who want to deepen their understanding of AI and LLMs.",
    price: "2099",
    link: "https://forms.gle/wZF1ecr3ZfmzkdJf7",
  },
];

export { epochs, joinning };
