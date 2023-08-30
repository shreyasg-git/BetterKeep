import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import Note from './Note';

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Note],
  deleteRealmIfMigrationNeeded: true,
};

// Create a realm context
const RealmContext = createRealmContext(realmConfig);

export {RealmContext, Note};
