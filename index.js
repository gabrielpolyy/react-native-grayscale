import { NativeModules } from "react-native";

const { Grayscale } = NativeModules;

/**
 *
 * @param {string} base64 The input image
 * @param {boolean} returnWithBase64Prefix true if we want to append data:image/png;base64 to the returned
 * base64 grayscale image. Default is false.
 * @returns {Promise<string>} A promise with the grayscale image version in base64 format.
 */
export default function getBase64Grayscale(base64) {
  return new Promise((resolve, reject) => {
    Grayscale.toGrayscale(base64, base64Grayscale => {
      if (base64Grayscale !== "") {
        // base64 is returned with line breaks that can cause issues in more modern tech.
        resolve(base64Grayscale.replace(/(\r\n|\n|\r)/gm, ""));
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
