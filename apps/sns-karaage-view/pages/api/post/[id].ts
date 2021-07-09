import { firestore, storage } from '../../../libs/firebaseAdmin';
import { post, postDoc } from 'types/post'

export default ({ query: { id } }, res) => {
  firestore.collection(`items`).doc(id).get().then(
    (doc)=>{
      res.status(200).json({
        id:id,
        imageSrc:`https://firebasestorage.googleapis.com/v0${storage.bucket().baseUrl}/${storage.bucket().name}/o/${encodeURIComponent(doc.data().imagesPath)}?alt=media`,
        ...(doc.data() as postDoc)
      } as post);
    },
    (err)=>{
      res.status(404).json({ message: `no items` });
    }
  )
};
