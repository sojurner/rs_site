import React from 'react';
import Loadable from 'react-loadable';
import { lazyLoadEffect } from '../../assets/customHooks/customHooks';
import Loading from '../Loading/Loading';
import { InitialLoadConsumer } from '../context';

import './DynamicImports.css';

const DynamicImports = ({ load, page: String }) => {
  const LoadableImport = Loadable({
    loader: load,
    loading() {
      return <Loading />;
    }
  });

  const mounted = lazyLoadEffect(1000);
  return mounted ? (
    <InitialLoadConsumer>
      {context => {
        return context ? (
          <LoadableImport />
        ) : (
          <>
            <img
              className="pills"
              src="https://wheedesign.com/img/design/12678940.png"
            />
          </>
        );
      }}
    </InitialLoadConsumer>
  ) : (
    <Loading />
  );
};

export default DynamicImports;
