import Realm from 'realm';

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
export default Note;
