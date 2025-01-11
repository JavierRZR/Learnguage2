import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useState, useEffect, useCallback } from "react";
import { PaginationProps } from "../types";
import Badge from "./Badge";
import { ArrowNextIcon, ArrowPreviousIcon } from "../assets/svg";

const Pagination = <T,>({
  items,
  numPerPage,
  returnData,
}: PaginationProps<T>) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / numPerPage);

  const memoizedReturnData = useCallback(returnData, []);

  useEffect(() => {
    const start = (currentPage - 1) * numPerPage;
    const end = start + numPerPage;
    memoizedReturnData(items.slice(start, end));
  }, [currentPage, items, numPerPage, memoizedReturnData]);

  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const from = currentPage;
  const to = totalPages;
  const total = items.length;

  return (
    <section className="w-[400px] bg-neutral-200 dark:bg-neutral-950 rounded-2xl flex flex-row items-center justify-between gap-6 p-5 text-center">
      <Button onClick={previous} disabled={currentPage === 1}>
        <ArrowPreviousIcon size={24} />
      </Button>
      <Badge>{t("pagination.message", { from, to, total })}</Badge>
      <Button onClick={next} disabled={currentPage === totalPages}>
        <ArrowNextIcon size={24} />
      </Button>
    </section>
  );
};

export default Pagination;
