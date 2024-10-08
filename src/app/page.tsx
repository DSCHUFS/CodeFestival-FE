'use client';
import { Fragment } from 'react';

import Dashboard from './_components/Dashboard';
import Gallery from './_components/Gallery';
import Sponsor from './_components/Sponsor';

export default function Home() {
  return (
    <Fragment>
      <Dashboard />
      <Sponsor />
      <Gallery />
    </Fragment>
  );
}
