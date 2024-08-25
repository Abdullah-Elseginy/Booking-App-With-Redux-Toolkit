/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Button, Text, TouchableOpacity, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {RFPercentage} from 'react-native-responsive-fontsize';

const ChoiceFile = () => {
  const [images, setImages] = useState([]);
  // OpenGalary
  const openGallery = () => {
    const options = {
      selectionLimit: 0, // Set to 0 to allow multiple selection
      mediaType: 'photo',
      includeBase64: false,
    };
    console.log('ccc');

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImages(response.assets); // `response.assets` contains the selected images
      }
    });
    // console.log(respone);
  };
  const OpenCamera = () => {
    const options = {
      includeBase64: true,
      cameraType: 'back',
    };
    console.log('ccc');

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImages(response.assets); // `response.assets` contains the selected images
      }
    });
  };

  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => {
            openGallery();
          }}
          style={{
            backgroundColor: '#3df06134',
            width: RFPercentage(24),
            height: RFPercentage(6),
            borderRadius: 8,
            marginTop: RFPercentage(2),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#23AA6F',
              fontWeight: '600',
              fontSize: RFPercentage(2),
            }}>
            Choose File
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            OpenCamera();
          }}
          style={{
            backgroundColor: '#3df06134',
            width: RFPercentage(24),
            height: RFPercentage(6),
            borderRadius: 8,
            marginTop: RFPercentage(2),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#23AA6F',
              fontWeight: '600',
              fontSize: RFPercentage(2),
            }}>
            Open Camera
          </Text>
        </TouchableOpacity>

        {images.map((image, index) => (
          <View key={index}>
            {/* <Text key={index}>{image.uri}</Text> */}
            <Image
              source={{uri: image.uri}}
              resizeMode="center"
              width={200}
              height={200}
            />
          </View>
        ))}
      </View>
    </>
  );
};

export default ChoiceFile;
