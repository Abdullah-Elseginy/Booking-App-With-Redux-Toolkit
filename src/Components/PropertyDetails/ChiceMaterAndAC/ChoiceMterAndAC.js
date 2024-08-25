/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../Styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {ACTypeOption} from '../../../Redux/Slice/OptionsSlice';
const ChoiceMterAndAC = () => {
  const {ACType} = useSelector(state => state.options);

  console.log(ACType);
  const dispatch = useDispatch();
  const ACtypeChnge = value => {
    dispatch(ACTypeOption(value));
  };
  return (
    <>
      {/* Electricity mater no */}
      <View
        style={[styles.UnitSizeContainer, {marginBottom: RFPercentage(1.5)}]}>
        <Text style={styles.titleText}>Electricity Mater No.</Text>
        <TextInput
          style={styles.UnitSizeTextInput}
          placeholder="Enter mater no"
          placeholderTextColor={'#000'}
        />
      </View>
      {/* water mater no */}
      <View
        style={[styles.UnitSizeContainer, {marginBottom: RFPercentage(1.5)}]}>
        <Text style={styles.titleText}>Water Mater No.</Text>
        <TextInput
          style={styles.UnitSizeTextInput}
          placeholder="Enter mater no"
          placeholderTextColor={'#000'}
        />
      </View>
      {/* Selec AC type */}
      <View
        style={[styles.UnitSizeContainer, {marginBottom: RFPercentage(1.5)}]}>
        <Text style={[styles.titleText, {marginBottom: RFPercentage(1.5)}]}>
          Select AC type
        </Text>

        <View style={styles.ACContainer}>
          <TouchableOpacity
            onPress={() => ACtypeChnge('split')}
            style={[
              styles.Actype,
              {
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              },
              ACType === 'split' && styles.selectedButtom,
            ]}>
            <Text
              style={[
                styles.noText,
                ACType === 'split' && styles.selectedText,
              ]}>
              Split
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ACtypeChnge('central')}
            style={[
              styles.Actype,
              ACType === 'central' && styles.selectedButtom,
            ]}>
            <Text
              style={[
                styles.noText,
                ACType === 'central' && styles.selectedText,
              ]}>
              Central
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ACtypeChnge('window')}
            style={[
              styles.Actype,
              ACType === 'window' && styles.selectedButtom,
            ]}>
            <Text
              style={[
                styles.noText,
                ACType === 'window' && styles.selectedText,
              ]}>
              Window
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ACtypeChnge('notInstalled')}
            style={[
              styles.Actype,
              {
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              },
              ACType === 'notInstalled' && styles.selectedButtom,
            ]}>
            <Text
              style={[
                styles.noText,
                ACType === 'notInstalled' && styles.selectedText,
              ]}>
              Not Installed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ChoiceMterAndAC;
