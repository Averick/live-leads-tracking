import React, { useMemo } from 'react';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import { leadData, type Lead } from './makeData';
import { MenuItem } from '@mui/material';

export const Dashboard = () => {
  const columns = useMemo<MRT_ColumnDef<Lead>[]>(
    //column definitions...
    () => [
      {
        accessorKey: 'tealiumEvent',
        header: 'Event Name',
      },
      {
        accessorKey: 'customerCity',
        header: 'Customer City',
      },
      {
        accessorKey: 'customerCountry',
        header: 'Customer Country',
      },
      {
        accessorKey: 'customerState',
        header: 'Customer State',
      },
      {
        accessorKey: 'siteInternalAccountId',
        header: 'Site Internal Account',
      },
      {
        accessorKey: 'formName',
        header: 'Form Name',
      },
      {
        accessorKey: 'productName',
        header: 'Product Name',
      },
      {
        accessorKey: 'timestamp',
        header: 'Time',
      }
    ],
    [],
    //end
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={leadData}
      enableRowActions
      renderRowActionMenuItems={({ row }) => [
        <MenuItem key="edit" onClick={() => console.info('Edit')}>
          Edit
        </MenuItem>,
        <MenuItem key="delete" onClick={() => console.info('Delete')}>
          Delete
        </MenuItem>,
      ]}
    />
  );
};

export default Dashboard;
