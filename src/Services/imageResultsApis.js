import apiServices from '../Services/apiServices';
import apiEndPoints from '../Constants/apiEndPoints';
import baseUrl from '../Constants/baseUrls';

export const getImageDetailsList = async ({ pageNumber, pageLimit }) => {
  try {
    const response = await apiServices.get(
      baseUrl.picsumPhotos + apiEndPoints.getImageList,
      {
        params: {
          page: pageNumber || 2,
          limit: pageLimit || 100
        }
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

// export const getImageData = async ({ imageId, imageWidth, imageHeight }) => {
//   const url = `${baseUrl.picsumPhotos}${apiEndPoints.getImage}/${imageId}/${parseInt(imageWidth / 10)}/${parseInt(imageHeight / 10)}`

//   try {
//     const response = await apiServices.get(
//       url
//     );
//     if (response.status === 200) {
//       return response.data;
//     } else {
//       return response;
//     }
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }
