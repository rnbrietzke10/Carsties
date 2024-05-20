'use client';

import { Pagination } from 'flowbite-react';
import React, { useState } from 'react';

type Props = {
  currentPage: number;
  pageCount: number;
  pageChanged: (page: number) => void;
};

export default function AppPagination({
  currentPage,
  pageCount,
  pageChanged,
}: Props) {
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={pageCount}
        onPageChange={(e) => pageChanged(e)}
        layout="pagination"
        showIcons
        className="text-blue-500 mb-5"
      />
    </div>
  );
}
