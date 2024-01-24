import { ChevronsLeft, ChevronsRight } from 'lucide-react'

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total of {totalCount} items
      </span>

      <PaginationRoot>
        <PaginationContent>
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="text-sm font-medium">
              Page {pageIndex + 1} of {pages}
            </div>

            <div className="flex items-center gap-2">
              <PaginationLink>
                <ChevronsLeft className="h-4 w-4" />
                <span className="sr-only">First page</span>
              </PaginationLink>
              <PaginationPrevious />
              <PaginationNext />
              <PaginationLink>
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Last page</span>
              </PaginationLink>
            </div>
          </div>
        </PaginationContent>
      </PaginationRoot>
    </div>
  )
}
