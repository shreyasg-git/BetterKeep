/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import {useQuery} from '@realm/react';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {Note} from './src/realm/models';
// import AppWrapper from './src/realm/realm';
// ==========================
// import React from 'react';
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
const {RealmProvider, useQuery, useRealm} = createRealmContext(realmConfig);

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
  const realm = useRealm();

  useEffect(() => {
    realm.write(() => {
      realm.create('Note', {
        _id: new Realm.BSON.ObjectId(),
        title: 'hello',
        body: 'This is first notes',
      });
    });
  }, [realm]);

  const sortNotes = useCallback(
    (reversed: true | false) => {
      const sorted = notes.sorted('title', reversed);
      setAllNotes(sorted);
    },
    [notes],
  );

  useEffect(() => {
    sortNotes(true);
  }, [sortNotes]);

  console.log(allNotes);

  return (
    <View>
      <Text>HomePage</Text>
      {allNotes?.map(note => {
        return <NoteDisplay note={note} />;
      })}
    </View>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RealmProvider>
      <SafeAreaView style={backgroundStyle}>
        <Text>HEllloooo</Text>
        <HomePage />
      </SafeAreaView>
    </RealmProvider>
  );
}

export default App;
