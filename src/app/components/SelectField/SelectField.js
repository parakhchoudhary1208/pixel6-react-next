import React from 'react';

const SelectField = ({ options, value, onChange, placeholder }) => {
    return (
        <div className="relative mb-2 flex items-center after:w-[8px] after:h-[8px] after:border-red-400 after:border-b-2 after:border-r-2 after:transform after:rotate-45 after:absolute after:right-3">
            <select
                onChange={onChange}
                value={value}
                className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-red-600 border border-gray-200 rounded-lg outline-red-600 appearance-none invalid:text-black/30 w-32 sm:w-44"
            >
                <option value="">{placeholder}</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;