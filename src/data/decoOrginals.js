import { day1, day2, day3, day4, day5, day6 } from "../assets";

const epochs = [
  {
    number: "01",
    type: "CHAPTER",
    title: "THE MIND BEFORE MEMORY",
    content:
      "Before a machine can remember, it must learn to think. Step into the world of Artificial Intelligence by uncovering how machines process information, find patterns, and improve with experience. You’ll explore the foundations of AI and machine learning, build your first model step by step, and uncover how algorithms like gradient descent learn and evolve from data.",
    date: "23rd August",
    image: day1,
  },
  {
    number: "02",
    type: "CHAPTER",
    title: "ATTENTION IS ALL YOU NEED",
    content:
      "Enter the age of deep learning, where neural networks go beyond patterns and begin to understand. You’ll explore how Convolutional and Recurrent Neural Networks paved the way and then decode the breakthrough idea that changed everything: Attention. By the end of the day, you’ll know exactly how transformers work and why they became the foundation of powerful models like GPT and Gemini.",
    date: "30th August",
    image: day2,
  },
  {
    number: "03",
    type: "CHAPTER",
    title: "AND THEN IT SPOKE",
    content:
      "It listened. It learned. And now it speaks. This is where raw computation becomes conversation. You’ll explore how LLMs like GPT and Gemini turn numbers into meaning, prompts into dialogue, and text into intelligent action. From embeddings to fine tuning, you’ll finally understand how these models are built and how they think in words. From language to action, you’ll close the day by creating your first AI agent.",
    date: "06th September",
    image: day3,
  },
  {
    number: "04",
    type: "CHAPTER",
    title: "I CAN DO THIS ALL DAY",
    content:
      "This is where agents stop reacting and start taking control. You’ll design intelligent systems that think in steps, execute parallel actions, handle failures with retries, and loop through tasks until goals are met. With tools in hand and memory to rely on, your agents begin to solve real world problems with structure and strategy. By the end of the day, you won’t just build an AI that works, you’ll build one that endures, strategizes, and never gives up.",
    date: "13rd September",
    image: day4,
  },
  {
    number: "05",
    type: "CHAPTER",
    title: "ORDERS FROM THE THRONE",
    content:
      "It’s time for your agents to lead. On this day, you’ll build systems that can delegate tasks, manage sub agents, and make dynamic decisions in complex environments. Through multi agent coordination, hierarchical control, and task decomposition, your agents will operate not as individuals, but as commanders of intelligent systems. By the end, you’ll understand how to architect AI that not only completes tasks, but orders others to do so.",
    date: "20th September",
    image: day5,
  },
  {
    number: "06",
    type: "CHAPTER",
    title: "IT ALL LED HERE",
    content:
      "Every idea. Every line of code. Every agent. It all led here. This is the final day where you stop following and start creating. You’ll build and showcase a complete AI agent, equipped with tools, memory, and workflows. Not just a project. A proof of what you now carry. You didn’t come this far just to learn. This is your moment. A ₹5000 cash prize awaits the winning team of the mini hackathon. Let your skills do the talking.",
    date: "27th September",
    image: day6,
  },
];

const joinning = [
  {
    title: "EARLY BIRD",
    content:
      "A discounted rate for those who register early and secure their spot in the cohort before anyone else.",
    price: "1799",
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
