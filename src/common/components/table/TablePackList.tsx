import * as React from "react";
import s from "./table.module.scss";
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
import { NavLink, useSearchParams } from "react-router-dom";
import { getSearchParams } from "common/utils/getSearchParams";
import { StyledTableCell, StyledTableRow } from "./tableStyle";

export function TablePackList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = getSearchParams(searchParams);
  const { cardPacks, cardPacksTotalCount, page, pageCount } = useSelector((state: AppRootStateType) => state.pack);
  const myId = useSelector((state: AppRootStateType) => state.auth.id);

  const handleChangePage = (event: unknown, newPage: any) => {
    setSearchParams({ ...search, pageCount: pageCount, page: newPage + 1 } as any);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ ...search, pageCount: event.target.value, page: "1" });
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
          rowsPerPageOptions={[1, 2, 4, 6, 8, 10, 12, 14]}
          component="div"
          count={cardPacksTotalCount}
          rowsPerPage={pageCount}
          page={page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}