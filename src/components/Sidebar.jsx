
import React, { useContext, useEffect, useState } from "react";
import dashboard from "../assest/Category.svg";
import upload from "../assest/Chart.svg";
import invoice from "../assest/Ticket.svg";
import schedule from "../assest/Document.svg";
import calender from "../assest/Setting.svg";
import notification from "../assest/Notification.svg";
import setting from "../assest/Setting.svg";
import logo from "../assest/Logo and company.png";
import { FaRegBell } from "react-icons/fa";
import Papa from "papaparse";
import Data from "./frontend_assignment.csv";

export default function Sidebar() {
  const [data, setData] = useState([]);
  const [select, setselect] = useState()
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);
  const mainLinks = [
    {
      img: <img src={dashboard} />,
      name: "Dashboard",
    },
    {
      img: <img src={upload} />,
      name: "Upload",
    },
    {
      img: <img src={invoice} />,
      name: "Invoide ",
    },
    {
      img: <img src={schedule} />,
      name: "Schedule",
    },
    {
      img: <img src={calender} />,
      name: "Calender",
    },
    {
      img: <img src={notification} />,
      name: "Notification",
    },
    {
      img: <img src={setting} />,
      name: "Settings",
    },
  ];



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  const handleRemoveFile = () => {
    setFile(null);
  };


  return (
    <>
      <div className="relative flex min-h-screen  ">
        {/* sidebar  */}

        <div className="w-2/12 bg-[#f9f8f8] pr-5 overflow-auto pb-8 h-screen relative">
          <div className="p-7">
            <img src={logo} alt="" />
          </div>
          <ul className="flex flex-col border-b-2 ">
            {mainLinks.map(({ img, name }) => {
              return (
                <li
                  key={name}
                  className={` pb-8 pl-6 py-3 hover:text-[#605BFF] ${name === "Upload" ? "text-[#605BFF]" : " "
                    } rounded-xl`}
                >
                  <a href="#" className="flex items-center gap-5">
                    {img}
                    <span className="text-sm tracking-wider bg-[ #9A9AA9]">
                      {name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1">
          {/* header */}
          <div className="bg-white shadow h-18 px-2 py-4 flex justify-around items-center">
            <div>
              <h2 className="text-3xl">Upload CSV</h2>
            </div>

            <div className="flex gap-6 items-center justify-between ">
              <div>
                <FaRegBell />
              </div>
              <div className="h-10 w-10  rounded-3xl">
                <img
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                  alt="profile"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div>
              <div className="w-[596px] h-[367px] bg-[#FFFFFF] flex items-end pb-6 mt-[218px] mx-auto rounded-sm flex-col gap-28">
                <div className="mx-auto flex flex-col gap-32 ">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                  />
                  {file && (
                    <div>
                      <button
                        onClick={handleRemoveFile}
                        className="text-red-500 font-bold"
                      >
                        Remove File
                      </button>
                    </div>
                  )}
                </div>

                <div className="mx-auto">
                  <button className="w-[564px] h-[56px] mx-auto my-auto   bg-[#605BFF] rounded-md ">
                    Uploaad
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="w-[1000px] h-[500px]    mt-[218px]  rounded-sm  ">
              {data.length ? (
                <table className=" bg-[#F5F5F5] ">
                  <thead class="text-xs text-dark uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        SI No.
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Links
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Prefix
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Add Tags
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Selected Tags
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((row, index) => (
                      <tr className="bg-white border-b " key={index}>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          {row.id}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          {row.links}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          {row.prefix}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <select className=" border-2 border-slate-00 px-10 py-2 rounded-sm" >
                            <option>
                              {row.select_tags[0]}
                            </option>
                            <option value={row.select_tags}>
                              {row.select_tags[1]}
                            </option>
                            <option value={row.select_tags}>
                              {row.select_tags[2]}
                            </option>
                            <option value={row.select_tags}>
                              {row.select_tags[3]}
                            </option>
                          </select>
                        </td>
                        <td
                          scope="row"
                          className=" flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-slate-200 rounded-md "
                        >
                          {select}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}