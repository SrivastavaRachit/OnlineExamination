import { Button, CardContent, Container } from "@material-ui/core";

const SolvePaper = () => {

    const [paperList, setPaperList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPapers = () => {

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

export default SolvePaper;

