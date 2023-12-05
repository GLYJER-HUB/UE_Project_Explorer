import * as React from "react";
import colors from "../utilities/color";
import { Button, styled, Paper, Stack } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

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
  clearFilter,
}) {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        {Array.isArray(options)
          ? options.map((option, index) => {
              return (
                <Item
                  key={index}
                  sx={{
                    borderRadius: 24,
                    background:
                      selectedOption === option ? colors.primary : "inherit",
                    color: selectedOption === option ? "white" : colors.primary,
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => onOptionChange(option)}
                >
                  {option}
                </Item>
              );
            })
          : ""}
        {selectedOption && (
          <Button
            variant="text"
            sx={{ color: colors.primary }}
            onClick={clearFilter}
          >
            <ClearIcon />
          </Button>
        )}
      </Stack>
    </div>
  );
}
