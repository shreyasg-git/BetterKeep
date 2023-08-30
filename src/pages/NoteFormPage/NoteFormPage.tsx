import {useNavigation, useRoute} from '@react-navigation/native';
// import {useRealm} from '@realm/react';
import Realm from 'realm';
import React, {useEffect, useMemo, useState} from 'react';
import {BackHandler, View} from 'react-native';
import Input from '../../components/TextInput/TextInput';
import {Colors} from '../../consts';
import IconButton from '../../ui/IconButton';
import Padding from '../../ui/Padding';
import {Note, RealmContext} from '../../realm';
import moment from 'moment';
export const FormModes = {CREATE: 'CREATE', EDIT: 'EDIT'};

const {useRealm, useObject} = RealmContext;
type NoteFormPageProps = {};

const NoteFormPage: React.FC<NoteFormPageProps> = ({}) => {
  const {goBack} = useNavigation();
  const {params, name} = useRoute();

  const realm = useRealm();
  const note = useMemo(() => {
    if (params?.noteId) {
      const record = realm.objectForPrimaryKey(Note, params?.noteId);
      console.log('FOUND RECORD ::', record);

      return record;
    }
  }, [params]);

  const [title, setTitle] = useState(note?.title || '');
  const [body, setBody] = useState(note?.body || '');

  const [height, setHeight] = useState<number>(0);

  const formMode = useMemo(() => {
    if (name === 'EditNote') {
      return FormModes.EDIT;
    }
    return FormModes.CREATE;
  }, [name]);

  const createNote = () => {
    try {
      realm.write(() => {
        realm.create('Note', {
          _id: new Realm.BSON.ObjectId(),
          body,
          title,
        });
      });
    } catch (error) {
      console.log('ERROR IN CREAT NOTE', error);
    }
  };

  const editNote = () => {
    realm.write(() => {
      if (note) {
        console.log('IPDATEING :: ', body, title);

        note.body = body as 'string';
        note.title = title as 'string';
        note.updatedAt = new Date().toISOString() as 'date';
      }
    });
  };
  const onBackPress = () => {
    if (body?.length && title?.length) {
      switch (formMode) {
        case FormModes.CREATE:
          createNote();
          return;
        case FormModes.EDIT:
          editNote();
          return;
      }
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, [note, body, title]);

  return (
    <View
      // https://medium.com/@arpith/react-native-full-screen-textinputs-677dc2262adb#:~:text=There%20are%20two%20things%20that,keyboard%20is%20up%20or%20dismissed).
      onLayout={ev => {
        const fullHeight = ev.nativeEvent.layout.height - 80;
        setHeight(fullHeight);
      }}
      style={{
        backgroundColor: Colors.background,
        padding: 10,
        height: '100%',
      }}>
      <IconButton
        icon="chevron-left"
        onPress={() => {
          goBack();
          onBackPress();
        }}
      />
      <Padding height={20} />

      <Input
        placeholder="Title"
        style={{
          height: 55,
          flex: 1,
          padding: 0,
          verticalAlign: 'middle',
          backgroundColor: Colors.background,

          borderRadius: 0,
          //   fontFamily: typographyFamilies.poppinsRegular,
          fontSize: 28,
        }}
        selectionColor={Colors.dark}
        placeholderTextColor={Colors.dark}
        value={title}
        onChangeText={text => {
          setTitle(text);
        }}
      />

      <Input
        placeholder="Click To Type..."
        verticalAlign="middle"
        // textAlign="center"
        textAlignVertical="top"
        style={{
          //   flex: 1,
          height,
          //   alignItems: 'center',
          //   justifyContent: 'center',
          alignSelf: 'flex-start',
          backgroundColor: Colors.background,
          //   height: '100%',
          width: '100%',
          //   //   height: 500,
          //   //   flex: 1,
          //   padding: 0,
          //   verticalAlign: 'top',
          //   backgroundColor: Colors.aliceBlue,
          //   borderRadius: 0,
          //   //   fontFamily: typographyFamilies.poppinsRegular,
          //   fontSize: 18,
        }}
        selectionColor={Colors.darkGrey}
        placeholderTextColor={Colors.darkGrey}
        value={body}
        multiline
        numberOfLines={50}
        flex={1}
        onChangeText={text => {
          setBody(text);
        }}
      />
    </View>
  );
};
export default NoteFormPage;
