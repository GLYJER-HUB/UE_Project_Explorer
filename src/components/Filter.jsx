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

export default function FilterStack({ filterBy }) {
  return (
    <div>
      <Stack direction="row" spacing={3}>
        {Array.isArray(filterBy)
          ? filterBy.map((filter) => {
              return (
                <Item
                  sx={{
                    borderRadius: 10,
                    background: "inherit",
                    color: colors.primary,
                  }}
                >
                  {filter}
                </Item>
              );
            })
          : ""}
      </Stack>
    </div>
  );
}
