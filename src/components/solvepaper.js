import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import app_config from "../config";
import update from "immutability-helper";
import { Formik } from "formik";

const SolvePaper = () => {
  const [paper, setPaper] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const url = app_config.api_url;

  const fetchPapers = () => {
    fetch(url + "/paper/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPaper(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  const answerChange = (q_i, e) => {
    const questionsList = {};
    console.log(paper.questions[q_i]);
    // paper[index] = { $set: e.target.value };
    questionsList[q_i] = { answer: { $set: e.target.value } };

    const newData = update(paper, { questions: questionsList });

    console.log(paper);
    setPaper(newData);
  };

  const displaySolver = (question, q_i) => {
    if (question.answertype == "text") {
      return (
        <TextField
          className="w-100"
          value={question.answer}
          variant="filled"
          label="Answer"
          onChange={(e) => answerChange(q_i, e)}
        />
      );
    } else if (question.answertype == "checkbox") {
      return (
        <div className="row">
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {question.options.map((op) => (
              <div className="col-md">
                <FormControlLabel control={<Checkbox name={op} />} label={op} />
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    } else if (question.answertype == "radio") {
      return (
        <div className="row">
          <RadioGroup
            row
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {question.options.map((op) => (
              <div className="col-md">
                <FormControlLabel value={op} control={<Radio />} label={op} />
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    }
  };

  const showPaper = () => {
    if (!loading) {
      return (
        <>
          <Card>
            <CardContent>
              <p>Question : {paper.course}</p>
              <p>Max Marks : {paper.max}</p>

              <Formik initialValues={} onSubmit={}>
                
              </Formik>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              {paper.questions.map((question, index) => (
                <div className="card mt-5">
                  <div className="card-body">
                    <h3>{question.name}</h3>
                    <div className="my-3">{displaySolver(question, index)}</div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardActions>
              <Button color="primary" variant="contained">
                Submit Answers
              </Button>
            </CardActions>
          </Card>
        </>
      );
    }
  };


  const submitAnswer = () => {
    const value = {

    }
  }

  return <Container>{showPaper()}</Container>;
};

export default SolvePaper;
