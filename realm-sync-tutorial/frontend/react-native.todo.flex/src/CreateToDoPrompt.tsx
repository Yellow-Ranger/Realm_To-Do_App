import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {COLORS} from './Colors';
import {Picker} from '@react-native-picker/picker';
import {Priority} from './ItemSchema';

type Props = {
  onSubmit(args: {summary: string; priority: string;}): void;
};

export function CreateToDoPrompt(props: Props): React.ReactElement<Props> {
  const {onSubmit} = props;
  const [summary, setSummary] = useState('');
  const [priority, setPriority] = useState(Priority.High);

  return (
    <View style={styles.modalWrapper}>
      <Text h4 style={styles.addItemTitle}>
        Add To-Do Item
      </Text>
      <Input
        placeholder="What do you want to do?"
        onChangeText={(text: string) => setSummary(text)}
        autoCompleteType={undefined}
      />
      <Picker
        style={{width: '80%'}}
        selectedValue={priority}
        onValueChange={value => setPriority(value)}>
        {Priority.map(priority  => (
          <Picker.Item
            key={priority}
            label={priority}
            value={Priority[priority]}
           />
        ))}
      </Picker>
      <Button
        title="Save"
        buttonStyle={styles.saveButton}
        onPress={() => onSubmit({summary, priority})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    width: 300,
    minHeight: 400,
    borderRadius: 4,
    alignItems: 'center',
  },
  addItemTitle: {
    margin: 20,
  },
  saveButton: {
    width: 280,
    backgroundColor: COLORS.primary,
  },
});
