import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import DataTable from "../components/DataTable";
import toast from "react-hot-toast";
import Papa from "papaparse";
import "./upload.css";

export default function Upload() {
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  function handleChange(e) {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];
        results.data.forEach((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  }

  return (
    <div className="upload">
      <div
        style={{
          border: "2px dotted lightgrey",
          marginTop: "6px",
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <div style={{ padding: "4px" }}>
          <div>
            <p>
              Drop your excel sheet here or{" "}
              <span>
                <input
                  type="file"
                  name="inputdata"
                  id="data"
                  onChange={handleChange}
                  accept=".csv"
                />
              </span>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid blue",
            borderRadius: "0.5rem",
          }}
        >
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              borderRadius: "0.5rem",
              width: "100%",
              border: "none",
              cursor: "pointer",
              backgroundColor: "blue",
            }}
            onClick={function () {
              toast.success("File sucessfully uploaded");
            }}
          >
            <LuUpload style={{ color: "white" }} />
            <p style={{ color: "white" }}>Upload</p>
          </button>
        </div>
      </div>
      <div className="tablecontainer">
        <table style={{ padding: "1rem", width: "100%" }}>
          <thead>
            <tr>
              {tableRows.map((rows, index) => {
                return (
                  <th
                    key={index}
                    style={{ padding: "12px", textAlign: "left" }}
                  >
                    {rows}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                >
                  {value.map((val, i) => {
                    return (
                      <td
                        key={i}
                        style={{
                          padding: "12px",
                          textAlign: "left",
                        }}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
