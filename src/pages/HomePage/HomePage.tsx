import React from 'react';
import Realm from 'realm';
import {FlatList, TouchableOpacity, View} from 'react-native';
// import RealmPlugin from 'realm-flipper-plugin-device';
import {Colors} from '../../consts';
import {RealmContext, Note} from '../../realm';
import Typography from '../../ui/typography/Typography';
import {NoteDisplay} from '../../components/NoteDisplay';
import Icon from '../../ui/Icon';
import FAB from '../../components/FAB';
import {useNavigation} from '@react-navigation/native';
const {useRealm, useQuery} = RealmContext;

// "@types/node": "^17.0.42",
// "change-case": "^4.1.2",
// "rimraf": "^3.0.2",
// "svgson": "^5.2.1",
// "ts-node": "^10.8.1",
// "react-native-config": "^1.4.5"
// },

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = ({}) => {
  // const [allNotes, setAllNotes] = useState<Realm.Results<Note>>();
  const {navigate} = useNavigation();
  const notes = useQuery(Note);
  const realm = useRealm();

  const createNote = () => {
    realm.write(() => {
      realm.create('Note', {
        _id: new Realm.BSON.ObjectId(),
        title: `First Note ${Math.floor(Math.random() * 100 + 1)}`,
        body: '1st Note Body',
      });
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View style={{padding: 10}}>
        <Typography typography="H5SemiBoldDarkGrey">
          Total Notes : {notes?.length}
        </Typography>
        <TouchableOpacity onPress={createNote}>
          <Typography typography="H5SemiBoldDarkGrey">CREATE NOTE</Typography>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        renderItem={props => {
          return <NoteDisplay note={props.item} />;
        }}
        keyExtractor={props => {
          return props._id.toString();
        }}
      />

      {/* <Icon name="plus" size={50} color={Colors.primaryYellow} /> */}
      <FAB
        iconName="plus"
        onPress={() => {
          console.log('LESGOOOOOOOo');
          navigate('NoteForm', {});
        }}
      />
    </View>
  );
};
export default HomePage;
