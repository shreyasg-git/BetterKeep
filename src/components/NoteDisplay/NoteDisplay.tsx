import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors, DateFormats} from '../../consts';
import {Note} from '../../realm';
import Typography from '../../ui/typography/Typography';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
type NoteDisplayProps = {note: Note};

const NoteDisplay: React.FC<NoteDisplayProps> = ({note}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('EditNote', {noteId: note._id});
      }}
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {note.title ? (
          <Typography typography="H5Bold">{note.title}</Typography>
        ) : null}
        <View>
          <Typography typography="H7RegularDarkGrey">
            {/* Created - */}
            {moment(note.createdAt).format(
              DateFormats.DayMonthYearNoDashes,
            )}, {moment(note.updatedAt).fromNow()}
          </Typography>
          <Typography typography="H7RegularDarkGrey">
            {/* Updated -{moment(note.updatedAt).fromNow()} */}
          </Typography>
        </View>
      </View>

      <Typography typography="H6RegularDarkGrey">{note.body}</Typography>
    </TouchableOpacity>
  );
};
export default NoteDisplay;
