import { firestore, bucket } from '../../../libs/firebaseAdmin';

export default async ({ query: { id } }, res) => {
  const querySnapshot = await firestore.collection(`items`).get()
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({
      id:doc.id,
      ...doc.data()
    });
  });

  res.status(200).json(items);
};
