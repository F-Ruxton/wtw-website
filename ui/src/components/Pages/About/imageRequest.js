export const aboutImageTags = {
  about_header_img : 'about_header_img',
  about_gallery    : 'about_gallery',
  about_team       : 'about_team',
};

const imageRequest = [
  {
    type: 'tag',
    name: aboutImageTags.about_header_img,
    tag: aboutImageTags.about_header_img,
  },
  {
    type: 'tag',
    name: aboutImageTags.about_gallery,
    tag: aboutImageTags.about_gallery,
    multiple: true,
  },
  {
    type: 'tag',
    name: aboutImageTags.about_team,
    tag: aboutImageTags.about_team,
    multiple: true,
  },
];

export default imageRequest;
