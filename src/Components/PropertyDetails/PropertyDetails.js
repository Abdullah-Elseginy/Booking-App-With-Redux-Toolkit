import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Styles';
import Statusbar from '../StatusBar/StatusBar';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Bar} from 'react-native-progress';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../Header/Header';
import {RoomsNo} from './RoomsNo/RoomsNo';
import DepartStyle from './DepartStyle/DepartStyle';
import ChoiceMterAndAC from './ChiceMaterAndAC/ChoiceMterAndAC';
import UploadImages from './UploadImages/UploadImages';
import {Footer} from './Footer/Footer';
const PropertyDetails = () => {
  // const increment = (setter, value) => setter(value + 1);
  // const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <>
      <Statusbar color={'#FFF'} />
      <View style={styles.container}>
        {/* header */}
        <Header />

        {/* progress */}
        <View style={styles.ProgressContainer}>
          <View style={styles.ProgressBackgroundColor}>
            <Bar progress={0.3} width={null} color="#23AA6F" borderWidth={0} />
          </View>
        </View>
        {/* Step Title */}
        <View style={{height: RFPercentage(9)}}>
          <Text style={styles.StepText}>Step 1 - Unit Details</Text>
          <Text style={styles.StepTExtUnder}>
            please enter the unit information below
          </Text>
        </View>

        <ScrollView contentContainerStyle={{}}>
          <View>
            {/* Unit Size */}
            <View style={styles.UnitSizeContainer}>
              <Text style={styles.titleText}>Unit Size</Text>
              <TextInput
                style={styles.UnitSizeTextInput}
                placeholder="Enter size"
                placeholderTextColor={'#000'}
              />
            </View>
            {/* choice Rooms numbers */}
            <RoomsNo />
            {/*choice Department Style */}
            <DepartStyle />
            {/* Electercity ,water and AC type */}
            <ChoiceMterAndAC />
            {/* Upload Photo */}
            <UploadImages />
          </View>
        </ScrollView>
      </View>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default PropertyDetails;
