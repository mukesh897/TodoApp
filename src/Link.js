import React from 'react';
import { Meteor } from 'meteor/meteor';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';


import { Links } from '../api/links';
import LinksList from './LinksList';

export default ()=> {



    return (
      <div>

        <PrivateHeader title = 'Your Links'/>
        <LinksList/>
        <AddLink/>

      </div>
    );
  }
