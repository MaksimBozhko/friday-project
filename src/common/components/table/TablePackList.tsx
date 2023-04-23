import React from "react"
import s from "./table.module.scss"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import TablePagination from "@mui/material/TablePagination"
import { NavLink, useSearchParams } from "react-router-dom"
import { getSearchParams } from "common/utils/getSearchParams"
import { StyledTableCell, StyledTableRow } from "./tableStyle"
import { TableIcons } from "common/components/table/TableIcons"
import { useGetPacksQuery } from "features/packsList/packsAPI"
import { useDebounce } from "common/hooks"

export function TablePackList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  const { data, isFetching } = useGetPacksQuery(useDebounce(search))

  const handleChangePage = (event: unknown, newPage: any) => {
    setSearchParams({ ...search, pageCount: data?.pageCount, page: newPage + 1 } as any)
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ ...search, pageCount: event.target.value, page: "1" })
  }

  if (isFetching) return <p>loading</p>
  if (!data) {
    return <p>No data found</p>
  }
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
            {data.cardPacks.map((pack) => (
              <StyledTableRow key={pack._id}>
                <StyledTableCell component="th" scope="row">
                  <NavLink to={`cards/${pack._id}`}>{pack.name}</NavLink>
                </StyledTableCell>
                <StyledTableCell align="left">{pack.cardsCount}</StyledTableCell>
                <StyledTableCell align="left">{pack.updated}</StyledTableCell>
                <StyledTableCell align="left">{pack.user_name}</StyledTableCell>
                <StyledTableCell align="left">
                  <TableIcons user_id={pack.user_id} packId={pack._id} name={pack.name} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[1, 2, 4, 6, 8, 10, 12, 14]}
          component="div"
          count={data.cardPacksTotalCount}
          rowsPerPage={data.pageCount}
          page={data.page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  )
}