import { Formik } from "formik";
import React, { useState } from "react";
import { Button, InputBase } from '@material-ui/core';
import { update } from 'immutability-helper';

const AddPaper = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [questionPaper, setQuestionPaper] = React.useState({
        questions: [
            {
                name: 'Question 1',
                answertype: 'text',
                answer: '',
            },
        ],
        options: {},
    });

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
            name: 'Question 1',
            answertype: 'text',
            answer: '',
        }

        const newData = update(questionPaper, {
            questions: {
                $push: [newQues]
            }
        });

        setQuestionPaper(newData);

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

    const handleRename = (prop, val, ques_i) => {

        const questions = {}

        if (prop == 'ques_name') {
            questions[ques_i] = { name: { $set: val } };
        }

        const newData = update(questionPaper, {
            questions: questions
        });

        setQuestionPaper(newData);
    }

    return (
        <div>
            <Formik
                initialValues={paperform}
                onSubmit={formSubmit}
            >
                {({
                    values,
                    handleSubmit,
                    handleChange
                }) => (
                    <form>

                    </form>
                )}
            </Formik>
            {
                questionPaper.questions.map((question, sect_i) =>
                (
                    <div style={{ padding: '2rem', border: '1px solid gray', background: 'grey', marginTop: '1rem' }} key={sect_i}>
                        <h3>Question {`${sect_i + 1}: `}</h3>
                        <input className="form-control" value={question.name} onChange={e => handleRename('sect_name', e.target.value, sect_i, 0)} />
                        <input value={question.description} onChange={e => handleRename('question', e.target.value, sect_i, 0)} />

                    </div>
                ))
            }
            <Button onClick={addNewQuestion}>Add New Question</Button>

            <Button className="w-100 mt-5" >Create Course</Button>

        </div>
    )
}

export default AddPaper;