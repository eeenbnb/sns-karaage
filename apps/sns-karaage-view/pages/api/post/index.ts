import { firestore, storage } from '../../../libs/firebaseAdmin';
import { post, postDoc } from 'types/post'

export default async ({ query: { id } }, res) => {
  const querySnapshot = await firestore.collection(`items`).get()
  const items:post[] = [];

  querySnapshot.forEach((doc) => {
    items.push({
      id:doc.id,
      imageSrc:`https://firebasestorage.googleapis.com/v0${storage.bucket().baseUrl}/${storage.bucket().name}/o/${encodeURIComponent(doc.data().imagesPath)}?alt=media`,
      ...(doc.data() as postDoc)
    });
  });

  res.status(200).json(items);
};
