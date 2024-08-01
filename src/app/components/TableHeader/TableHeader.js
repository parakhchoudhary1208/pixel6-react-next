import React, { useContext } from 'react';
import { RiSortAlphabetAsc, RiSortAlphabetDesc, RiSortNumberAsc, RiSortNumberDesc } from "@remixicon/react";
import { UserContext } from '../../context/Context';

const TableHeader = () => {
    const { sortConfig, handleSort } = useContext(UserContext);

    const getSortIcon = (column) => {
        if (sortConfig.key === column) {
            if (sortConfig.direction === 'ascending') {
                return column === 'firstName' || column === 'lastName' ? (
                    <RiSortAlphabetAsc size={22} color="red" />
                ) : (
                    <RiSortNumberAsc size={22} color="gray" />
                );
            } else {
                return column === 'firstName' || column === 'lastName' ? (
                    <RiSortAlphabetDesc size={22} color="red" />
                ) : (
                    <RiSortNumberDesc size={22} color="red" />
                );
            }
        }
        return column === 'firstName' || column === 'lastName' ? (
            <RiSortAlphabetDesc size={22} color="gray" />
        ) : (
            <RiSortNumberDesc size={22} color="gray" />
        );
    };
    
    const headers = [
        { label: 'ID', column: 'id', isSortable: true },
        { label: 'Image', column: 'image', isSortable: false },
        { label: 'Full Name', column: 'firstName', isSortable: true },
        { label: 'Designation', column: 'designation', isSortable: false },
        { label: 'Demography', column: 'age', isSortable: true },
        { label: 'Location', column: 'location', isSortable: false },
    ];

    const renderHeaderCell = (label, column, isSortable) => (
        <th
            key={column}
            className={`whitespace-nowrap text-left px-4 py-4 font-medium text-lg text-gray-900 ${isSortable ? 'cursor-pointer flex gap-1 items-center' : ''}`}
            onClick={isSortable ? () => handleSort(column) : undefined}
        >
            {label}
            {isSortable && getSortIcon(column)}
        </th>
    );


    return (
        <thead className="ltr:text-left rtl:text-right">
            <tr>
                {headers.map(header => renderHeaderCell(header.label, header.column, header.isSortable))}
            </tr>
        </thead>
    );
};

export default TableHeader;
