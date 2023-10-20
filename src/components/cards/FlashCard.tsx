import ReactFlipCard from "reactjs-flip-card";

const FlashCard = () => {
    const styles = {
        card: { background: "blue", color: "white", borderRadius: 20 },
    };

    return (
        <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={<div>Hover me!</div>}
            backComponent={<div>Back!</div>}
        />
    );
};

export { FlashCard };
