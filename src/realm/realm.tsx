import React from 'react';
import Realm from 'realm';
import {createRealmContext} from '@realm/react';

// Define your object model
class Note extends Realm.Object<Note> {
  _id!: Realm.BSON.ObjectId;
  name!: string;

  static schema = {
    name: 'Note',
    properties: {
      _id: 'objectId',
      title: 'string',
      body: 'string',
    },
    primaryKey: '_id',
  };
}

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Note],
};

// Create a realm context
const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

// Expose a realm
function AppWrapper({children}: any) {
  return <RealmProvider>{children}</RealmProvider>;
}
export default AppWrapper;
