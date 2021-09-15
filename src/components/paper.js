import React, { useState } from "react";

const AddPaper = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [questions, setCurriculum] = React.useState({
        sections: [
            {
                name: "Introduction",
                description: "Section 1 Description",
                lectures: [
                    {
                        name: "Lecture 1",
                        description: "",
                        content: "",
                        resources: []

                    }
                ]
            }
        ]
    });

    const paperform = {
        title: "",
        course: "",
        max: "",
        author: currentUser._id,
        questions: [],
        created: new Date(),

    }

    return (
        <div>
            <h1 className="text-center">Add Paper Here</h1>
            <hr />
        </div>
    )
}

export default AddPaper;