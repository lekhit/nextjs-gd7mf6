import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from 'next/link';
export default function SimpleAccordion(props) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={props.id}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.body}</Typography>
      </AccordionDetails>
      <Link href='/article/[id]' as={`/article/${props.id}`}>
      <Button
        sx={{
          m: 2,
        }}
        variant="outlined"
      >
        Outlined
      </Button>
      </Link>
    </Accordion>
  );
}
