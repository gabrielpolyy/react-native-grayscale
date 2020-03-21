import { NativeModules } from "react-native";

const { Grayscale } = NativeModules;

/**
 * 
 * @param {string} base64 The input image 
 * @param {boolean} returnWithBase64Prefix true if we want to append data:image/png;base64 to the returned
 * base64 grayscale image. Default is false.
 * @returns {Promise<string>} A promise with the grayscale image version in base64 format.
 */
export default function getBase64Grayscale(base64, returnWithBase64Prefix = false) {
  return Promise((resolve, reject) => {
    Grayscale.toGrayscale(base64, returnWithBase64Prefix, base64grayscale => {
      if (base64grayscale !== "") {
        resolve(base64grayscale);
      } else {
        reject(
          new Error(
            "Could not convert to grayscale. Please check if input image format is valid."
          )
        );
      }
    });
  });
}
