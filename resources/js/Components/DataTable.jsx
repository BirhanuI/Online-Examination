import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";

const data = [
    {
        name: {
            firstName: "John",
            lastName: "Doe",
        },
        address: "261 Erdman Ford",
        city: "East Daphne",
        state: "Kentucky",
    },
    {
        name: {
            firstName: "Jane",
            lastName: "Doe",
        },
        address: "769 Dominic Grove",
        city: "Columbus",
        state: "Ohio",
    },
    {
        name: {
            firstName: "Joe",
            lastName: "Doe",
        },
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
    },
    {
        name: {
            firstName: "Kevin",
            lastName: "Vandy",
        },
        address: "722 Emie Stream",
        city: "Lincoln",
        state: "Nebraska",
    },
    {
        name: {
            firstName: "Joshua",
            lastName: "Rolluffs",
        },
        address: "32188 Larkin Turnpike",
        city: "Omaha",
        state: "Nebraska",
    },
];
const DataTable = ({data , columns }) => {

    const table = useMaterialReactTable({
        columns,
        enableDensityToggle : false,
        initialState : {density: 'compact',},
        layoutMode : 'grid',
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });
    return (
        <div className="">
            <MaterialReactTable table={table} enableDensityToggle={false}/>
        </div>
    );
};

export default DataTable;
