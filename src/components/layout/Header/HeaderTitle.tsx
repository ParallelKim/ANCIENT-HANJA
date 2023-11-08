import { Typography } from "@mui/material";

const SX = (isXs: boolean) => ({
  display: isXs ? { xs: "flex", md: "none" } : { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
});
export const HeaderTitle = ({ isXs = false }: { isXs?: boolean }) => {
  return (
    <Typography variant={isXs ? "h5" : "h6"} noWrap component="a" href="/" textAlign="center" sx={SX(isXs)}>
      고대한자
    </Typography>
  );
};
