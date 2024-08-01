'use client'
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
    const [genderFilter, setGenderFilter] = useState('');
    const [stateFilter, setStateFilter] = useState('');
    const [visibleUsers, setVisibleUsers] = useState(10);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data.users);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
        setUsers(prevUsers => {
            return [...prevUsers].sort((a, b) => {
                if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
                if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
                return 0;
            });
        });
    };

    const filteredUsers = users.filter(user => {
        let shouldInclude = true;
        if (genderFilter && user.gender !== genderFilter) {
            shouldInclude = false;
        }
        if (stateFilter && user.address.state !== stateFilter) {
            shouldInclude = false;
        }
        return shouldInclude;
    });

    return (
        <UserContext.Provider
            value={{
                users: filteredUsers.slice(0, visibleUsers),
                loading,
                sortConfig,
                handleSort,
                setGenderFilter,
                setStateFilter,
                genderFilter,
                stateFilter,
                setVisibleUsers

            }}
        >
            {children}
        </UserContext.Provider>
    );
};
