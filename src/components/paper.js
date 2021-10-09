import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, InputBase } from '@material-ui/core';
import { update } from 'immutability-helper';

const AddPaper = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [questionList, setQuestionList] = React.useState(
        [
            {
                name: 'Question 1',
                answertype: 'text',
                answer: '',
            },
            {
                name: 'Question 2',
                answertype: 'radio',
                answer: '',
                options: [
                    'opt1',
                    'opt2',
                    'opt3',
                ]
            },
        ]);

    const paperform = {
        title: "",
        course: "",
        max: "",
        author: currentUser._id,
        questions: [],
        created: new Date(),

    }

    const formSubmit = (values) => {
        console.log(values);
    }

    const addNewQuestion = () => {
        const newQues = {
            name: 'Question ' + (questionList.length + 1),
            answertype: 'text',
            answer: '',
        }

        setQuestionList([...questionList, newQues]);

        // const newData = update(questionPaper, {
        //     questions: {
        //         $push: [newQues]
        //     }
        // });

        // setQuestionPaper(newData);

    }

    // const createCourse = () => {
    //     let formdata = tempForm;
    //     formdata['data'] = curriculum;
    //     formdata['avatar'] = avatar;
    //     console.log(formdata);
    //     courseService.addCourse(formdata)
    //         .then(res => {
    //             console.log(res);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Sucess',
    //                 text: 'Course Added Successfully'
    //             })
    //         })
    // }

    // const handleRename = (prop, val, ques_i) => {

    //     const questions = {}

    //     if (prop == 'ques_name') {
    //         questions[ques_i] = { name: { $set: val } };
    //     }

    //     const newData = update(questionPaper, {
    //         questions: questions
    //     });

    //     setQuestionPaper(newData);
    // }

    return (
        <div>

            <div className="container">

                <div className="card mt-5">
                    <div className="card-body">
                        <Formik
                            initialValues={paperform}
                            onSubmit={formSubmit}
                        >
                            {({
                                values,
                                handleSubmit,
                                handleChange
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div class="input-group mt-3">
                                        <span class="input-group-text">Title</span>
                                        <input type="text" class="form-control" id="" value={values.title} onChange={handleChange} />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="input-group mt-3">
                                                <span class="input-group-text">Course</span>
                                                <input type="text" class="form-control" id="course" value={values.course} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="input-group mt-3">
                                                <span class="input-group-text">Max Marks :</span>
                                                <input type="number" class="form-control" id="max" value={values.max} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>



                    </div>
                </div>

                {
                    // questionPaper.questions.map((question, sect_i) =>
                    // (
                    //     <div style={{ padding: '2rem', border: '1px solid gray', background: 'grey', marginTop: '1rem' }} key={sect_i}>
                    //         <h3>Question {`${sect_i + 1}: `}</h3>
                    //         <input className="form-control" value={question.name} onChange={e => handleRename('sect_name', e.target.value, sect_i, 0)} />
                    //         <input value={question.description} onChange={e => handleRename('question', e.target.value, sect_i, 0)} />

                    //     </div>
                    // ))
                    questionList.map((question, index) => (
                        <div className="card mt-5">
                            <div className="card-body">
                                <div class="input-group mt-3">
                                    <span class="input-group-text" id={'question' + index}>{question.name}</span>
                                    <input type="text" class="form-control" aria-label="Username" aria-describedby={'question' + index} />
                                </div>
                                <div class="input-group mt-3">
                                    <span class="input-group-text">Question Type</span>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="text">Text</option>
                                        <option value="radio">Radio</option>
                                        <option value="checkbox">Checkbox</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    ))
                }
                <Button onClick={addNewQuestion} className="mt-5" color="primary" variant="contained">Add New Question</Button>
            </div>

            <Button className="w-100 mt-5" >Create Course</Button>

        </div>
    )
}

export default AddPaper;