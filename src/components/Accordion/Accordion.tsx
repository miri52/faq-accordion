import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const questions = [
  {
    id: 1,
    question: `What is Frontend Mentor, and how will it help me?`,
    answer: `Frontend Mentor offers realistic coding challenges to help developers
improve their frontend coding skills with projects in HTML, CSS, and
JavaScript. It's suitable for all levels and ideal for portfolio
building.`,
  },
  {
    id: 2,
    question: `Is Frontend Mentor free?`,
    answer: `          Yes, Frontend Mentor offers both free and premium coding challenges,
  with the free option providing access to a range of projects suitable
  for all skill levels.`,
  },
  {
    id: 3,
    question: `Can I use Frontend Mentor projects in my portfolio?`,
    answer: `          Yes, you can use projects completed on Frontend Mentor in your
  portfolio. It's an excellent way to showcase your skills to potential
  employers!`,
  },
  {
    id: 4,
    question: `How can I get help if I'm stuck on a challenge?`,
    answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help
	channel where you can ask questions and seek support from other community members.`,
  },
];

// todo: aria-expanded = true -> toggle icon (state)

function Accordion() {
  return (
    <ChakraAccordion allowToggle>
      FAQs
      {questions.map((el) => (
        <AccordionItem key={el.id}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {el.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{el.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  );
}

export default Accordion;
