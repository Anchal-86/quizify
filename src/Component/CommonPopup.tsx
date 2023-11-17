import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CommonPopup(props: any) {
  return (
    <div>
      <Dialog open={props.open} fullScreen>
        <div style={{ width: "100%", height: "70px" }}>
          <h1
            style={{
              fontFamily: "Pacifico",
              color: "#7AE061",
              textAlign: "center",
              marginTop:"-5px"
            }}
          >
            {props.data.category}
          </h1>
        </div>
        <DialogContent sx={{ marginLeft: "-20px" }}>
          <ol>
            {props.data.questions &&
              props.data.questions.map((item: any) => {
                return (
                  <div>
                    <li>
                      <Typography variant="h6" sx={{ fontFamily: "Acme" }}>
                        {item.question}
                        <ol>
                          {item.options &&
                            item.options.map((items: any) => {
                              return (
                                <li>
                                  <FormControl>
                                    <RadioGroup
                                      aria-labelledby="demo-radio-buttons-group-label"
                                      name="radio-buttons-group"
                                    >
                                      <FormControlLabel
                                        value={items}
                                        control={<Radio />}
                                        label={items}
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </li>
                              );
                            })}
                        </ol>
                      </Typography>
                    </li>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Answer</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ color: "#7AE061" }}>
                          {item.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })}
          </ol>
        </DialogContent>
        <DialogActions>
          <div style={{ width: "100%", height: "50px" }}>
            <h3
              style={{
                fontFamily: "Pacifico",
                color: "#0000FF",
                textAlign: "center",
                paddingBottom: "10px",
              }}
            >
              Er. Anchal Singh
            </h3>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
