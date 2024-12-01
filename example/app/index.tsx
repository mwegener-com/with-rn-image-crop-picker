import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ImageCropPicker, {
  ImageOrVideo,
  Image as CropImage,
  Video as CropVideo,
} from "react-native-image-crop-picker";

export default function Index() {
  const [image, setImage] = useState<any | null>(null);
  const [images, setImages] = useState<any[] | null>(null);

  const pickSingleWithCamera = (
    cropping: boolean,
    mediaType: "photo" | "video" = "photo"
  ) => {
    ImageCropPicker.openCamera({
      cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log("received image", image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch((e) => console.log(e));
  };

  const pickSingleBase64 = (cropit: boolean) => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true,
      includeExif: true,
    })
      .then((result) => {
        console.log("received base64 image");

        if (isImage(result)) {
          setImage({
            uri: `data:${result.mime};base64,` + result.data,
            width: result.width,
            height: result.height,
          });
          setImages(null);
        }
      })
      .catch((e) => console.log(e));
  };

  function isImage(value: ImageOrVideo): value is CropImage {
    return (value as CropImage).cropRect !== undefined;
  }

  const cleanupImages = () => {
    ImageCropPicker.clean()
      .then(() => {
        console.log("removed tmp images from tmp directory");
      })
      .catch((e) => console.log(e));
  };

  const cleanupSingleImage = () => {
    const currentImage = image || (images && images.length ? images[0] : null);
    if (currentImage) {
      ImageCropPicker.cleanSingle(currentImage.uri)
        .then(() => {
          console.log(
            `removed tmp image ${currentImage.uri} from tmp directory`
          );
        })
        .catch((e) => console.log(e));
    }
  };

  const cropLast = () => {
    if (!image) {
      return Alert.alert(
        "No image",
        "Before open cropping only, please select image"
      );
    }

    ImageCropPicker.openCropper({
      path: image.uri,
      mediaType: "photo",
      width: 200,
      height: 200,
    })
      .then((croppedImage) => {
        console.log("received cropped image", croppedImage);
        setImage({
          uri: croppedImage.path,
          width: croppedImage.width,
          height: croppedImage.height,
          mime: croppedImage.mime,
        });
        setImages(null);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const pickSingle = (
    cropit: boolean,
    circular: boolean = false,
    mediaType: "photo" | "video" = "photo"
  ) => {
    ImageCropPicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: "none",
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: "MediumQuality",
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log("received image", image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const pickMultiple = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: "desc",
      includeExif: true,
      forceJpg: true,
    })
      .then((images) => {
        setImages(
          images.map((i) => {
            console.log("received image", i);
            return {
              uri: i.path,
              width: i.width,
              height: i.height,
              mime: i.mime,
            };
          })
        );
        setImage(null);
      })
      .catch((e) => console.log(e));
  };

  const renderImage = (image: CropImage) => {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: "contain" }}
        source={image}
      />
    );
  };

  const renderAsset = (asset: any) => {
    return renderImage(asset);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {image ? renderAsset(image) : null}
        {images
          ? images.map((i) => <View key={i.uri}>{renderAsset(i)}</View>)
          : null}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => pickSingleWithCamera(false)}
          title="Select Single Image With Camera"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => pickSingleWithCamera(false, "video")}
          title="Select Single Video With Camera"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => pickSingleWithCamera(true)}
          title="Select Single With Camera With Cropping"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => pickSingle(false)} title="Select Single" />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => cropLast()} title="Crop Last Selected Image" />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => pickSingleBase64(false)}
          title="Select Single Returning Base64"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => pickSingle(true)}
          title="Select Single With Cropping"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => pickSingle(true, true)}
          title="Select Single With Circular Cropping"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={pickMultiple} title="Select Multiple" />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={cleanupImages} title="Cleanup All Images" />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={cleanupSingleImage} title="Cleanup Single Image" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingTop: 5,
  },
});
