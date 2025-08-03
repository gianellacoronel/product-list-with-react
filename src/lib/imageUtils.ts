// Import all images statically so Vite can process them
import imageWaffleDesktop from "../assets/images/image-waffle-desktop.jpg";
import imageWaffleMobile from "../assets/images/image-waffle-mobile.jpg";
import imageWaffleTablet from "../assets/images/image-waffle-tablet.jpg";
import imageWaffleThumbnail from "../assets/images/image-waffle-thumbnail.jpg";

import imageCremeBruleeDesktop from "../assets/images/image-creme-brulee-desktop.jpg";
import imageCremeBruleeMobile from "../assets/images/image-creme-brulee-mobile.jpg";
import imageCremeBruleeTablet from "../assets/images/image-creme-brulee-tablet.jpg";
import imageCremeBruleeThumbnail from "../assets/images/image-creme-brulee-thumbnail.jpg";

import imageMacaronDesktop from "../assets/images/image-macaron-desktop.jpg";
import imageMacaronMobile from "../assets/images/image-macaron-mobile.jpg";
import imageMacaronTablet from "../assets/images/image-macaron-tablet.jpg";
import imageMacaronThumbnail from "../assets/images/image-macaron-thumbnail.jpg";

import imageTiramisuDesktop from "../assets/images/image-tiramisu-desktop.jpg";
import imageTiramisuMobile from "../assets/images/image-tiramisu-mobile.jpg";
import imageTiramisuTablet from "../assets/images/image-tiramisu-tablet.jpg";
import imageTiramisuThumbnail from "../assets/images/image-tiramisu-thumbnail.jpg";

import imageBaklavaDesktop from "../assets/images/image-baklava-desktop.jpg";
import imageBaklavaMobile from "../assets/images/image-baklava-mobile.jpg";
import imageBaklavaTablet from "../assets/images/image-baklava-tablet.jpg";
import imageBaklavaThumbnail from "../assets/images/image-baklava-thumbnail.jpg";

import imageMeringueDesktop from "../assets/images/image-meringue-desktop.jpg";
import imageMeringueMobile from "../assets/images/image-meringue-mobile.jpg";
import imageMeringueTablet from "../assets/images/image-meringue-tablet.jpg";
import imageMeringueThumbnail from "../assets/images/image-meringue-thumbnail.jpg";

import imageCakeDesktop from "../assets/images/image-cake-desktop.jpg";
import imageCakeMobile from "../assets/images/image-cake-mobile.jpg";
import imageCakeTablet from "../assets/images/image-cake-tablet.jpg";
import imageCakeThumbnail from "../assets/images/image-cake-thumbnail.jpg";

import imageBrownieDesktop from "../assets/images/image-brownie-desktop.jpg";
import imageBrownieMobile from "../assets/images/image-brownie-mobile.jpg";
import imageBrownieTablet from "../assets/images/image-brownie-tablet.jpg";
import imageBrownieThumbnail from "../assets/images/image-brownie-thumbnail.jpg";

import imagePannaCottaDesktop from "../assets/images/image-panna-cotta-desktop.jpg";
import imagePannaCottaMobile from "../assets/images/image-panna-cotta-mobile.jpg";
import imagePannaCottaTablet from "../assets/images/image-panna-cotta-tablet.jpg";
import imagePannaCottaThumbnail from "../assets/images/image-panna-cotta-thumbnail.jpg";

// Create a mapping of image names to their imported URLs
const imageMap: Record<string, string> = {
  "image-waffle-desktop.jpg": imageWaffleDesktop,
  "image-waffle-mobile.jpg": imageWaffleMobile,
  "image-waffle-tablet.jpg": imageWaffleTablet,
  "image-waffle-thumbnail.jpg": imageWaffleThumbnail,

  "image-creme-brulee-desktop.jpg": imageCremeBruleeDesktop,
  "image-creme-brulee-mobile.jpg": imageCremeBruleeMobile,
  "image-creme-brulee-tablet.jpg": imageCremeBruleeTablet,
  "image-creme-brulee-thumbnail.jpg": imageCremeBruleeThumbnail,

  "image-macaron-desktop.jpg": imageMacaronDesktop,
  "image-macaron-mobile.jpg": imageMacaronMobile,
  "image-macaron-tablet.jpg": imageMacaronTablet,
  "image-macaron-thumbnail.jpg": imageMacaronThumbnail,

  "image-tiramisu-desktop.jpg": imageTiramisuDesktop,
  "image-tiramisu-mobile.jpg": imageTiramisuMobile,
  "image-tiramisu-tablet.jpg": imageTiramisuTablet,
  "image-tiramisu-thumbnail.jpg": imageTiramisuThumbnail,

  "image-baklava-desktop.jpg": imageBaklavaDesktop,
  "image-baklava-mobile.jpg": imageBaklavaMobile,
  "image-baklava-tablet.jpg": imageBaklavaTablet,
  "image-baklava-thumbnail.jpg": imageBaklavaThumbnail,

  "image-meringue-desktop.jpg": imageMeringueDesktop,
  "image-meringue-mobile.jpg": imageMeringueMobile,
  "image-meringue-tablet.jpg": imageMeringueTablet,
  "image-meringue-thumbnail.jpg": imageMeringueThumbnail,

  "image-cake-desktop.jpg": imageCakeDesktop,
  "image-cake-mobile.jpg": imageCakeMobile,
  "image-cake-tablet.jpg": imageCakeTablet,
  "image-cake-thumbnail.jpg": imageCakeThumbnail,

  "image-brownie-desktop.jpg": imageBrownieDesktop,
  "image-brownie-mobile.jpg": imageBrownieMobile,
  "image-brownie-tablet.jpg": imageBrownieTablet,
  "image-brownie-thumbnail.jpg": imageBrownieThumbnail,

  "image-panna-cotta-desktop.jpg": imagePannaCottaDesktop,
  "image-panna-cotta-mobile.jpg": imagePannaCottaMobile,
  "image-panna-cotta-tablet.jpg": imagePannaCottaTablet,
  "image-panna-cotta-thumbnail.jpg": imagePannaCottaThumbnail,
};

export function getImageUrl(imagePath: string): string {
  // Extract filename from the path
  const filename = imagePath.split("/").pop();
  if (!filename) return imagePath;

  const result = imageMap[filename] || imagePath;
  return result;
}
