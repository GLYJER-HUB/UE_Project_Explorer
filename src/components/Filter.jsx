import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import colors from "../utilities/color";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "inherit",
  border: `0.5px solid ${colors.accent}`,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FilterButton({
  options,
  selectedOption,
  onOptionChange,
}) {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        {Array.isArray(options)
          ? options.map((option,index) => {
              return (
                <Item
                  key={index}
                  sx={{
                    borderRadius: 8,
                    background:
                      selectedOption === option ? colors.primary : "inherit",
                    color: selectedOption === option ? "white" : colors.primary,
                  }}
                  onClick={() => onOptionChange(option)}
                >
                  {option}
                </Item>
              );
            })
          : ""}
      </Stack>
    </div>
  );
}
