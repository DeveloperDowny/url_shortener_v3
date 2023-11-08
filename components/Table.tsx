"use client";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";

import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

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
            <Th>Short link</Th>
            <Th>Original link</Th>
            <Th>QR Code</Th>
            <Th>Clicks</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>https://www.google.com</Td>
            <Td>https://localhost:3000/api/v1/google</Td>
            <Td>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                boxSize="50px"
              />
            </Td>
            <Td isNumeric>30</Td>
            <Td>Active</Td>
            <Td>01-10-2023</Td>
            <Td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <EditIcon />
                <DeleteIcon />
              </div>
            </Td>
          </Tr>

          <Tr>
            <Td>https://www.google.com</Td>
            <Td>https://localhost:3000/api/v1/google</Td>
            <Td>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                boxSize="50px"
              />
            </Td>
            <Td isNumeric>30</Td>
            <Td>Active</Td>
            <Td>01-10-2023</Td>
            <Td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <EditIcon />
                <DeleteIcon />
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <></>
  );
};

export default TableComponent;
