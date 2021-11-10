import { FC } from 'react';
import Layout from '../../components/Layout';
import ListOfDoctors from '../../containers/ListOfDoctors';
import SpecialityFiltration from '../../containers/SpecialityFiltration';
import SearchField from '../../containers/SearchField';

const HomePage: FC = () => {
  return (
    <Layout>
      <SearchField />
      <SpecialityFiltration />
      <ListOfDoctors />
    </Layout>
  );
};

export default HomePage;
