import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function DynamicTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <AlertDialog open={true}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ); // Render a message if data is empty or undefined
  }
  const columnNames = Object.keys(data[0]);

  return (
    <Table className="w-1/2">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {columnNames.map((columnName) => (
            <TableHead key={columnName}>{columnName.toUpperCase()}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((rowData, i) => (
          <TableRow key={i}>
            {columnNames.map((columnName) => (
              <TableCell key={columnName}>{rowData[columnName]}</TableCell>
            ))}
            <TableCell>
              <button
                onClick={() => {
                  console.log(rowData.id);
                }}
              >
                Delete
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DynamicTable;
