import AdminLayout from '../layout';
import {
  CustomTable,
  InfoCardDesign,
  ProductCardDesign
} from '../components';
import {
  infoDetails, rows, columnFields, productDetails
} from './helper';
import { ContainerStyled } from '../styledcomponent';

const Dashboard = () => {

  return (
    <AdminLayout>
      <ContainerStyled>
      {
        infoDetails.map((item) => <InfoCardDesign details={item}/>)
      }
      </ContainerStyled>
      <ContainerStyled>
      {
        productDetails.map((item) => <ProductCardDesign details={item}/>)
      }
      </ContainerStyled>
      <CustomTable
        rows={rows}
        columns={columnFields}
        checkboxAllowed={false}
      />
    </AdminLayout>
  );
};

export default Dashboard;
