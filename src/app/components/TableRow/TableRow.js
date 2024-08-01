import React from 'react';

const TableRow = ({ user }) => (
    <tr>
        <td className="whitespace-nowrap w-max px-4 py-2 font-normal text-base text-gray-900">
            {user.id}
        </td>
        <td className="whitespace-nowrap w-max px-4 py-2 font-normal text-base text-gray-900">
            <img src={user.image} alt="user" className="w-10 h-10 mx-auto" />
        </td>
        <td className="whitespace-nowrap w-max px-4 py-2 font-normal text-base text-gray-900">
            {`${user.firstName} ${user.lastName}`}
        </td>
        <td className="whitespace-nowrap w-max px-4 py-2 font-normal text-base text-gray-900">
            {user.company.title}
        </td>
        <td className="whitespace-nowrap w-max px-4 py-2 font-normal text-base text-gray-900">
            {`${user.gender.charAt(0).toUpperCase()}/${user.age}`}
        </td>
        <td className="whitespace-nowrap w-max px-4 py-2 font-normal text-base text-gray-900">
            {user.address.state}, {user.address.country}
        </td>
    </tr>
);

export default TableRow;
