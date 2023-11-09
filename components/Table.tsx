"use client";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";

import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

export const getEllipText = (text) => {
  if (text.length > 90) {
    return text.substring(0, 90) + "...";
  }
  return text;
};
export const formattedDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const TableComponent = ({ analyticsData }) => {
  const [isCilent, setIsCilent] = useState(false);

  useEffect(() => {
    setIsCilent(true);
    console.log("analyticsData", analyticsData);
    return () => {};
  }, []);

  return isCilent ? (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Long link</Th>
            <Th>Short code</Th>
            {/* <Th>Owner ID</Th> */}
            <Th>IP</Th>
            <Th>City</Th>
            {/* <Th>Region</Th> */}
            {/* <Th>Country</Th> */}
            {/* <Th>Latitude</Th> */}
            {/* <Th>Longitude</Th> */}
            {/* <Th>Platform</Th> */}
            {/* <Th>Browser</Th> */}
            {/* <Th>OS</Th> */}
            <Th>Date Clicked</Th>
          </Tr>
        </Thead>
        <Tbody>
          {analyticsData.data.map((data) => (
            <Tr key={data._id}>
              <Td>{getEllipText(data.shortUrlData[0].longUrl)}</Td>

              <Td>{data.shortCode}</Td>
              {/* <Td>{data.ownerId}</Td> */}
              <Td>{data.ip}</Td>
              <Td>{data.city}</Td>
              {/* <Td>{data.region}</Td> */}
              {/* <Td>{data.country}</Td> */}
              {/* <Td>{data.latitude}</Td> */}
              {/* <Td>{data.longitude}</Td> */}
              {/* <Td>{data.platform}</Td> */}
              {/* <Td>{data.browser}</Td> */}
              {/* <Td>{data.os}</Td> */}
              <Td>{formattedDate(data.createdAt)}</Td>
              <Td>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <EditIcon />
                  <DeleteIcon />
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <></>
  );
};

export default TableComponent;
