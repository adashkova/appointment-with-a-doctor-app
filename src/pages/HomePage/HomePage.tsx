import { FC } from 'react';
import { Layout } from '../../components/Layout';
import ListOfDoctors from '../../containers/ListOfDoctors/ListOfDoctors';
import SpecialityFiltration from '../../containers/SpecialityFiltration/SpecialityFiltration';
import SearchField from '../../containers/SearchField/SearchFireld';

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
