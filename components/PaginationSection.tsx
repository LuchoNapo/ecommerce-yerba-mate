import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
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
    const handleNextPage = () => {
      if (currentPage < pages.length) {
        setCurrentPage(currentPage + 1);
      }
    };
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    return (
      <Pagination className="select-none">
        <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePreviousPage()} />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page} className={currentPage === page ? "bg-gray-200 dark:bg-stone-900 rounded-lg" : ""}>
            <PaginationLink onClick={() => setCurrentPage(page)}>{page}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => handleNextPage()} />
        </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    
  }

  