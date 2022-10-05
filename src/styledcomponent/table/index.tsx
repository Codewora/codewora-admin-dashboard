import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { styled } from '@mui/material/styles';

export const DataGridStyled = styled(DataGrid)(({ theme }: any) => ({
  '.MuiDataGrid-columnHeader:focus': {
    outline: 'none !important'
  },
  '.MuiDataGrid-cell:focus': {
    outline: 'none !important'
  },
  color: theme.content.primaryText,
  borderColor: theme.content.borderColor,
  '.MuiDataGrid-cell': {

    borderBottom: `1px solid ${theme.content.borderColor}`,
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme?.content?.primaryBackground,
    color: theme.content.primaryText,
    borderBottom: `1px solid ${theme.content.borderColor}`,
    fontSize: '15px',
    '.MuiDataGrid-columnHeaderTitle': {
      fontWeight: 900,
    },
    '& .MuiCheckbox-root': {
      color: `${theme.text.primary} !important`,
    },
    '& .MuiIconButton-root': {
      color: `${theme.text.primary} !important`,
    }
  },
  '& .Mui-selected': {
    backgroundColor: `${theme.background.secondaryBackground} !important`,
    color: theme.content.primaryText,
    '& .MuiCheckbox-root': {
      color: theme.content.primaryText,
    }
  },
  '& .MuiDataGrid-row:hover': {
    cursor: 'pointer',
    backgroundColor: `${theme.content.secondaryBackground} !important`,
    color: `${theme.content.primaryText} !important`,
    fontWeight: 900,
    '& .MuiCheckbox-root': {
      color: `${theme.content.primaryText} !important`,
    }
  },
  '& .MuiList-root': {
    '& .MuiMenuItem-root:hover': {
      backgroundColor: `${theme.content.secondaryBackground} !important`,
    }
  },
  '& .MuiTablePagination-selectIcon': {
    color: `${theme.content.secondaryBackground}`
  },
  '.MuiDataGrid-footerContainer': {
    borderTop: `1px solid ${theme.content.borderColor}`,
    '.MuiTablePagination-root': {
      color: theme.content.primaryText,
      svg: {
      color: theme.content.primaryText
      }
    }
  }

}));
