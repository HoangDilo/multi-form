import { app } from "@/firebase/firebase.config";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

const uploadFiles = (files) => {
  const uploaders = files.map(async (file) => {
    const storageRef = ref(storage, "files/" + file.name);
    await uploadBytes(storageRef, file);
    console.log("done 1");
  });
  return Promise.all(uploaders);
};

export default uploadFiles;
