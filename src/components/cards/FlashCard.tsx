import ReactFlipCard from "reactjs-flip-card";
import { CARD } from "../../types/card";

export const FlashCard = ({ card }: { card: CARD }) => {
    const styles = {
        card: { background: "blue", color: "white", borderRadius: 20 },
    };

    return (
        <ReactFlipCard
            flipTrigger="onClick"
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={<div>{card.front}</div>}
            backComponent={<div>{card.back}</div>}
        />
    );
};
