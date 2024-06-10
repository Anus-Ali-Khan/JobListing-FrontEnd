import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ReactHookForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      profile: '',
      experience: '',
      description: '',
      skills: false,
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Job Profile"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="profile"
      />
      {errors.profile && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Experience required"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="experience"
      />
      {errors.experience && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Job Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={true}
            numberOfLines={6}
          />
        )}
        name="description"
      />
      <View>
        <Text style={styles.text}>Please Select requires skills</Text>
        <View style={styles.checkBox}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <CheckBox onValueChange={onChange} value={value} />
            )}
            name="skills"
          />
          <Text>JavaScript</Text>
        </View>

        <View style={styles.checkBox}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <CheckBox onValueChange={onChange} value={value} />
            )}
            name="skills"
          />
          <Text>Java</Text>
        </View>

        <View style={styles.checkBox}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <CheckBox onValueChange={onChange} value={value} />
            )}
            name="skills"
          />
          <Text>Python</Text>
        </View>

        <View style={styles.checkBox}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <CheckBox onValueChange={onChange} value={value} />
            )}
            name="skills"
          />
          <Text>Rust</Text>
        </View>

        <View style={styles.checkBox}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <CheckBox onValueChange={onChange} value={value} />
            )}
            name="skills"
          />
          <Text>Django</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReactHookForm;

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    margin: 'auto',
    marginTop: 16,
    flex: 1,
    gap: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 8,
  },

  checkBox: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '800',
  },

  button: {
    backgroundColor: 'coral',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
