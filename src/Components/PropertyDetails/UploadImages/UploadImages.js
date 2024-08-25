/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import {uploadImag} from '../../../Assets/Consts/Images';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from '../Styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addImage, removeImage} from '../../../Redux/Slice/ImageSlice';
const UploadImages = () => {
  const [images, setImages] = useState([]);
  // const {selectedImages} = useSelector(state => state.images);
  const dispatch = useDispatch();
  // OpenGalary
  const openGallery = () => {
    const options = {
      selectionLimit: 0, // Set to 0 to allow multiple selection
      mediaType: 'photo',
      includeBase64: false,
    };
    console.log('ccc');

    const respone = launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        // dispatch(addImage(response.assets[0].uri)); // Store the image URI
        setImages(response.assets); // `response.assets` contains the selected images
      }
    });
    console.log(respone);
  };
  // Open Camera
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
        // dispatch(addImage(response.assets[0].uri)); // Store the image URI
      }
    });
  };

  const removePhote = imageToRemove => {
    setImages(images.filter(image => image.uri !== imageToRemove.uri));
  };

  return (
    <>
      <View style={{marginTop: RFPercentage(1.5)}}>
        <Text style={[styles.titleText, {marginBottom: RFPercentage(1.5)}]}>
          Upload Photo
        </Text>
        <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
          {images.map((item, index) => (
            <ImageBackground
              key={index}
              source={{uri: item.uri}}
              resizeMode="cover"
              style={styles.ImageBackground}>
              <TouchableOpacity
                onPress={() => {
                  // removePhoto(index);

                  removePhote(item);
                }}
                style={{position: 'absolute', top: 10, left: 10}}>
                <FontAwesome6 name={'trash'} size={28} color={'#23AA6F'} />
              </TouchableOpacity>
            </ImageBackground>
          ))}
          <View style={styles.ImageContainer}>
            <Image
              source={uploadImag}
              resizeMode="cover"
              style={{
                width: RFPercentage(7),
                height: RFPercentage(7),
                marginBottom: RFPercentage(2),
              }}
            />
            <Text>Select photo from galary</Text>
            {/* open galary choice photo */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                // backgroundColor: '#ccc',

                width: '100%',
              }}>
              {/* Open galary */}
              <TouchableOpacity
                onPress={() => {
                  openGallery();
                }}
                style={{
                  backgroundColor: '#3df06134',
                  width: RFPercentage(17),
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
              {/* open camera */}
              <TouchableOpacity
                onPress={() => {
                  OpenCamera();
                }}
                style={{
                  backgroundColor: '#3df06134',
                  width: RFPercentage(17),
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
            </View>
            {/* <Text>svc</Text> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default UploadImages;
