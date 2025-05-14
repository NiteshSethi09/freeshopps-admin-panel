import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaqsDialog } from "@/components/modals/Faq";

import type { IFaq } from "@/types/faq";

interface FaqsTableProps {
  data: IFaq[];
}

export const columns: ColumnDef<IFaq>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "question",
    header: "Question",
    cell: ({ row }) => (
      <div className="capitalize text-base font-normal text-[#202224]/90 whitespace-normal break-words">
        {row.getValue("question")}
      </div>
    ),
  },
  {
    accessorKey: "answer",
    header: "Answer",
    cell: ({ row }) => (
      <div className="lowercase text-base font-normal text-[#202224]/90 whitespace-normal break-words">
        {row.getValue("answer")}
      </div>
    ),
  },
  {
    accessorKey: "operations",
    header: () => <div className="text-center">Operations</div>,
    cell: ({ row }) => (
      <div className="text-center">
        <FaqsDialog row={row}>
          <Button className="bg-[#00B69B]/20! text-[#00B69B] text-xs font-bold rounded-sm cursor-pointer mr-4">
            Edit
          </Button>
        </FaqsDialog>
        <Button className="bg-[#F93C65]/20! text-[#F80036] text-xs font-bold rounded-sm cursor-pointer">
          Delete
        </Button>
      </div>
    ),
  },
];

export function FaqsTable({ data }: FaqsTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="w-full mt-2.5">
      <div className="rounded-md border bg-white min-h-[500px]">
        <Table className="rounded-md">
          <TableHeader className="shadow-[0px_4px_4px_0px_#00000040]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className=" font-extrabold text-sm text-[#202224]/90"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border-b [&_tr:last-child]:border-[#979797]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-b border-[#979797]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm font-semibold text-[#202224]/60">
          Showing 1-12 of 1,253
        </div>
        <div className="">
          <Button
            variant="outline"
            size="sm"
            className="rounded-r-none cursor-pointer"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <MdKeyboardArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-l-none cursor-pointer"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <MdKeyboardArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
