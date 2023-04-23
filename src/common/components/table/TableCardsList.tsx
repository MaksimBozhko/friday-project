import * as React from "react"
import s from "./table.module.scss"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import TablePagination from "@mui/material/TablePagination"
import { StyledTableCell, StyledTableRow } from "./tableStyle"
import { CardIcons } from "common/components/table/CardIcons"

type TableCardListType = {
  cards: any
  setPage: (page: number) => void
  setPageCount: (page: number) => void
}

export function TableCardList({ cards, setPage, setPageCount }: TableCardListType) {

  const handleChangePage = (event: unknown, newPage: any) => {
    setPage(newPage + 1)
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageCount(+event.target.value)
  }

  return (
    <div className={s.table}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Question</StyledTableCell>
              <StyledTableCell align="left">Answer</StyledTableCell>
              <StyledTableCell align="left">Last Updated</StyledTableCell>
              <StyledTableCell align="left">Grade</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.cards.map((card: any) => (
              <StyledTableRow key={card._id}>
                <StyledTableCell align="left">{card.question}</StyledTableCell>
                <StyledTableCell align="left">{card.answer}</StyledTableCell>
                <StyledTableCell align="left">{card.updated}</StyledTableCell>
                <StyledTableCell align="left">{card.grade}</StyledTableCell>
                <StyledTableCell align="left">
                  <CardIcons user_id={card.user_id} id={card._id} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[1, 2, 4, 6, 8, 10, 12, 14]}
          component="div"
          count={cards.cardsTotalCount}
          rowsPerPage={cards.pageCount}
          page={cards.page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  )
}