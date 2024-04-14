import { NativeModules } from "react-native";

const { Grayscale } = NativeModules;

export default function getBase64Grayscale(
  base64: string,
  returnWithBase64Prefix?: boolean
): Promise<string> {
  return new Promise((resolve, reject) => {
    Grayscale.toGrayscale(base64, (base64Grayscale: string) => {
      if (base64Grayscale !== "") {
        // base64 is returned with line breaks that can cause issues in more modern tech.
        if (returnWithBase64Prefix) {
          base64Grayscale = `data:image/png;base64,${base64Grayscale}`;
        }
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
