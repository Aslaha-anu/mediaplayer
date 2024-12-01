import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"


// save video api call by add.jsx


   export const addVideo=async(video)=>{
   return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)

}

// fecth video api call

    export const getAllVideos=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,)
}
// api call for deleting

    export const deleteVideo=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
}

// api watch history

    export const saveHistory=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}
//  api call get

    export const getAllhistory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

    export const deleteHistory=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}
    export const addCategory=async(CategoryDetails )=>{
    return await commonAPI("POST",`${SERVER_URL}/allCategory `,CategoryDetails )
}
// api call show cateogory
    export const getAllCategory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
}

// api deleting category

    export const deleteCategory=async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allCategory/${categoryId}`,{})
}

// api call for  get a single video

    export const getSingleVideo=async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")
}
// api call for updating category

    export const updateCategory=async(categoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allCategory/${categoryId}`,categoryDetails)
}

// api call for single video


    export const getSingleCategory=async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allCategory/${categoryId}`,"")
}

