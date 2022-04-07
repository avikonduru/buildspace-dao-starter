import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x89A57Ed9142A02247D145409529F1c17EA331759");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "DAO Red Star",
        description: "This NFT will give you access to the ChairmanDAO!",
        image: readFileSync("scripts/assets/red-star.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();