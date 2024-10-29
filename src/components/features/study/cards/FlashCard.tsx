import { Card, CardContent } from "@mui/material";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { currentCardAtom } from "../../../../stores/course";

interface FlashCardProps {
  isFlipped: boolean;
  onFlip: () => void;
}

const FlashCardView = ({ isFlipped, onFlip }: FlashCardProps) => {
  const card = useAtomValue(currentCardAtom);

  if (!card) return null;

  return (
    <Card onClick={onFlip} data-testid="flash-card">
      <CardContent>{isFlipped ? card.back : card.front}</CardContent>
    </Card>
  );
};

export const FlashCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return <FlashCardView isFlipped={isFlipped} onFlip={() => setIsFlipped(!isFlipped)} />;
};
