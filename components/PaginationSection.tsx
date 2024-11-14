import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
interface PaginationSectionProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  setCurrentPage: (page: number) => void

}
export function PaginationSection({ totalItems, itemsPerPage, currentPage, setCurrentPage }: PaginationSectionProps) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i)
  }

  return (
    <Pagination className="select-none cursor-pointer">
      <PaginationContent>

        {pages.map((page) => (
          <PaginationItem key={page} className={currentPage === page ? "bg-gray-200 dark:bg-stone-900 rounded-lg" : ""}>
            <PaginationLink onClick={() => setCurrentPage(page)}>{page}</PaginationLink>
          </PaginationItem>
        ))}

      </PaginationContent>
    </Pagination>
  )

}

