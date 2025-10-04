import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

export const StyledTable = styled(Table)`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
`;

export const StyledTableCell = styled(TableCell)`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  &.${tableCellClasses.head} {
    font-size: 12px;
    color: #495057;
    border: none;
  }

  &.${tableCellClasses.body} {
    border-width: 2px;
    border-color: #f9fafb;
    background: #fff;
  }
`;

export const StyledTableBody = styled(TableBody)`
  & tr:first-of-type {
    & td:first-of-type {
      border-radius: 16px 0 0;
    }
    & td:last-of-type {
      border-radius: 0 16px 0 0;
    }
  }
  & tr:last-of-type {
    & td:first-of-type {
      border-radius: 0 0 0 16px;
    }
    & td:last-of-type {
      border-radius: 0 0 16px 0;
    }
  }
`;

export const CopyLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: fit-content;

  span {
    width: 144px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
  }
`;

export const Chip = styled("span", {
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant: "success" | "error" }>`
  padding: 4px 8px;
  border-radius: 100px;

  ${({ variant }) =>
    variant === "success" &&
    css`
      color: #1a8754;
      background: #f4f9f6;
    `}

  ${({ variant }) =>
    variant === "error" &&
    css`
      color: #dc3545;
      background: #fef5f6;
    `}
`;

export const StyledProgress = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  &::-webkit-progress-value {
    background: #5f3196;
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &::-moz-progress-bar {
    background: #5f3196;
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &::-webkit-progress-bar {
    background-color: #f8f6fb;
    border-radius: 8px;
  }

  display: block;
  inline-size: 100px;
  block-size: 8px;
  background-color: #f8f6fb;
  border-radius: 8px;
`;
