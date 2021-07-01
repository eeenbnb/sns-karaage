import { firestore } from '../../../libs/firebaseAdmin';

export default ({ query: { id } }, res) => {
  firestore.collection(`items`).doc(id).get().then(
    (doc)=>{
      res.status(200).json(doc.data());
    },
    (err)=>{
      res.status(404).json({ message: `no items` });
    }
  )
};
