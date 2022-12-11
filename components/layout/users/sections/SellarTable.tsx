import React from "react";

const info = [
  {
    a: "David Smith",
    b: "JSmith@gmail.com",
    c: "1-256-5655-555",
    d: "783, Washington Ave, Hollytown NH 33220M (555) 555-5555H(555) 555-5555",
    e: "Toyota Camry 2009",
  },
  {
    a: "David Smith",
    b: "JSmith@gmail.com",
    c: "1-256-5655-555",
    d: "783, Washington Ave, Hollytown NH 33220M (555) 555-5555H(555) 555-5555",
    e: "Toyota Camry 2009",
  },
  {
    a: "David Smith",
    b: "JSmith@gmail.com",
    c: "1-256-5655-555",
    d: "783, Washington Ave, Hollytown NH 33220M (555) 555-5555H(555) 555-5555",
    e: "Toyota Camry 2009",
  },
  {
    a: "David Smith",
    b: "JSmith@gmail.com",
    c: "1-256-5655-555",
    d: "783, Washington Ave, Hollytown NH 33220M (555) 555-5555H(555) 555-5555",
    e: "Toyota Camry 2009",
  },
];

const SellarTable = () => {
  const handelTableBody = () => {
    return info.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-5 w-[16%]">{item.a}</td>
          <td className="pl-6 w-[16%]">{item.b}</td>
          <td className="pl-6 w-[20%]">{item.c}</td>
          <td className="pl-6 w-[30%]">{item.d}</td>
          <td className="pl-6 w-[22%]">{item.e}</td>
        </tr>
        
      );
    });
  };
  return (
    <table className="min-w-full ">
      <thead className="bg-gray5 border-b ">
        <tr>
          <th
            scope="col"
            className="text-sm font-bold  px-6 py-4 text-left"
          >
            Name
          </th>
          <th
            scope="col"
            className="text-sm font-bold  px-6 py-4 text-left"
          >
            Email Address
          </th>
          <th
            scope="col"
            className="text-sm font-bold  px-6 py-4 text-left"
          >
            Phone Number
          </th>
          <th
            scope="col"
            className="text-sm font-bold  px-6 py-4 text-left"
          >
            Contact Info
          </th>
          <th
            scope="col"
            className="text-sm font-bold  px-6 py-4 text-left"
          >
            Details
          </th>
        </tr>
      </thead>
      <tbody className=" ">{handelTableBody()}</tbody>
    </table>
  );
};

export default SellarTable;
