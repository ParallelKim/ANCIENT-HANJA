export const generateHanjaId = (characters: string): string => {
  const hexCodes = Array.from(characters)
    .map((char) => char.charCodeAt(0).toString(16).toUpperCase())
    .join("_");
  return `HANJA_${hexCodes}`;
};

export const generateProblemId = (
  examType: string, 
  examNumber: string, 
  questionNumber: number
): string => `PROB_${examType}_${examNumber}_${questionNumber.toString().padStart(3, "0")}`;

export const generatePassageId = (
  examType: string, 
  examNumber: string, 
  passageNumber: number
): string => `TEXT_${examType}_${examNumber}_${passageNumber.toString().padStart(3, "0")}`;

export const parseOptions = (lines: string[]): string[] => {
  if (!lines?.length) return [];

  const optionText = lines.join(" ").trim();
  if (!optionText) return [];

  return optionText
    .split(/[①②③④]/)
    .slice(1)
    .map((opt) => opt.trim())
    .filter(Boolean);
}; 