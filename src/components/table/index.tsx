import styled from '@emotion/styled';
import { DataGridStyled } from '../../styledcomponent';

const CustomDiv = styled.div`
  width: 100%;
  padding: 10px;
`;

const index = (props: any) => {
  const {
    rows,
    columns,
    checkboxAllowed,
  } = props;

  console.log('rows inside the table', rows);
  return (
    <CustomDiv>
      <DataGridStyled
        autoHeight
        getRowId={(row: any) => row._id}
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 10, 20, 50]}
        pagination
        checkboxSelection={checkboxAllowed}
        disableSelectionOnClick
        disableColumnMenu
        pageSize={5}
      />
    </CustomDiv>
  );
};

export default index;
