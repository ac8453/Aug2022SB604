import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

const questions = [
  {
    id: "question-unlimited-projects",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    title: "What does unlimited projects mean?",
  },
  {
    id: "question-free-updates",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    title: "What does free updates include?",
  },
  {
    id: "question-issue",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    title: "Found an issue with a component?",
  },
  {
    id: "question-support",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    title: "Do you offer technical support?",
  },
  {
    id: "question-refund",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    title: "What's your refund policy?",
  },
];

export default function AboutContent() {
  return (
    <Box component="section">
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ mb: 10 }}>
          <Typography gutterBottom variant="h4">
            Have a&nbsp;
            <Box component="span" sx={{ color: "primary.main" }}>
              Question ?
            </Box>
          </Typography>
          <Typography component="div" variant="h4">
            Look here
          </Typography>
        </Box>
        {questions.map((question) => (
          <Accordion
            key={question.id}
            disableGutters={true}
            elevation={0}
            sx={{
              "&.Mui-expanded:before": {
                opacity: 1,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${question.id}-content`}
              id={`${question.id}-header`}
              sx={{ "& .MuiAccordionSummary-content": { my: 3 } }}
            >
              <Typography
                component="div"
                sx={{ fontSize: "1rem" }}
                variant="h6"
              >
                {question.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pb: 3 }}>
              <Typography color="text.secondary">{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}