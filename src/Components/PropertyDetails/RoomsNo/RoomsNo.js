import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {DECREMENT, INCREMENT} from '../../../Redux/Slice/CounterSlice';
export const RoomsNo = () => {
  const {BedroomsNo, bathroomsNo, GuestroomsNo, Loungesrooms} = useSelector(
    state => state.counter,
  );
  const dispatch = useDispatch();
  const handleIncrement = value => {
    dispatch(INCREMENT(value));
  };
  const handleDecrement = value => {
    dispatch(DECREMENT(value));
  };
  return (
    <>
      {/* choice number of sections part1 */}
      <View style={styles.SectionMainContainer}>
        {/* Section one */}
        <View>
          <Text
            style={[
              styles.titleText,
              {
                marginBottom: RFPercentage(1.3),
              },
            ]}>
            Bedrooms
          </Text>
          <View style={styles.ContainerOfPlusAndMinus}>
            <TouchableOpacity
              disabled={BedroomsNo <= 0 ? true : false}
              style={styles.minus}
              onPress={() => handleDecrement('Bedrooms')}>
              <AntDesign
                name={'minus'}
                size={RFPercentage(3)}
                color={BedroomsNo <= 0 ? '#9e9e9e' : '#000'}
              />
            </TouchableOpacity>
            <View style={styles.NumberContainer}>
              <Text style={styles.NumberText}>{BedroomsNo}</Text>
            </View>
            <TouchableOpacity
              style={styles.plus}
              onPress={() => handleIncrement('Bedrooms')}>
              <AntDesign name={'plus'} size={RFPercentage(3)} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Sction Two */}
        <View>
          <Text
            style={[
              styles.titleText,
              {
                marginBottom: RFPercentage(1.3),
              },
            ]}>
            Bathrooms
          </Text>
          <View style={styles.ContainerOfPlusAndMinus}>
            <TouchableOpacity
              style={styles.minus}
              disabled={bathroomsNo <= 0 ? true : false}
              onPress={() => handleDecrement('Bathrooms')}>
              <AntDesign
                name={'minus'}
                size={RFPercentage(3)}
                color={bathroomsNo <= 0 ? '#9e9e9e' : '#000'}
              />
            </TouchableOpacity>
            <View style={styles.NumberContainer}>
              <Text style={styles.NumberText}>{bathroomsNo}</Text>
            </View>
            <TouchableOpacity
              style={styles.plus}
              onPress={() => handleIncrement('Bathrooms')}>
              <AntDesign name={'plus'} size={RFPercentage(3)} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* choice number of sections part2*/}
      <View style={styles.SectionMainContainer}>
        {/* Section one */}
        <View>
          <Text
            style={[
              styles.titleText,
              {
                marginBottom: RFPercentage(1.3),
              },
            ]}>
            Guest Rooms
          </Text>
          <View style={styles.ContainerOfPlusAndMinus}>
            <TouchableOpacity
              disabled={GuestroomsNo <= 0 ? true : false}
              style={styles.minus}
              onPress={() => handleDecrement('Guestrooms')}>
              <AntDesign
                name={'minus'}
                size={RFPercentage(3)}
                color={GuestroomsNo <= 0 ? '#9e9e9e' : '#000'}
              />
            </TouchableOpacity>
            <View style={styles.NumberContainer}>
              <Text style={styles.NumberText}>{GuestroomsNo}</Text>
            </View>
            <TouchableOpacity
              style={styles.plus}
              onPress={() => handleIncrement('Guestrooms')}>
              <AntDesign name={'plus'} size={RFPercentage(3)} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Sction Two */}
        <View>
          <Text
            style={[
              styles.titleText,
              {
                marginBottom: RFPercentage(1.3),
              },
            ]}>
            Lounges
          </Text>
          <View style={styles.ContainerOfPlusAndMinus}>
            <TouchableOpacity
              disabled={Loungesrooms <= 0 ? true : false}
              style={styles.minus}
              onPress={() => handleDecrement('Loungesrooms')}>
              <AntDesign
                name={'minus'}
                size={RFPercentage(3)}
                color={Loungesrooms <= 0 ? '#9e9e9e' : '#000'}
              />
            </TouchableOpacity>
            <View style={styles.NumberContainer}>
              <Text style={styles.NumberText}>{Loungesrooms}</Text>
            </View>
            <TouchableOpacity
              style={styles.plus}
              onPress={() => handleIncrement('Loungesrooms')}>
              <AntDesign name={'plus'} size={RFPercentage(3)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
