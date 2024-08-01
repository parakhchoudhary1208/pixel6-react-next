import React, { useContext } from 'react';
import { UserContext } from '../context/Context';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';

const EmployeeTable = () => {
    const { users, loading } = useContext(UserContext);

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <TableHeader />
                <tbody className="divide-y divide-gray-200">
                    {users.length > 0 ? (
                        users.map(user => (
                            <TableRow key={user.id} user={user} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="p-8 text-center font-medium text-lg text-gray-900">
                                {loading ? "Loading..." : "Oops! Nothing found."}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
