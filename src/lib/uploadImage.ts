import { bucket } from "./firebaseAdmin";
import { v4 as uuidv4 } from "uuid";

export async function uploadImageToFirebase(
  imageBuffer: Buffer,
  imageName: string
): Promise<string> {
  const file = bucket.file(imageName);
  const uuid = uuidv4();

  console.log("Starting upload for:", imageName);

  await file.save(imageBuffer, {
    metadata: {
      metadata: {
        firebaseStorageDownloadTokens: uuid,
      },
    },
  });

  const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
    bucket.name
  }/o/${encodeURIComponent(imageName)}?alt=media&token=${uuid}`;
  console.log("Public URL for:", imageName, publicUrl);
  return publicUrl;
}
