import { Camera, Constants } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  let cameraRef = useRef(null);
  const [type, setType] = useState(Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === Constants.Type.back ? Constants.Type.front : Constants.Type.back));
  }


  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    // let sharePic = () => {
    //   shareAsync(photo.uri).then(() => {
    //     setPhoto(undefined);
    //   });
    // };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
      console.log(photo)
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: photo.base64 }} style={styles.image}/>
        {/* <Image/> */}
        <Button title="Save" onPress={savePhoto} />
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }
  
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/form.png")} style={styles.form_image} />
      {/* <Camera ref={cameraRef} style={styles.camera} type={type} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    height: 471,
    width: 307
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 640,
    height: 480,
  },
  form_image: {
    resizeMode: "contain",
    width: "90%"
  }
});
// function shareAsync(uri: any) {
//   throw new Error('Function not implemented.');
// }