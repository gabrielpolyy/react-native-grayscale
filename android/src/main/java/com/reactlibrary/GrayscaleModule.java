package com.reactlibrary;


import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.util.Base64;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;


import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.ByteArrayOutputStream;


public class GrayscaleModule extends ReactContextBaseJavaModule {
    public GrayscaleModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Grayscale";
    }

    @ReactMethod
    public void toGrayscale(String base64Image, Callback callback) {

        Bitmap grayscaled = this.convertBase64ToGrayscale(base64Image);
        String b64Grayscaled = this.convertBitmapToBase64(grayscaled);
        callback.invoke(b64Grayscaled);
    }

    private Bitmap convertBase64ToGrayscale(String base64Image) {
        byte[] imageBytes = Base64.decode(base64Image, Base64.DEFAULT);

        Bitmap originalBitmap = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.length);
        Bitmap grayscaleBitmap = Bitmap.createBitmap(originalBitmap.getWidth(), originalBitmap.getHeight(), Bitmap.Config.RGB_565);

        for (int x = 0; x < originalBitmap.getWidth(); ++x) {
            for (int y = 0; y < originalBitmap.getHeight(); ++y) {
                int pixel = originalBitmap.getPixel(x, y);
                int gray = (int) (Color.red(pixel) * 0.299 + Color.green(pixel) * 0.587 + Color.blue(pixel) * 0.114);
                grayscaleBitmap.setPixel(x, y, Color.rgb(gray, gray, gray));
            }
        }

        return grayscaleBitmap;
    }

    private String convertBitmapToBase64(Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(byteArray, Base64.DEFAULT);
    }


}