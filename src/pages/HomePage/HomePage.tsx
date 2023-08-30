import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
// import RealmPlugin from 'realm-flipper-plugin-device';

import Realm from 'realm';
import {RealmContext, Note} from '../../realm';
const {useRealm, useQuery} = RealmContext;
type HomePageProps = {};

type NoteDisplayProps = {note: Realm.Object<Note>};

const NoteDisplay: React.FC<NoteDisplayProps> = ({note}) => {
  // console.log(note.toJSON()._id);

  return (
    <View>
      <Text>{note.toJSON().body}</Text>
      {/* <Text>{note.toJSON()._id}</Text> */}
    </View>
  );
};

const HomePage: React.FC<HomePageProps> = ({}) => {
  const [allNotes, setAllNotes] = useState<Realm.Results<Note>>();
  const notes = useQuery(Note);
  // const realm = useRealm();

  // useEffect(() => {
  //   realm.write(() => {
  //     realm.create('Note', {
  //       _id: new Realm.BSON.ObjectId(),
  //       title: 'hello',
  //       body: 'This is first notes',
  //     });
  //   });
  // }, [realm]);

  const sortNotes = useCallback(
    (reversed: true | false) => {
      const sorted = notes.sorted('title', reversed);
      setAllNotes(sorted);
    },
    [notes],
  );

  useEffect(() => {
    console.log('AAAAAAAAAAAAAAAAAAAAA MOUNTED');

    sortNotes(true);
  }, [sortNotes]);

  return (
    <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
      {/* <RealmPlugin realms={[realm]} /> */}

      <Text style={{color: '#000'}}>HomePage</Text>
      {/* {allNotes?.length
        ? allNotes?.map(note => {
            return <NoteDisplay note={note} />;
          })
        : null} */}
    </View>
  );
};
export default HomePage;
