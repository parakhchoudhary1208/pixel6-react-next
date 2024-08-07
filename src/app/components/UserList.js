"use client"
import React, { useContext } from 'react';
import { RiFilter2Fill } from "@remixicon/react";
import SelectField from './SelectField/SelectField';
import EmployeeTable from './EmployeeTable';
import { UserContext, UserProvider } from '../context/Context';
import _ from 'lodash';

const UserListContent = () => {
    const { users, setGenderFilter, setStateFilter, genderFilter, stateFilter, setVisibleUsers, loading, allStates} = useContext(UserContext);

    const handleScroll = _.debounce(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 5 && !loading) {
            setVisibleUsers(prevVisibleUsers => prevVisibleUsers + 10);
        }
    }, 100);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    return (
        <div className="sm:px-8 sm:pb-8 sm:pt-0 px-4 pb-4 pt-4 overflow-hidden">
            <div className="flex sm:flex-row flex-col gap-5 justify-between sm:items-center mb-8">
                <p className="text-left font-semibold text-xl sm:text-3xl text-gray-950">Employees</p>
                <div className="flex gap-5 items-center">
                    <RiFilter2Fill
                        size={28}
                        color={genderFilter || stateFilter ? "red" : "gray"}
                        className={`mb-2 ${genderFilter || stateFilter ? "cursor-pointer" : "cursor-default"}`}
                        onClick={genderFilter || stateFilter ? () => {
                            setGenderFilter('');
                            setStateFilter('');
                        } : null}
                    />
                    <SelectField
                        options={[...new Set(users.map(user => user.address.state))]}
                        value={allStates}
                        onChange={(e) => setStateFilter(e.target.value)}
                        placeholder="All State"
                    />
                    <SelectField
                        options={['Male', 'Female']}
                        value={genderFilter}
                        onChange={(e) => setGenderFilter(e.target.value)}
                        placeholder="Gender"
                    />
                </div>
            </div>
            <EmployeeTable />
        </div>
    );
};

const UserList = () => (
    <UserProvider>
        <UserListContent />
    </UserProvider>
);

export default UserList;
