import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Applied for a driver's license... delay in the processing of the license", 17908629, "2 March 2022"),
  createData("high costs of medical treatments, prescription drugs, and health insurance", 68908424, "8 March 2022"),
  createData("There is Water Scarcity in my village... how to fix it", 90900429, "9 March 2022"),
  createData("their is poor condition of roads, lack of streetlights in our locality... fix it asap", 52904521, "30 March 2022"),
];

export default function BasicTable() {
  const [activeStatus, setActiveStatus] = React.useState({});

  const handleButtonClick = (rowName) => {
    setActiveStatus((prevStatus) => ({
      ...prevStatus,
      [rowName]: !prevStatus[rowName],
    }));
  };

  return (
    <div className="Table mx-[10px]">
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Issues</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <div className="status_b flex-row">
                    <button
                      className={`rounded-lg m-1 ${
                        activeStatus[row.name] ? "bg-green-500 text-white" : "bg-slate-300 text-black"
                      }`}
                      onClick={() => handleButtonClick(row.name)}
                    >
                      Accepted
                    </button>
                    <button className="bg-yellow-200 text-yellow-500 rounded-lg m-0.5">Under Process</button>
                    <button className="bg-green-200 text-green-500 rounded-lg m-0.5">Completed</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
