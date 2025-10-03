import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import type { RootState } from "../../store";
import { type VirtualMachine } from "../../types";
import {
  StyledTable,
  StyledTableCell,
  StyledTableBody,
  CopyLabel,
  Chip,
  StyledProgress,
  Alert,
} from "./styles";

function displayAlert(alerts: {
  critical: number;
  important: number;
  moderate: number;
}) {
  if (alerts.critical > 0) {
    return (
      <Alert>
        <WarningIcon sx={{ fontSize: 19, color: "#DC3545" }} />
        <span>
          <strong>{alerts.critical}</strong> Critical
        </span>
      </Alert>
    );
  }
  if (alerts.important > 0) {
    return (
      <Alert>
        <WarningIcon sx={{ fontSize: 19, color: "#FD7E14" }} />
        <span>
          <strong>{alerts.important}</strong> Important
        </span>
      </Alert>
    );
  }
  if (alerts.moderate > 0) {
    return (
      <Alert>
        <WarningIcon sx={{ fontSize: 19, color: "#FFC008" }} />
        <span>
          <strong>{alerts.moderate}</strong> Moderate
        </span>
      </Alert>
    );
  }
  return (
    <Alert>
      <CheckCircleIcon sx={{ fontSize: 19, color: "#1A8754" }} />
      <span>All good</span>
    </Alert>
  );
}

function formatDuration(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}:${hours}:${minutes}:${seconds}`;
}

function compare(
  a: VirtualMachine,
  b: VirtualMachine,
  orderBy: keyof VirtualMachine
) {
  let valueA, valueB;

  if (orderBy === "createdAt") {
    valueA = new Date(a[orderBy]).getTime();
    valueB = new Date(b[orderBy]).getTime();
  } else {
    valueA = a[orderBy];
    valueB = b[orderBy];
  }
  if (valueB < valueA) {
    return -1;
  }
  if (valueB > valueA) {
    return 1;
  }
  return 0;
}

function getComparator(order: Order, orderBy: keyof VirtualMachine) {
  return (a: VirtualMachine, b: VirtualMachine) =>
    order === "desc" ? compare(a, b, orderBy) : -compare(a, b, orderBy);
}

type Order = "asc" | "desc";

export function VMTable() {
  const vmList = useSelector((state: RootState) => state.vmList);
  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<keyof VirtualMachine>("createdAt");

  const handleRequestSort = (property: keyof VirtualMachine) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  const sortedRows = useMemo(() => {
    return [...vmList].sort(getComparator(order, orderBy));
  }, [order, orderBy, vmList.length]);

  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell>
            <TableSortLabel
              IconComponent={ImportExportIcon}
              active
              onClick={() => handleRequestSort("state")}
            >
              State
            </TableSortLabel>
          </StyledTableCell>
          <StyledTableCell>Host server</StyledTableCell>
          <StyledTableCell>
            <TableSortLabel
              IconComponent={ImportExportIcon}
              active
              onClick={() => handleRequestSort("cpuValue")}
            >
              CPU
            </TableSortLabel>
          </StyledTableCell>
          <StyledTableCell>
            <TableSortLabel
              IconComponent={ImportExportIcon}
              active
              onClick={() => handleRequestSort("memoryValue")}
            >
              Memory
            </TableSortLabel>
          </StyledTableCell>
          <StyledTableCell>
            <TableSortLabel
              IconComponent={ImportExportIcon}
              active
              onClick={() => handleRequestSort("createdAt")}
            >
              Uptime
            </TableSortLabel>
          </StyledTableCell>
          <StyledTableCell>Alerts</StyledTableCell>
        </TableRow>
      </TableHead>
      <StyledTableBody>
        {sortedRows.map((vm) => (
          <TableRow key={vm.id}>
            <StyledTableCell>
              <CopyLabel
                tabIndex={0}
                role="button"
                onClick={() => handleCopy(vm.id)}
              >
                <ContentCopyIcon sx={{ fontSize: 16 }} />
                <span>{vm.id}</span>
              </CopyLabel>
            </StyledTableCell>
            <StyledTableCell>
              {vm.state ? (
                <Chip variant="success">Running</Chip>
              ) : (
                <Chip variant="error">Stopped</Chip>
              )}
            </StyledTableCell>
            <StyledTableCell>{vm.hostServer}</StyledTableCell>
            <StyledTableCell>
              {`${vm.cpuValue} CPU`}
              <StyledProgress
                id="progress-bar"
                max={vm.cpu}
                value={vm.cpuValue}
              >
                {vm.cpuValue}
              </StyledProgress>
            </StyledTableCell>
            <StyledTableCell>
              {`${vm.memoryValue} GiB`}
              <StyledProgress
                id="progress-bar"
                max={vm.memory}
                value={vm.memoryValue}
              >
                {vm.memoryValue}
              </StyledProgress>
            </StyledTableCell>
            <StyledTableCell>
              {formatDuration(
                new Date().getTime() - new Date(vm.createdAt).getTime()
              )}
            </StyledTableCell>
            <StyledTableCell>{displayAlert(vm.alerts)}</StyledTableCell>
          </TableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
}
