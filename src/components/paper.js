import { Formik } from "formik";
import React, { useState } from "react";

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
                curriculum.sections.map((section, sect_i) =>
                (
                    <div style={{ padding: '2rem', border: '1px solid gray', background: 'grey', marginTop: '1rem' }} key={sect_i}>
                        <h3>Section {`${sect_i + 1}: `}<InputBase value={section.name} onChange={e => handleRename('sect_name', e.target.value, sect_i, 0)}></InputBase></h3>
                        <InputBase value={section.description} onChange={e => handleRename('sect_desc', e.target.value, sect_i, 0)}></InputBase>
                        {
                            section.lectures.map((lecture, lect_i) =>
                            (
                                <Accordion key={lect_i}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <h4>Lecture {`${lect_i + 1}: `}<InputBase value={lecture.name} onChange={e => handleRename('lect_name', e.target.value, sect_i, lect_i)}></InputBase></h4>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <InputBase value={lecture.description} onChange={e => handleRename('lect_desc', e.target.value, sect_i, lect_i)}></InputBase>
                                        <label>Lecture Content</label>
                                        <input type="file" onChange={e => handleFileUpload('content', e.target.files[0], sect_i, lect_i)} />
                                    </AccordionDetails>

                                    <AccordionActions>

                                    </AccordionActions>
                                </Accordion>

                            )
                            )
                        }
                        <Button onClick={e => addNewLecture(sect_i)}>Add New Lecture</Button>
                    </div>
                ))
            }
            <Button onClick={addNewSection}>Add New Section</Button>

            <Button className="w-100 mt-5" onClick={createCourse}>Create Course</Button>

        </div>
    )
}

export default AddPaper;