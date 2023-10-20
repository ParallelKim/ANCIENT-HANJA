import { Container } from "@mui/material";
import { CardCarousel } from "../components/cards/CardCarousel";

export const StudyPage = () => {
    return (
        <Container id="study-page">
            <CardCarousel
                cards={[
                    { id: 0, front: "테스트0", back: "test0" },
                    { id: 1, front: "테스트1", back: "test1" },
                    { id: 2, front: "테스트2", back: "test2" },
                ]}
            />
        </Container>
    );
};
