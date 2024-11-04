const images = import.meta.glob('./*.png', { eager: true });

const exportedImages: { [key: string]: string } = {};

Object.keys(images).forEach(path => {
  const fileName = path.replace('./', '');
  exportedImages[fileName] = (images[path] as { default: string }).default;
});

export default exportedImages;
