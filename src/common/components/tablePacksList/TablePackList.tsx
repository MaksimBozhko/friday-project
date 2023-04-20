import * as React from "react";
import s from "./table.module.scss"
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { ReactComponent as Learn } from "common/assets/img/tableIcon/teacher.svg";
import { ReactComponent as Edit } from "common/assets/img/tableIcon/Edit.svg";
import { ReactComponent as Delete } from "common/assets/img/tableIcon/Delete.svg";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";
import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useActions } from "common/hooks";
import { packThunks } from "features/packsList/packsSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export function TablePackList() {
  // const [pageN, setPage] = useState(0);
  const { fetchPack } = useActions(packThunks);
  const [rowsPerPage, setRowsPerPage] = useState(1);
  const {cardPacks, cardPacksTotalCount, page, pageCount} = useSelector((state: AppRootStateType) => state.pack);
  const myId = useSelector((state: AppRootStateType) => state.auth.id);
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChangePage = (event: unknown, newPage: any) => {
    //setPage(newPage);

  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setSearchParams({countPack: event.target.value, page: "1"})
    //setPage(0);
  };
  return (
    <div className={s.table}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Cards</StyledTableCell>
            <StyledTableCell align="left">Last Updated</StyledTableCell>
            <StyledTableCell align="left">Created by</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cardPacks.map((pack) => (
            <StyledTableRow key={pack._id}>
              <StyledTableCell component="th" scope="row">
                <NavLink to={`/friday-project/cards/${pack._id}`}>{pack.name}</NavLink>
              </StyledTableCell>
              <StyledTableCell align="left">{pack.cardsCount}</StyledTableCell>
              <StyledTableCell align="left">{pack.updated}</StyledTableCell>
              <StyledTableCell align="left">{pack.user_name}</StyledTableCell>
              <StyledTableCell align="left">
                <Learn />
                {myId === pack._id && (
                  <>
                    <Edit />
                    <Delete />
                  </>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[1, 2, 3, 4, 6, 8, 10, 12, 14]}
        component="div"
        count={10}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
    </div>
  );
}