import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../consts';
import {Note} from '../../realm';
import Typography from '../../ui/typography/Typography';

type NoteDisplayProps = {note: Note};

const NoteDisplay: React.FC<NoteDisplayProps> = ({note}) => {
  return (
    <View
      style={{
        // flex: 0.5,
        display: 'flex',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderStyle: 'solid',
        margin: 5,
        borderRadius: 5,
        padding: 5,
      }}>
      <Typography typography="H6Bold">{note.title}</Typography>
      <Typography typography="H6RegularDarkGrey">{note.body}</Typography>
    </View>
  );
};
export default NoteDisplay;
