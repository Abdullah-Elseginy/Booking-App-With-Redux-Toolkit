/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from '../Styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {ChoiceOption} from '../../../Redux/Slice/OptionsSlice';
const DepartStyle = () => {
  const {parking, kitchen, furnished} = useSelector(state => state.options);
  console.log(parking);
  const dispatch = useDispatch();
  const ChangeOption = value => {
    dispatch(ChoiceOption(value));
  };
  return (
    <>
      {/* choice Yes Or No */}
      <View style={styles.SectionMainContainer}>
        {/* Section one furnished */}
        <View>
          <Text
            style={[
              styles.titleText,
              {
                marginBottom: RFPercentage(1.3),
              },
            ]}>
            Furnished
          </Text>
          <View style={departStyle.ContainerOfPlusAndMinus}>
            <TouchableOpacity
              style={[
                departStyle.yes,
                furnished === true && departStyle.selectedButtom,
              ]}
              onPress={() => ChangeOption('furnished')}>
              <Text
                style={[
                  departStyle.yesText,
                  furnished === true && departStyle.selectedText,
                ]}>
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                departStyle.no,
                furnished === false && departStyle.selectedButtom,
              ]}
              onPress={() => ChangeOption('furnished')}>
              <Text
                style={[
                  departStyle.noText,
                  furnished === false && departStyle.selectedText,
                ]}>
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Sction Two Kitchen */}
        <View>
          <Text
            style={[
              styles.titleText,
              {
                marginBottom: RFPercentage(1.3),
              },
            ]}>
            Kitchen
          </Text>
          <View style={departStyle.ContainerOfPlusAndMinus}>
            <TouchableOpacity
              onPress={() => ChangeOption('kitchen')}
              style={[
                departStyle.yes,
                kitchen === true && departStyle.selectedButtom,
              ]}>
              <Text
                style={[
                  departStyle.yesText,
                  kitchen === true && departStyle.selectedText,
                ]}>
                Closed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ChangeOption('kitchen')}
              style={[
                departStyle.no,
                kitchen === false && departStyle.selectedButtom,
              ]}>
              <Text
                style={[
                  departStyle.noText,
                  kitchen === false && departStyle.selectedText,
                ]}>
                Open
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={departStyle.SectionMainContainer}>
        {/* Section one Parking */}
        <View>
          <Text
            style={[
              styles.titleText,
              {
                marginBottom: RFPercentage(1.3),
              },
            ]}>
            Parking
          </Text>
          <View style={departStyle.ContainerOfPlusAndMinus}>
            <TouchableOpacity
              onPress={() => ChangeOption('parking')}
              style={[
                departStyle.yes,
                parking === true && departStyle.selectedButtom,
              ]}>
              <Text
                style={[
                  departStyle.yesText,
                  parking === true && departStyle.selectedText,
                ]}>
                Split
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ChangeOption('parking')}
              style={[
                departStyle.no,
                parking === false && departStyle.selectedButtom,
              ]}>
              <Text
                style={[
                  departStyle.noText,
                  parking === false && departStyle.selectedText,
                ]}>
                Central
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Sction Two Kitchen */}
        <View></View>
      </View>
    </>
  );
};
const departStyle = StyleSheet.create({
  ContainerOfPlusAndMinus: {
    // width: '20%',
    width: RFPercentage(21),
    backgroundColor: '#F8F6F7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: RFPercentage(7.5),
    borderRadius: RFPercentage(0.8),
    borderWidth: 1,
    borderColor: '#cccccc8a',

    // alignItems: 'center',
  },
  yes: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButtom: {
    backgroundColor: '#23AA6F',
  },
  selectedText: {
    color: '#fff',
  },
  // yestext
  yesText: {
    color: '#000',
    fontSize: RFPercentage(2.2),
    fontWeight: '500',
  },
  no: {
    // backgroundColor: '#23AA6F',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noText: {
    color: '#000',
    fontSize: RFPercentage(2.2),
    fontWeight: '500',
  },
});
export default DepartStyle;
