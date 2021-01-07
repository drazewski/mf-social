import React from 'react';
import Layout from '../../Layout';
import PeopleLists from '../templates/PeopleLists';
import PeopleSidebar from '../templates/PeopleSidebar';


export default function PeoplePage(): JSX.Element {

    return (
        <>
            <Layout sidebarContent={<PeopleSidebar />}>
                <PeopleLists />
            </Layout>
        </>
    )
}