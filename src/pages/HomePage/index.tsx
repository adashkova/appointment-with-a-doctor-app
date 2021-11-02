import { FC } from 'react';
import Layout from '../../components/Layout';
import ListOfDoctors from '../../components/ListOfDoctors';
import SpecialityFiltration from '../../components/SpecialityFiltration';
import SearchField from '../../components/SearchField';

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
