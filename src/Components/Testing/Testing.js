import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ToggleButton = () => {
  const [selectedOption, setSelectedOption] = useState('Split'); // Default selection

  const handlePress = option => {
    setSelectedOption(option); // Update the selected option
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Parking</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedOption === 'Split' && styles.selectedButton,
          ]}
          onPress={() => handlePress('Split')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'Split' && styles.selectedText,
            ]}>
            Split
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedOption === 'Central' && styles.selectedButton,
          ]}
          onPress={() => handlePress('Central')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'Central' && styles.selectedText,
            ]}>
            Central
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Default background
  },
  selectedButton: {
    backgroundColor: '#34a853', // Selected background color (Green)
  },
  buttonText: {
    fontSize: 16,
    color: '#000', // Default text color
  },
  selectedText: {
    color: '#fff', // Selected text color (White)
  },
});

export default ToggleButton;
