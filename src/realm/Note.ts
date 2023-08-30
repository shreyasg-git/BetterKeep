import Realm from 'realm';

class Note extends Realm.Object<Note> {
  _id!: Realm.BSON.ObjectId;
  title?: 'string';
  body?: 'string';
  createdAt!: 'date';
  updatedAt!: 'date';

  static schema = {
    name: 'Note',
    properties: {
      _id: 'objectId',
      title: 'string',
      body: 'string',
      createdAt: {type: 'date', default: () => new Date().toISOString()},
      updatedAt: {type: 'date', default: () => new Date().toISOString()},
      // updatedAt: Date;
    },
    primaryKey: '_id',
  };
}
export default Note;
