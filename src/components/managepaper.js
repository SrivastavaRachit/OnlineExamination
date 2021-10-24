import { Button, Card, CardContent, Container } from "@material-ui/core";
import { useEffect, useState } from "react";

const ManagePaper = () => {

    const [paperList, setPaperList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPapers = () => {

    }

    const displayPapers = () => {

        if (!loading) {
            return (
                paperList.map(paper => (
                    <Card>
                        <CardContent>
                            <p>Question : {paper.title}</p>
                            <Button variant="contained">Copy Link</Button>
                        </CardContent>
                    </Card>
                ))
            )
        }
    }

    useEffect(() => {
        fetchPapers();
    }, [])

    return (
        <Container>
            <Card>
                <CardContent>

                    <div>

                    </div>

                </CardContent>
            </Card>
        </Container>
    )
}

export default ManagePaper;

