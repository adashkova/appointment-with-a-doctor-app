import { FC } from 'react';
import { Layout } from '../../pageLayouts/pageLayout';
import ListOfDoctors from '../../containers/listOfDoctors/ListOfDoctors';
import SpecialityFiltration from '../../containers/specialityFiltration/SpecialityFiltration';
import SearchField from '../../containers/searchField/SearchField';

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
