import React from 'react';
import Loadable from 'react-loadable';
import { lazyLoadEffect } from '../../assets/customHooks/customHooks';
import Loading from '../Loading/Loading';

interface iDynamicImportsProps {
  load: Function;
}

const DynamicImports = ({ load }) => {
  const LoadableImport = Loadable({
    loader: load,
    loading() {
      return <Loading />;
    }
  });
  const mounted = lazyLoadEffect(1000);
  return mounted ? <LoadableImport /> : <Loading />;
};

export default DynamicImports;
